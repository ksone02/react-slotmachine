import React from "react";
type CarouselTemplateType = {
    dataArr: Array<DataType>;
    type: number;
    setSlot: React.Dispatch<React.SetStateAction<string>>;
};
export type DataType = {
    id: number;
    img: React.ReactNode;
    name?: string;
    value: string;
};
export type CallFn = {
    random(): void;
};
declare const CarouselTemplate: React.ForwardRefExoticComponent<CarouselTemplateType & React.RefAttributes<CallFn>>;
export default CarouselTemplate;
