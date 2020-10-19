import React, { useState, useEffect } from 'react';
// import ReactQuill, { Quill } from 'react-quill';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  quill: {
    '& .ql-toolbar': {
      border: '1px solid #edeefa',
      backgroundColor: '#eef0f8',
    },
    '& .ql-container': {
      backgroundColor: '#f6f7fb',
      color: '#000',
      border: 0,
    },
    '& .ql-picker.ql-font': {
      '&  .ql-picker-item': {
        fontSize: 0,
        ' &:before': {
          content: 'attr(data-value) !important',
          fontSize: 14,
        },
      },
      '& .ql-active': {
        '&:before': {
          content: 'attr(data-value) !important',
          fontSize: 14,
        },
      },
    },
    '& .ql-picker.ql-font .ql-picker-label[data-value="Roboto"]::before': {
      fontFamily: 'Roboto',
      content: '"Roboto" !important',
    },
    '& .ql-picker.ql-font .ql-picker-item[data-value="Roboto"]::before': {
      fontFamily: 'Roboto',
      content: '"Roboto" !important',
    },
    '& .ql-picker.ql-font .ql-picker-label[data-value="Proxima-Nova"]::before': {
      fontFamily: 'Proxima Nova',
      content: '"Proxima Nova" !important',
    },
    '& .ql-picker.ql-font .ql-picker-item[data-value="Proxima-Nova"]::before': {
      fontFamily: 'Proxima Nova',
      content: '"Proxima Nova" !important',
    },
  },
}));

export default function Description() {
  const ReactQuill = require('react-quill');

  const classes = useStyles();
  const [mounted, setMounted] = useState(true);

  const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
  Font.whitelist = ['Proxima-Nova', 'Roboto']; // allow ONLY these fonts and the default
  ReactQuill.Quill.register(Font, true);

  if (mounted) {
    return (
      <ReactQuill
        className={classes.quill}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            [{ font: Font.whitelist }],
            [{ color: [] }, { background: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            ['link', 'image', 'video'],
            // ['clean'],
          ],
        }}
      />
    );
  }
  return null;
}
