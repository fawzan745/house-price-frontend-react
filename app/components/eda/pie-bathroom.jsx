import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function PieBathroom() {
  const { pie_chart: data } = useLoaderData();

  const option = {
    title: {
      text: 'Propotion Bathroom',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Count',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        labelLine: {
          show: false,
        },
        data: data.label_bathrooms.map((val, idx) => ({
          value: data.count_bathrooms[idx],
          name: `${val}`,
        })),
        label: {
          show: true,
          position: 'inside',
          formatter: '{d}%',
        },
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '300px', width: '100%' }}
      theme="walden"
    />
  );
}
