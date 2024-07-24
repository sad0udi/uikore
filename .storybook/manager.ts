import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  isFullscreen: false,
  showNav: false,
  showPanel: true,
  addonPanelInRight: false,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: themes.normal,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});