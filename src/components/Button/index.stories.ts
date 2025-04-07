import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { options: ['primary', 'secondary', 'tertiary', 'error'] },
    text: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'secondary',
		text: 'Hello, World!',
		variant: 'primary-action'
  },
};
