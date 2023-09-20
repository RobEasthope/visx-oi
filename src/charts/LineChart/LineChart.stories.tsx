import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from './LineChart';
import { data } from './data';

const meta: Meta<typeof LineChart> = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Example: Story = {
  args: {
    data: data,
  },
};
