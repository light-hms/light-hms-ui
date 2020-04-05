import React from 'react';
import ButtonWithDialog from "../common/ButtonWithDialog";
import DialogContent from "@material-ui/core/DialogContent";
import AddPatientForm from "./AddPatientForm";

const initialValues = {
  name: '',
  age: '',
  sex: null,
  basicDetails: '',
  notes: '',
};

const AddPatientButton = () => (
  <ButtonWithDialog
    buttonText="Add Patient"
    className="create-button"
  >
    {(closeDialog) => {
      const addPatient = (patient) => {
        console.log(patient);
        closeDialog();
      };

      return (
        <>
          <DialogContent>
            <AddPatientForm
              initialValues={initialValues}
              onSubmit={addPatient}/>
          </DialogContent>
        </>
      );
    }}
  </ButtonWithDialog>
);

export default AddPatientButton;
