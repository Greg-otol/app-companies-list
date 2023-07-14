import { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { getAllCompanies } from "../../services/companyServices/getAllCompanies";
import { ICompany } from "../../interfaces/ICompany";
import { TableCompanies } from "../../components/tableCompanies/tableCompanies";
import { HomeContainer } from "./styleHome";

export function Home() {
  const [filterStatus, setFilterStatus] = useState(0);
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [dataInicioFiltro, setDataInicioFiltro] = useState("");
  const [dataFinalFiltro, setDataFinalFiltro] = useState("");

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const response = await getAllCompanies();
      setCompanies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let companiesFiltered = companies;

  if (filterStatus === 1) {
    companiesFiltered = companies.filter(
      (company) => company.statusEmpresa === 1
    );
  } else if (filterStatus === 2) {
    companiesFiltered = companies.filter(
      (company) => company.statusEmpresa === 2
    );
  }

  if (dataInicioFiltro && dataFinalFiltro) {
    companiesFiltered = companiesFiltered.filter((company) => {
      const dataInclusaoEmpresa = new Date(company.dataInclusao);
      const dataInicioFiltroDate = new Date(dataInicioFiltro);
      const dataFinalFiltroDate = new Date(dataFinalFiltro);

      return (
        dataInclusaoEmpresa >= dataInicioFiltroDate &&
        dataInclusaoEmpresa <= dataFinalFiltroDate
      );
    });
  }

  const handleFilterChange = (status: number) => {
    setFilterStatus(status);
  };

  const handleDataInicioFiltroChange = (dataInicio: string) => {
    setDataInicioFiltro(dataInicio);
  };

  const handleDataFinalFiltroChange = (dataFinal: string) => {
    setDataFinalFiltro(dataFinal);
  };

  return (
    <HomeContainer>
      <Header
        onFilterChange={handleFilterChange}
        companiesFiltered={companiesFiltered}
        onDataInicioFiltroChange={handleDataInicioFiltroChange}
        onDataFinalFiltroChange={handleDataFinalFiltroChange}
        dataInicioFiltro={dataInicioFiltro}
        dataFinalFiltro={dataFinalFiltro}
      />
      <TableCompanies data={companiesFiltered} />
    </HomeContainer>
  );
}
