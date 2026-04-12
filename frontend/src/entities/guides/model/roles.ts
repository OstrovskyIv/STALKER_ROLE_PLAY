import type { GuideItem } from './types';

export const rolesData: GuideItem[] = [
  {
    id: 'medic_role',
    category: 'roles',
    title: 'МЕДИК',
    description: 'Возможность поднимать игроков при потере сознания или при тяжёлом ранении.',
    access: 'Доступно для всех игроков.'
  },
  {
    id: 'gunsmith_role',
    category: 'roles',
    title: 'ОРУЖЕЙНИК',
    description: 'Чинит оружие и модули до исходного состояния при помощи инструментов.',
    access: 'Доступно для всех игроков.'
  },
  {
    id: 'seamstress_role',
    category: 'roles',
    title: 'ШВЕЯ',
    description: 'Чинит вещи до исходного состояния при помощи инструментов.',
    access: 'Доступно для всех игроков.'
  },
  {
    id: 'technician_role',
    category: 'roles',
    title: 'ТЕХНИК',
    description: 'Взламывает машины отмычками вне ЗЗ; снимает/надевает экзоскелеты.',
    access: 'Доступно для всех игроков.'
  },
  {
    id: 'hacker_role',
    category: 'roles',
    title: 'ХАКЕР',
    description: 'Взламывает КПК других игроков для получения РП-информации.',
    access: 'Только для членов группировок.'
  },
  {
    id: 'inquisitor_role',
    category: 'roles',
    title: 'ДОЗНАВАТЕЛЬ',
    description: 'Проводит допросы, включая пытки и аморальные действия, для получения РП-информации.',
    access: 'Только для членов группировок.'
  }
];