import type { Meta, StoryObj } from '@storybook/react';

import Card from '.';

const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
	tags: ['autodocs'],
  argTypes: {
    color: { options: ['primary', 'secondary', 'tertiary', 'error'] },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'primary',
		title: 'Card title',
		description: 'Card description',
		selected: true
  },
};
