import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { makeStyles, List, ListItem, ListItemIcon, Typography, SvgIcon, Button } from '@material-ui/core';

import HomeIcon from 'src/assets/icons/home.svg';
import SearchIcon from 'src/assets/icons/search.svg';
import SavedIcon from 'src/assets/icons/saved.svg';
import ListIcon from 'src/assets/icons/list.svg';
import BagIcon from 'src/assets/icons/bag.svg';
import SquareIcon from 'src/assets/icons/square.svg';
import SettingIcon from 'src/assets/icons/setting.svg';
import BillIcon from 'src/assets/icons/bill.svg';

const menuGeneral = [
  {
    name: 'Overview',
    link: 'overview',
    icon: <SvgIcon component={HomeIcon} viewBox="0 0 14.4 14.4" style={{ fontSize: 14 }} />,
  },
  {
    name: 'Product Finder',
    link: 'product-finder',
    icon: <SvgIcon component={SearchIcon} viewBox="0 0 12 12" style={{ fontSize: 14 }} />,
  },
  {
    name: 'Saved Products',
    link: 'saved-products',
    icon: <SvgIcon component={SavedIcon} viewBox="0 0 10 12" style={{ fontSize: 14 }} />,
  },
  {
    name: 'Listed Products',
    link: 'listed-products',
    icon: <SvgIcon component={ListIcon} viewBox="0 0 12 12" style={{ fontSize: 14 }} />,
  },
  {
    name: 'Sold Products',
    link: 'sold-products',
    icon: <SvgIcon component={BagIcon} viewBox="0 0 12 12" style={{ fontSize: 14 }} />,
  },
  {
    name: 'Fulfilled Products',
    link: 'fulfilled-products',
    icon: <SvgIcon component={SquareIcon} viewBox="0 0 12 10" style={{ fontSize: 14 }} />,
  },
];

const profileMenu = [
  {
    name: 'Settings',
    icon: <SvgIcon component={SettingIcon} viewBox="0 0 12 12" style={{ fontSize: 14 }} />,
    link: 'settings',
  },
  {
    name: 'Billing',
    icon: <SvgIcon component={BillIcon} viewBox="0 0 12 10" style={{ fontSize: 14 }} />,
  },
];

const useStyle = makeStyles(theme => ({
  text: {
    fontWeight: 600,
    fontSize: 12,
  },
  item: {
    height: 36,
    margin: theme.spacing(1, 0),
    '&.Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 4,
    },
    '&.Mui-selected .MuiTypography-root': {
      color: theme.palette.text.primary,
    },
    '&.Mui-selected svg': {
      fill: theme.palette.text.primary,
    },
  },
  icon: {
    '& > svg': {
      fill: '#aeb7be',
    },
  },
}));

const selectedPage = (pathname, link) => {
  return pathname.split('/').pop() === link;
};

export default function MenuList() {
  const classes = useStyle();
  const { pathname, push } = useRouter();

  return (
    <>
      <List>
        <ListItem>
          <Typography className={classes.text} color="textSecondary">
            GENERAL
          </Typography>
        </ListItem>
        {menuGeneral.map(ele => (
          <ListItem
            key={ele.name}
            button
            selected={selectedPage(pathname, ele.link)}
            className={classes.item}
            onClick={() => {
              push(`/${ele.link}`);
            }}
          >
            <ListItemIcon className={classes.icon}>{ele.icon}</ListItemIcon>
            <Typography className={classes.text} color="textSecondary" selected>
              {ele.name}
            </Typography>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <Typography className={classes.text} color="textSecondary">
            PROFILE
          </Typography>
        </ListItem>
        {profileMenu.map((ele, index) => (
          <ListItem
            key={ele.name}
            selected={selectedPage(pathname, ele.link)}
            button
            className={classes.item}
            onClick={() => {
              push(`/${ele.link}`);
            }}
          >
            <ListItemIcon className={classes.icon}>{ele.icon}</ListItemIcon>
            <Typography className={classes.text} color="textSecondary" selected>
              {ele.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}
