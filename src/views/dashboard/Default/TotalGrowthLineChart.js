import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
import chartData from './chart-data/total-growth-line-chart'; // Assuming the line chart data structure is similar

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH LINE CHART ||============================== //

const TotalGrowthLineChart = ({ isLoading, xaxis, yaxis }) => {
  const [value, setValue] = useState('today');

  const status = [
    {
      value: 'today',
      label: 'Today'
    },
    {
      value: 'month',
      label: 'This Month'
    },
    {
      value: 'year',
      label: 'This Year'
    }
  ];

  useEffect(() => {
    const newChartData = {
      ...chartData.options,
      xaxis: {
        ...chartData.options.xaxis,
        categories: xaxis
      },
      chart: {
        type: 'line',
        ...chartData.options.chart
      },
      series: [
        {
          name: 'value',
          data: yaxis
        }
      ]
    };

    console.log(xaxis, yaxis);
    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`line-chart`, 'updateOptions', newChartData);
    }
  }, [isLoading, xaxis, yaxis]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth Line</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">${yaxis?.reduce((a, b) => a + b, 0)}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthLineChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthLineChart;
