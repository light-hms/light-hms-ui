import React from 'react';
import Table from "../common/Table";
import AddDoctorButton from "./AddDoctorButton";
import Button from "@material-ui/core/Button";

const columns = [
  {
    Header: 'Doctor ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Speciality',
    accessor: 'speciality',
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

const data = [
  {
    id: '12324',
    name: 'John Smith',
    speciality: 'Neurosurgeon',
    designation: 'Neurosurgeon',
    team: 'Team ABC',
    shift: '9AM-5PM'
  },
  {
    id: '12324',
    name: 'John Smith',
    speciality: 'Neurosurgeon',
    designation: 'Neurosurgeon',
    team: 'Team ABC',
    shift: '9AM-5PM'
  },
  {
    id: '12324',
    name: 'John Smith',
    speciality: 'Neurosurgeon',
    designation: 'Neurosurgeon',
    team: 'Team ABC',
    shift: '9AM-5PM'
  },
  {
    id: '12324',
    name: 'John Smith',
    speciality: 'Neurosurgeon',
    designation: 'Neurosurgeon',
    team: 'Team ABC',
    shift: '9AM-5PM'
  },
  {
    id: '12324',
    name: 'John Smith',
    speciality: 'Neurosurgeon',
    designation: 'Neurosurgeon',
    team: 'Team ABC',
    shift: '9AM-5PM'
  },
];

const DoctorsListingPage = () => (
  <>
    <AddDoctorButton/>
    <Table
      columns={columns}
      data={data}
    />
  </>
);

export default DoctorsListingPage;
