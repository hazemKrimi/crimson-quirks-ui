import type { Meta, StoryObj } from '@storybook/react';

import Chip from '.';

const meta = {
  title: 'Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { options: ['primary', 'secondary', 'tertiary'] },
    text: { control: 'text' },
    variant: { options: ['outlined', 'filled'] },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'tertiary',
		text: 'Hello, World!',
		variant: 'filled'
  },
};
