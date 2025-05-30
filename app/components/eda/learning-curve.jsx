import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function LearningCurve() {
  const { learning_curve: data } = useLoaderData();

  const option = {
    title: {
      text: 'Learning Curve',
    },
    xAxis: {
      type: 'category',
      name: 'Training Size',
      nameLocation: 'middle',
      nameGap: 30,
      data: data.train_sizes.map((val) => val.toFixed(0)),
    },
    yAxis: {
      type: 'value',
      name: 'Score',
      nameLocation: 'middle',
      nameGap: 50,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
    },
    legend: {
      data: ['Train Score', 'Test Score'],
      top: 30,
      right: 60,
    },
    grid: {
      top: '18%',
      bottom: '15%',
      right: '2%', 
      left: '13%'
    },
    series: [
      {
        name: 'Train Score',
        data: data.train_scores.map((val) => val.toFixed(2)),
        type: 'line',
        smooth: true,
      },
      {
        name: 'Test Score',
        data: data.test_scores.map((val) => val.toFixed(2)),
        type: 'line',
        smooth: true,
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '20rem', width: '100%' }}
      theme="walden"
    />
  );
}
