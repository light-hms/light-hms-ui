import React from 'react';
import Button from '@material-ui/core/Button';

export default function SubmitButton(props) {
  const {children, className} = props;
  return (
    <Button
      color="primary"
      variant="contained"
      {...props}
      type="submit"
      className={`submit-button ${className || ''}`}
    >
      {children || 'Submit'}
    </Button>
  );
}
