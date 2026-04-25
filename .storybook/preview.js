/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Frameworks',
          ['Overview', 'React', 'Vite', 'Next.js', 'Remix', 'Astro', '*'],
          'System Foundation',
          'Components',
          '*',
        ],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;
