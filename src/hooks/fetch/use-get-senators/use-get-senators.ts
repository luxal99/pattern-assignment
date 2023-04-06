import { useEffect, useState } from "react";
import { Representative } from "../../../models/Representative";
import { SenatorsHttp } from "../../../util/http/service/senators.http";

interface UseGetSenatorsProp {
  state: string;
}

export const useGetSenators = ({ state }: UseGetSenatorsProp) => {
  const [senators, setSenators] = useState<Representative[]>([]);
  const senatorHttp = new SenatorsHttp();

  useEffect(() => {
    fetchSenators();
  }, [state]);

  const fetchSenators = () => {
    (async () => {
      await getSenatorsByState();
    })();
  };

  const getSenatorsByState = async () => {
    const { data } = await senatorHttp.get(state);
    if (data.results){
      setSenators((currentData)=>[...currentData,...data.results]);
    }
  };

  return { senators };
};
