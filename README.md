# VISX OI

VISX graph examples to assist with questiosn surrounding data formatting questions.

## Getting Started

1. Run `pnpm install` to install dependencies. If you don't have pnpm then npm should probably work too.
2. Run `pnpm storybbok` to start the Storybook app.
3. Run `pnpm dev` to start the Vite app if that more to your flavor. Each graph has been added to the index page for easy access.

## Data for graphs

At present the Line and Donut charts pull their data from a co-located file using the `*.data.ts` convention. This is a simple array/object that contain the data for the graph. The data is then passed to the graph as a prop.

Work on extracting the BarChart data is in progress.
