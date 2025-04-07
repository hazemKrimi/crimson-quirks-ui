import type { Meta, StoryObj } from '@storybook/react';

import TextArea from '.';

const meta = {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
	tags: ['autodocs'],
  argTypes: {
    color: { options: ['primary', 'secondary', 'tertiary', 'error'] },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'tertiary',
		value: 'TextArea',
		name: 'TextArea',
		onChange: () => {}
  },
};
