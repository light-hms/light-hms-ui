import React from "react";
import { withFormik } from "formik";
import TextField from "../common/formikFields/TextField";
import SubmitButton from "../common/SubmitButton";
import DatePicker from "../common/formikFields/DatePicker";
import MultiSelectDropDown from "../common/formikFields/MultiSelectDropDown";

const FormikForm = (props) => {
  const {values, handleSubmit, handleChange} = props;
  const {code, person, designation, specialties, team, shift} = values;
  const {firstName, lastName, dateOfBirth, phoneNumber } = person;

  return (
    <div className="generic-form">
      <div className="form-title">
        Add Doctor
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Doctor ID"
          name="code"
          value={code}
          onChange={handleChange}
        />
        <TextField
          label="First Name"
          name="person.firstName"
          value={firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="person.lastName"
          value={lastName}
          onChange={handleChange}
        />
        <DatePicker
          label="Date of birth"
          name="person.dateOfBirth"
          value={dateOfBirth}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          name="person.phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
        <TextField
          label="Designation"
          name="designation"
          value={designation}
          onChange={handleChange}
        />
        <MultiSelectDropDown
          label="Speciality"
          name="specialties"
          value={specialties}
          onChange={handleChange}
          options={[]}
          freeSolo
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
