import React from 'react';
import {TextField as MaterialUiTextField} from '@material-ui/core';
import Error from './Error';

export default function TextField(props) {
  const {className, name} = props;
  return (
    <>
      <MaterialUiTextField
        fullWidth
        {...props}
        className={`field ${className || ''}`}
      />
      <Error name={name}/>
    </>
  );
}
