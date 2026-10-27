/* ENTRE MUROS — ROTEIRO REVISADO | v1.1 (somente textos)
 * 7 cenas, 4 atos, 3 finais. Mantém IDs, efeitos, condições e hotspots originais.
 * Falas, pensamentos e journalNote: textos originais para o jogo.
 * Citações breves, com atribuição, de: JESUS, Carolina Maria de. Quarto de Despejo:
 * Diário de uma Favelada. Publicação original: 1960. Confira a edição adotada
 * na escola antes de incluir paginação.
 */
const GAME_VERSION = 1;

const GAME_SCENES = [
  {
    "id": "quarto",
    "title": "O QUARTO",
    "act": "ATO I",
    "actName": "PERCEPÇÃO",
    "subtitle": "Tem coisas que a gente aprende a esconder. Outras, a escrever.",
    "objective": "Prepare-se para atravessar a cidade",
    "description": "Leia a mensagem no celular e examine o livro sobre a mesa antes de sair.",
    "outro": "Um quarto guarda o que a cidade ainda não sabe sobre quem vive nele.",
    "required": [
      "livro",
      "celular"
    ],
    "nextLabel": "SAIR PARA A RUA",
    "hotspots": [
      {
        "id": "janela",
        "label": "Janela",
        "x": 19,
        "y": 37,
        "lines": [
          [
            "Você",
            "O sol nem esquentou o telhado e já tem gente correndo para o ponto. A vizinha atravessa a rua de uniforme; a filha dela ainda está com sono no colo."
          ],
          [
            "Pensamento",
            "Daqui dá para ver três casas com goteira remendada. Do outro lado da cidade, será que alguém começa a manhã pensando se a chuva vai entrar em casa?"
          ]
        ]
      },
      {
        "id": "fotos",
        "label": "Fotografias",
        "x": 46,
        "y": 31,
        "lines": [
          [
            "Você",
            "Na fotografia da cozinha, sua mãe sorri com uma mão apoiada no seu ombro. Atrás, o reboco ainda estava por fazer. Naquela época, vocês chamavam a parede sem pintura de “obra em andamento”."
          ],
          [
            "Pensamento",
            "A gente ri da foto. Só que eu lembro do que não aparece nela: minha mãe chegando tarde, exausta, e dizendo que já tinha comido no trabalho. Nem sempre tinha."
          ]
        ]
      },
      {
        "id": "espelho",
        "label": "Espelho",
        "x": 86,
        "y": 36,
        "lines": [
          [
            "Você",
            "Você ajeita a gola da camiseta e tenta domar alguns fios de cabelo. Pensa em trocar de roupa, embora esta esteja limpa e seja a melhor que você tem."
          ],
          [
            "Pensamento",
            "Será que vão me olhar primeiro ou olhar meus documentos? Tenho o direito de entrar naquele lugar sem precisar parecer outra pessoa. Mas saber disso não faz o nervoso ir embora."
          ]
        ]
      },
      {
        "id": "livro",
        "label": "Livro na mesa",
        "x": 50,
        "y": 63,
        "lines": [
          [
            "Você",
            "Em cima da mesa está Quarto de Despejo, de Carolina Maria de Jesus. Você o trouxe da biblioteca. Há um pedaço de papel marcando uma página."
          ],
          [
            "Pensamento",
            "Ela escreveu sobre a fome, o cansaço, os filhos, as pessoas à sua volta. Mas não ficou só contando tristeza: observava, criticava, fazia literatura. Era a dona da própria voz."
          ],
          [
            "Você",
            "Ao lado do livro, o seu caderno tem só duas páginas usadas. Você o coloca na mochila. Hoje talvez haja alguma coisa que precise ser escrita."
          ]
        ],
        "journal": {
          "id": "memoria01",
          "title": "Não deixar a voz do lado de fora",
          "tag": "01 / IDENTIDADE",
          "work": "Carolina Maria de Jesus registrou a vida na favela do Canindé e transformou o cotidiano em literatura. No diário de 10 de maio de 1958, escreve: “A fome também é professora.” Ela questionava políticos que decidiam sobre a vida dos pobres sem conhecer suas necessidades. Não estava romantizando a fome: denunciava uma realidade que exigia sobrevivência diária e ensinava, à força, o que muitas autoridades preferiam não enxergar. Carolina era escritora, leitora e observadora crítica do mundo, não apenas testemunha da miséria.",
          "present": "Encontrei seu livro sobre a mesa e fiquei encarando meu caderno quase vazio. Minha vida não é a dela, e o tempo em que vivemos também não é o mesmo. Mesmo assim, reconheço esse hábito de guardar as coisas para não dar trabalho a ninguém. Talvez escrever seja um jeito de parar de fingir que elas não aconteceram.",
          "question": "Quando uma pessoa conta a própria história, quem costuma acreditar nela — e quem prefere que ela se cale?"
        }
      },
      {
        "id": "celular",
        "label": "Mensagem no celular",
        "x": 63,
        "y": 67,
        "lines": [
          [
            "Celular",
            "“Programa de formação — inscrição confirmada. Compareça hoje, até 16h, com documento e comprovante de residência. Não há auxílio-transporte nesta etapa.”"
          ],
          [
            "Pensamento",
            "Eu passei semanas esperando essa mensagem. Estou feliz. Só que já começo a fazer a conta: passagem de ida, passagem de volta, almoço… e a chance de não sobrar nada."
          ]
        ],
        "options": [
          {
            "id": "organizar",
            "text": "Separar os documentos e conferir o trajeto.",
            "effects": {
              "consciencia": 1
            },
            "reply": [
              [
                "Você",
                "Você confere o endereço duas vezes, coloca os documentos num envelope e anota os horários na contracapa do caderno."
              ],
              [
                "Pensamento",
                "Não posso controlar como vão me tratar lá. Mas pelo menos ninguém vai me mandar embora por falta de um papel."
              ]
            ],
            "journalNote": "A mensagem chegou: fui chamado para a seleção. Antes de comemorar direito, fiz as contas do transporte e separei os documentos. Fiquei com raiva de perceber que uma oportunidade que dizem ser gratuita já começa custando dinheiro. Estou animado, sim. Também estou com medo de perder a chance por uma coisa que não depende das minhas notas."
          },
          {
            "id": "joana",
            "text": "Mandar mensagem para Joana e combinar de ir junto.",
            "effects": {
              "apoio": 1
            },
            "reply": [
              [
                "Você",
                "Você escreve: “Você também foi chamada? Tô meio perdido com esse endereço.”"
              ],
              [
                "Joana (mensagem)",
                "“Fui! Também tô nervosa. Desço no terminal e te espero. Vamos juntos, pode ser?”"
              ],
              [
                "Pensamento",
                "O caminho continua comprido, mas parece um pouco menos pesado."
              ]
            ],
            "journalNote": "Mandei mensagem para Joana. Tive vergonha de admitir que estava inseguro, mas ela disse que também estava. Engraçado como a gente acha que todo mundo sabe exatamente o que está fazendo. Saber que alguém vai me esperar no terminal não resolve a falta de dinheiro nem a distância, só que muda o peso do caminho."
          },
          {
            "id": "seguir",
            "text": "Guardar o celular e sair antes de perder o ônibus.",
            "effects": {},
            "reply": [
              [
                "Você",
                "Você põe o celular no bolso, verifica se o documento está na mochila e fecha a porta com cuidado para não acordar ninguém."
              ],
              [
                "Pensamento",
                "Queria ter tempo para pensar melhor. Hoje, até respirar parece entrar na conta do relógio."
              ]
            ],
            "journalNote": "Saí assim que li a mensagem. Nem consegui contar a novidade em casa. Pensei que, se ficasse mais cinco minutos, começaria a inventar motivos para não ir. Estou indo, mas essa pressa me incomoda: tem gente que pode chegar tranquila a uma seleção. Para mim, o primeiro desafio é conseguir chegar."
          }
        ]
      }
    ]
  },
  {
    "id": "rua",
    "title": "A RUA",
    "act": "ATO I",
    "actName": "PERCEPÇÃO",
    "subtitle": "O mesmo município. Nem de longe as mesmas condições.",
    "objective": "Descubra o que está mudando no bairro",
    "description": "Leia o aviso sobre a linha de ônibus e converse com Dona Rosa.",
    "outro": "É difícil chamar de escolha aquilo que já chega decidido para a gente.",
    "required": [
      "mural",
      "rosa"
    ],
    "nextLabel": "PEGAR O ÔNIBUS",
    "hotspots": [
      {
        "id": "mural",
        "label": "Mural de avisos",
        "x": 19,
        "y": 48,
        "lines": [
          [
            "Você",
            "O cartaz está preso com fita sobre um aviso de vacinação. Diz que a prefeitura estuda reduzir os horários da linha do bairro por “baixa demanda”."
          ],
          [
            "Pensamento",
            "Baixa demanda? A fila dobra a esquina de manhã. Talvez quem escreveu isso nunca tenha esperado aqui às cinco e meia, com chuva, para não perder o emprego."
          ]
        ],
        "journal": {
          "id": "memoria02",
          "title": "O endereço que pesa",
          "tag": "02 / TERRITÓRIO",
          "work": "No registro de 7 de junho de 1958, Carolina escreve sobre os pobres enviados às “margens do rio”. A anotação descreve o Canindé, próximo ao lixo, ao desemprego e ao estigma imposto aos moradores. O problema não é só viver distante do centro, mas ser tratado como alguém que não pertence à cidade. Ao falar de saneamento, moradia e respeito, ela expõe como a desigualdade se instala no território e acompanha as pessoas mesmo quando saem dele.",
          "present": "O aviso fala em “baixa demanda”, mas não diz o nome de ninguém que depende daquela linha. Dona Rosa precisa levar a neta à escola. Outros saem para o trabalho ou para o hospital. Uma decisão escrita em poucas linhas pode arrancar horas do dia de quem já tem pouco tempo.",
          "question": "Quem é consultado antes que decidam quais serviços um bairro “merece” receber?"
        }
      },
      {
        "id": "rosa",
        "label": "Dona Rosa",
        "x": 72,
        "y": 58,
        "lines": [
          [
            "Dona Rosa",
            "“Olha isso aqui. Querem tirar o primeiro ônibus. Minha neta já acorda antes das cinco para chegar à escola. Querem que ela acorde ontem?”"
          ],
          [
            "Você",
            "Ela tenta rir da própria frase, mas aperta o cartaz com força."
          ],
          [
            "Dona Rosa",
            "“Quando reclamamos, dizem que é falta de organização. Quem é que aguenta se organizar depois de três horas dentro de condução?”"
          ]
        ],
        "options": [
          {
            "id": "ouvir",
            "text": "Perguntar o que os moradores estão organizando.",
            "effects": {
              "apoio": 1
            },
            "reply": [
              [
                "Dona Rosa",
                "“Hoje tem conversa no Centro Comunitário. Eu não quero promessa bonita, não. Quero horário de ônibus que exista de verdade.”"
              ],
              [
                "Dona Rosa",
                "“Se puder, passa lá. Você estuda; sabe o valor de chegar a tempo.”"
              ]
            ],
            "journalNote": "Parei para ouvir Dona Rosa. Ela estava irritada, e com razão. Falou da neta que sai no escuro para estudar e dos vizinhos que já perderam diária esperando ônibus. Pensei em como é fácil chamar alguém de desorganizado quando se ignora o tempo que a pessoa passa tentando sobreviver ao trajeto."
          },
          {
            "id": "fotografar",
            "text": "Fotografar o aviso e anotar o número da linha.",
            "effects": {
              "consciencia": 1
            },
            "reply": [
              [
                "Você",
                "Você tira uma foto nítida, guarda a data e circula o trecho que fala em reduzir o primeiro horário."
              ],
              [
                "Dona Rosa",
                "“Obrigada. Quando perguntarem de onde tiramos isso, a gente mostra. Não foi boato que inventamos.”"
              ]
            ],
            "journalNote": "Fotografei o cartaz. Parece pouco, mas fiquei pensando em quantas vezes alguém diz que a gente está exagerando porque não tem um documento na mão. Guardei a data e o número da linha. Um pedaço de papel não transporta ninguém, mas pelo menos registra o que estão querendo fazer."
          },
          {
            "id": "seguir",
            "text": "Agradecer e correr para o ponto.",
            "effects": {},
            "reply": [
              [
                "Você",
                "Você olha o relógio e se despede."
              ],
              [
                "Dona Rosa",
                "“Vai, minha criança. Não perde seu ônibus por minha causa. Depois eu te conto como foi a reunião.”"
              ],
              [
                "Pensamento",
                "Ela entende a pressa. É justamente dela que está falando."
              ]
            ],
            "journalNote": "Não consegui ficar para conversar. O ônibus estava perto do horário e eu precisava chegar à seleção. Fiquei com a voz de Dona Rosa na cabeça. Dá uma culpa estranha passar por um problema e não conseguir fazer nada naquele instante. Mas também não posso perder minha oportunidade para provar que me importo."
          }
        ]
      },
      {
        "id": "ponto",
        "label": "Ponto de ônibus",
        "x": 83,
        "y": 30,
        "lines": [
          [
            "Você",
            "A cobertura não protege todos da chuva e a placa de horários está descascada. Alguém pergunta se o ônibus passou. Ninguém sabe responder."
          ],
          [
            "Pensamento",
            "O aplicativo mostra previsão, mas aqui o sinal falha. Quando o ônibus atrasa, chamam de imprevisto; quando a gente atrasa, chamam de irresponsabilidade."
          ]
        ]
      },
      {
        "id": "comercio",
        "label": "Comércio local",
        "x": 39,
        "y": 42,
        "lines": [
          [
            "Você",
            "Na porta do mercadinho, uma mulher pede para levar dois pães e pagar na sexta. O dono hesita, reconhece a voz dela e anota num caderninho."
          ],
          [
            "Pensamento",
            "Não é falta de vontade. Às vezes, o dinheiro acaba antes da semana. No livro de Carolina, fome não é metáfora. É o corpo cobrando alguma coisa que não chegou."
          ]
        ]
      },
      {
        "id": "rua",
        "label": "Asfalto quebrado",
        "x": 55,
        "y": 83,
        "lines": [
          [
            "Você",
            "Uma cadeira de rodas precisa descer para o asfalto porque a calçada acaba num degrau quebrado. Um carro passa perto demais; alguém grita para o motorista ter cuidado."
          ],
          [
            "Pensamento",
            "A cidade fala muito em acesso. Aqui, até andar na calçada vira negociação."
          ]
        ]
      }
    ]
  },
  {
    "id": "onibus",
    "title": "O ÔNIBUS",
    "act": "ATO II",
    "actName": "CONFRONTO",
    "subtitle": "Às vezes, a humilhação vem disfarçada de conselho.",
    "objective": "Atravesse a cidade",
    "description": "Observe a paisagem e converse com a passageira perto de você.",
    "outro": "A viagem segue. O que foi dito continua aqui dentro.",
    "required": [
      "janela",
      "passageira"
    ],
    "nextLabel": "CHEGAR À ESCOLA",
    "hotspots": [
      {
        "id": "janela",
        "label": "Paisagem na janela",
        "x": 23,
        "y": 32,
        "lines": [
          [
            "Você",
            "As ruas estreitas dão lugar a avenidas arborizadas. Aparecem ciclovias bem pintadas, jardins cuidados e calçadas sem buracos. A passagem custou o mesmo; a cidade parece outra."
          ],
          [
            "Pensamento",
            "Queria morar num lugar onde o ônibus passa a cada dez minutos. Não porque o nosso bairro seja ruim, mas porque parece que consertam tudo lá primeiro e só lembram daqui quando sobra."
          ]
        ],
        "journal": {
          "id": "memoria03",
          "title": "Uma cidade dividida pela janela",
          "tag": "03 / MOBILIDADE",
          "work": "No diário de 19 de maio de 1958, Carolina compara a cidade a uma “sala de visita”, enquanto a favela é o lugar para onde se empurra o que não se quer ver. A imagem é cruel justamente por ser tão simples: há espaços preparados para receber e impressionar, e outros abandonados à própria sorte. Ao atravessar São Paulo, Carolina percebe que uma mesma cidade oferece condições de vida muito diferentes a quem mora nela. É essa divisão que a janela do ônibus nos faz observar.",
          "present": "Olhei pela janela e vi calçadas inteiras, árvores cuidadas e um ponto de ônibus coberto. Não senti raiva de quem mora aqui. Senti raiva de ter aprendido a achar normal que no meu bairro falte tudo isso. Não é inveja de um jardim; é a pergunta de por que parece tão difícil ter um também.",
          "question": "Se a cidade é de todos, por que alguns lugares recebem cuidado e outros recebem desculpas?"
        }
      },
      {
        "id": "passageira",
        "label": "Passageira",
        "x": 73,
        "y": 59,
        "lines": [
          [
            "Passageira",
            "“Ei, você vai descer no centro? Tem certeza? Ali não é lugar para ficar passeando.”"
          ],
          [
            "Você",
            "Ela olha para sua mochila, depois para o seu cabelo. A bolsa dela desaparece debaixo do braço."
          ],
          [
            "Passageira",
            "“Não estou falando por mal. É que depois o segurança vê alguém como você entrando e dá confusão.”"
          ],
          [
            "Pensamento",
            "Alguém como eu. Uma pessoa negra, de mochila, indo estudar. Ela chama isso de cuidado. Eu conheço o nome dessa suspeita."
          ]
        ],
        "options": [
          {
            "id": "responder",
            "text": "Dizer que você sabe para onde está indo.",
            "effects": {
              "consciencia": 1,
              "desgaste": 1
            },
            "reply": [
              [
                "Você",
                "“Vou participar de uma seleção. Tenho endereço, documento e horário. E, mesmo que eu estivesse só passeando, eu poderia descer no centro.”"
              ],
              [
                "Passageira",
                "“Nossa, não precisa ficar assim. Hoje em dia a gente nem pode perguntar.”"
              ],
              [
                "Pensamento",
                "Ela ainda acha que a parte ofensiva foi a minha resposta."
              ]
            ],
            "journalNote": "Eu respondi. Falei com calma, mas minha mão estava tremendo. A mulher insinuou que um segurança poderia me parar só por me ver entrando. Quando eu disse que tinha direito de estar ali, ela se fez de ofendida. Agora fico repetindo a conversa na cabeça, tentando descobrir como alguém transforma o próprio preconceito em preocupação comigo."
          },
          {
            "id": "apoio",
            "text": "Pedir ajuda ao motorista para interromper a situação.",
            "effects": {
              "apoio": 1,
              "desgaste": 1
            },
            "reply": [
              [
                "Você",
                "“Motorista, desculpa. Ela está me constrangendo aqui. Pode me dizer onde desço para a instituição?”"
              ],
              [
                "Motorista",
                "“É na próxima avenida. E a senhora, por favor, deixe as pessoas fazerem a viagem em paz.”"
              ],
              [
                "Pensamento",
                "Eu preferia não precisar pedir ajuda para simplesmente estar sentado num ônibus."
              ]
            ],
            "journalNote": "Pedi apoio ao motorista porque não queria discutir com a passageira. Ele interveio e ela ficou quieta. Mesmo assim, o corpo demorou para relaxar. É cansativo ter de calcular se vale responder, pedir ajuda ou fingir que não escutou. Eu só queria chegar ao curso como qualquer outra pessoa."
          },
          {
            "id": "preservar",
            "text": "Não responder e tentar terminar a viagem em paz.",
            "effects": {
              "desgaste": 1
            },
            "reply": [
              [
                "Você",
                "Você segura a alça da mochila e vira o rosto para a janela. Não responde."
              ],
              [
                "Passageira",
                "“É, melhor assim.”"
              ],
              [
                "Pensamento",
                "Ela acha que venceu uma discussão que eu nunca aceitei ter. Ficar em silêncio não significa concordar. Hoje eu só preciso chegar inteiro."
              ]
            ],
            "journalNote": "Não respondi. Vi a cidade passar pela janela enquanto ela continuava sentada como se nada tivesse acontecido. Fiquei com raiva, e depois com raiva de não ter dito nada. Mas eu não devia ter de provar coragem toda vez que alguém me trata como suspeito. O erro foi o que ela disse, não a forma como eu me protegi."
          }
        ]
      },
      {
        "id": "cartaz",
        "label": "Aviso de tarifa",
        "x": 53,
        "y": 19,
        "lines": [
          [
            "Você",
            "Um adesivo anuncia o reajuste da tarifa. Você faz a conta de uma semana inteira de aulas, ida e volta, sem contar um almoço barato."
          ],
          [
            "Pensamento",
            "A matrícula é gratuita. O caminho até a sala não é."
          ]
        ]
      },
      {
        "id": "motorista",
        "label": "Motorista",
        "x": 88,
        "y": 30,
        "lines": [
          [
            "Motorista",
            "“O ponto do centro fica depois do semáforo. Hoje tá cheio de candidato para aquele programa. Espero que deem uma chance de verdade.”"
          ],
          [
            "Pensamento",
            "Ele fala sem fazer ideia do que acabou de acontecer aqui atrás. Talvez tenha visto. Talvez esteja acostumado a ver."
          ]
        ]
      },
      {
        "id": "assento",
        "label": "Assento vazio",
        "x": 40,
        "y": 71,
        "lines": [
          [
            "Você",
            "No banco ao lado, uma mochila ocupa o lugar vazio. Quando você se aproxima, a dona puxa a mochila para o colo e prende a alça com força."
          ],
          [
            "Pensamento",
            "Talvez tenha sido só pressa. Talvez não. O pior é como a dúvida vai ficando dentro da gente."
          ]
        ]
      }
    ]
  },
  {
    "id": "escola",
    "title": "A ESCOLA",
    "act": "ATO II",
    "actName": "CONFRONTO",
    "subtitle": "Há portas abertas com gente tentando impedir a entrada.",
    "objective": "Procure informações sem aceitar suposições",
    "description": "Veja a exposição de livros e procure a funcionária para saber como funciona a seleção.",
    "outro": "Não é um favor deixar alguém estudar. É um direito.",
    "required": [
      "livro",
      "funcionaria"
    ],
    "nextLabel": "IR À SELEÇÃO",
    "hotspots": [
      {
        "id": "livro",
        "label": "Livro em exposição",
        "x": 38,
        "y": 68,
        "lines": [
          [
            "Você",
            "No corredor, uma exposição apresenta escritoras brasileiras. Há uma foto de Carolina Maria de Jesus ao lado de um pequeno texto sobre Quarto de Despejo."
          ],
          [
            "Você",
            "Duas estudantes leem a placa. Uma comenta: “Nossa, ela escrevia mesmo morando numa favela?”. A outra parece não saber o que responder."
          ],
          [
            "Pensamento",
            "“Mesmo”. Essa palavra pesa. Carolina escrevia porque tinha algo a dizer. Não precisava sair da favela para ganhar o direito de ser chamada de escritora."
          ]
        ],
        "journal": {
          "id": "memoria04",
          "title": "Quem pode ser chamado de escritor?",
          "tag": "04 / EDUCAÇÃO",
          "work": "Em 16 de junho de 1958, Carolina recorda a resposta recebida quando apresentou peças teatrais a diretores de circo: “É pena você ser preta.” A frase não discute o texto que ela escreveu; rejeita sua autora por causa da cor da pele. Carolina responde, no próprio diário, afirmando sua identidade negra. Esse episódio ajuda a compreender o racismo que tenta decidir, antes mesmo da leitura, quem pode criar, estudar e ser reconhecido como artista ou intelectual.",
          "present": "Na exposição, ouvi uma menina se surpreender porque Carolina escrevia morando numa favela. Fiquei pensando em quantas vezes tratam conhecimento como coisa de gente de determinado endereço. Falam de Carolina, mas nem sempre deixam que ela seja vista como autora, com suas escolhas e sua inteligência. E comigo? Vão se surpreender se eu souber responder?",
          "question": "Por que a origem de alguém ainda é usada para diminuir sua capacidade ou tornar seu talento uma “surpresa”?"
        }
      },
      {
        "id": "funcionaria",
        "label": "Funcionária",
        "x": 77,
        "y": 54,
        "lines": [
          [
            "Funcionária",
            "“Ah, você veio para a seleção? Me entrega o documento. Nossa, você se expressa muito bem!”"
          ],
          [
            "Você",
            "Ela olha a ficha, encontra seu endereço e ergue as sobrancelhas."
          ],
          [
            "Funcionária",
            "“É que o pessoal desse bairro costuma ter dificuldade para acompanhar. Às vezes é melhor procurar um curso mais simples, mais perto de casa.”"
          ],
          [
            "Pensamento",
            "Ela não leu meu histórico. Nem sabe como estudo. Antes de me perguntar o que eu sei, já decidiu o que espera de mim."
          ]
        ],
        "options": [
          {
            "id": "criterios",
            "text": "Pedir o edital e os critérios de seleção.",
            "effects": {
              "consciencia": 1,
              "desgaste": 1
            },
            "reply": [
              [
                "Você",
                "“Quero entender o que é exigido no edital. Tem alguma regra que me impeça de concorrer por causa do meu endereço?”"
              ],
              [
                "Funcionária",
                "“Não, claro que não. Foi só uma sugestão. Aqui está o documento.”"
              ],
              [
                "Pensamento",
                "O tom muda quando peço que ela mostre a regra por escrito."
              ]
            ],
            "journalNote": "Pedi o edital. A funcionária tinha acabado de sugerir que eu buscasse algo “mais simples” sem conhecer minhas notas ou meu histórico. Quando perguntei se havia alguma restrição oficial por endereço, ela disse que não. Fiquei com o documento na mão e uma pergunta na cabeça: quantas pessoas desistem antes de descobrir que aquela porta também era delas?"
          },
          {
            "id": "colega",
            "text": "Chamar Joana para acompanhar a conversa.",
            "effects": {
              "apoio": 1,
              "desgaste": 1
            },
            "reply": [
              [
                "Você",
                "“Joana, pode vir aqui um instante? Quero conferir com você as exigências.”"
              ],
              [
                "Joana",
                "“A gente trouxe os documentos que o edital pediu. Falta alguma coisa para nós?”"
              ],
              [
                "Funcionária",
                "“Não. Está tudo certo. Podem seguir para a próxima etapa.”"
              ],
              [
                "Pensamento",
                "A informação era simples. O julgamento é que veio antes."
              ]
            ],
            "journalNote": "Chamei Joana porque não queria ficar sozinho naquela conversa. A funcionária falou do meu bairro como se ele fosse um defeito na inscrição. Com Joana ao meu lado, pedi as regras, e descobrimos que os documentos estavam certos. Saí aliviado, mas incomodado. Não devia ser necessário levar testemunha para receber a mesma orientação que todo mundo."
          },
          {
            "id": "depois",
            "text": "Encerrar o atendimento e procurar outro setor.",
            "effects": {
              "desgaste": 1
            },
            "reply": [
              [
                "Você",
                "“Obrigado. Vou confirmar as informações no setor responsável.”"
              ],
              [
                "Funcionária",
                "“Tudo bem. Eu só estava tentando ajudar.”"
              ],
              [
                "Pensamento",
                "Não tenho energia para explicar por que aquilo não ajudou. Preciso continuar."
              ]
            ],
            "journalNote": "Preferi sair e buscar orientação em outro setor. Não foi porque achei normal. Só não queria gastar o resto da manhã convencendo uma desconhecida de que meu bairro não diz tudo sobre mim. Fiquei ouvindo a frase “um curso mais simples” mesmo depois que ela parou de falar. Às vezes, a gente leva uma conversa embora sem querer."
          }
        ]
      },
      {
        "id": "mural",
        "label": "Quadro de oportunidades",
        "x": 19,
        "y": 30,
        "lines": [
          [
            "Você",
            "Um cartaz colorido diz “SEU FUTURO COMEÇA AQUI”. Abaixo, bem pequeno, estão os documentos exigidos, os horários e um aviso sobre faltas."
          ],
          [
            "Pensamento",
            "Gosto da frase. Queria que fosse verdade para todo mundo. O futuro não deveria depender de uma pessoa na recepção achar que você pertence a este lugar."
          ]
        ]
      },
      {
        "id": "mesa",
        "label": "Carteira escolar",
        "x": 55,
        "y": 82,
        "lines": [
          [
            "Você",
            "A carteira tem uma equação inacabada, dois nomes riscados e uma frase escrita a caneta: “Aqui eu vou conseguir”."
          ],
          [
            "Pensamento",
            "Não sei quem escreveu. Espero que tenha conseguido."
          ]
        ]
      },
      {
        "id": "colega",
        "label": "Colega de curso",
        "x": 58,
        "y": 42,
        "lines": [
          [
            "Joana",
            "“A recepcionista falou do meu sotaque também. Perguntou se eu tinha entendido o formulário. Eu estava com ele preenchido na mão.”"
          ],
          [
            "Joana",
            "Ela dá uma risada curta, sem achar graça."
          ],
          [
            "Joana",
            "“Eu sei que a gente não tá imaginando coisa. O ruim é ter que pensar nisso quando devia estar pensando na prova.”"
          ]
        ]
      }
    ]
  },
  {
    "id": "centro",
    "title": "O CENTRO",
    "act": "ATO III",
    "actName": "APROFUNDAMENTO",
    "subtitle": "Disseram que a chance é igual. Esqueceram de contar o preço.",
    "objective": "Entenda as condições da oportunidade",
    "description": "Leia o formulário de inscrição e converse com o atendente.",
    "outro": "A inscrição termina aqui. O custo de continuar ainda não.",
    "required": [
      "formulario",
      "atendente"
    ],
    "nextLabel": "VOLTAR À COMUNIDADE",
    "hotspots": [
      {
        "id": "formulario",
        "label": "Formulário",
        "x": 62,
        "y": 77,
        "lines": [
          [
            "Você",
            "O formulário pergunta sobre disponibilidade integral, internet em casa e “meios próprios de deslocamento”. Não há campo para explicar quando a resposta é “depende”."
          ],
          [
            "Pensamento",
            "Eu tenho vontade de estudar. Isso não paga duas passagens por dia. Se um ônibus atrasar, vão registrar falta; não vão registrar a hora em que eu saí de casa."
          ]
        ],
        "journal": {
          "id": "memoria05",
          "title": "O preço escondido de uma oportunidade",
          "tag": "05 / TRABALHO E RENDA",
          "work": "No registro de 27 de maio de 1958, Carolina descreve a “tontura da fome” ao caminhar sem ter comido. Não é apenas uma metáfora: é um corpo enfraquecido enquanto ela precisa trabalhar para alimentar os filhos. A obra mostra que a sobrevivência consome tempo, energia e possibilidades de escolha. No jogo, a seleção exige transporte e disponibilidade como se fossem recursos garantidos. As experiências são diferentes, mas a pergunta permanece: quem consegue aproveitar uma oportunidade quando falta o necessário para chegar até ela?",
          "present": "No formulário, perguntam se tenho transporte próprio, internet estável e tempo livre, como se todos começássemos do mesmo lugar. Hoje tive de escolher entre comer no centro e guardar dinheiro para voltar. Não é a mesma realidade que Carolina viveu. Mas o formulário também não sabe quanto custa sobreviver até chegar aqui.",
          "question": "O que uma seleção mede quando trata dinheiro, tempo e transporte como se fossem recursos iguais para todos?"
        }
      },
      {
        "id": "atendente",
        "label": "Atendente",
        "x": 79,
        "y": 43,
        "lines": [
          [
            "Atendente",
            "“Seus documentos estão certos. Só preciso avisar: o curso não oferece transporte e quem passar do limite de faltas perde a vaga. Sem exceção.”"
          ],
          [
            "Você",
            "Você mostra o cartaz fotografado no bairro, sobre a possível redução dos ônibus."
          ],
          [
            "Atendente",
            "“Entendo, mas as regras são iguais para todos. A instituição não pode resolver o problema de cada candidato.”"
          ],
          [
            "Pensamento",
            "Iguais no papel. Aqui dentro, talvez. Lá fora, nem todo mundo precisa sair de casa duas horas antes da aula."
          ]
        ],
        "options": [
          {
            "id": "protocolo",
            "text": "Pedir que registrem a dificuldade de transporte.",
            "effects": {
              "consciencia": 1
            },
            "reply": [
              [
                "Você",
                "“Então registra, por favor, que a linha que atende meu bairro pode ser reduzida. Não é uma desculpa antecipada. É uma condição real.”"
              ],
              [
                "Atendente",
                "“Posso colocar a observação no sistema. Guarde este número de protocolo.”"
              ],
              [
                "Pensamento",
                "Ele não prometeu solução. Pelo menos existe um registro de que eu avisei."
              ]
            ],
            "journalNote": "Pedi que registrassem o problema do transporte. Ouvi de novo que “as regras são iguais”, uma frase que parece justa até a gente lembrar que algumas pessoas chegam de carro e outras dependem de um ônibus ameaçado de desaparecer. Saí com um protocolo. Não sei se vai mudar alguma coisa, mas não quero que depois digam que ninguém contou."
          },
          {
            "id": "candidatos",
            "text": "Perguntar aos outros candidatos se passam pelo mesmo problema.",
            "effects": {
              "apoio": 1
            },
            "reply": [
              [
                "Você",
                "Você se vira para quem espera na fila e pergunta se mais alguém depende de uma única linha para chegar."
              ],
              [
                "Candidata",
                "“Eu pego dois ônibus. Tem dia que preciso decidir entre lanchar e guardar o dinheiro da volta.”"
              ],
              [
                "Candidato",
                "“Se forem mexer nas linhas, a gente precisa ir junto naquela reunião.”"
              ]
            ],
            "journalNote": "Conversei com outros candidatos e descobri que o problema não era só meu. Uma moça falou de duas conduções e de voltar para casa com fome para não gastar o dinheiro da passagem. A gente trocou contatos e combinou de procurar a reunião no bairro. Não sei se teremos uma resposta, mas pelo menos agora sei que há outras pessoas fazendo a mesma conta impossível."
          },
          {
            "id": "documentos",
            "text": "Finalizar a inscrição e guardar os documentos.",
            "effects": {},
            "reply": [
              [
                "Você",
                "“Entendi as regras. Quero concluir a inscrição.”"
              ],
              [
                "Atendente",
                "“Certo. Está tudo registrado. O resultado será comunicado depois.”"
              ],
              [
                "Pensamento",
                "Eu fiz o que vim fazer. Não significa que o problema do caminho deixou de existir."
              ]
            ],
            "journalNote": "Entreguei os documentos e finalizei a inscrição. Uma parte de mim queria comemorar; outra já estava calculando quanto custaria frequentar o curso se eu fosse chamado. Estou cansado de cada conquista vir acompanhada de uma nova conta. Mesmo assim, eu quis terminar. Essa decisão é minha, mas as dificuldades não foram inventadas por mim."
          }
        ]
      },
      {
        "id": "painel",
        "label": "Painel de vagas",
        "x": 19,
        "y": 37,
        "lines": [
          [
            "Você",
            "Um painel anuncia “INCLUSÃO E OPORTUNIDADE”. Perto da recepção, uma pessoa pergunta se existe auxílio para transporte. O atendente responde que não."
          ],
          [
            "Pensamento",
            "A palavra inclusão está em letras enormes. A resposta sobre o transporte cabe numa sílaba."
          ]
        ]
      },
      {
        "id": "senhas",
        "label": "Painel de senhas",
        "x": 47,
        "y": 19,
        "lines": [
          [
            "Você",
            "A senha avança devagar. Um homem recebe uma ligação e explica ao chefe que ainda está esperando atendimento. Do outro lado, alguém desliga antes de ele terminar."
          ],
          [
            "Pensamento",
            "Até esperar na fila tem preço. Tem gente perdendo salário para tentar conseguir uma chance de ganhar melhor."
          ]
        ]
      },
      {
        "id": "candidata",
        "label": "Outra candidata",
        "x": 30,
        "y": 68,
        "lines": [
          [
            "Candidata",
            "“Acordei às quatro. Se eu passar, não sei como vou pagar as passagens todo dia. Mas se não tentar, dizem que é porque eu não quis melhorar.”"
          ],
          [
            "Pensamento",
            "Ela fala baixo, sem pedir conselho. Talvez só quisesse que alguém escutasse sem responder com uma frase pronta."
          ]
        ]
      }
    ]
  },
  {
    "id": "comunidade",
    "title": "CENTRO COMUNITÁRIO",
    "act": "ATO III",
    "actName": "APROFUNDAMENTO",
    "subtitle": "Quando juntamos as histórias, elas deixam de parecer coincidência.",
    "objective": "Conheça quem está organizando a assembleia",
    "description": "Veja as fotografias da comunidade e converse com Dona Celina.",
    "outro": "A memória do bairro não precisa caber na versão oficial de ninguém.",
    "required": [
      "fotos",
      "celina"
    ],
    "nextLabel": "IR À ASSEMBLEIA",
    "hotspots": [
      {
        "id": "fotos",
        "label": "Fotografias históricas",
        "x": 24,
        "y": 35,
        "lines": [
          [
            "Você",
            "Fotografias antigas mostram ruas de terra, festas de bairro, protestos e pessoas carregando baldes de água. Ao lado, há um painel sobre Carolina Maria de Jesus."
          ],
          [
            "Você",
            "Uma frase escrita à mão chama sua atenção: “A gente existe antes de aparecer no jornal.”"
          ],
          [
            "Pensamento",
            "Os anos mudam nas legendas. A coragem e o cansaço nos rostos continuam reconhecíveis."
          ]
        ],
        "journal": {
          "id": "memoria06",
          "title": "Guardar o que tentaram apagar",
          "tag": "06 / RESISTÊNCIA",
          "work": "Em 20 de maio de 1958, ao comentar a situação política e a miséria ao seu redor, Carolina afirma que é “poetisa”. Para ela, escrever também significava observar seu povo, reconhecer sua dor e criticar quem governava. Seu diário registra fome e violência, mas também imaginação, opiniões, vizinhos, conflitos e pequenos momentos de alegria. Preservar essas vozes impede que uma comunidade seja lembrada apenas pelas carências que enfrenta. Carolina não foi uma personagem do sofrimento: foi autora de sua própria visão do mundo.",
          "present": "Na parede há fotos de festas, de enchentes e de reuniões antigas. Achei importante ver as festas junto dos protestos. A comunidade não é só sofrimento; aqui também tem amizade, música, trabalho, humor e gente que inventa futuro. O que aparece no noticiário costuma ser apenas o problema. Quem guarda o resto da nossa história?",
          "question": "O que se perde quando uma comunidade só aparece nos registros oficiais como estatística ou problema?"
        }
      },
      {
        "id": "celina",
        "label": "Dona Celina",
        "x": 76,
        "y": 60,
        "lines": [
          [
            "Dona Celina",
            "“Hoje a prefeitura vem falar da linha. Da última vez, prometeram estudar a situação e sumiram. Quero ver se desta vez saem daqui com uma data.”"
          ],
          [
            "Dona Celina",
            "Ela bate a ponta da caneta no caderno, procurando uma anotação."
          ],
          [
            "Dona Celina",
            "“Não precisa fazer discurso bonito. Quem quiser, conta o que vive. Quem não quiser falar, pode ajudar de outro jeito. O importante é não deixar dizerem que está tudo bem.”"
          ]
        ],
        "options": [
          {
            "id": "relatos",
            "text": "Oferecer seus registros e conversar com os moradores.",
            "effects": {
              "apoio": 1
            },
            "reply": [
              [
                "Você",
                "“Anotei o que aconteceu no transporte e na seleção. Também conheci gente que precisa de duas conduções por dia.”"
              ],
              [
                "Dona Celina",
                "“Pode deixar o caderno aqui comigo. Vamos perguntar antes quem quer ter a história mencionada. Relatos são importantes para a comunidade.”"
              ],
              [
                "Pensamento",
                "Pela primeira vez hoje, alguém quer ouvir sem me fazer provar que mereço."
              ]
            ],
            "journalNote": "Mostrei minhas anotações para Dona Celina. Ela ouviu com atenção e perguntou se eu autorizava citar o que vivi. Gostei disso. Durante o dia, tanta gente resolveu quem eu era sem me perguntar nada. Aqui, minha palavra veio antes da opinião dos outros. Não quero falar por todo mundo; quero que cada pessoa possa contar o que sabe."
          },
          {
            "id": "perguntas",
            "text": "Organizar os horários e preparar perguntas para a prefeitura.",
            "effects": {
              "consciencia": 1
            },
            "reply": [
              [
                "Você",
                "“Podemos separar os horários que querem cortar, quantas pessoas dependem deles e quando a prefeitura vai responder?”"
              ],
              [
                "Dona Celina",
                "“É disso que precisamos. Se a resposta for vaga, perguntamos de novo. E registramos para cobrar depois.”"
              ]
            ],
            "journalNote": "Ajudei a organizar os horários e a escrever perguntas. É curioso: quando alguém daqui conta que sofre com ônibus, chamam de reclamação. Quando colocamos horários e números numa folha, de repente parece mais sério. O relato já era sério antes. Os dados servem para impedir que finjam não entender. As duas coisas precisam andar juntas."
          },
          {
            "id": "escutar",
            "text": "Sentar um pouco e escutar antes de decidir.",
            "effects": {},
            "reply": [
              [
                "Você",
                "“Hoje foi complicado. Posso ficar aqui ouvindo antes de resolver se vou falar?”"
              ],
              [
                "Dona Celina",
                "“Claro. Aqui ninguém é obrigado a contar uma dor para merecer um lugar. Senta. Tem água ali.”"
              ],
              [
                "Pensamento",
                "Você se senta. Há um alívio pequeno, mas verdadeiro, em não precisar justificar seu silêncio."
              ]
            ],
            "journalNote": "Pedi para só escutar. Dona Celina não insistiu, e isso me pegou de surpresa. Depois de um dia inteiro em que precisei me explicar, ouvir alguém dizer que eu podia simplesmente ficar foi um descanso. Ainda não sei se vou falar na assembleia. Sei que preciso de um lugar onde a minha presença já seja suficiente."
          }
        ]
      },
      {
        "id": "documentos",
        "label": "Abaixo-assinado",
        "x": 51,
        "y": 75,
        "lines": [
          [
            "Você",
            "O abaixo-assinado tem nomes, horários de trabalho e uma lista de ônibus que as pessoas precisam pegar. Alguns escrevem por si; outros ditam os dados para um vizinho."
          ],
          [
            "Pensamento",
            "Cada linha dessa folha é alguém reorganizando a própria vida para conseguir ser ouvido."
          ]
        ]
      },
      {
        "id": "livros",
        "label": "Estante de livros",
        "x": 49,
        "y": 38,
        "lines": [
          [
            "Você",
            "Na estante, Quarto de Despejo está ao lado de poesia, histórias do bairro e cadernos encadernados pelos moradores. Alguns têm capas tortas e títulos escritos à mão."
          ],
          [
            "Pensamento",
            "Nem toda história precisa esperar uma editora para existir. Mas seria bom que as editoras também aprendessem a olhar para essas prateleiras."
          ]
        ]
      },
      {
        "id": "moradores",
        "label": "Moradores",
        "x": 91,
        "y": 77,
        "lines": [
          [
            "Moradora",
            "“Se tirarem o primeiro horário, minha mãe perde a consulta no hospital. Ela esperou seis meses por essa vaga.”"
          ],
          [
            "Morador",
            "“Meu chefe não vai querer saber de decreto. Vai descontar do salário. E depois vão dizer que trabalhador daqui é preguiçoso.”"
          ],
          [
            "Pensamento",
            "Eles não estão pedindo um privilégio. Estão tentando não perder coisas que deveriam estar garantidas."
          ]
        ]
      }
    ]
  },
  {
    "id": "assembleia",
    "title": "A ASSEMBLEIA",
    "act": "ATO IV",
    "actName": "DECISÃO",
    "subtitle": "Agora eles estão ouvindo. Será que vão escutar?",
    "objective": "Decida o que fazer com o que viveu",
    "description": "Leia as reivindicações e aproxime-se do microfone quando estiver pronto.",
    "outro": "A reunião vai terminar. O que ficou escrito continua.",
    "required": [
      "mural",
      "microfone"
    ],
    "nextLabel": "VER DESFECHO",
    "hotspots": [
      {
        "id": "mural",
        "label": "Mural de reivindicações",
        "x": 18,
        "y": 34,
        "lines": [
          [
            "Você",
            "O mural reúne horários, fotos de pontos lotados e relatos assinados. Há frases curtas: “Perdi a consulta”; “Descontaram meu dia”; “Saio antes dos meus filhos acordarem”."
          ],
          [
            "Pensamento",
            "Passei a manhã achando que meus problemas eram pequenos demais para ocupar uma folha. Agora vejo muitos deles escritos aqui, com outros nomes."
          ]
        ],
        "journal": {
          "id": "memoria07",
          "title": "O que a cidade prefere não escutar",
          "tag": "07 / VOZ E PARTICIPAÇÃO",
          "work": "Em 31 de outubro de 1958, num registro sobre o aumento das passagens e a insatisfação com os governantes, Carolina escreve: “O povo não sabe revoltar-se.” A frase traduz uma indignação forte, nascida de decisões políticas que pesavam sobre quem já lutava para comer e se deslocar. Não é preciso concordar com todas as palavras da autora para reconhecer a denúncia. No jogo, a assembleia também nasce de um problema concreto: quem decide sobre o transporte precisa responder às pessoas que dependem dele.",
          "present": "No mural, cada nome vem acompanhado de uma consequência concreta: emprego ameaçado, consulta perdida, estudo interrompido. Meu caderno não vai consertar o ônibus. Mas pode registrar o que aconteceu e ajudar a impedir que alguém diga, mais tarde, que ninguém avisou. Eu não preciso transformar a minha vida em exemplo. Posso apenas contar a verdade dela.",
          "question": "O que acontece depois que a comunidade é ouvida? Quem assume a responsabilidade por responder e agir?"
        }
      },
      {
        "id": "representante",
        "label": "Representante público",
        "x": 73,
        "y": 36,
        "lines": [
          [
            "Representante",
            "“Estamos sensíveis às demandas, mas precisamos avaliar o impacto financeiro. Não há como atender tudo o que cada bairro solicita.”"
          ],
          [
            "Morador",
            "Perto da primeira fileira, alguém ergue um comprovante de desconto salarial."
          ],
          [
            "Representante",
            "“Peço que tragam dados objetivos. A prefeitura não pode trabalhar só com emoções.”"
          ],
          [
            "Pensamento",
            "Chamar de emoção o medo de perder o emprego é uma forma confortável de não enxergar o problema."
          ]
        ]
      },
      {
        "id": "moradores",
        "label": "Grupo de moradores",
        "x": 34,
        "y": 76,
        "lines": [
          [
            "Dona Rosa",
            "“Minha neta tem quinze anos. Com esse corte, vai sair de casa quando ainda está escuro. Quero que alguém aqui diga olhando para ela que isso é aceitável.”"
          ],
          [
            "Moradora",
            "“Não estamos pedindo carro particular nem tratamento especial. Estamos pedindo que o ônibus passe.”"
          ],
          [
            "Moradores",
            "Algumas pessoas aplaudem. Outras seguram os próprios documentos como se fossem a única maneira de não serem interrompidas."
          ]
        ]
      },
      {
        "id": "joana",
        "label": "Joana",
        "x": 85,
        "y": 71,
        "lines": [
          [
            "Joana",
            "“Eu vi o que aconteceu hoje. Você não precisa transformar isso num discurso perfeito. Se quiser falar, eu fico aqui. Se não quiser, eu fico também.”"
          ],
          [
            "Pensamento",
            "Ela não tenta escolher por mim. Depois de tanta gente decidindo quem eu devo ser, isso faz diferença."
          ]
        ]
      },
      {
        "id": "microfone",
        "label": "Microfone — decisão final",
        "x": 55,
        "y": 61,
        "lines": [
          [
            "Você",
            "O microfone está ligado. Você sente os papéis do caderno dobrando sob os dedos. Pensa no ônibus, na recepção, na fome mencionada por Carolina e nas pessoas que encontrou hoje."
          ],
          [
            "Pensamento",
            "Não existe fala capaz de resolver tudo. Também não existe obrigação de transformar meu sofrimento em espetáculo para que me levem a sério."
          ],
          [
            "Você",
            "O que você decide fazer agora?"
          ]
        ],
        "options": [
          {
            "id": "coletivo",
            "text": "Dividir os registros e convidar outras pessoas a falar.",
            "requires": {
              "apoio": 2
            },
            "lockedText": "Disponível ao construir pelo menos dois vínculos de apoio ao longo da história.",
            "ending": "coletivo",
            "journalNote": "Decidi compartilhar o que anotei e passar o microfone para outras pessoas. Não queria que a reunião virasse apenas a história do meu dia, porque o problema é maior que eu. Quando Dona Rosa e os outros moradores falaram, as situações começaram a formar um retrato que ninguém ali podia reduzir a “casos isolados”. Saí sem garantia de mudança, mas com um compromisso coletivo de cobrar uma resposta."
          },
          {
            "id": "individual",
            "text": "Contar sua trajetória e seguir buscando a vaga.",
            "ending": "individual",
            "journalNote": "Falei sobre o que vivi e sobre a dificuldade de chegar à seleção. Quis registrar minha experiência, mas também preciso continuar meus estudos e cuidar da minha vida. Não é pouca coisa conseguir uma chance quando tantas portas parecem pedir justificativa antes de abrir. Vou seguir. Só não quero esquecer que há gente enfrentando as mesmas barreiras sem ter conseguido chegar até aqui."
          },
          {
            "id": "silencio",
            "text": "Guardar o caderno e sair antes de falar.",
            "ending": "silencio",
            "journalNote": "Não consegui ir até o microfone. Ou talvez tenha decidido que hoje não era o dia. Cansei de fazer contas, explicar meu endereço e medir cada palavra. Saí levando o caderno. Não era falta de opinião; era falta de fôlego. O que me aconteceu continua sendo real mesmo que eu não conte a uma sala cheia de gente. Posso escolher outra hora, outra forma ou apenas descansar."
          }
        ]
      }
    ]
  }
];

const GAME_ENDINGS = {
  "coletivo": {
    "number": "01",
    "title": "Vozes da Mudança",
    "text": "Você abre o caderno e lê só o necessário. Não conta tudo: algumas coisas ainda são suas. Depois chama Dona Rosa. Ela fala da neta, uma estudante mostra os horários, uma mulher explica por que perdeu uma consulta. O representante tenta encerrar a reunião com uma promessa genérica, mas o grupo pede uma data, um protocolo e uma nova reunião. Ele anota. Ninguém aplaude como se o problema estivesse resolvido. Na saída, vocês combinam guardar cópias dos relatos e voltar para cobrar. Pela primeira vez naquele dia, o peso não está todo nas suas mãos.",
    "epilogue": "Ser ouvido não é o mesmo que ser atendido. Mas ninguém precisa cobrar sozinho."
  },
  "individual": {
    "number": "02",
    "title": "Caminho Individual",
    "text": "Você fala do ônibus, da escola e da seleção. Conta que entregou os documentos e ainda não sabe se conseguirá pagar o trajeto para estudar todos os dias. Depois, deixa o microfone e volta para casa. No celular, a inscrição continua aparecendo como “concluída”. Você sorri por um instante; trabalhou para chegar até ali. Pela janela, vê o ponto cheio e lembra de Dona Rosa. A sua conquista é real. Também é real o fato de que muitas outras pessoas terão de atravessar as mesmas barreiras amanhã. Você abre o caderno antes de dormir e escreve isso sem pedir desculpas por querer um futuro melhor.",
    "epilogue": "Você tem direito à sua conquista. Ela não precisa virar prova de que o sistema funciona."
  },
  "silencio": {
    "number": "03",
    "title": "Silêncio e Consequências",
    "text": "Você segura o caderno, olha para a fila do microfone e percebe que não consegue falar. Vai embora enquanto a assembleia continua. No ônibus de volta, reconta mentalmente cada situação do dia, como se procurasse uma resposta perfeita que deveria ter dado. Em casa, coloca os documentos sobre a mesa e se senta no escuro por alguns minutos. Seu silêncio não absolve quem te tratou mal. Também não apaga as vozes que permaneceram na reunião. Amanhã talvez você mostre suas anotações a Joana. Talvez não. Hoje, o que consegue fazer é respirar e descansar.",
    "epilogue": "O peso da injustiça não pode ser colocado nas costas de quem precisa sobreviver a ela."
  }
};
