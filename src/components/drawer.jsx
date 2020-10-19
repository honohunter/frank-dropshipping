import React, { useEffect } from 'react';
import { withStyles, Drawer } from '@material-ui/core';

const StyledDrawer = withStyles(theme => ({
  root: {
    width: '100%',
    flexShrink: 0,
  },
  paper: {
    width: '100%',
    height: 'calc(100% - 100px)',
    top: 'unset',
    bottom: 0,
    padding: theme.spacing(2),
  },
  paperAnchorDockedRight: {
    borderLeft: 'unset',
  },
}))(Drawer);

export default function CustomDrawer(props) {
  const { open } = props;
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return <StyledDrawer {...props} />;
}
