import React from 'react';
import Table from "../common/Table";
import AddPatientButton from "./AddPatientButton";
import Button from "@material-ui/core/Button";

const columns = [
  {
    Header: 'Patient ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Sex',
    accessor: 'sex',
  },
  {
    Header: 'Basic Details',
    accessor: 'basicDetails',
  },
  {
    Header: 'Notes',
    accessor: 'notes',
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
    age: '75',
    sex: 'Male',
    basicDetails: 'Some basic details',
    notes: 'Some patient notes'
  },
  {
    id: '12324',
    name: 'John Smith',
    age: '75',
    sex: 'Male',
    basicDetails: 'Some basic details',
    notes: 'Some patient notes'
  },
  {
    id: '12324',
    name: 'John Smith',
    age: '75',
    sex: 'Male',
    basicDetails: 'Some basic details',
    notes: 'Some patient notes'
  },
  {
    id: '12324',
    name: 'John Smith',
    age: '75',
    sex: 'Male',
    basicDetails: 'Some basic details',
    notes: 'Some patient notes'
  },
  {
    id: '12324',
    name: 'John Smith',
    age: '75',
    sex: 'Male',
    basicDetails: 'Some basic details',
    notes: 'Some patient notes'
  },
];

const PatientsListingPage = () => (
  <>
    <AddPatientButton/>
    <Table
      columns={columns}
      data={data}
    />
  </>
);

export default PatientsListingPage;
