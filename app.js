/* ENTRE MUROS — motor de jogo em JavaScript puro. */
'use strict';
const STORAGE_KEY = 'entre-muros-save-v1';
const $ = (id) => document.getElementById(id);
const sceneKey = (sceneId, hotspotId) => `${sceneId}:${hotspotId}`;

function freshState() {
  return {
    version: GAME_VERSION, scene: 0, visited: {}, decisions: {}, journal: [],
    stats: { consciencia: 0, apoio: 0, desgaste: 0 }, ending: null, completed: false, sound: false, hints: false
  }
}
function getSave() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!data || data.version !== GAME_VERSION || !Number.isInteger(data.scene) || data.scene < 0 || data.scene >= GAME_SCENES.length || !data.visited || !data.decisions || !Array.isArray(data.journal) || !data.stats) return null;
    return data;
  } catch { return null }
}
let state = getSave() || freshState();
let activeHotspot = null;
let activeModal = null;
let beforeModalFocus = null;
let selectedJournalId = null;
let audioContext = null;

function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch { } }
function currentScene() { return GAME_SCENES[state.scene] }
function isVisited(hId, scene = currentScene()) { return Boolean(state.visited[sceneKey(scene.id, hId)]) }
function requiredDone(scene = currentScene()) { return scene.required.every(id => isVisited(id, scene)) }
function hideAllScreens() { for (const id of ['home-screen', 'game-screen', 'ending-screen']) $(id).hidden = true }
function showHome() { closeDialog(); closeModal(); hideAllScreens(); $('home-screen').hidden = false; $('cover-art').innerHTML = renderArtwork(0); $('continue-game').hidden = !getSave(); window.scrollTo({ top: 0, behavior: 'instant' }) }

function beginGame(resume = false, confirmed = false) {
  if (!resume) {
    // Se existe uma partida salva, pede confirmação.
    if (getSave() && !confirmed) {
      openInfo('newgame');
      return;
    }

    // Só apaga o progresso depois da confirmação.
    state = freshState();
    save();
  } else {
    state = getSave() || freshState();
  }

  if (state.completed && state.ending) {
    showEnding();
    return;
  }

  closeModal();
  hideAllScreens();

  $('game-screen').hidden = false;
  renderScene();

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderScene() {
  const scene = currentScene(); closeDialog();
  $('act-indicator').textContent = `${scene.act} / ${scene.actName}`;
  $('scene-indicator').textContent = `${String(state.scene + 1).padStart(2, '0')} DE 07`;
  $('scene-kicker').textContent = `CENA ${String(state.scene + 1).padStart(2, '0')} / 07`;
  $('scene-title').textContent = scene.title;
  $('scene-subtitle').textContent = scene.subtitle;
  $('scene-footnote').textContent = scene.outro;
  $('scene-art').innerHTML = renderArtwork(state.scene);
  $('scene-art').setAttribute('aria-label', `Ilustração: ${scene.title}`);
  const progress = $('progress-bar'); progress.innerHTML = '';
  for (let i = 0; i < GAME_SCENES.length; i++) {
    const part = document.createElement('div'); part.className = 'progress-segment' + (i < state.scene ? ' done' : '') + (i === state.scene ? ' active' : '');
    part.title = `Cena ${i + 1}: ${GAME_SCENES[i].title}`; progress.appendChild(part);
  }
  updateSceneHUD();
}
function updateSceneHUD() {
  const scene = currentScene();
  $('objective-title').textContent = scene.objective;
  $('objective-description').textContent = scene.description;
  $('journal-fraction').textContent =
  `${String(state.journal.length).padStart(2, '0')} REGISTROS`;
  $('toggle-hints').setAttribute('aria-pressed', String(Boolean(state.hints)));
  $('toggle-sound').setAttribute('aria-pressed', String(Boolean(state.sound)));
  $('toggle-sound').querySelector('.tool-label').textContent = state.sound ? 'SOM: ON' : 'SOM: OFF';
  $('scene-frame').classList.toggle('show-hints', Boolean(state.hints));
  const spots = $('hotspots'); spots.innerHTML = '';
  for (const hotspot of scene.hotspots) {
    const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'hotspot';
    if (scene.required.includes(hotspot.id)) btn.classList.add('required');
    if (isVisited(hotspot.id)) btn.classList.add('visited');
    btn.style.left = hotspot.x + '%'; btn.style.top = hotspot.y + '%';
    btn.setAttribute('aria-label', `${hotspot.label}${isVisited(hotspot.id) ? ' (investigado)' : ''}`);
    btn.title = hotspot.label;
    const symbol = document.createElement('span'); symbol.className = 'hotspot-symbol'; symbol.setAttribute('aria-hidden', 'true'); symbol.textContent = isVisited(hotspot.id) ? '✓' : '+';
    const label = document.createElement('span'); label.className = 'hotspot-label'; label.textContent = hotspot.label; label.setAttribute('aria-hidden', 'true');
    btn.append(symbol, label); btn.addEventListener('click', () => openHotspot(hotspot.id)); spots.appendChild(btn);
  }
  const list = $('investigation-list'); list.innerHTML = '';
  let done = 0;
  for (const id of scene.required) {
    const hotspot = scene.hotspots.find(h => h.id === id); if (!hotspot) continue;
    const visited = isVisited(id); if (visited) done++;
    const task = document.createElement('div'); task.className = 'task' + (visited ? ' done' : '');
    const marker = document.createElement('span'); marker.className = 'task-icon'; marker.textContent = visited ? '✓' : '';
    const text = document.createElement('span'); text.className = 'task-text'; text.textContent = hotspot.label;
    task.append(marker, text); list.appendChild(task);
  }
  $('investigation-fraction').textContent = `${done}/${scene.required.length}`;
  const doneAll = requiredDone();
  $('next-scene').disabled = !doneAll || state.scene === GAME_SCENES.length - 1;
  $('next-scene').innerHTML = '';
  $('next-scene').append(document.createTextNode(scene.nextLabel + '  '));
  const arrow = document.createElement('span'); arrow.textContent = '→'; arrow.setAttribute('aria-hidden', 'true'); $('next-scene').appendChild(arrow);
  $('scene-status').textContent = state.scene === GAME_SCENES.length - 1
    ? 'O desfecho começa quando você escolher no microfone.'
    : doneAll ? 'Você pode seguir. Interações opcionais continuam disponíveis.' : 'Investigue os elementos assinalados para continuar.';
}

function addJournal(entry) {
  if (!entry) return;

  // Impede registros duplicados
  if (state.journal.some(record => record.id === entry.id)) {
    return;
  }

  // Adiciona a anotação
  state.journal.push({ ...entry });

  // Seleciona o registro mais recente
  selectedJournalId = entry.id;
}

function markVisit(hotspot) { const scene = currentScene(); state.visited[sceneKey(scene.id, hotspot.id)] = true; addJournal(hotspot.journal); save(); }
function playSound(type = 'click') {
  if (!state.sound) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return;
    if (!audioContext) audioContext = new Ctx();
    const osc = audioContext.createOscillator(), gain = audioContext.createGain();
    osc.type = 'sine'; osc.frequency.setValueAtTime(type === 'page' ? 440 : 620, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(type === 'page' ? 330 : 460, audioContext.currentTime + .14);
    gain.gain.setValueAtTime(.035, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + .18);
    osc.connect(gain).connect(audioContext.destination); osc.start(); osc.stop(audioContext.currentTime + .2);
  } catch {/* áudio é opcional */ }
}
function openHotspot(id) {
  const scene = currentScene(); const h = scene.hotspots.find(item => item.id === id); if (!h) return;
  playSound();
  if (scene.id === 'assembleia' && id === 'microfone' && !isVisited('mural')) {
    showDialog({ label: 'Antes da fala' }, [['Pensamento', 'Antes de decidir, você quer entender quais reivindicações estão reunidas no mural.']], [], true); return;
  }
  activeHotspot = h;
  const savedOption = state.decisions[sceneKey(scene.id, id)];
  if (!h.options) { if (!isVisited(id)) { markVisit(h); updateSceneHUD() } showDialog(h, h.lines || [], [], true); return }
  if (savedOption) {
    const option = h.options.find(o => o.id === savedOption);
    const lines = [...(h.lines || [])];
    if (option) { lines.push(['Sua escolha', option.text], ...(option.reply || [])) }
    showDialog(h, lines, [], true);
  } else showDialog(h, h.lines || [], h.options, false);
}
function showDialog(h, lines, options, completed) {
  const panel = $('dialog-panel'); $('dialog-heading').textContent = h.label;
  const content = $('dialog-content'); content.innerHTML = '';
  for (const [speaker, line] of lines) {
    const div = document.createElement('div'); div.className = 'dialog-line' + (speaker === 'Pensamento' ? ' thought' : '');
    const s = document.createElement('span'); s.className = 'dialog-speaker'; s.textContent = speaker;
    const p = document.createElement('p'); p.textContent = line;
    div.append(s, p); content.appendChild(div);
  }
  const choices = $('dialog-choices'); choices.innerHTML = '';
  for (const option of options) {
    const missing = option.requires && Object.entries(option.requires).some(([field, value]) => (state.stats[field] || 0) < value);
    const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'choice-btn'; btn.disabled = Boolean(missing);
    const textWrap = document.createElement('span'); textWrap.textContent = option.text;
    if (missing) { const locked = document.createElement('span'); locked.className = 'choice-locked'; locked.textContent = option.lockedText || 'Opção indisponível.'; textWrap.appendChild(locked) }
    btn.appendChild(textWrap); btn.addEventListener('click', () => chooseOption(h, option)); choices.appendChild(btn);
  }
  $('dialog-hint').textContent = options.length ? 'VOCÊ PODE ESCOLHER COMO REAGIR' : completed ? 'REGISTRO ADICIONADO QUANDO DISPONÍVEL' : '';
  $('dialog-done').textContent = options.length ? 'PENSAR DEPOIS  ↗' : 'FECHAR  ↗';
  panel.hidden = false; content.scrollTop = 0; panel.querySelector('#close-dialog').focus();
}

function chooseOption(h, option) {
  const scene = currentScene();
  const key = sceneKey(scene.id, h.id);

  if (state.decisions[key]) return;

  if (
    option.requires &&
    Object.entries(option.requires).some(
      ([field, amount]) => (state.stats[field] || 0) < amount
    )
  ) return;

  // Salva a escolha do jogador
  state.decisions[key] = option.id;

  // Aplica as consequências
  for (const [stat, change] of Object.entries(option.effects || {})) {
    state.stats[stat] = (state.stats[stat] || 0) + change;
  }

  // NOVO: cria um registro próprio para essa escolha
  if (option.journalNote) {
    addJournal({
      id: `${key}:${option.id}`,
      title: `Minha escolha — ${scene.title}`,
      tag: `${String(state.scene + 1).padStart(2, '0')} / DECISÃO`,
      note: option.journalNote
    });
  }

  markVisit(h);
  playSound('page');

  if (option.ending) {
    state.ending = option.ending;
    state.completed = true;
    save();
    closeDialog();
    showEnding();
    return;
  }

  updateSceneHUD();

  showDialog(
    h,
    [
      ...(h.lines || []),
      ['Sua escolha', option.text],
      ...(option.reply || [])
    ],
    [],
    true
  );
}

function closeDialog() { const panel = $('dialog-panel'); if (!panel.hidden) { panel.hidden = true; activeHotspot = null } }
function nextScene() {
  if (state.scene >= GAME_SCENES.length - 1 || !requiredDone()) return;
  state.scene++; save(); renderScene(); playSound('page'); window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showEnding() {
  if (!state.ending || !GAME_ENDINGS[state.ending]) return;
  closeDialog(); closeModal(); hideAllScreens(); $('ending-screen').hidden = false;
  const ending = GAME_ENDINGS[state.ending];
  $('ending-count').textContent = `FINAL ${ending.number} / 03`;
  $('ending-title').textContent = ending.title;
  $('ending-text').textContent = ending.text;
  $('ending-epilogue').textContent = ending.epilogue;
  $('ending-art').innerHTML = renderArtwork(6); window.scrollTo({ top: 0, behavior: 'instant' });
}
function openJournal() {
  closeDialog(); closeModal(); beforeModalFocus = document.activeElement; activeModal = 'journal';
  $('overlay').hidden = false; $('journal-drawer').hidden = false;
  if (!state.journal.some(item => item.id === selectedJournalId)) selectedJournalId = state.journal[0]?.id || null;
  renderJournal(); $('journal-drawer').focus();
}

function renderJournal() {
  const nav = $('journal-nav');
  const article = $('journal-entry');

  nav.innerHTML = '';
  article.innerHTML = '';

  // Caso ainda não existam registros
  if (!state.journal.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-journal';
    empty.textContent = 'O caderno está em branco. Explore os cenários para reunir os primeiros registros.';
    article.appendChild(empty);
    return;
  }

  // Cria a lista de registros do diário
  for (const entry of state.journal) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = entry.id === selectedJournalId ? 'active' : '';

    btn.setAttribute(
      'aria-current',
      entry.id === selectedJournalId ? 'true' : 'false'
    );

    const tag = document.createElement('span');
    tag.textContent = entry.tag;

    btn.append(tag, document.createTextNode(entry.title));

    btn.addEventListener('click', () => {
      selectedJournalId = entry.id;
      renderJournal();
    });

    nav.appendChild(btn);
  }

  // Encontra o registro selecionado
  const entry = state.journal.find(
    e => e.id === selectedJournalId
  ) || state.journal[0];

  const title = document.createElement('h3');
  title.textContent = entry.title;
  article.appendChild(title);

  // Define quais textos serão exibidos
  const sections = entry.note
    ? [
        // Registro criado por uma escolha do jogador
        ['MINHA ESCOLHA', entry.note, false]
      ]
    : [
        // Registro criado pela interação com um objeto
        ['A OBRA', entry.work, false],
        ['NO JOGO', entry.present, false],
        ['PARA PENSAR', entry.question, true]
      ];

  // Exibe as seções do registro
  for (const [label, value, question] of sections) {
    if (!value) continue;

    const section = document.createElement('section');
    section.className = 'entry-section';

    const caption = document.createElement('label');
    caption.textContent = label;

    const p = document.createElement('p');
    p.textContent = value;

    if (question) {
      p.className = 'entry-question';
    }

    section.append(caption, p);
    article.appendChild(section);
  }
}

const HELP_HTML = `<p>Você não controla um personagem andando. <strong>Você é o olhar que investiga.</strong> Explore cada ilustração clicando nos círculos <strong>+</strong>.</p>
<ul><li>Observe objetos e converse com pessoas.</li><li>Complete as interações indicadas no painel lateral para mudar de cena.</li><li>Quando houver escolhas, elas podem alterar acontecimentos e abrir possibilidades.</li><li>Abra o <strong>Caderno de Memórias</strong> para comparar o presente do jogo com temas de <em>Quarto de Despejo</em>.</li><li>Seu progresso é salvo automaticamente neste navegador.</li></ul>
<p><strong>Acessibilidade:</strong> use <strong>Tab</strong> para navegar entre botões, <strong>Enter</strong> para ativá-los e <strong>Esc</strong> para fechar painéis. O botão “Dicas” mantém os nomes dos objetos visíveis.</p>
<p><strong>Aviso de conteúdo:</strong> o jogo aborda discriminação, racismo, exclusão social e desgaste emocional. Você pode fechar conversas e retomar o percurso no seu ritmo.</p>`;
const CREDITS_HTML = `<p><strong>Entre Muros</strong> é um jogo fictício, de roteiro original, produzido como proposta educacional sobre identidade, desigualdade e memória.</p>
<h3>Em diálogo com a literatura</h3><p><em>Quarto de Despejo: Diário de uma Favelada</em>, de <strong>Carolina Maria de Jesus</strong>, publicado em 1960, reúne registros de sua vida no Canindé, em São Paulo. A obra inspira temas e perguntas deste jogo, mas os diálogos, personagens e reflexões aqui apresentados são originais: não são citações nem reconstituições de seus diários.</p>
<h3>Desenvolvimento</h3><p>HTML, CSS e JavaScript puro, com sete cenários vetoriais incorporados ao código. Funcionando Offline, os dados da partida permanecem no armazenamento local do navegador.</p>
<h3>Para a sala de aula</h3><p>O jogo complementa a leitura; não substitui o livro. Compare acontecimentos, contextos históricos e possibilidades de mudança, sem supor que vidas de épocas diferentes sejam equivalentes.</p>`;

function openInfo(type) {
  closeDialog();
  closeModal();

  beforeModalFocus = document.activeElement;
  activeModal = 'info';

  $('overlay').hidden = false;
  $('info-modal').hidden = false;

  // Confirmação de novo jogo
  if (type === 'newgame') {
    $('info-title').textContent = 'Começar outra história?';

    $('info-content').innerHTML = `
      <p>
        Seu progresso anterior será substituído.
        Deseja realmente iniciar uma nova partida?
      </p>

      <div class="new-game-actions">
        <button
          type="button"
          id="cancel-newgame"
          class="btn btn-outline"
        >
          Cancelar
        </button>

        <button
          type="button"
          id="confirm-newgame"
          class="btn btn-primary"
        >
          Novo jogo
        </button>
      </div>
    `;

    // Cancela sem perder o progresso
    $('cancel-newgame').addEventListener('click', closeModal);

    // Confirma e inicia uma nova partida
    $('confirm-newgame').addEventListener('click', () => {
      beginGame(false, true);
    });

    $('cancel-newgame').focus();
    return;
  }

  // Janelas que já existiam no jogo
  $('info-title').textContent =
    type === 'credits' ? 'Sobre o projeto' : 'Como jogar';

  $('info-content').innerHTML =
    type === 'credits' ? CREDITS_HTML : HELP_HTML;

  $('info-modal').focus();
}

function closeModal() {
  $('overlay').hidden = true; $('journal-drawer').hidden = true; $('info-modal').hidden = true;
  if (activeModal && beforeModalFocus && document.contains(beforeModalFocus)) beforeModalFocus.focus();
  activeModal = null;
}
// Eventos fixos da interface
$('new-game').addEventListener('click', () => beginGame(false));
$('continue-game').addEventListener('click', () => beginGame(true));
$('home-how').addEventListener('click', () => openInfo('help'));
$('home-credits').addEventListener('click', () => openInfo('credits'));
$('game-help').addEventListener('click', () => openInfo('help'));
$('go-home').addEventListener('click', showHome);
$('next-scene').addEventListener('click', nextScene);
$('open-journal').addEventListener('click', openJournal);
$('ending-journal').addEventListener('click', openJournal);
$('ending-home').addEventListener('click', showHome);
$('play-again').addEventListener('click', () => beginGame(false));
$('close-dialog').addEventListener('click', closeDialog);
$('dialog-done').addEventListener('click', closeDialog);
$('close-journal').addEventListener('click', closeModal);
$('close-info').addEventListener('click', closeModal);
$('overlay').addEventListener('click', closeModal);
$('toggle-hints').addEventListener('click', () => { state.hints = !state.hints; save(); updateSceneHUD() });
$('toggle-sound').addEventListener('click', () => { state.sound = !state.sound; save(); updateSceneHUD(); playSound('page') });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (activeModal) closeModal(); else if (!$('dialog-panel').hidden) closeDialog();
  }
});
showHome();
