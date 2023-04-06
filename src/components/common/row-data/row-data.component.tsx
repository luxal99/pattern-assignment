import "./row-data.component.scss";
import { RowDataComponentProps } from "./RowDataComponentProps";
import { useGetValueFromJson } from "../../../hooks/use-get-value-from-json/use-get-value-from-json";

export const RowDataComponent = ({
  listOfData,
  config,
}: RowDataComponentProps) => {
  console.log(config);
  return (
    <>
      {listOfData.map((rowData,rowIndex) => {
        return (
          <div className={'row-data'} key={rowIndex}>
            {config.map((propertyPath, index) => {
              return (
                <div key={index}>
                  <p>
                    {useGetValueFromJson({
                      path: propertyPath,
                      object: rowData,
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
