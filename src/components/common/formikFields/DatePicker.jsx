import * as React from 'react';
import {KeyboardDatePicker} from '@material-ui/pickers';
import Error from './Error';

export default function DatePicker(props) {
  const {className, name} = props;

  function onChange(values) {
    const e = {
      target: {
        name,
        value: values,
      },
    };
    props.onChange(e);
  }

  return (
    <>
      <KeyboardDatePicker
        autoOk
        format={"DD-MM-YYYY"}
        variant="inline"
        fullWidth
        {...props}
        className={`field ${className || ''}`}
        onChange={onChange}
      />
      <Error name={name}/>
    </>
  );
}
