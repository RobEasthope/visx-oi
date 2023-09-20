import { BarChart } from './components/BarChart/BarChart';
import { LineChart } from './components/LineChart/LineChart';
import { data } from './components/LineChart/data';

function App() {
  return <LineChart data={data} />;
}

export default App;
