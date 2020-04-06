import React from 'react';
import Table from "../common/Table";
import AddDoctorButton from "./AddDoctorButton";
import Button from "@material-ui/core/Button";
import useDoctorsApi from "./DoctorsApi";

const columns = [
  {
    Header: 'Doctor ID',
    accessor: 'code',
  },
  {
    Header: 'Name',
    accessor: 'person',
    Cell: ({value: person}) =>  `${person.firstName} ${person.lastName}`
  },
  {
    Header: 'Speciality',
    accessor: 'specialities',
    Cell: ({value: specialities}) =>  specialities.join(" ,")
  },
  {
    Header: 'Designation',
    accessor: 'designation',
  },
  {
    Header: 'Team',
    accessor: 'team',
  },
  {
    Header: 'Shift',
    accessor: 'shift',
  },
  {
    accessor: 'id',
    maxWidth: 80,
    Cell: ({value: id}) => {
      return (
        <Button
          color="secondary"
          onClick={() => {
            console.log(`Deleting ${id}`)
          }}
        >
          DELETE
        </Button>
      );
    }
  }
];
const {useEffect, useState} = React;

const DoctorsListingPage = () => {
  const {getDoctors} = useDoctorsApi();
  const [doctors, updateDoctorsList] = useState([]);
  useEffect(() => {
    getDoctors().then(response => updateDoctorsList(response._embedded.doctors));
  },[]);
  return (
    <>
      <AddDoctorButton/>
      <Table
        columns={columns}
        data={doctors}
      />
    </>
  );
};

export default DoctorsListingPage;
