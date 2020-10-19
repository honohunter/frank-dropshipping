import React, { useEffect, useState } from 'react';
import { useMediaQuery, Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import DesktopLayout from './desktopLayout';
import MobileLayout from './mobileLayout';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const matches = useMediaQuery('(min-width:960px)');
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Backdrop open={loading} style={{ backgroundColor: '#f6f7fb' }}>
        <CircularProgress color="primary" />
      </Backdrop>
      {!loading && (matches ? <DesktopLayout>{children}</DesktopLayout> : <MobileLayout>{children}</MobileLayout>)}
    </>
  );
}
