import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles, Typography, Button } from '@material-ui/core';

import ProfitChip from 'src/components/profitChip';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2, 0),
  },
  unsaveButton: {
    backgroundColor: 'rgba(255, 97, 97, 0.5)',
    '&:hover': {
      backgroundColor: 'rgba(255, 97, 97, 0.8)',
    },
  },
}));

export default function MaterialTableDemo() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'eBay Title', field: 'eBayTitle', width: 150 },
      { title: 'Amazon Title', field: 'AmazonTitle', width: 150 },
      {
        title: 'eBay Image',
        field: 'eBayImage',
        render: rowData => <img src={rowData.eBayImage} alt="product" style={{ height: 42, width: 42 }} />,
      },
      {
        title: 'Amazon Image',
        field: 'AmazonImage',
        render: rowData => <img src={rowData.AmazonImage} alt="product" style={{ height: 42, width: 42 }} />,
      },
      { title: 'eBay Price', field: 'eBayPrice', type: 'currency' },
      { title: 'Amazon Price', field: 'amazonPrice', type: 'currency' },
      {
        title: 'Profit',
        field: 'profit',
        render: rowData => <ProfitChip profit={rowData.profit} tooltipText="Test" />,
      },
      { title: 'Delivery', field: 'delivery' },
      { title: 'Monthly Volume', field: 'monthlyVolume' , width: 110 },
      {
        title: '',
        field: 'list',
        width: 80,
        render: rowData => (
          <Button variant="contained" color="secondary" size="small">
            List
          </Button>
        ),
      },
      {
        title: '',
        field: 'unSave',
        width: 80,
        render: rowData => (
          <Button variant="contained" color="secondary" size="small">
            Save
          </Button>
        ),
      },
    ],
    data: [...Array(8).keys()].map(ele => ({
      eBayTitle: 'Bose Noise Cancelling Wireless Headphones',
      AmazonTitle: 'Bose Noise Cancelling Wireless Headphones',
      AmazonImage: 'https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg',
      eBayImage: 'https://www.toshibaaudio.com/wp-content/uploads/2019/03/game-blue-1.jpg',
      amazonPrice: 270,
      eBayPrice: 270,
      profit: 8,
      delivery: '9 Left - Delivery from 06-23-2020',
      monthlyVolume: 65,
      list: '',
      unSave: '',
    })),
  });

  return (
    <div className={classes.root}>
      <MaterialTable
        columns={state.columns}
        data={state.data}
        options={{
          // search: false,
          showTitle: false,
          toolbar: false,
          paging: false,
          sorting: false,
          selection: true,
          headerStyle: {
            fontSize: 12,
            fontWeight: 700,
            border: '1 solid #edeefa',
            backgroundColor: '#eef0f8',
          },
          rowStyle: {
            fontSize: 11,
            fontWeight: 500,
          },
        }}
      />
    </div>
  );
}
