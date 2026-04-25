import { fn } from 'storybook/test';
import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the link, preventing interaction and applying disabled styles',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },

    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Controls the size and spacing of the link',
      table: {
        type: { summary: `'small' | 'medium' | 'large'` },
        defaultValue: { summary: 'medium' },
      },
    },

    label: {
      control: 'text',
      description: 'Text content displayed for the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Link' },
      },
    },

    link: {
      control: 'text',
      description: 'URL the link points to',
      table: {
        type: { summary: 'string' },
      },
    },

    target: {
      control: 'select',
      options: ['_self', '_blank'],
      description: 'Specifies where to open the linked document',
      table: {
        type: { summary: `'_self' | '_blank'` },
        defaultValue: { summary: '_self' },
      },
    },
  },
  args: {
    onClick: fn(),
  },
};
export const Small = {
  args: {
    size: 'small',
    label: 'Link',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    label: 'Link',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Link',
  },
};
