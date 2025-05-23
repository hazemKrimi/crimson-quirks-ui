import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '.';

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
	tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { options: ['primary', 'secondary', 'tertiary'] },
    size: { options: ['big', 'small'] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'A',
		color: 'primary',
		size: 'big'
  },
};
