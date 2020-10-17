import React from 'react';
import { makeStyles, Tooltip } from '@material-ui/core';

import TooltipIcon from 'src/assets/icons/tooltip.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  chip: {
    width: 36,
    height: 23,
    borderRadius: 4,
    backgroundColor: 'rgba(97, 255, 184, 0.5)',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
}));

export default function ProfitChip({ profit, tooltipText }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.chip}>${profit}</div>
      {tooltipText && (
        <Tooltip title={tooltipText}>
          <div style={{ display: 'flex' }}>
            <TooltipIcon />
          </div>
        </Tooltip>
      )}
    </div>
  );
}
