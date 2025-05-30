import ReactEcharts from 'echarts-for-react';
import { useLoaderData } from 'react-router';
import { local_price } from '@/lib/utils';

export default function BarBottomPrice() {
  const { bar_chart_mean_price: data } = useLoaderData();
  const combined = data.label_bottom5.map((label, i) => ({
    label,
    value: data.value_bottom5[i],
  }));
  const sorted = combined.sort((a, b) => b.value - a.value);

  const option = {
    title: {
      text: 'Bottom Location by Average Price',
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
      data: sorted.map((item) => item.label),
    },
    series: [
      {
        type: 'bar',
        data: sorted.map((item) => item.value),
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
