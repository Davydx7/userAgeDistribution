import { Line } from 'react-chartjs-2'; // chart.js library
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
  Chart,
  ChartOptions,
  ActiveDataPoint
} from 'chart.js';
import { observer } from 'mobx-react-lite';
import userStore from 'store/mobX';

const LineChart = observer(() => {
  // configuring the chart library
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const labels = Object.keys(userStore.graphData);

  const data = {
    labels,
    datasets: [
      {
        label: 'Users',
        data: userStore.graphData,
        borderColor: 'rgb(196, 107, 248)',
        backgroundColor: 'rgba(57, 1, 59, 0.5)',
        tension: 0.1,
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        title: {
          color: '#cc78e4',
          display: true,
          text: 'Ages'
        }
      },
      y: {
        title: {
          color: '#cc78e4',
          display: true,
          text: 'Number of users'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Users age distribution (18-60)'
      }
    },
    onClick(event: ChartEvent, elements: ActiveElement[], chart: Chart) {
      if (elements.length) {
        const activePoint: ActiveDataPoint = elements[0];
        console.log(activePoint.index);

        userStore.setShowList(true);
        userStore.setActiveIndex(activePoint.index);
      } else {
        userStore.setShowList(false);
      }
    }
  };

  return <Line data={data} options={options} />;
});

export default LineChart;
