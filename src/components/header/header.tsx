import { ICompany } from "../../interfaces/ICompany";
import { ExcelGenerator } from "../excelGenerator/excelGenerator";
import {
  Button,
  ButtonsContainer,
  ButtonsDiv,
  HeaderContainer,
  Input,
} from "./styleHeader";

export function Header({
  onFilterChange,
  companiesFiltered,
  onDataInicioFiltroChange,
  onDataFinalFiltroChange,
  dataInicioFiltro,
  dataFinalFiltro,
}: {
  onFilterChange: (status: number) => void;
  companiesFiltered?: ICompany[];
  onDataInicioFiltroChange: (dataInicio: string) => void;
  onDataFinalFiltroChange: (dataFinal: string) => void;
  dataInicioFiltro: string;
  dataFinalFiltro: string;
}) {
  const handleClickFilter = (status: number) => {
    onFilterChange(status);
  };

  const handleDataInicioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const dataInicio = event.target.value;
    if (typeof onDataInicioFiltroChange === "function") {
      onDataInicioFiltroChange(dataInicio);
    }
  };

  const handleDataFinalChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const dataFinal = event.target.value;
    if (typeof onDataFinalFiltroChange === "function") {
      onDataFinalFiltroChange(dataFinal);
    }
  };

  return (
    <HeaderContainer>
      <ButtonsContainer>
        <ButtonsDiv>
          {companiesFiltered && <ExcelGenerator data={companiesFiltered} />}
          <Input
            type="date"
            value={dataInicioFiltro}
            onChange={handleDataInicioChange}
          />
          <Input
            type="date"
            value={dataFinalFiltro}
            onChange={handleDataFinalChange}
          />
        </ButtonsDiv>
        <ButtonsDiv>
          <Button onClick={() => handleClickFilter(1)}>
            Filtrar por Ativos
          </Button>
          <Button onClick={() => handleClickFilter(2)}>
            Filtrar por Inativos
          </Button>
          <Button onClick={() => handleClickFilter(0)}>
            Filtrar por Todos
          </Button>
        </ButtonsDiv>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
