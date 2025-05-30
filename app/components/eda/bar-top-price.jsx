import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';
import { local_price } from '@/lib/utils';

export default function BarTopPrice() {
  const { bar_chart_mean_price: data } = useLoaderData();

  const option = {
    title: {
      text: 'Top Location by Average Price',
    },
    xAxis: {
      name: 'Price',
      nameLocation: 'middle',
      nameGap: 30,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: function (params) {
        const formatted = local_price.format(params[0].value);
        return `${params[0].axisValue}<br/><b>${formatted} Juta</b>`;
      },
    },
    grid: {
      left: '5%',
      right: '5%',
      top: '12%',   
      bottom: '10%',
      containLabel: true,
    },
    yAxis: {
      type: 'category',
      data: data.label_top5,
    },
    series: [
      {
        type: 'bar',
        data: data.value_top5,
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
