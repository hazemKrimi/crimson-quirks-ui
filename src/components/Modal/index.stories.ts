import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
	tags: ['autodocs'],
	argTypes: {
    color: { options: ['primary', 'secondary', 'tertiary', 'error'] },
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'secondary',
		title: 'Modal',
		description: 'This is a modal!',
		onConfirm: () => {},
		onClose: () => {},
  },
};
