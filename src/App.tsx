import { BarChart } from './charts/BarChart/BarChart';
import { LineChart } from './charts/LineChart/LineChart';
import { data } from './charts/LineChart/data';

function App() {
  return <LineChart data={data} />;
}

export default App;
