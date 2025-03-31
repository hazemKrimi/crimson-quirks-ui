import type { Meta, StoryObj } from '@storybook/react';

import Menu from '.';
import Box from '../Box';

import Add from '../../assets/icons/add.svg?react';

const meta = {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const Example: Story = {
  render: () => {
    return (
      <>
        <Menu
          component='box'
          items={[
            { icon: <Add />, label: 'Item', action: () => window.alert('Adding item!') }
          ]}
        />
        <Box id='box'>Has a Menu!</Box>
      </>
    )
  },
};
