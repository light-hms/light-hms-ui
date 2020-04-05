import React from "react";
import { withFormik } from "formik";
import TextField from "../common/formikFields/TextField";
import SubmitButton from "../common/SubmitButton";

const FormikForm = (props) => {
  const {values, handleSubmit, handleChange} = props;
  const {id, name, designation, speciality, team, shift} = values;
  return (
    <div className="generic-form">
      <div className="form-title">
        Add Doctor
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Doctor ID"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          label="Designation"
          name="designation"
          value={designation}
          onChange={handleChange}
        />
        <TextField
          label="Speciality"
          name="speciality"
          value={speciality}
          onChange={handleChange}
        />
        <TextField
          label="Team"
          name="team"
          value={team}
          onChange={handleChange}
        />
        <TextField
          label="Shift"
          name="shit"
          value={shift}
          onChange={handleChange}
        />
        <SubmitButton/>
      </form>
    </div>
  );
};

const AddDoctorForm = withFormik({
  mapPropsToValues: (props) => props.initialValues,
  handleSubmit: (values, formikBag) => formikBag.props.onSubmit(values),
})(FormikForm);

export default AddDoctorForm;
