import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles, Container } from '@material-ui/core';

import MobileHeader from 'src/components/mobileHeader';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}));

export default function DesktopLayout({ children }) {
  const classes = useStyles();
  const { pathname } = useRouter();

  const matches = pathname.match('settings') || pathname.match('edit');
  return (
    <>
      <MobileHeader />
      <main className={classes.content}>{matches ? children : <Container maxWidth="xl">{children} </Container>}</main>
    </>
  );
}
