import * as React from 'react';
import {ErrorMessage} from 'formik';

const Error = (props) => (
  <div className="form-field-error">
    <ErrorMessage {...props} />
  </div>
);

export default Error;
