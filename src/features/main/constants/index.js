import React from 'react';

import Jobs from 'features/main/components/Jobs';
import Volunteering from 'features/main/components/Volunteering';

export const TAB_VIEW_SCREENS = [
  {
    name: 'Работа',
    component: <Jobs />,
  },
  {
    name: 'Волонтерство',
    component: <Volunteering />,
  },
];
