import React from "react";
import { feelingArr } from "./FeelingCarousel";
import SlotMachine from "./SlotMachine";

const App: React.FC = () => {
  return (
    <SlotMachine
      firstList={feelingArr}
      secondList={feelingArr}
      thirdList={feelingArr}
    />
  );
};

export default App;
