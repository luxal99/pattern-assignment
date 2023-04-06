import { useEffect, useState } from "react";
import { Representative } from "../../../models/Representative";
import { RepresentativesHttp } from "../../../util/http/service/representatives.http";

interface UseGetRepresentativesProp {
  state: string;
}

export const useGetRepresentatives = ({ state }: UseGetRepresentativesProp) => {
  const [representatives, setRepresentatives] = useState<Representative[]>([]);
  const representativeHttp = new RepresentativesHttp();

  useEffect(() => {
    fetchRepresentatives();
  }, [state]);

  const fetchRepresentatives = () => {
    (async () => {
      await getRepresentativesByState();
    })();
  };

  const getRepresentativesByState = async () => {
    const { data } = await representativeHttp.get(state);
    if (data.results){
      setRepresentatives((currentData)=>[...currentData,...data.results]);
    }
  };

  return { representatives };
};
