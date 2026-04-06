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
      { name: 'MK16 355mm', price: '6.000 p.', details: '5.56x45', imageName: 'MK16_355mm.webp' },
      { name: 'FN F2000', price: '6.000 p.', details: '5.56x45', imageName: 'FN_F2000.webp' },
      { name: 'Sig550', price: '7.500 p.', details: '5.56x45', imageName: 'Sig550.webp' },
      { name: 'Sig552', price: '6.000 p.', details: '5.56x45', imageName: 'Sig552.webp' },
      { name: 'M4A1 406mm', price: '7.500 p.', details: '5.56x45', imageName: 'M4A1_406mm.webp' },
      { name: 'M4A1 457mm', price: '9.000 p.', details: '5.56x45', imageName: 'M4A1_457mm.webp' },
      { name: 'M4A1 508mm', price: '10.500 p.', details: '5.56x45', imageName: 'M4A1_508mm.webp' },
      { name: 'MK 256mm (мутант)', price: '7.500 p.', details: '7.62x39', imageName: 'MK_256mm.webp' },
      { name: 'MK 409mm (мутант)', price: '10.000 p.', details: '7.62x39', imageName: 'MK_409mm.webp' },
      { name: 'SR25 406mm', price: '8.250 p.', details: '7.62x51', imageName: 'SR25_406mm.webp' },
      { name: 'SR25 508mm', price: '10.500 p.', details: '7.62x51', imageName: 'SR25_508mm.webp' },
      { name: 'SVU', price: '4.850 p.', details: '7.62x54R', imageName: 'SVU.webp' },
      { name: 'SVD', price: '5.625 p.', details: '7.62x54R', imageName: 'SVD.webp' },
      { name: 'SVDS', price: '7.500 p.', details: '7.62x54R', imageName: 'SVDS.webp' },
      { name: 'G28', price: '10.500 p.', details: '7.62x51', imageName: 'G28.webp' },
      { name: 'MOSIN 514mm', price: '3.000 p.', details: '7.62x54R', imageName: 'MOSIN_514mm.webp' },
      { name: 'MOSIN 730mm', price: '3.750 p.', details: '7.62x54R', imageName: 'MOSIN_730mm.webp' },
      { name: 'MC MILLAN CS5', price: '9.375 p.', details: '7.62x51', imageName: 'MC_MILLAN_CS5.webp' },
      { name: 'BLACK SV98', price: '5.250 p.', details: '7.62x54R', imageName: 'BLACK_SV98.webp' },
      { name: 'RPK16 550mm', price: '6.000 p.', details: '5.45X39', imageName: 'RPK16_550mm.webp' },
      { name: 'AKM', price: '6.000 p.', details: '7.62X39', imageName: 'AKM.webp' },
      { name: 'AKMN', price: '7.500 p.', details: '7.62X39', imageName: 'AKMN.webp' },
      { name: 'AK 103', price: '9.000 p.', details: '7.62X39', imageName: 'AK 103.webp' },
      { name: 'AK 74n', price: '4.500 p.', details: '5.45X39', imageName: 'AK_74n.webp' },
      { name: 'AKS 74n', price: '4.500 p.', details: '5.45X39', imageName: 'AKS_74n.webp' },
      { name: 'VAL', price: '15.000 p.', details: '9X39', imageName: 'VAL.webp' },
      { name: 'VSS', price: '8.000 p.', details: '9X39', imageName: 'VSS.webp' },
      { name: 'SA-58 280mm', price: '17.250 p.', details: '7.62x51', imageName: 'SA-58_280mm.webp' },
      { name: 'SA-58 406mm', price: '18.000 p.', details: '7.62x51', imageName: 'SA-58_406mm.webp' },
      { name: 'SA-58 533mm', price: '18.750 p.', details: '7.62x51', imageName: 'SA-58_533mm.webp' },
      { name: 'HK417', price: '15.000 p.', details: '7.62x51', imageName: 'HK417.webp' },
      { name: '9A91', price: '13.125 p.', details: '9X39', imageName: '9A91.webp' },
      { name: 'MK18', price: '27.500 p.', details: '.338LM', imageName: 'MK18.webp' },
      { name: 'AWM', price: '17.500 p.', details: '.338LM', imageName: 'AWM.webp' },
      { name: 'DVL-10 M2', price: '18.500 p.', details: '.338LM', imageName: 'DVL_10_M2.webp' },
      { name: 'DVL-10 M1', price: '20.000 p.', details: '.338LM', imageName: 'DVL_10_M1.webp' },
      { name: 'ASH-12', price: '35.000 p.', details: '12.7X55', imageName: 'ASH-12.webp' },
      { name: 'ВССК "Выхлоп"', price: '17.500 p.', details: '12.7X55', imageName: 'VSSK_VIHLOP.webp' },
      { name: 'AXMC', price: '19.000 p.', details: '.338LM', imageName: 'axmc.webp' },
      { name: 'Barrett MRAD', price: '20.000 p.', details: '.338LM', imageName: 'Barrett_MRAD.webp' }
    ]
  },
  {
    id: 'armor',
    title: 'БРОНЕЖИЛЕТЫ',
    items: [
      { name: 'TACTEC (77%)', price: '4.000 p.', imageName: 'TACTEC.webp' },
      { name: 'SSO (78%)', price: '4.400 p.', imageName: 'SSO.webp' },
      { name: 'TBAS (80%)', price: '5.500 p.', imageName: 'TBAS.webp' },
      { name: 'SLICK (85%)', price: '7.000 p.', imageName: 'SLICK.webp' },
      { name: '6Б43 (90%)', price: '10.500 p.', imageName: '6b43.webp' }
    ]
  },
  {
    id: 'helmets',
    title: 'ШЛЕМА',
    items: [
      { name: 'ВОИН КИВЕР-РСП', price: '3.000 p.', imageName: 'VOIN_KIVER_RCP.webp' },
      { name: 'MICH (HIGH CUT)', price: '4.200 p.', imageName: 'MICH_(HIGH CUT).webp' },
      { name: 'МАСКА-1Щ', price: '5.000 p.', imageName: 'MASKA_1H.webp' },
      { name: 'АЛТЫН', price: '7.000 p.', imageName: 'ALTYN.webp' }
    ]
  },
  {
    id: 'medicine',
    title: 'МЕДИЦИНА',
    items: [
      { name: 'IFAK', price: '2.500 p.', imageName: 'IFAK.webp' },
      { name: 'AFAK', price: '3.000 p.', imageName: 'AFAK.webp' },
      { name: 'Salewa', price: '4.000 p.', imageName: 'Salewa.webp' },
      { name: 'Grizly', price: '5.000 p.', imageName: 'Grizly.webp' },
      { name: 'Жгут Эсмарха', price: '1.000 p.', imageName: 'ZHGUT_ECMARH.webp' },
      { name: 'Турникет Cat', price: '1.500 p.', imageName: 'TURNIKET_Cat.webp' },
      { name: 'Calok', price: '2.000 p.', imageName: 'Calok.webp' },
      { name: 'Шина', price: '2.000 p.', imageName: 'SHINA.webp' },
      { name: 'CMS', price: '3.500 p.', imageName: 'CMS.webp' },
      { name: 'SURV', price: '5.000 p.', imageName: 'SURV.webp' }
    ]
  },
  {
    id: 'ammo',
    title: 'ПАТРОНЫ',
    items: [
      { name: '556x45 m855a1', price: '7.000 p.', imageName: '556x45_m855a1.webp' },
      { name: '762x39 PP', price: '7.000 p.', imageName: '762x39_PP.webp' },
      { name: '545x39 BT', price: '6.000 p.', imageName: '545x39_BT.webp' },
      { name: '762x54r PS', price: '5.000 p.', imageName: '762x54r_PS.webp' },
      { name: '762x51 m80', price: '5.000 p.', imageName: '762x51_m80.webp' },
      { name: '366TKM custom', price: '6.000 p.', imageName: '366TKM_custom_ap.webp' },
      { name: '9x19 ap63', price: '3.000 p.', imageName: '9x19_ap63.webp' }
    ]
  },
  {
    id: 'magazines',
    title: 'МАГАЗИНЫ',
    items: [
      { name: '5.45X39 60 ПТ', price: '4.000 p.', imageName: '5.45X3960PT.webp' },
      { name: '5.56X45 60 ПТ', price: '4.500 p.', imageName: '5.56X4560PT.webp' },
      { name: '5.56X45 60 ПТ 2.0', price: '4.500 p.', imageName: '5.56X4560PT2.0.webp' },
      { name: '5.56X45 60 ПТ (G36)', price: '4.500 p.', imageName: '5.56X4560PT(G36).webp' },
      { name: '5.56X45 60 ПТ (SIG)', price: '4.500 p.', imageName: '5.56X4560PT(SIG 550-552).webp' },
      { name: '7.62X39 75 ПТ', price: '7.250 p.', imageName: '7.62X39_75.webp' },
      { name: '9X39 30 ПТ', price: '3.000 p.', imageName: '9X39_30.webp' }
    ]
  }
];