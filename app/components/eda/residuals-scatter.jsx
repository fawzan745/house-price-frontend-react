import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function ResidualsScatter() {
  const { dist_residuals: data } = useLoaderData();

  const option = {
    title: {
      text: 'Residuals for XGBRegressor Model',
    },
    xAxis: {
      min: 200,
      max: 2050,
      name: 'Predicted Values',
      nameLocation: 'middle',
      nameGap: 30,
    },
    yAxis: {
      name: 'Residuals',
      nameLocation: 'middle',
      nameGap: 30,
    },
    grid: {
      left: '7%',
      right: '5%',
      t0p: '18%', 
      bottom: '10%',
    },
    legend: {
      orient: 'vertical',
      data: [
        `Train R² = ${data.r2_train.toFixed(3)}`,
        `Test R² = ${data.r2_test.toFixed(3)}`,
      ],
      top: 5,
      right: 60,
    },
    series: [
      {
        name: `Train R² = ${data.r2_train.toFixed(3)}`,
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          borderColor: 'white',
          borderWidth: 0.5,
        },
        emphasis: {
          focus: 'series',
        },
        data: data.y_train_pred.map((item, idx) => [
          item,
          data.residuals_train[idx],
        ]),
      },
      {
        name: `Test R² = ${data.r2_test.toFixed(3)}`,
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          borderColor: 'white',
          borderWidth: 0.5,
        },
        emphasis: {
          focus: 'series',
        },
        data: data.y_test_pred.map((item, idx) => [
          item,
          data.residuals_test[idx],
        ]),
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
