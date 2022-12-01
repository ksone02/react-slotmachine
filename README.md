[![npm version](https://badge.fury.io/js/react-random-slot-machine.svg)](https://badge.fury.io/js/react-random-slot-machine)

# react-random-slot-machine

> The library provides reactive slot machine components.
> <br>Insert the desired item using props into the component and receive the result of the slot machine.

## Table of contents

- [react-random-slot-machine](#react-random-slot-machine)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Authors](#authors)
  - [License](#license)

## Installation

To install and set up the library, run:

```sh
$ npm install react-random-slot-machine
```

Or if you prefer using Yarn:

```sh
$ yarn add react-random-slot-machine
```

## Usage

### Example

```tsx
import { SlotMachine } from "react-random-slot-machine";

const feelingArr = [
  {
    id: 0,
    img: <img src="#" alt="image" />,
    name: "JOY",
    value: "joy",
  },
  {
    id: 1,
    img: <img src="#" alt="image" />,
    name: "SAD",
    value: "sad",
  },
];

const App: React.FC = () => {
  const result = (resultArr: string[]) => {
    console.log(resultArr);
  };

  return (
    <div>
      <SlotMachine
        firstList={feelingArr}
        secondList={feelingArr}
        thirdList={feelingArr}
        resultToParams={result}
      />
    </div>
  );
};
```

### parameter

- #### firstList, secondList, thirdList:

```tsx
    // id is for indexing
    // insert item into img with ReactNode type
    // name is shown under the img item in slot machine
    // value is return value
    itemList: {id: number, img: React.ReactNode, name?: string, value: string}
```

- #### resultToParams:

```tsx
    // result will receive to parameter
    resultToParams: (resultArr: Array<string>) => void;
```

### Example Images

![example](https://user-images.githubusercontent.com/72087183/205001798-dea12dc6-68b4-449d-b075-55a2f522903f.png)

## Authors

- **Sangwon Kang** - [github](https://github.com/ksone02)

## License

[MIT License](https://andreasonny.mit-license.org/2019)
