import type { Meta, StoryObj } from '@storybook/react';

import Search from '.';

const meta = {
  title: 'Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
	tags: ['autodocs'],
	argTypes: {
    color: { options: ['primary', 'secondary', 'tertiary', 'error'] },
    value: { control: 'text' },
  },
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'secondary',
		value: '',
		onChange: () => {},
  },
};
