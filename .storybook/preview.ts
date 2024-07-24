import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { 
        handles: ['onClick', 'onMouseOver'],
     },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
