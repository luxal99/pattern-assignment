import "./representatives-overview.component.scss";
import { RepresentativesOverviewComponentProps } from "./RepresentativesOverviewComponentProps";
import { useGetRepresentatives } from "../../hooks/fetch/use-get-representatives/use-get-representatives";
import { RowDataComponent } from "../common/row-data/row-data.component";

export const RepresentativesOverviewComponent =
  ({state}: RepresentativesOverviewComponentProps) => {
    const { representatives } = useGetRepresentatives({ state });
    return (
      <>
        <h2>Representatives</h2>
        <RowDataComponent
          config={["name", "state"]}
          listOfData={representatives}
        />
      </>
    );
  };
