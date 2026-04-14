import { weaponsData } from './weapons';
import { armorData } from './armor';
import { medicineData } from './medicine';
import { ammoData } from './ammo';
import { magazinesData } from './magazines';
import { equipmentData } from './equipment';
import { helmetsData } from './helmets';
import type { ShopCategory } from './types';

export const shopData: ShopCategory[] = [
  { id: 'weapons', title: 'ОРУЖИЕ', items: weaponsData },
  { id: 'equipment', title: 'СНАРЯЖЕНИЕ', items: equipmentData },
  { id: 'armor', title: 'БРОНЕЖИЛЕТЫ', items: armorData },
  { id: 'helmets', title: 'ШЛЕМА', items: helmetsData },
  { id: 'medicine', title: 'МЕДИЦИНА', items: medicineData },
  { id: 'magazines', title: 'МАГАЗИНЫ', items: magazinesData },
  { id: 'ammo', title: 'ПАТРОНЫ', items: ammoData }
];

export * from './types';