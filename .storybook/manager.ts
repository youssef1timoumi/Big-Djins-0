import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'BIG DJINS',
    brandUrl: 'https://github.com/onwidget/tailnext',
    brandTarget: '_blank',
  }),
});
