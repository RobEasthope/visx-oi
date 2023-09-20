import type { Meta, StoryObj } from '@storybook/react';

import { DonutChart } from './DonutChart';

const meta: Meta<typeof DonutChart> = {
  component: DonutChart,
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Example: Story = {
  args: {
    width: 800,
    height: 800,
  },
};
