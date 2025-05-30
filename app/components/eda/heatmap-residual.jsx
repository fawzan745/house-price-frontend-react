import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';

export default function HeatmapResidual() {
  const { heatmap_residual: data } = useLoaderData();

  const option = {
    title: {
      text: 'Heatmap Residual',
    },
    tooltip: {
      position: 'top',
    },
    xAxis: {
      type: 'category',
      data: data.bin_f1_labels,
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
      data: data.bin_f2_labels,
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
      min: -50,
      max: 40,
      calculable: true,
      orient: 'vertical',
      right: '0%',
      top: 50,
      itemHeight: 180,
      inRange: {
        color: ['#626c91', '#fff', '#3fb1e3'],
      },
    },
    series: [
      {
        type: 'heatmap',
        data: data.heatmap.map((item) => [
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
