import React from "react";
import { withFormik } from "formik";
import TextField from "../common/formikFields/TextField";
import SubmitButton from "../common/SubmitButton";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const FormikForm = (props) => {
  const {values, handleSubmit, handleChange} = props;
  const {name, age, sex, basicDetails, notes} = values;

  return (
    <div className="generic-form">
      <div className="form-title">
        Add patient
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          label="Age"
          name="age"
          value={age}
          type=""
          onChange={handleChange}
        />
        <FormControl className="field">
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="sex" value={sex} onChange={handleChange} row>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
          </RadioGroup>
        </FormControl>
        <TextField
          label="Basic Details"
          name="basicDetails"
          value={basicDetails}
          onChange={handleChange}
          multiline
        />
        <TextField
          label="Notes"
          name="notes"
          value={notes}
          onChange={handleChange}
          multiline
        />
        <SubmitButton/>
      </form>
    </div>
  );
};

const AddPatientForm = withFormik({
  mapPropsToValues: (props) => props.initialValues,
  handleSubmit: (values, formikBag) => formikBag.props.onSubmit(values),
})(FormikForm);

export default AddPatientForm;
