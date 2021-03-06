import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles, Container } from '@material-ui/core';

import LeftDrawer from 'src/components/leftDrawer';
import MenuList from 'src/components/MenuList';

const useStyles = makeStyles(theme => ({
  content: ({ drawerWidth }) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    flexGrow: 1,
    padding: theme.spacing(3, 0),
    flexDirection: 'column',
    height: '100vh',
  }),
}));

const drawerWidth = 210;

export default function DesktopLayout({ children }) {
  const classes = useStyles({ drawerWidth });
  const { pathname } = useRouter();

  const matches = pathname.match('settings') || pathname.match('edit');

  return (
    <>
      <LeftDrawer drawerWidth={drawerWidth}>
        <MenuList />
      </LeftDrawer>
      <main className={classes.content}>{matches ? children : <Container maxWidth="xl">{children} </Container>}</main>
    </>
  );
}
