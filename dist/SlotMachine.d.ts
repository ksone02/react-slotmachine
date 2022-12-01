import React from "react";
import { DataType } from "./CarouselTemplate";
type SlotMachineType = {
    firstList: Array<DataType>;
    secondList: Array<DataType>;
    thirdList: Array<DataType>;
    resultToParams?: (resultArr: Array<string>) => void;
};
declare const SlotMachine: React.FC<SlotMachineType>;
export default SlotMachine;
