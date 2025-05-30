import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function HeatmapPriceArea() {
  const { heatmap_price_area: data } = useLoaderData();

  const option = {
    title: {
      text: 'Heatmap Price Area',
    },
    tooltip: {
      position: 'top',
    },
    xAxis: {
      type: 'category',
      data: data.x_labels,
      name: 'Building Area',
      nameLocation: 'middle',
      nameGap: 30,
      splitArea: {
        show: true,
      },
      axisLabel: {
        fontSize: 10,
        interval: 0,
      },
    },
    yAxis: {
      type: 'category',
      data: data.y_labels,
      name: 'Land Area',
      nameLocation: 'middle',
      nameGap: 90,
      splitArea: {
        show: true,
      },
    },
    grid: {
      left: '5%',
      right: '15%',
      top: '10%',
      bottom: '7%',
      containLabel: true,
    },
    visualMap: {
      min: 500,
      max: 1600,
      calculable: true,
      orient: 'vertical',
      right: '0%',
      top: 50,
      itemHeight: 180,
      inRange: {
        color: ['#fff', '#3fb1e3'],
      },
    },
    series: [
      {
        type: 'heatmap',
        data: data.matrix_data.map((item) => [
          item[1],
          item[0],
          item[2].toFixed(2),
        ]),
        label: {
          show: true,
        },
        itemStyle: {
          borderWidth: 0.1,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
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
