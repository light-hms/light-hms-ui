import React from 'react';
import Table from "../common/Table";

const columns = [
  {
    Header: 'Doctor ID',
    accessor: 'id',
    filterable: false,
  },
  {
    Header: 'Name',
    accessor: 'name',
    filterable: false,
  },
  {
    Header: 'Speciality',
    accessor: 'speciality',
    filterable: false,
  },
  {
    Header: 'Designation',
    accessor: 'designation',
    filterable: false,
  },
  {
    Header: 'Team',
    accessor: 'team',
    filterable: false,
  },
  {
    Header: 'Shift',
    accessor: 'shift',
    filterable: false,
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
  <Table
    columns={columns}
    data={data}
  />
);

export default DoctorsListingPage;
