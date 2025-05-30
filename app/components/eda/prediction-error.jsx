import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function PredictionError() {
  const { dist_predict: data } = useLoaderData();

  const markLineOpt = {
    data: [
      [
        {
          coord: [data.identity_line[0], data.identity_line[0]],
          symbol: 'none',
        },
        {
          coord: [data.identity_line[1], data.identity_line[1]],
          symbol: 'none',
        },
        {
          lineStyle: {
            color: 'black',
            width: 2.5,
          },
          label: { formatter: 'Identity' },
        },
      ],
      [
        {
          coord: [data.x_fit_line[0], data.y_fit_line[0]],
          symbol: 'none',
        },
        {
          coord: [data.x_fit_line[1], data.y_fit_line[1]],
          symbol: 'none',
        },
        {
          lineStyle: {
            color: 'red',
            width: 2.5,
          },
          label: { formatter: 'Fit Line' },
        },
      ],
    ],
  };

  const option = {
    title: {
      text: 'Prediction Error for XGBRegressor',
      subtext: 'R-squared = 0.72',
    },
    xAxis: {
      name: 'y',
      nameLocation: 'middle',
      nameGap: 30,
    },
    yAxis: {
      name: 'ŷ',
      nameLocation: 'middle',
      nameGap: 30,
    },
    grid: {
      left: '5%',
      right: '5%',
      t0p: '18%', 
      bottom: '10%',
    },
    series: [
      {
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          borderColor: 'white',
          borderWidth: 0.5,
        },
        data: data.y_test.map((item, idx) => [item, data.y_pred[idx]]),
        markLine: markLineOpt,
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '30rem', width: '100%' }}
      theme="walden"
    />
  );
}
