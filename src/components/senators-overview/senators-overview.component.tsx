import "./senators-overview.component.scss";
import { SenatorsOverviewComponentProps } from "./SenatorsOverviewComponentProps";
import { useGetSenators } from "../../hooks/fetch/use-get-senators/use-get-senators";
import { RowDataComponent } from "../common/row-data/row-data.component";

export const SenatorsOverviewComponent =
  ({state}: SenatorsOverviewComponentProps) => {
    const { senators } = useGetSenators({ state});
    return (
      <>
        <h2>Senators</h2>
        <RowDataComponent config={["name", "state"]} listOfData={senators} />
      </>
    );
  };
