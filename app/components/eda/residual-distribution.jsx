import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function ResidualDistribution() {
  const { dist_residuals: data } = useLoaderData();

  const option = {
    title: {
      text: 'Resisuals Distribution for XGBRegressor Model',
    },
    xAxis: {
      name: 'Residuals',
      nameLocation: 'middle',
      nameGap: 30,
      type: 'category',
      data: data.train_bin_counts.map((val) => val.bin),
    },
    grid: {
      top: '18%',
      bottom: '10%',
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      orient: 'vertical',
      data: [
        `Train R² = ${data.r2_train.toFixed(3)}`,
        `Test R² = ${data.r2_test.toFixed(3)}`,
      ],
      top: 30,
      right: 60,
    },
    series: [
      {
        name: `Train R² = ${data.r2_train.toFixed(3)}`,
        data: data.train_bin_counts.map((val) => val.count),
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
      },
      {
        name: `Test R² = ${data.r2_test.toFixed(3)}`,
        data: data.test_bin_counts.map((val) => val.count),
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '500px', width: '100%' }}
      theme="walden"
    />
  );
}
