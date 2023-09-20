import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from './LineChart';
import { LineChartData } from './LineChart.data';

const meta: Meta<typeof LineChart> = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Example: Story = {
  args: {
    data: LineChartData,
  },
};
