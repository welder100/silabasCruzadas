// Banco de dados de sílabas cruzadas
const cruzadasDatabase = [
  {
    id: 'cruzada1',
    categoria: "CORPO HUMANO",
    nome: "Corpo Humano 1",
    palavras: function() {
      let cruz = new Map();
      cruz.set(0,{pergunta:"Parte articulada do esqueleto.",resposta:"AR-TI-CU-LA-ÇÃO",orientacao:"ver",linha:0,coluna:0});
      cruz.set(1,{pergunta:"Órgão com as cordas vocais.",resposta:"LA-RIN-GE",orientacao:"hor",linha:3,coluna:0});
      cruz.set(2,{pergunta:"Músculo abaixo da língua.",resposta:"GE-NI-O-GLOS-SO",orientacao:"ver",linha:3,coluna:2});
      cruz.set(3,{pergunta:"Osso do calcanhar.",resposta:"TÁR-SO",orientacao:"hor",linha:7,coluna:1});
      cruz.set(4,{pergunta:"Órgão reprodutor feminino.",resposta:"O-VÁ-RIO",orientacao:"hor",linha:5,coluna:2});
      cruz.set(5,{pergunta:"Músculo da parte externa da coxa.",resposta:"SÁR-TO-RIO",orientacao:"ver",linha:3,coluna:4});
      cruz.set(6,{pergunta:"Músculo na frente do peito.",resposta:"PEI-TO-RAL",orientacao:"hor",linha:4,coluna:3});
      cruz.set(7,{pergunta:"Estrutura que conecta os ossos.",resposta:"LI-GA-MEN-TO",orientacao:"ver",linha:8,coluna:3});
      cruz.set(8,{pergunta:"Osso da ponta do queixo.",resposta:"MEN-TO",orientacao:"ver",linha:10,coluna:3});
      cruz.set(9,{pergunta:"Parte da garganta.",resposta:"FA-RIN-GE",orientacao:"ver",linha:2,coluna:1});
      cruz.set(10,{pergunta:"Osso lateral do crânio.",resposta:"TEM-PO-RAL",orientacao:"ver",linha:2,coluna:5});
      cruz.set(11,{pergunta:"Glândula no pescoço.",resposta:"TI-RE-ÓI-DE",orientacao:"hor",linha:1,coluna:0});
      cruz.set(12,{pergunta:"Extremidade de um dedo.",resposta:"FA-LAN-GE",orientacao:"hor",linha:2,coluna:1});
      cruz.set(13,{pergunta:"Músculo da mandíbula.",resposta:"MAS-TI-GA-DOR",orientacao:"hor",linha:9,coluna:1});
      cruz.set(14,{pergunta:"Músculo do queixo.",resposta:"MEN-TAL",orientacao:"hor",linha:10,coluna:3});
      cruz.set(15,{pergunta:"Osso do pulso junto ao dedo médio.",resposta:"CA-PI-TA-TO",orientacao:"hor",linha:11,coluna:0});
      cruz.set(16,{pergunta:"Parte central da coluna vertebral.",resposta:"TO-RÁ-CI-CA",orientacao:"ver",linha:8,coluna:0});
      cruz.set(17,{pergunta:"Parte frontal da cabeça.",resposta:"TES-TA",orientacao:"ver",linha:10,coluna:2});
      cruz.set(18,{pergunta:"Órgão que bombeia o sangue.",resposta:"CO-RA-ÇÃO",orientacao:"ver",linha:6,coluna:5});
      cruz.set(19,{pergunta:"Membrana que cobre o pulmão.",resposta:"PLEU-RA",orientacao:"hor",linha:7,coluna:4});
      cruz.set(20,{pergunta:"Órgão que filtra impurezas do sangue.",resposta:"RIM",orientacao:"ver",linha:0,coluna:4});
      cruz.set(21,{pergunta:"Órgão responsável pela visão.",resposta:"O-LHO",orientacao:"hor",linha:0,coluna:1});
      return cruz;
    }
  },
  {
    id: 'cruzada2',
    categoria: "CORPO HUMANO",
    nome: "Corpo Humano 2",
    palavras: function() {
      let cruz = new Map();
      cruz.set(0,{pergunta:"Órgão responsável pela audição.",resposta:"OU-VI-DO",orientacao:"ver",linha:3,coluna:1});
      cruz.set(1,{pergunta:"Região abaixo das costelas.",resposta:"AB-DO-ME",orientacao:"hor",linha:5,coluna:0});
      cruz.set(2,{pergunta:"Osso entre o ombro e o cotovelo.",resposta:"Ú-ME-RO",orientacao:"ver",linha:4,coluna:2});
      cruz.set(3,{pergunta:"Estrutura que protege o cérebro.",resposta:"CRÂ-NIO",orientacao:"hor",linha:9,coluna:2});
      cruz.set(4,{pergunta:"Célula nervosa.",resposta:"NEU-RÔ-NIO",orientacao:"ver",linha:7,coluna:3});
      cruz.set(5,{pergunta:"Osso delgado da perna.",resposta:"PE-RÔ-NIO",orientacao:"hor",linha:8,coluna:2});
      cruz.set(6,{pergunta:"Tecido que compõe os nervos.",resposta:"NEU-RAL",orientacao:"hor",linha:7,coluna:3});
      cruz.set(7,{pergunta:"Parte colorida do olho.",resposta:"Í-RIS",orientacao:"hor",linha:3,coluna:3});
      cruz.set(8,{pergunta:"Osso da bacia.",resposta:"Í-LIO",orientacao:"ver",linha:3,coluna:3});
      cruz.set(9,{pergunta:"Órgão que digere os alimentos.",resposta:"ES-TÔ-MA-GO",orientacao:"ver",linha:8,coluna:1});
      cruz.set(10,{pergunta:"Estrutura que liga músculos aos ossos.",resposta:"TEN-DÃO",orientacao:"ver",linha:0,coluna:3});
      cruz.set(11,{pergunta:"Osso da bochecha.",resposta:"ZI-GO-MÁ-TI-CO",orientacao:"hor",linha:11,coluna:0});
      cruz.set(12,{pergunta:"Órgão produtor de leite.",resposta:"MA-MA",orientacao:"hor",linha:10,coluna:1});
      cruz.set(13,{pergunta:"Músculo do antebraço.",resposta:"EX-TEN-SOR",orientacao:"hor",linha:0,coluna:2});
      cruz.set(14,{pergunta:"Primeira vértebra do pescoço.",resposta:"A-TLAS",orientacao:"ver",linha:1,coluna:5});
      cruz.set(15,{pergunta:"Cartilagem entre as vértebras.",resposta:"DIS-CO",orientacao:"ver",linha:10,coluna:4});
      cruz.set(16,{pergunta:"Vaso que leva sangue ao coração.",resposta:"VEI-A",orientacao:"hor",linha:1,coluna:4});
      return cruz;
    }},
    {
      id: 'cruzada3',
      categoria: "CORPO HUMANO",
      nome: "Corpo Humano 3",
      palavras: function() {
        let cruz = new Map();
        cruz.set(0,{pergunta:"Maior órgão do corpo humano.",resposta:"PE-LE",orientacao:"ver",linha:7,coluna:2});
        cruz.set(1,{pergunta:"Osso redondo no joelho.",resposta:"RÓ-TU-LA",orientacao:"ver",linha:3,coluna:4});
        cruz.set(2,{pergunta:"Músculo lateral da perna.",resposta:"PE-RO-NEI-RO",orientacao:"hor",linha:7,coluna:2});
        cruz.set(3,{pergunta:"Parte do cérebro para memória.",resposta:"TÁ-LA-MO",orientacao:"hor",linha:5,coluna:3});
        cruz.set(4,{pergunta:"Parte visível do dente.",resposta:"CO-RO-A",orientacao:"ver",linha:6,coluna:5});
        cruz.set(5,{pergunta:"Osso do punho.",resposta:"CAR-PO",orientacao:"ver",linha:2,coluna:5});
        cruz.set(6,{pergunta:"Osso do polegar.",resposta:"ME-TA-CAR-PO",orientacao:"ver",linha:0,coluna:5});
        cruz.set(7,{pergunta:"Maior vaso sanguíneo do corpo.",resposta:"A-OR-TA",orientacao:"hor",linha:1,coluna:3});
        cruz.set(8,{pergunta:"Parte transparente do olho.",resposta:"CÓR-NE-A",orientacao:"hor",linha:8,coluna:3});
        cruz.set(9,{pergunta:"Osso da coluna cervical.",resposta:"A-XIS",orientacao:"ver",linha:1,coluna:3});
        cruz.set(10,{pergunta:"Camada externa do cérebro.",resposta:"CÓR-TEX",orientacao:"ver",linha:8,coluna:3});
        cruz.set(11,{pergunta:"Camada mais profunda da pele.",resposta:"HI-PO-DER-ME",orientacao:"hor",linha:0,coluna:2});
        cruz.set(12,{pergunta:"Camada sob a pele.",resposta:"DER-ME",orientacao:"hor",linha:0,coluna:4});
        cruz.set(13,{pergunta:"Osso na base da língua.",resposta:"HI-OI-DE",orientacao:"ver",linha:0,coluna:2});
        cruz.set(14,{pergunta:"Local de produção do sangue.",resposta:"ME-DU-LA",orientacao:"ver",linha:9,coluna:4});
        cruz.set(15,{pergunta:"Osso da parte superior da boca.",resposta:"PA-LA-TO",orientacao:"hor",linha:11,coluna:3});
        cruz.set(16,{pergunta:"Músculo da barriga.",resposta:"RE-TO",orientacao:"ver",linha:10,coluna:5});
        return cruz;
      }},
      {
        id: 'cruzada4',
        categoria: "CORPO HUMANO",
        nome: "Corpo Humano 4",
        palavras: function() {
          let cruz = new Map();
          cruz.set(0,{pergunta:"Glândulas localizadas atrás da tireoide, responsáveis pelo controle do cálcio no sangue.",resposta:"PA-RA-TI-RE-OI-DE",orientacao:"ver",linha:4,coluna:1});
          cruz.set(1,{pergunta:"Base do pênis.",resposta:"GLÂN-DE",orientacao:"hor",linha:9,coluna:0});
          cruz.set(2,{pergunta:"Parte do cérebro para equilíbrio.",resposta:"CE-RE-BE-LO",orientacao:"hor",linha:7,coluna:0});
          cruz.set(3,{pergunta:"Músculo localizado no braço, responsável pela flexão e adução do ombro.",resposta:"CO-RA-CO-BRA-QUI-AL",orientacao:"hor",linha:5,coluna:0});
          cruz.set(4,{pergunta:"Nervo principal da visão.",resposta:"ÓP-TI-CO",orientacao:"ver",linha:3,coluna:2});
          cruz.set(5,{pergunta:"Músculo localizado no antebraço, responsável pela flexão do cotovelo.",resposta:"BRA-QUI-OR-RA-DI-AL",orientacao:"ver",linha:0,coluna:5});
          cruz.set(6,{pergunta:"Músculo do antebraço.",resposta:"RA-DI-AL",orientacao:"ver",linha:3,coluna:5});
          cruz.set(7,{pergunta:"Glândula responsável pela produção de hormônios que regulam o metabolismo.",resposta:"TI-RE-OI-DE",orientacao:"ver",linha:6,coluna:1});
          cruz.set(8,{pergunta:"Osso do pé.",resposta:"TA-LO",orientacao:"ver",linha:6,coluna:3});
          cruz.set(9,{pergunta:"Músculo localizado no braço, responsável pela flexão do cotovelo.",resposta:"BRA-QUI-AL",orientacao:"hor",linha:5,coluna:3});
          cruz.set(10,{pergunta:"Parte posterior do olho.",resposta:"ES-CLE-RA",orientacao:"hor",linha:3,coluna:3});
          cruz.set(11,{pergunta:"Tecido que reveste os dentes.",resposta:"GEN-GI-VA",orientacao:"ver",linha:0,coluna:1});
          cruz.set(12,{pergunta:"Vaso para os pulmões.",resposta:"BRON-QUI-AL",orientacao:"ver",linha:4,coluna:4});
          cruz.set(13,{pergunta:"Órgão do sistema reprodutor feminino, responsável pela cópula e passagem do bebê durante o parto.",resposta:"VA-GI-NA",orientacao:"hor",linha:2,coluna:1});
          cruz.set(14,{pergunta:"Vaso que transporta linfa.",resposta:"LIN-FÁ-TI-CO",orientacao:"ver",linha:2,coluna:0});
          cruz.set(15,{pergunta:"Osso da coluna vertebral.",resposta:"VÉR-TE-BRA",orientacao:"hor",linha:0,coluna:3});
          cruz.set(16,{pergunta:"Parte da palma da mão.",resposta:"TE-NAR",orientacao:"ver",linha:0,coluna:4});
          cruz.set(17,{pergunta:"Glândula que regula o crescimento.",resposta:"PI-TUI-TÁ-RI-A",orientacao:"ver",linha:7,coluna:5});
          cruz.set(18,{pergunta:"Glândulas responsáveis pela produção de leite nas mamas.",resposta:"MA-MÁ-RI-A",orientacao:"hor",linha:11,coluna:2});
          cruz.set(19,{pergunta:"Órgão responsável pela respiração.",resposta:"PUL-MÃO",orientacao:"hor",linha:10,coluna:2});
          cruz.set(20,{pergunta:"Osso da coxa.",resposta:"FÊ-MUR",orientacao:"ver",linha:8,coluna:4});
          cruz.set(21,{pergunta:"Órgão do paladar.",resposta:"LÍN-GUA",orientacao:"ver",linha:10,coluna:0});
          return cruz;
        }},
        {
          id: 'cruzada5',
          categoria: "CORPO HUMANO",
          nome: "Corpo Humano 5",
          palavras: function() {
            let cruz = new Map();
            cruz.set(0,{pergunta:"Glândula que produz insulina.",resposta:"PÂN-CRE-AS",orientacao:"ver",linha:4,coluna:1});
            cruz.set(1,{pergunta:"Órgão que limpa toxinas do sangue.",resposta:"FÍ-GA-DO",orientacao:"ver",linha:2,coluna:3});
            cruz.set(2,{pergunta:"Tubo que leva comida ao estômago.",resposta:"E-SÔ-FA-GO",orientacao:"ver",linha:7,coluna:5});
            cruz.set(3,{pergunta:"Músculo frontal da coxa.",resposta:"QUA-DRÍ-CEPS",orientacao:"hor",linha:8,coluna:1});
            cruz.set(4,{pergunta:"Órgão que armazena bile.",resposta:"VE-SÍ-CU-LA",orientacao:"hor",linha:0,coluna:2});
            cruz.set(5,{pergunta:"Osso da parte lateral do pé.",resposta:"CU-BOI-DE",orientacao:"ver",linha:0,coluna:4});
            cruz.set(6,{pergunta:"Órgão que produz lágrimas.",resposta:"LA-CRI-MAL",orientacao:"ver",linha:0,coluna:5});
            cruz.set(7,{pergunta:"Músculo traseiro da coxa.",resposta:"BÍ-CEPS",orientacao:"ver",linha:7,coluna:3});
            cruz.set(8,{pergunta:"Órgão que armazena urina.",resposta:"BE-XI-GA",orientacao:"hor",linha:3,coluna:1});
            cruz.set(9,{pergunta:"Músculo profundo do quadril, responsável pela flexão da coxa.",resposta:"PSO-AS",orientacao:"hor",linha:6,coluna:0});
            cruz.set(10,{pergunta:"Órgão responsável pela digestão dos alimentos.",resposta:"ES-TO-MA-GO",orientacao:"hor",linha:10,coluna:2});
            cruz.set(11,{pergunta:"Osso da mandíbula.",resposta:"MA-XI-LAR",orientacao:"ver",linha:2,coluna:2});
            cruz.set(12,{pergunta:"Osso abaixo do olho.",resposta:"MA-LAR",orientacao:"ver",linha:10,coluna:4});
            cruz.set(13,{pergunta:"Músculo abaixo do ombro.",resposta:"SUB-ES-CA-PU-LAR",orientacao:"hor",linha:11,coluna:0});
            cruz.set(14,{pergunta:"Parte do olho sensível à luz.",resposta:"RE-TI-NA",orientacao:"ver",linha:7,coluna:0});
            cruz.set(15,{pergunta:"Osso do nariz.",resposta:"NA-SAL",orientacao:"hor",linha:9,coluna:0});
            return cruz;
          }}

          // Adicione mais cruzadas aqui no mesmo formato
        ];
