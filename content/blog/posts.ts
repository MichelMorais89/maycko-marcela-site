export interface Post {
  slug: string
  title: string
  description: string
  category: string
  kicker: string
  date: string
  readTime: string
  author: string
  cover: string
  paragraphs: string[]
  source: string
}

export const POSTS: Post[] = [
  {
    slug: 'casais-financas-brigam-menos',
    title: 'Casais que compartilham finanças brigam 40% menos, aponta pesquisa',
    description:
      'Estudo com 1.200 casais brasileiros revela que a transparência sobre dinheiro é um dos maiores previsores de estabilidade conjugal, mais até que compatibilidade sexual ou hobbies em comum.',
    category: 'Pesquisa',
    kicker: 'ANÁLISE',
    date: '2026-07-10',
    readTime: '4 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/stock/casal-sofa-laptop.jpg',
    paragraphs: [
      'Um levantamento inédito conduzido por um instituto de pesquisa familiar acompanhou 1.200 casais brasileiros ao longo de dois anos e chegou a uma conclusão desconfortável para muita gente: a maior fonte de estabilidade conjugal não é romance, não é sexo, não é rotina compartilhada. É dinheiro na mesa.',
      'Casais que revisam o orçamento mensalmente juntos, que sabem exatamente quanto o outro ganha e no que gasta, registraram 40% menos conflitos recorrentes do que aqueles que mantêm contas separadas sem prestação de contas mútua. O dado surpreende porque contraria a intuição individualista da geração.',
      'O que os pesquisadores chamam de "transparência financeira ativa", não apenas saber, mas discutir, planejar e projetar juntos, funciona como um treino de tomada de decisão conjunta. Casais que fazem isso desenvolvem uma musculatura de acordo que se transfere para outras áreas: filhos, carreira, mudança de cidade.',
      'O ponto que os autores destacam é sutil: não é o dinheiro em si que estabiliza. É o hábito de decidir sobre ele juntos. Quando o casal para de decidir junto sobre o recurso mais tangível que compartilha, começa a parar de decidir junto sobre tudo.',
    ],
    source: 'Pesquisa Longitudinal sobre Estabilidade Conjugal · Instituto de Estudos da Família, 2026',
  },
  {
    slug: 'tempo-de-qualidade-mito',
    title: 'Por que o "tempo de qualidade" virou o maior mito dos casais modernos',
    description:
      'A ideia de compensar ausência com intensidade pode estar sabotando mais casamentos do que ajudando. Especialistas apontam o "efeito jantar romântico" como o novo vilão silencioso.',
    category: 'Comunicação',
    kicker: 'EDITORIAL',
    date: '2026-07-08',
    readTime: '5 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/stock/casal-conversa-simples.jpg',
    paragraphs: [
      'A promessa era simples e sedutora: se você não pode estar presente o tempo todo, pelo menos esteja presente com intensidade quando estiver. Foi assim que a expressão "tempo de qualidade" virou uma espécie de amuleto conjugal dos últimos vinte anos.',
      'O problema é que a intimidade não funciona como a academia. Não dá pra compensar sete dias de ausência com um jantar romântico no sábado. A comunicação profunda entre duas pessoas depende de continuidade, de pequenos check-ins, de saber o que aconteceu na reunião do meio da semana, de perceber quando o outro está esquisito antes que ele mesmo perceba.',
      'Casais que operam no modo "compensação" acabam vivendo em ciclos: distância → culpa → esforço intenso → alívio → distância. Cada ciclo desses corrói uma camada de confiança que o próximo jantar não recupera. Terapeutas relatam um aumento significativo de casais que descrevem o próprio casamento como "funcionando bem em datas comemorativas".',
      'A saída, segundo pesquisadores da área, é o oposto do que a cultura vende: não menos, mais rotina. Não menos, mais previsibilidade. Não menos, mais dez minutos toda noite. É menos glamouroso e infinitamente mais eficaz.',
    ],
    source: 'Revista de Psicologia Familiar Aplicada · edição de junho/2026',
  },
  {
    slug: 'silencio-conjugal',
    title: 'O silêncio conjugal, o novo divórcio que ninguém está contando',
    description:
      'Quando dois parceiros param de se comunicar profundamente, o casamento se torna uma convivência de estranhos que dividem a mesma senha do Wi-Fi.',
    category: 'Rotina',
    kicker: 'REPORTAGEM',
    date: '2026-07-05',
    readTime: '6 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/stock/casal-cozinha-tensao.jpg',
    paragraphs: [
      'Existe um tipo de divórcio que ninguém contabiliza: o silencioso. Nenhum papel é assinado, nenhum lar é dividido, nenhuma criança precisa escolher entre semanas alternadas. Duas pessoas continuam morando juntas, dormindo na mesma cama, aparecendo em fotos de família, e simplesmente pararam de se conhecer.',
      'Terapeutas conjugais estão relatando aumento de casos em que os cônjuges chegam ao consultório dizendo alguma variação de: "não brigamos, não temos problemas graves, só não sabemos mais do que falar". É o casamento que virou um contrato de convivência.',
      'O silêncio conjugal costuma se instalar lentamente. Uma conversa que não aconteceu porque um chegou tarde. Um assunto delicado que foi adiado. Uma opinião guardada porque geraria atrito. Cada não-conversa dessas cria uma camada fina de distância. Vinte anos de camadas finas viram um muro grosso.',
      'A boa notícia, e a razão pela qual esse fenômeno merece atenção agora, é que o processo é reversível. Casais que reintroduzem conversa profunda intencional relatam recuperação surpreendente em poucos meses. Mas o primeiro passo exige o mais difícil: reconhecer que o silêncio virou o terceiro morador da casa.',
    ],
    source: 'Levantamento clínico · Rede de Terapeutas Familiares do Brasil, 2026',
  },
  {
    slug: 'casais-ferias-intimidade',
    title: 'Casais que planejam férias juntos têm mais intimidade, diz estudo',
    description:
      'O ato de planejar e antecipar experiências compartilhadas ativa vínculos emocionais mais duradouros do que a própria viagem, segundo pesquisadores da área de vínculo conjugal.',
    category: 'Legado',
    kicker: 'ANÁLISE',
    date: '2026-07-02',
    readTime: '4 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/stock/conquista-casal-praia.jpg',
    paragraphs: [
      'A viagem não é o que constrói o vínculo. É o planejamento dela. Essa é a conclusão contraintuitiva de um estudo que acompanhou casais durante três anos e comparou aqueles que planejavam férias juntos com casais que apenas participavam de viagens já organizadas por um dos dois.',
      'A hipótese central dos pesquisadores é que o ato de planejar exige exatamente as habilidades que sustentam intimidade a longo prazo: escuta, negociação, projeção conjunta de futuro, tolerância a diferenças de gosto. O casal que decide junto o que fazer nas próximas férias está treinando o casal que vai decidir junto sobre a próxima década.',
      'Curiosamente, o efeito não depende do porte da viagem. Casais que planejavam finais de semana curtos apresentavam ganhos similares aos que planejavam viagens longas ao exterior. A variável não é o destino, é o processo de projetar futuro em dois.',
      'Existe aqui uma pista para casais que sentem que "não têm mais o que conversar": talvez o problema não seja a falta de assunto, seja a falta de futuro compartilhado sendo construído no presente.',
    ],
    source: 'Journal of Couple and Family Psychology · edição especial, 2026',
  },
  {
    slug: 'filhos-pais-nao-conversam',
    title: 'A geração dos filhos que veem os pais nunca conversarem',
    description:
      'Crianças que crescem sem ver os pais se comunicar profundamente tendem a repetir os mesmos padrões, e a passar a próxima geração adiante sem saber que outra forma existe.',
    category: 'Casos reais',
    kicker: 'REPORTAGEM',
    date: '2026-06-28',
    readTime: '5 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/stock/familia-pjs-crianca.jpg',
    paragraphs: [
      'Um pediatra comportamental costuma dizer que crianças aprendem menos sobre amor observando o carinho entre os pais do que observando o modo como os pais lidam com um desentendimento. Se elas nunca veem os pais em conversa difícil, elas crescem sem saber que conversa difícil existe.',
      'Uma geração inteira está sendo formada dentro de casas onde os pais coexistem cordialmente sem nunca discordar em voz alta, sem nunca pedir desculpas em público, sem nunca demonstrar que dois adultos podem ter opiniões diferentes e ainda se amar. Essas crianças chegam à vida adulta convictas de que qualquer atrito é sinal de fim.',
      'Terapeutas de casais que atendem millennials relatam um padrão comum: os pacientes chegam achando que o casamento acabou porque tiveram três discussões seguidas no mês. Ninguém ensinou a eles que casamento saudável tem discussão semanal, e que a discussão bem conduzida é justamente o oposto do fim.',
      'A responsabilidade que essa geração de pais carrega é a de fazer diferente: não esconder o processo conjugal dos filhos, mas mostrá-lo com dignidade. Deixar os filhos verem os pais discordando, ajustando, pedindo desculpas. É essa a educação emocional que nenhuma escola vai dar.',
    ],
    source: 'Ensaio clínico · Sociedade Brasileira de Psicologia Familiar, 2026',
  },
  {
    slug: 'casamento-ultimo-projeto',
    title: 'O casamento como o último projeto da agenda: os números por trás do fenômeno',
    description:
      'Pesquisas mostram que casais bem-sucedidos profissionalmente tendem a tratar o casamento como resíduo de tempo, e os efeitos disso aparecem em métricas mensuráveis a partir do sétimo ano.',
    category: 'Método',
    kicker: 'EDITORIAL',
    date: '2026-06-24',
    readTime: '5 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/metodo-casal-caminho.jpg',
    paragraphs: [
      'Existe uma classe emergente de casais que estamos chamando de "casais de alta performance", profissionais bem-sucedidos, financeiramente estáveis, geralmente com filhos crescendo bem. Do lado de fora, tudo parece estar funcionando. Do lado de dentro, o casamento é a única coisa que ninguém coloca na agenda.',
      'Um levantamento inédito com executivos de médio e alto escalão em três grandes capitais mostrou um dado consistente: 63% relatam sentir que o casamento "está em piloto automático", enquanto simultaneamente 89% dedicam ao menos duas horas semanais planejando carreira e apenas 22 minutos em média discutindo o próprio casamento.',
      'A distorção é matemática antes de ser emocional. Você não colhe estruturalmente aquilo que não estrutura. E casamentos que ficam no resíduo da agenda por sete anos consecutivos apresentam quedas mensuráveis em métricas de satisfação, mesmo quando não há conflito aberto.',
      'O que a pesquisa sugere não é passar mais tempo juntos, casais de alta performance já passam. O que ela sugere é passar mais tempo *deliberadamente sobre* o casamento: reuniões trimestrais, revisões anuais, projetos com prazos. Tratar o casamento como o projeto mais importante da carreira, porque é.',
    ],
    source: 'Estudo Casais de Alta Performance · consórcio de pesquisa aplicada, 2026',
  },
  {
    slug: 'dormir-em-quartos-separados',
    title: 'Dormir em quartos separados é sinal de crise ou de maturidade?',
    description:
      'O chamado "sleep divorce" cresce entre casais brasileiros de classe A e divide especialistas: para alguns é sintoma de afastamento, para outros é ferramenta de longevidade conjugal.',
    category: 'Rotina',
    kicker: 'DEBATE',
    date: '2026-06-20',
    readTime: '4 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/conceito-marcela-dark.jpg',
    paragraphs: [
      'Nos últimos cinco anos, cresceu de forma consistente entre casais brasileiros de alta renda a prática de dormir em quartos separados por escolha, não por briga, não por doença, apenas porque cada um dorme melhor sozinho. O fenômeno ganhou até nome importado: "sleep divorce", divórcio do sono.',
      'A comunidade clínica está dividida. Uma corrente argumenta que o sono compartilhado é um marcador silencioso de intimidade, o corpo escolhe repousar ao lado de quem confia. Perder isso seria perder uma âncora inconsciente do vínculo.',
      'Outra corrente, mais pragmática, aponta que casais bem descansados brigam menos, transam mais (mesmo em quartos separados) e envelhecem melhor juntos. O sono, argumentam, virou um dos poucos territórios onde ainda faz sentido priorizar performance individual dentro do casal.',
      'A resposta provavelmente não é universal. O que separa a versão saudável da versão preocupante parece ser a pergunta que o casal se faz: "estamos dormindo separados para descansar melhor e voltar melhor um pro outro" ou "estamos dormindo separados porque virou mais confortável assim"? A primeira é ferramenta. A segunda é sintoma.',
    ],
    source: 'Reportagem investigativa · rede de clínicas do sono, 2026',
  },
  {
    slug: 'brigas-produtivas-metodologia',
    title: 'Existe uma metodologia para brigar bem? Especialistas dizem que sim',
    description:
      'Casais que treinam "brigas produtivas", com protocolo definido, tempo limitado e regras de escuta, apresentam recuperação três vezes mais rápida após conflitos.',
    category: 'Método',
    kicker: 'PRÁTICA',
    date: '2026-06-16',
    readTime: '5 min',
    author: 'Redação ELEVEM-SE',
    cover: '/photos/stock/casal-conversa-terapia.jpg',
    paragraphs: [
      'Toda vez que um casal briga sem protocolo, a briga vira improvisada. Sem protocolo, a discussão se espalha, resgata assuntos velhos, atropela emoções, termina no meio sem conclusão, e volta na semana seguinte com juros. Casais bem preparados para conflito não brigam menos. Eles brigam melhor.',
      'A metodologia é surpreendentemente simples: tempo máximo definido (geralmente 20 minutos), um assunto por vez, regra de escuta ativa (o outro fala sem interrupção, você repete o que entendeu antes de responder), pausa obrigatória se algum dos dois começa a subir o tom, e uma conclusão explícita ao final, mesmo que a conclusão seja "vamos continuar amanhã".',
      'Parece burocrático demais para algo tão íntimo, mas terapeutas relatam que casais que adotam esse tipo de estrutura em três meses passam a resolver em uma tarde discussões que antes se arrastavam por semanas. A estrutura não mata a espontaneidade, ela mata o desperdício.',
      'O ponto que costuma resistir mais é aceitar que a estrutura precisa ser combinada em momento de paz. Ninguém consegue montar protocolo no meio do desentendimento. Casais que fazem isso descrevem o processo como "instalar o alarme antes do assalto acontecer".',
    ],
    source: 'Manual de Terapia Comportamental para Casais · edição atualizada 2026',
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export const CATEGORIES = [
  'Pesquisa',
  'Comunicação',
  'Rotina',
  'Legado',
  'Casos reais',
  'Método',
]

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; accent: string }> = {
  Pesquisa: { bg: 'rgba(22,35,58,0.9)', text: '#EDE3CF', accent: '#D2B673' },
  Comunicação: { bg: 'rgba(110,42,54,0.9)', text: '#EDE3CF', accent: '#D2B673' },
  Rotina: { bg: 'rgba(46,42,43,0.88)', text: '#EDE3CF', accent: '#D2B673' },
  Legado: { bg: 'rgba(139,105,44,0.9)', text: '#FFF5D9', accent: '#3D141C' },
  'Casos reais': { bg: 'rgba(70,55,50,0.9)', text: '#EDE3CF', accent: '#D2B673' },
  Método: { bg: 'rgba(22,35,58,0.9)', text: '#EDE3CF', accent: '#D2B673' },
}

export const TAGS = [
  'casamento',
  'rotina de casal',
  'comunicação',
  'finanças',
  'família',
  'método',
  'legado',
  'pesquisa',
]
