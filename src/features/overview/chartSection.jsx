import React from 'react';
import numeral from 'numeral';
import { Line, defaults } from 'react-chartjs-2';
import { makeStyles, Typography, FormControl, Select, MenuItem } from '@material-ui/core';

defaults.global.defaultFontFamily = 'Proxima Nova';

const useStyles = makeStyles(theme => ({
  headerSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formControl: {
    backgroundColor: '#eef0f8',
    width: 210,
    [theme.breakpoints.down('sm')]: {
      width: 100,
    },
  },
  chartWrapper: {
    padding: theme.spacing(2, 0),
  },
}));

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Profit',
      data: [12000, 8000, 3000, 5000, 3000, 3000, 2000, 9000, 3000, 4000, 8000, 3000],
      fill: false,
      borderColor: '#484c86',
      pointBackgroundColor: '#484c86',
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          padding: 10,
          callback: (value, index, values) => {
            return numeral(value).format('0a');
          },
        },
        gridLines: {
          drawTicks: false,
          drawBorder: false,
        },
      },
    ],
    xAxes: [
      {
        display: false,
        offset: true,
        ticks: {
          // beginAtZero: true,
        },
        gridLines: {
          //   display: false,
          drawTicks: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        return `Profit: ${numeral(tooltipItem.yLabel).format('0a')}`;
      },
    },
  },
};

export default function ChartSection() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.headerSection}>
        <div>
          <Typography variant="h2">Profit Overview</Typography>
          <Typography variant="h1">$24,457.25</Typography>
        </div>
        <FormControl variant="outlined" className={classes.formControl} size="small">
          <Select value="year">
            <MenuItem value="year">This year</MenuItem>
            <MenuItem value="month">This month</MenuItem>
            <MenuItem value="week">This week</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.chartWrapper}>
        <Line data={data} options={options} height={350} />
      </div>
    </div>
  );
}
