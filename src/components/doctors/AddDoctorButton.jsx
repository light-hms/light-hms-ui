import React from 'react';
import ButtonWithDialog from "../common/ButtonWithDialog";
import DialogContent from "@material-ui/core/DialogContent";
import AddDoctorForm from "./AddDoctorForm";
import moment from "moment";
import useDoctorsApi from "./DoctorsApi";

const initialValues = {
  "code": "",
  "person": {
    "firstName": "",
    "lastName": "",
    "dateOfBirth": moment(),
    "phoneNumber": ""
  },
  "designation": "",
  "specialties": []
};

const AddDoctorButton = () => {
  const {addDoctor} = useDoctorsApi();
  return (
    <ButtonWithDialog
      buttonText="Add Doctor"
      className="create-button"
    >
      {(closeDialog) => {
        const onSubmit = (values) => {
          const doctorDetails = {
            ...values, person: {
              ...values.person,
              dateOfBirth: moment(values.person).format("DD/MM/YYYY")
            }
          };
          addDoctor(doctorDetails).then(() => closeDialog());
        };

        return (
          <>
            <DialogContent>
              <AddDoctorForm
                initialValues={initialValues}
                onSubmit={onSubmit}/>
            </DialogContent>
          </>
        );
      }}
    </ButtonWithDialog>
  );
};

export default AddDoctorButton;
