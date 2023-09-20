import { BarChart } from '../BarChart/BarChart';
import { LineChart } from '../LineChart/LineChart';
import { data } from '../LineChart/data';

function App() {
  return <LineChart data={data} />;
}

export default App;
