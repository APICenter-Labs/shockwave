import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import brandLogo from './brand_logo_storybook.png';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'APICenter Labs',
    brandImage: brandLogo,
    brandTarget: '_self',
  }),
});
