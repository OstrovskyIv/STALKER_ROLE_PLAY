import type { GuideItem } from './types';

export const mutantsData: GuideItem[] = [
  {
    id: 'blind_dog',
    category: 'mutants',
    title: 'СЛЕПОЙ ПЁС',
    description: 'Самый распространённый мутант Зоны, произошедший от лабораторных и одичавших собак.',
    features: 'Лишён зрения, ориентируется по слуху и запаху.',
    danger: 'В одиночку труслив. В стае (10–15 особей) смертельно опасен.',
    trophies: '«Хвост собаки»',
    lethality: 'Средняя',
    imageName: 'slepoi_pes.webp'
  },
  {
    id: 'cat_bayun',
    category: 'mutants',
    title: 'КОТ БАЮН',
    description: 'Зооморфный мутант, произошедший от домашних кошек.',
    features: 'Увеличенный в размерах кот с оглушающим криком. Атакует со спины и из засады.',
    danger: 'Быстр и коварен; стая из 2–3 особей смертельна.',
    trophies: '«Хвост котяры»',
    lethality: 'Средняя',
    imageName: 'kot_baun.webp'
  },
  {
    id: 'flesh',
    category: 'mutants',
    title: 'ПЛОТЬ',
    description: 'Мутировавшая свинья, один из самых распространенных и относительно безобидных мутантов Зоны.',
    features: 'Передние конечности превратились в серповидные когти.',
    danger: 'Поодиночке убегает; в группе может атаковать.',
    trophies: '«Глаз плоти»',
    lethality: 'Низкая',
    imageName: 'plot.webp'
  },
  {
    id: 'izlom',
    category: 'mutants',
    title: 'ИЗЛОМ',
    description: 'Человекоподобный мутант с гипертрофированными руками.',
    features: 'Разумен, говорит путано, крайне хитёр.',
    danger: 'Атакует со спины, действует группами.',
    trophies: '«Рука излома»',
    lethality: 'Средняя',
    imageName: 'izlom.webp'
  },
  {
    id: 'snork',
    category: 'mutants',
    title: 'СНОРК',
    description: 'Антропоморфный мутант, бывший человек (сталкер или военный) в рваной униформе и противогазе.',
    features: 'Передвигается на четвереньках, ориентируется по запаху.',
    danger: 'Очень быстр, атакует прыжками и сериями ударов.',
    trophies: '«Стопа снорка»',
    lethality: 'Высокая',
    imageName: 'snork.webp'
  },
  {
    id: 'krovosos',
    category: 'mutants',
    title: 'КРОВОСОС',
    description: 'Легендарный мутант-гуманоид, один из самых опасных хищников Зоны, символ её порока и угрозы.',
    features: 'Оптическая невидимость, регенерация.',
    danger: 'Атакует внезапно, игнорирует броню.',
    trophies: '«Щупальца кровососа»',
    lethality: 'Высокая',
    imageName: 'krovosos.webp'
  },
  {
    id: 'leech',
    category: 'mutants',
    title: 'ПИЯВКА',
    description: 'Редкий мутант болотистой местности.',
    features: 'Высокая скорость, острые когти.',
    danger: 'Атакует стаями (5–8 особей).',
    trophies: '«Язык пиявки»',
    lethality: 'Средняя',
    imageName: 'piyavka.webp'
  },
  {
    id: 'pseudodog',
    category: 'mutants',
    title: 'ПСЕВДОСОБАКА',
    description: 'Агрессивный мутант, произошедший от волков.',
    features: 'Влияет на психику, создаёт иллюзии.',
    danger: 'Опасна даже в одиночку.',
    trophies: '«Хвост псевдособаки»',
    lethality: 'Высокая',
    imageName: 'psevdosobaka.webp'
  },
  {
    id: 'zombified',
    category: 'mutants',
    title: 'ЗОМБИРОВАННЫЙ',
    description: 'Человек, потерявший разум под воздействием пси-излучения.',
    features: 'Не чувствует радиации, не интересен мутантам как добыча.',
    danger: 'Действует группами, стреляет хаотично.',
    trophies: 'Жетоны, случайные предметы.',
    lethality: 'Средняя',
    imageName: 'zombirovanniy.webp'
  },
  {
    id: 'burer',
    category: 'mutants',
    title: 'БЮРЕР',
    description: 'Карлик-гуманоид с телекинезом.',
    features: 'Создаёт защитное поле, отражает атаки.',
    danger: 'Вырывает оружие, наносит мощные удары.',
    trophies: '«Рука бюрера»',
    lethality: 'Высокая',
    imageName: 'burer.webp'
  },
  {
    id: 'controller',
    category: 'mutants',
    title: 'КОНТРОЛЁР',
    description: 'Мутант-телепат.',
    features: 'Пси-атаки, контроль разума.',
    danger: 'Держит «свиту» из зомбированных и мутантов.',
    trophies: '«Мозг контролёра»',
    lethality: 'Экстремальная',
    imageName: 'kontroler.webp'
  },
  {
    id: 'pseudogiant',
    category: 'mutants',
    title: 'ПСЕВДОГИГАНТ',
    description: 'Самый крупный мутант Зоны.',
    features: 'Формирует локальные ударные волны ударом о землю, оглушая и замедляя жертву.',
    danger: 'Крайне живуч и силён. Кости по прочности не уступают металлу.',
    trophies: '«Глаз псевдогиганта»',
    lethality: 'Экстремальная',
    imageName: 'psevdogigant.webp'
  },
  {
    id: 'object_1488',
    category: 'mutants',
    title: 'ОБЪЕКТ №14-88',
    description: 'Засекреченный мутант.',
    features: 'Внешность: ЗАСЕКРЕЧЕНО.',
    danger: 'Управляет электричеством. Опасность: ЗАСЕКРЕЧЕНО.',
    trophies: '«Голова»',
    lethality: 'Экстремальная',
    imageName: 'object_1488.webp'
  },
  {
    id: 'poltergeist',
    category: 'mutants',
    title: 'ПОЛТЕРГЕЙСТ',
    description: 'Нематериальный мутант.',
    features: 'Проявляется как светящийся шар.',
    danger: 'Атакует огненными выбросами.',
    trophies: '«Артефакт»',
    lethality: 'Средняя',
    imageName: 'poltergeist.webp'
  },
  {
    id: 'ecologist_zombie',
    category: 'mutants',
    title: 'ЭКОЛОГ (ЗОМБИ)',
    description: 'Зомбированный сотрудник лабораторий комплекса «X».',
    features: 'Носит защитный костюм.',
    danger: 'Носит за спиной баллон с химикатом, который при взрыве создает облако газа.',
    trophies: 'Неизвестны',
    lethality: 'Средняя',
    imageName: 'ecolog.webp'
  },
  {
    id: 'chimera',
    category: 'mutants',
    title: 'ХИМЕРА',
    description: 'Один из самых редких и опасных хищников Зоны, результат генетических экспериментов по скрещиванию ДНК.',
    features: 'Огромная сила, скорость и скрытность.',
    danger: 'Смертельно опасна. Одна атака в прыжке может убить или сильно покалечить.',
    trophies: '«Коготь химеры»',
    lethality: 'Экстремальная',
    imageName: 'himera.webp'
  },
  {
    id: 'sectarians',
    category: 'mutants',
    title: 'СЕКТАНТЫ',
    description: 'Фанатики, вышедшие из группировки «Грех».',
    features: 'Безэмоциональная речь, ночная активность.',
    danger: 'Действуют группами, не чувствуют боли.',
    trophies: '«Мёртвая ворона», «Серебряный жетон»',
    lethality: 'Высокая',
    imageName: 'sektant.webp'
  }
];