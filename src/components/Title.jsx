import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({title, variant}) => {
  return (
    <Typography variant={variant}>{title}</Typography>

  );
};

Title.defaultProps = {
    title: 'Title Placeholder',
    variant: 'body1'
};

export default Title;