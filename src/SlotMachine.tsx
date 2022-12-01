import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import styled from "styled-components";
import CarouselTemplate, { CallFn, DataType } from "./CarouselTemplate";

type SlotMachineType = {
  firstList: Array<DataType>;
  secondList: Array<DataType>;
  thirdList: Array<DataType>;
  resultToParams?: (resultArr: Array<string>) => void;
};

const SlotMachine: React.FC<SlotMachineType> = ({
  firstList,
  secondList,
  thirdList,
  resultToParams,
}) => {
  const [resultData, setResultData] = useState<Array<string>>(["", "", ""]);
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [thirdValue, setThirdValue] = useState<string>("");

  const ChildComponentRef1 = useRef<CallFn>(null);
  const ChildComponentRef2 = useRef<CallFn>(null);
  const ChildComponentRef3 = useRef<CallFn>(null);

  useEffect(() => {
    setResultData([firstValue, secondValue, thirdValue]);
  }, [firstValue, secondValue, thirdValue]);

  useEffect(() => {
    if (resultToParams) {
      resultToParams(resultData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultData]);

  const onClickRandom = () => {
    $("#random-button").css("margin-top", "160px");
    setTimeout(() => {
      $("#random-button").css("margin-top", "24px");
    }, 600);
    if (ChildComponentRef1.current) {
      ChildComponentRef1.current?.random();
    }
    if (ChildComponentRef2.current) {
      ChildComponentRef2.current?.random();
    }
    if (ChildComponentRef3.current) {
      ChildComponentRef3.current?.random();
    }
  };

  return (
    <Inner>
      <MachineWrap>
        <MachineHead>
          <div id="circleWrap">
            <Circle />
            <Circle black />
            <Circle />
          </div>
          <LongCircle>
            <h1>SLOT MACHINE</h1>
          </LongCircle>
          <div id="circleWrap">
            <Circle />
            <Circle black />
            <Circle />
          </div>
        </MachineHead>
        <MachineContent>
          <RectangleWrap>
            <Rectangle>
              <CarouselTemplate
                dataArr={firstList}
                type={0}
                ref={ChildComponentRef1}
                setSlot={setFirstValue}
              />
            </Rectangle>
            <Rectangle>
              <CarouselTemplate
                dataArr={secondList}
                type={1}
                ref={ChildComponentRef2}
                setSlot={setSecondValue}
              />
            </Rectangle>
            <Rectangle>
              <CarouselTemplate
                dataArr={thirdList}
                type={2}
                ref={ChildComponentRef3}
                setSlot={setThirdValue}
              />
            </Rectangle>
          </RectangleWrap>
          <MachineBtnWrap>
            <div>
              <div onClick={onClickRandom} aria-hidden id="random-button" />
            </div>
          </MachineBtnWrap>
        </MachineContent>
      </MachineWrap>
    </Inner>
  );
};

export default SlotMachine;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  zoom: 0.9;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: baseline;
  @media (max-width: 767px) {
    zoom: 1;
    flex-direction: column;
  }
`;

const MachineWrap = styled.div`
  width: 52.879em;
  height: 32.411em;
  border: 1px solid #4f4941;
  border-radius: 47px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.75em;
  @media (max-width: 767px) {
    zoom: 0.4;
  }
`;

const MachineHead = styled.div`
  width: 100%;
  margin-top: 2.125em;
  margin-bottom: 1.813em;
  display: flex;
  justify-content: center;
  #circleWrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const MachineContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RectangleWrap = styled.div`
  display: flex;
`;

type isblack = {
  black?: boolean;
};

const Circle = styled.div<isblack>`
  box-sizing: border-box;
  width: 1.404em;
  height: 1.346em;
  background: ${(props) => (props.black ? "#AAA39F" : "#FFFFFF")};
  border: 1px solid #cac2b7;
  border-radius: 50%;
`;

const LongCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 36.125em;
  height: 5.125em;
  background: #ffffff;
  border: 1px solid #c3baae;
  border-radius: 42.5px;
  margin: 0 3.741em;
  h1 {
    font-family: "LABDigital";
    font-size: 3.125em;
    line-height: 104%;
    color: #675b4f;
  }
`;
const Rectangle = styled.div`
  .cls-1 {
    fill: none;
    stroke: #a9a09c;
    stroke-miterlimit: 10;
    stroke-width: 6px;
  }
  .cls-2 {
    fill: none;
  }
  box-sizing: border-box;
  width: 12.284em;
  height: 18.368em;
  background: #ffffff;
  border: 1px solid #675b4f;
  border-radius: 2.938em;
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:nth-of-type(3)) {
    margin-right: 1.471em;
  }
  > div {
    box-sizing: border-box;
    height: 17.307em;
    width: 9.828em;
    border-right: 1px solid #675b4f;
    border-left: 1px solid #675b4f;
  }
`;

const MachineBtnWrap = styled.div`
  box-sizing: border-box;
  width: 3.451em;
  height: 18.368em;
  border: 1px solid #675b4f;
  border-radius: 47px;
  margin-left: 2.268em;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    box-sizing: border-box;
    width: 2.632em;
    height: 16.145em;
    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 47px;
    > div {
      cursor: pointer;
      box-sizing: border-box;
      width: 4.504em;
      height: 4.563em;
      background: #675b4f;
      border: 1px solid #675b4f;
      border-radius: 50%;
      margin-top: 1.5em;
      margin-left: -1.03em;
      transition: all 1s ease-out;
    }
  }
`;
