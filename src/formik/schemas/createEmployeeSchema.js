import * as Yup from "yup";

const createEmployeeSchema = Yup.object().shape({
  employeeId: Yup.string(),
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Last Name is required"),
  dob: Yup.date(),
  gender: Yup.string(),
  maritalStatus: Yup.string(),
  ssn: Yup.string(),
  street1: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  zip: Yup.string(),
  country: Yup.string(),
  paySchedule: Yup.string(),
  payType: Yup.string(),
  payRate: Yup.string(),
  payRateUnit: Yup.string(),
  ethnicity: Yup.string(),
  workPhone: Yup.string(),
  mobilePhone: Yup.string(),
  workEmail: Yup.string().email("Invalid email"),
  homeEmail: Yup.string().email("Invalid email"),
  hiringDate: Yup.date(),
  employmentStatus: Yup.string(),
  jobTitle: Yup.string(),
  reportsTo: Yup.string(),
  department: Yup.string(),
  division: Yup.string(),
  location: Yup.string(),
});

export default createEmployeeSchema;
