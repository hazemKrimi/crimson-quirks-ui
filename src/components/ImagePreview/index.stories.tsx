import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import ImagePreview, {ImagePreviewProps} from '.';

const meta = {
  title: 'ImagePreview',
  component: ImagePreview,
	tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ImagePreview>;

export default meta;

type Story = StoryObj<typeof ImagePreview>;

export const Example: Story = {
  render: (args) => {
    const [image, setImage] = useState<ImagePreviewProps['image']>(undefined);

    return (
      <>
        <ImagePreview
          image={image}
          onChange={(event) => {
						console.log(event)
            setImage({
              name: 'image',
              src: event.target.value
            })
          }}
          color={args.color}
        />
        <p>{image?.src}</p>
      </>
    );
  }
};
