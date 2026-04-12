import { mutantsData } from './mutants';
import { anomaliesData } from './anomalies';
import { artifactsData } from './artifacts';
import { medicineData } from './medicine';
import { rolesData } from './roles';
import { blowoutData } from './blowout';
import { factionsData } from './factions';
import type { GuideItem } from './types';

export const guidesData: GuideItem[] = [
  ...factionsData,
  ...mutantsData,
  ...anomaliesData,
  ...artifactsData,
  ...blowoutData,
  ...medicineData,
  ...rolesData
];

export * from './types';
export * from './categories';