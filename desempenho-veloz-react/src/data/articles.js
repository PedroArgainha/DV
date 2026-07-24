export const articles = [
  {
    id: 'oleo',
    category: 'Óleos',
    tags: ['Manutenção', 'Motor'],
    title: 'Quando trocar o óleo do carro?',
    cardTitle: 'Quando trocar o óleo do carro? O guia completo',
    excerpt: 'A troca de óleo é a manutenção mais importante para a longevidade do motor. Descubra a frequência certa e os sinais que não pode ignorar.',
    readingTime: '5 min de leitura',
    featured: true,
    sections: [
      { type: 'p', text: 'O óleo do motor lubrifica as peças em movimento, reduz o atrito e protege o motor do desgaste. Mas degrada-se com o tempo e o uso.' },
      { type: 'h3', text: 'Com que frequência?' },
      { type: 'list', items: ['Óleo mineral: a cada 5.000–7.500 km', 'Óleo semi-sintético: a cada 10.000 km', 'Óleo totalmente sintético: a cada 15.000–20.000 km'] },
      { type: 'h3', text: 'Sinais de alerta' },
      { type: 'list', items: ['Luz de aviso no painel acesa', 'Óleo escuro ou granulado na vareta', 'Motor com mais ruído que o habitual', 'Cheiro a óleo queimado no habitáculo'] },
      { type: 'h3', text: 'Que óleo usar?' },
      { type: 'p', text: 'A especificação correta está no manual do proprietário. Na Desempenho Veloz temos toda a gama Liqui-Moly e Castrol e ajudamos a encontrar o óleo certo para o seu veículo.' },
    ],
  },
  {
    id: 'travoes', category: 'Travões', tags: ['Travões', 'Segurança'],
    title: 'Como verificar as pastilhas dos travões', excerpt: 'Aprenda a identificar desgaste antes que se torne um problema de segurança.', readingTime: '5 min de leitura',
    sections: [
      { type: 'p', text: 'As pastilhas dos travões são um dos componentes de segurança mais críticos do carro. Saber quando estão desgastadas pode evitar acidentes.' },
      { type: 'h3', text: 'Como verificar' },
      { type: 'list', items: ['Olhe pelos raios da roda — menos de 3 mm, é hora de trocar', 'Chiado metálico ao travar é sinal claro de desgaste', 'Vibrações no pedal podem indicar pastilhas ou discos danificados', 'Carro a puxar para um lado ao travar — verifique imediatamente'] },
      { type: 'h3', text: 'Com que frequência?' },
      { type: 'list', items: ['Pastilhas dianteiras: geralmente a cada 40.000–60.000 km', 'Pastilhas traseiras: geralmente a cada 60.000–80.000 km'] },
      { type: 'p', text: 'Na Desempenho Veloz temos pastilhas de qualidade para os modelos mais comuns da região.' },
    ],
  },
  {
    id: 'filtro', category: 'Filtros', tags: ['Filtros'],
    title: 'Filtro de ar: quando e como substituir', excerpt: 'Um filtro sujo pode reduzir a potência e aumentar o consumo. Saiba quando trocar.', readingTime: '3 min de leitura',
    sections: [
      { type: 'p', text: 'O filtro de ar impede que poeira e partículas entrem no motor. Quando fica entupido, o motor perde eficiência.' },
      { type: 'h3', text: 'Sintomas de filtro sujo' },
      { type: 'list', items: ['Aumento do consumo de combustível', 'Perda de potência e aceleração mais lenta', 'Motor a funcionar de forma irregular'] },
      { type: 'h3', text: 'Quando trocar?' },
      { type: 'p', text: 'A maioria dos fabricantes recomenda a cada 15.000–25.000 km. Em zonas com muita poeira pode ser necessário trocar mais cedo.' },
    ],
  },
  {
    id: 'bateria', category: 'Baterias', tags: ['Baterias'],
    title: 'Vida útil da bateria: o que saber', excerpt: 'Descubra os sinais de fraqueza e como prolongar a vida da sua bateria.', readingTime: '4 min de leitura',
    sections: [
      { type: 'p', text: 'A bateria arranca o motor e alimenta todos os sistemas elétricos. Tem vida útil limitada e costuma falhar nos piores momentos.' },
      { type: 'h3', text: 'Quanto tempo dura?' },
      { type: 'p', text: 'Em média, entre 3 a 5 anos. Viagens curtas frequentes e climas extremos reduzem a vida útil.' },
      { type: 'h3', text: 'Sinais de bateria fraca' },
      { type: 'list', items: ['Motor a arrancar lentamente de manhã', 'Luzes mais fracas que o habitual', 'Luz da bateria acesa no painel', 'Necessidade frequente de cabos de arranque'] },
      { type: 'p', text: 'Na Desempenho Veloz testamos a sua bateria gratuitamente. Venha à loja!' },
    ],
  },
  {
    id: 'pneus', category: 'Manutenção', tags: ['Manutenção'],
    title: 'Pressão dos pneus: como verificar', excerpt: 'Pneus com pressão incorreta comprometem a segurança e o consumo.', readingTime: '3 min de leitura',
    sections: [
      { type: 'p', text: 'A pressão correta é fundamental para a segurança e economia. Pneus com pouca pressão são perigosos e gastam mais combustível.' },
      { type: 'h3', text: 'Como verificar' },
      { type: 'list', items: ['Use um manómetro num posto de combustível', 'Verifique com os pneus frios, antes de conduzir 2 km', 'Compare com os valores recomendados pelo fabricante'] },
      { type: 'p', text: 'Recomendamos a verificação mensal e sempre antes de viagens longas.' },
    ],
  },
  {
    id: 'liquidos', category: 'Manutenção', tags: ['Manutenção', 'Motor'],
    title: 'Os líquidos do carro que deve verificar', excerpt: 'Do arrefecimento ao travão — saiba quais verificar e com que frequência.', readingTime: '4 min de leitura',
    sections: [
      { type: 'p', text: 'Um carro usa vários líquidos essenciais. Verificá-los regularmente evita avarias e custos elevados.' },
      { type: 'h3', text: 'Os cinco mais importantes' },
      { type: 'list', items: ['Óleo do motor — verifique mensalmente com a vareta', 'Líquido de arrefecimento — nunca abra com o motor quente', 'Líquido dos travões — deve estar entre as marcas mínima e máxima', 'Líquido da direção assistida — quando aplicável', 'Líquido limpa-vidros — complete sempre que necessário'] },
      { type: 'p', text: 'Utilize sempre produtos com a especificação indicada pelo fabricante do veículo.' },
    ],
  },
  {
    id: 'lampadas', category: 'Manutenção', tags: ['Elétrico'],
    title: 'Lâmpadas fundidas: como substituir', excerpt: 'Conduzir com uma lâmpada fundida é ilegal. Aprenda a substituir facilmente.', readingTime: '3 min de leitura',
    sections: [
      { type: 'p', text: 'Conduzir com uma lâmpada fundida é ilegal e perigoso. Em muitos casos é possível substituir sem ir a uma oficina.' },
      { type: 'h3', text: 'Como substituir uma lâmpada de halogéneo' },
      { type: 'list', items: ['Desligue o carro e espere que a lâmpada arrefeça', 'Aceda ao compartimento do motor ou pela cava da roda', 'Instale a nova sem tocar no vidro — use luvas', 'Teste antes de montar tudo novamente'] },
      { type: 'p', text: 'Na Desempenho Veloz temos as principais referências em stock.' },
    ],
  },
]

export const articleCategories = ['Todos', 'Óleos', 'Travões', 'Filtros', 'Baterias', 'Manutenção']
