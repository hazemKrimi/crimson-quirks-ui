import type { Meta, StoryObj } from '@storybook/react';

import IconButton from '.';
import Add from '../../assets/icons/add.svg?react';

const meta = {
  title: 'IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Example: Story = {
  render: () => {
    return (
      <IconButton
        color='primary'
        icon={<Add />}
        size='big'
        onClick={() => window.alert('Hello, World!')}
      />
    )
  }
};
