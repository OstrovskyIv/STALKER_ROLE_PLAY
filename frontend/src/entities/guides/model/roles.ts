import type { GuideItem } from './types';

export const rolesData: GuideItem[] = [
  {
    id: 'medic_role',
    category: 'roles',
    title: 'МЕДИК',
    description: 'Данная роль даёт возможность поднимать игроков при потере сознания или при тяжёлом ранении.',
    features: 'ДОСТУП: Все игроки (Одиночки от "Опытный" + квента 5+ стр).',
    imageName: 'mtdic.webp'
  },
  {
    id: 'gunsmith_role',
    category: 'roles',
    title: 'ОРУЖЕЙНИК',
    description: 'Данная роль даёт возможность чинить оружие и его модули до исходного состояния при помощи специальных инструментов.',
    features: 'ДОСТУП: Все игроки (Одиночки от "Опытный" + квента 5+ стр).',
    imageName: 'oruzheinik.webp'
  },
  {
    id: 'seamstress_role',
    category: 'roles',
    title: 'ШВЕЯ',
    description: 'Данная роль даёт возможность чинить вещи до исходного состояния при помощи специальных инструментов.',
    features: 'ДОСТУП: Все игроки (Одиночки от "Опытный" + квента 5+ стр).',
    imageName: 'shveya.webp'
  },
  {
    id: 'technician_role',
    category: 'roles',
    title: 'ТЕХНИК',
    description: 'Данная роль даёт возможность взламывать машины (вне ЗЗ), снимать и надевать экзоскелеты.',
    features: 'ДОСТУП: Все игроки (Одиночки от "Опытный" + квента 5+ стр).',
    imageName: 'tehnik.webp'
  },
  {
    id: 'hacker_role',
    category: 'roles',
    title: 'ХАКЕР',
    description: 'Данная роль даёт возможность взламывать КПК других игроков для получения РП-информации.',
    features: 'ДОСТУП: Только для членов группировок (Требуется квента 5+ стр).',
    imageName: 'hacer.webp'
  },
  {
    id: 'inquisitor_role',
    category: 'roles',
    title: 'ДОЗНАВАТЕЛЬ',
    description: 'Данная роль даёт возможность проводить допросы, включая пытки и другие аморальные действия.',
    features: 'ДОСТУП: Только для членов группировок (Требуется квента 5+ стр).',
    imageName: 'doznavatel.webp'
  }
];