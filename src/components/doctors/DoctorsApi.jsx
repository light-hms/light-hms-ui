import React from "react";
import {BASE_URL} from "../../constants";
import useApi from "../common/utils/api";

const useDoctorsApi = () => {
  const {get, post} = useApi();
  const baseUrl = `${BASE_URL}/doctors`;
  const getDoctors = () => get(baseUrl);
  const addDoctor = (doctorDetails) => post(baseUrl, doctorDetails);
  return {getDoctors, addDoctor};
};

export default useDoctorsApi;
