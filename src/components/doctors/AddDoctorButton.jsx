import React from 'react';
import ButtonWithDialog from "../common/ButtonWithDialog";
import DialogContent from "@material-ui/core/DialogContent";
import AddDoctorForm from "./AddDoctorForm";

const initialValues = {
  id: '',
  name: '',
  designation: '',
  speciality: '',
  team: '',
  shift: '',
};

const AddDoctorButton = () => (
  <ButtonWithDialog
    buttonText="Add Doctor"
    className="create-button"
  >
    {(closeDialog) => {
      const addDoctor = (doctor) => {
        console.log(doctor);
        closeDialog();
      };

      return (
        <>
          <DialogContent>
            <AddDoctorForm
              initialValues={initialValues}
              onSubmit={addDoctor}/>
          </DialogContent>
        </>
      );
    }}
  </ButtonWithDialog>
);

export default AddDoctorButton;
