import { ICompany } from "../../interfaces/ICompany";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "./styleTableCompanies";

interface DataProps {
  data: ICompany[];
}

export const TableCompanies: React.FC<DataProps> = (props) => {
  const { data } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Razão Social</TableHeaderCell>
          <TableHeaderCell>CNPJ</TableHeaderCell>
          <TableHeaderCell>Responsável Legal</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Telefone</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((company) => {
          return (
            <TableRow key={company.id}>
              <TableCell status={company.statusEmpresa} data-th="Razão Social">
                {company.razaoSocial}
              </TableCell>
              <TableCell status={company.statusEmpresa} data-th="CNPJ">
                {company.cnpj}
              </TableCell>
              <TableCell
                status={company.statusEmpresa}
                data-th="Responsável Legal"
              >
                {company.responsavelLegal}
              </TableCell>
              <TableCell status={company.statusEmpresa} data-th="E-mail">
                {company.email}
              </TableCell>
              <TableCell status={company.statusEmpresa} data-th="Telefone">
                {company.telefoneContato}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
