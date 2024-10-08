import type { Meta, StoryObj } from '@storybook/react';

import type { CardProps } from '.';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Primitives/Card',
  tags: ['autodocs'],
  component: Card,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Component = (props: CardProps) => {
  return <Card {...props}>Aittor</Card>;
};

export const Default: Story = {
  render: Component,
};
