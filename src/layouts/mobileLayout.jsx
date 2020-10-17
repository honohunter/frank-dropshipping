import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import MobileHeader from 'src/features/overview/mobileHeader';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}));

export default function DesktopLayout({ children }) {
  const classes = useStyles();
  return (
    <>
      <MobileHeader />
      <main className={classes.content}>
        <Container maxWidth="xl">{children} </Container>
      </main>
    </>
  );
}
