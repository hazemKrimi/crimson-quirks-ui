import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '.';

const meta = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { options: ['primay', 'secondary', 'tertiary', 'error'] },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
		color: 'primary',
  },
};
