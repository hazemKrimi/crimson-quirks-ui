import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
	tags: ['autodocs'],
  argTypes: {
    color: { options: ['primary', 'secondary', 'tertiary'] },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'tertiary',
		onChange: () => {}
  },
};
