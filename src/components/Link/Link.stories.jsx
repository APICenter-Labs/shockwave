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
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
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
