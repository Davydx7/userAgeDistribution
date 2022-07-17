import { Line } from 'react-chartjs-2'; // chart.js library
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { faker } from '@faker-js/faker';
import { observer } from 'mobx-react-lite';
import userStore from 'Store/mobX';

// configuring the chart library
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
};

const labels = Object.keys(userStore.graphData);

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: userStore.graphData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
};

const LineChart: React.FC = observer(() => <Line options={options} data={data} />);

export default LineChart;
