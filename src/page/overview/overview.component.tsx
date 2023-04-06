import "./overview.component.scss";
import { OverviewComponentProps } from "./OverviewComponentProps";
import { RepresentativesOverviewComponent } from "../../components/representatives-overview/representatives-overview.component";
import { SenatorsOverviewComponent } from "../../components/senators-overview/senators-overview.component";
import {useEffect, useState} from "react";
import { USStateEnum } from "../../util/config/states";

export const OverviewComponent = ({}: OverviewComponentProps) => {
  const usStates = Object.values(USStateEnum);
  const [usState, setUsState] = useState(usStates[0]);

  const [currentUSStateIndex,setCurrentUSStateIndex] = useState(0)

    useEffect(()=>{
        setUsState(usStates[currentUSStateIndex])
    },[currentUSStateIndex])

  const onScroll = (event:any) => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      if (scrollTop + clientHeight >= scrollHeight && (currentUSStateIndex+1) < usStates.length) {
          setCurrentUSStateIndex((currentUsState)=>currentUsState+1)
      }

  }
  return (
    <div className={"overview"} onWheel={onScroll}>
      <div className={"overview--column"}>
        <RepresentativesOverviewComponent state={usState} />
      </div>
      <div className={"overview--column"}>
        <SenatorsOverviewComponent state={usState} />
      </div>
    </div>
  );
};
