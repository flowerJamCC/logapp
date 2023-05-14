import Typography from '@mui/material/Typography';
import React from 'react';

const Paragraph = ({text, variant, align}) => {
  return (
    <Typography variant={variant} align={align}>
        {text}
    </Typography>
  );
};

Paragraph.defaultProps ={
    text: 'lorem Ipsum',
    align: 'left',
};

export default Paragraph;