import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function FeatureImportance() {
  const { feature_importance: data } = useLoaderData();
  const sorted = data.sort((a, b) => a.importance - b.importance);

  const option = {
    title: {
      text: 'Feature Importances',
    },
    xAxis: {
      name: 'Importances',
      nameLocation: 'middle',
      nameGap: 30,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '2%',
      right: '5%',
      top: '12%',   
      bottom: '10%',
      containLabel: true,
    },
    yAxis: {
      type: 'category',
      data: sorted.map((value) => value.feature),
    },
    series: [
      {
        type: 'bar',
        data: sorted.map((value) => value.importance),
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
