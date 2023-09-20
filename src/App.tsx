import { BarChart } from './charts/BarChart/BarChart';
import { DonutChart } from './charts/DonutChart/DonutChart';
import { LineChart } from './charts/LineChart/LineChart';
import { LineChartData } from './charts/LineChart/LineChart.data';

function App() {
  return (
    <main className="flex flex-col gap-16 p-8">
      <h1 className="text-5xl font-bold">Chart examples</h1>
      <div>
        <h2 className="text-4xl font-bold mb-4">Bar chart</h2>
        <BarChart />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-4">Line chart</h2>
        <LineChart data={LineChartData} />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-4">Donut chart</h2>
        <DonutChart width={800} height={800} />
      </div>
    </main>
  );
}

export default App;
