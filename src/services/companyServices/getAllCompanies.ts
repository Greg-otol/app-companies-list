import { ApiCompanies } from "../api/apiCompany";

export const getAllCompanies = async () => {
  const response = await ApiCompanies.get("/companies");

  return response;
};
