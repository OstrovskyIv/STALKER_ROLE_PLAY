export interface ShopItem {
  name: string;
  price: string;
  details?: string;
  imageName: string;
}

export interface ShopCategory {
  id: string;
  title: string;
  items: ShopItem[];
}

export const shopData: ShopCategory[] = [
  {
    id: 'weapons',
    title: 'ОРУЖИЕ',
    items: [
      { name: 'MK16 355mm', price: '6.000 p.', details: '5.56x45', imageName: 'mk16_355mm.webp' },
      { name: 'FN F2000', price: '6.000 p.', details: '5.56x45', imageName: 'fn_f2000.webp' },
      { name: 'Sig550', price: '7.500 p.', details: '5.56x45', imageName: 'sig550.webp' },
      { name: 'Sig552', price: '6.000 p.', details: '5.56x45', imageName: 'sig552.webp' },
      { name: 'M4A1 406mm', price: '7.500 p.', details: '5.56x45', imageName: 'm4a1_406mm.webp' },
      { name: 'MK 256mm (мутант)', price: '7.500 p.', details: '7.62x39', imageName: 'mk_256mm_мутант.webp' },
      { name: 'MK 409mm (мутант)', price: '10.000 p.', details: '7.62x39', imageName: 'mk_409mm_мутант.webp' },
      { name: 'SR25 406mm', price: '8.250 p.', details: '7.62x51', imageName: 'sr25_406mm.webp' },
      { name: 'SR25 508mm', price: '10.500 p.', details: '7.62x51', imageName: 'sr25_508mm.webp' },
      { name: 'SVU', price: '4.850 p.', details: '7.62x54R', imageName: 'svu.webp' },
      { name: 'SVD', price: '5.625 p.', details: '7.62x54R', imageName: 'svd.webp' },
      { name: 'SVDS', price: '7.500 p.', details: '7.62x54R', imageName: 'svds.webp' },
      { name: 'G28', price: '10.500 p.', details: '7.62x51', imageName: 'g28.webp' },
      { name: 'MOSIN 514mm', price: '3.000 p.', details: '7.62x54R', imageName: 'mosin_514mm.webp' },
      { name: 'MOSIN 730mm', price: '3.750 p.', details: '7.62x54R', imageName: 'mosin_730mm.webp' },
      { name: 'MC MILLAN CS5', price: '9.375 p.', details: '7.62x51', imageName: 'mc_millan_cs5.webp' },
      { name: 'BLACK SV98', price: '5.250 p.', details: '7.62x54R', imageName: 'black_sv98.webp' }
    ]
  },
  {
    id: 'armor',
    title: 'БРОНЕЖИЛЕТЫ',
    items: [
      { name: 'TACTEC (77%)', price: '4.000 p.', imageName: 'tactec_77.webp' },
      { name: 'SSO (78%)', price: '4.400 p.', imageName: 'sso_78.webp' },
      { name: 'TBAS (80%)', price: '5.500 p.', imageName: 'tbas_80.webp' },
      { name: 'SLICK (85%)', price: '7.000 p.', imageName: 'slick_85.webp' },
      { name: 'Тяжелый 6Б43 (90%)', price: '10.500 p.', imageName: 'тяжелый_бронежилет_6б43_90.webp' }
    ]
  },
  {
    id: 'helmets',
    title: 'ШЛЕМА',
    items: [
      { name: 'ВОИН КИВЕР-РСП', price: '3.000 p.', imageName: 'воин_кивер-рсп.webp' },
      { name: 'MICH (HIGH CUT)', price: '4.200 p.', imageName: 'mich_high_cut.webp' },
      { name: 'МАСКА-1Щ', price: '5.000 p.', imageName: 'маска-1щ.webp' },
      { name: 'АЛТЫН', price: '7.000 p.', imageName: 'алтын.webp' }
    ]
  },
  {
    id: 'medicine',
    title: 'МЕДИЦИНА',
    items: [
      { name: 'IFAK', price: '2.500 p.', imageName: 'ifak.webp' },
      { name: 'AFAK', price: '3.000 p.', imageName: 'afak.webp' },
      { name: 'Salewa', price: '4.000 p.', imageName: 'salewa.webp' },
      { name: 'Grizly', price: '5.000 p.', imageName: 'grizly.webp' },
      { name: 'CMS', price: '3.500 p.', imageName: 'cms.webp' },
      { name: 'SURV', price: '5.000 p.', imageName: 'surv.webp' }
    ]
  },
  {
    id: 'ammo',
    title: 'ПАТРОНЫ',
    items: [
      { name: '556x45 m855a1', price: '7.000 p.', imageName: '556x45_m855a1.webp' },
      { name: '762x39 PP', price: '7.000 p.', imageName: '762x39_pp.webp' },
      { name: '545x39 BT', price: '6.000 p.', imageName: '545x39_bt.webp' },
      { name: '366TKM custom', price: '6.000 p.', imageName: '366tkm_custom_ap.webp' }
    ]
  },
  {
    id: 'magazines',
    title: 'МАГАЗИНЫ',
    items: [
      { name: '5.45X39 60 ПТ', price: '4.000 p.', imageName: '5.45x39_60_пт.webp' },
      { name: '5.56X45 60 ПТ', price: '4.500 p.', imageName: '5.56x45_60_пт.webp' },
      { name: '7.62X39 75 ПТ', price: '7.250 p.', imageName: '7.62x39_75_пт.webp' },
      { name: '9X39 30 ПТ', price: '3.000 p.', imageName: '9x39_30_пт.webp' }
    ]
  }
];