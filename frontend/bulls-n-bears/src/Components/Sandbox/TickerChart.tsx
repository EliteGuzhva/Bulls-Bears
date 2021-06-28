import React from 'react';
import { TickerData } from '../../store/tickers';
import { Chart } from 'react-google-charts';
interface TickerChartProps {
  data: TickerData[];
  tickerName: string;
}

export const TickerChart: React.FunctionComponent<TickerChartProps> = ({
  data,
  tickerName,
}) => {
  const dataToDisplay = [
    ['day', 'a', 'b', 'c', 'd'],
    ...data.map(({ date, open, low, high, close }) => [
      date,
      low,
      open,
      close,
      high,
    ]),
  ];
  return (
    <Chart
      height={500}
      width={'100%'}
      data={dataToDisplay}
      chartType="CandlestickChart"
      options={{
        title: tickerName,
        legend: 'none',
        bar: { groupWidth: '100%' },
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' },
          risingColor: { strokeWidth: 0, fill: '#0f9d58' },
        },
      }}
      rootProps={{ 'data-testid': '1' }}
      controls={[
        {
          controlType: 'ChartRangeFilter',
          options: {
            filterColumnIndex: 0,
            ui: {
              chartType: 'LineChart',
              chartOptions: {
                chartArea: { width: '90%', height: '20%' },
                hAxis: { baselineColor: 'none' },
              },
            },
          },
          controlPosition: 'bottom',
          controlWrapperParams: {
            state: {
              range: {
                start: data[0].date,
                end: data[data.length - 1].date,
              },
            },
          },
        },
      ]}
    />
  );
};
