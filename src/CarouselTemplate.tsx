import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import $ from "jquery";

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

const CarouselTemplate = forwardRef<CallFn, CarouselTemplateType>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({
      random,
    }));
    const [typeNum, setTypeNum] = useState<number>(-1);
    const [randomNum, setRandomNum] = useState<number | null>(null);
    const [resultIndex, setResultIndex] = useState<number>(0);

    const data = props.dataArr;

    useEffect(() => {
      setTypeNum(props.type);
    }, [props.type]);

    useEffect(() => {
      if (randomNum != null && randomNum >= 0) {
        setResultIndex(randomNum);
      }
    }, [randomNum]);

    useEffect(() => {
      props.setSlot(data[resultIndex].value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultIndex]);

    const random = () => {
      const typeCount = props.dataArr.length;
      if (typeCount) {
        const element = document.querySelectorAll(
          `.carousel-${typeNum} .slider`
        )[0];
        const nextBtn = document.querySelectorAll("#nextBtn");
        const prevBtn = document.querySelectorAll("#prevBtn");
        $(nextBtn).css("opacity", "0");
        $(prevBtn).css("opacity", "0");

        setRandomNum(null);

        $(element).css("transform", `translate3d(0px, -${typeCount}00%, 0px)`);
        setTimeout(() => {
          $(element).css("transition", "none");
          $(element).css("transform", `translate3d(0px, 0%, 0px)`);
          setTimeout(() => {
            $(element).css("transition", "all 350ms ease");
            $(element).css(
              "transform",
              `translate3d(0px, -${typeCount}00%, 0px)`
            );
            setTimeout(() => {
              $(element).css("transition", "none");
              $(element).css("transform", `translate3d(0px, 0%, 0px)`);
              setTimeout(() => {
                $(element).css("transition", "all 350ms ease");
                $(element).css(
                  "transform",
                  `translate3d(0px, -${typeCount}00%, 0px)`
                );
                setTimeout(() => {
                  $(element).css("transition", "none");
                  $(element).css("transform", `translate3d(0px, 0%, 0px)`);
                  setTimeout(() => {
                    $(element).css("transition", "all 350ms ease");
                    $(element).css(
                      "transform",
                      `translate3d(0px, -${typeCount}00%, 0px)`
                    );
                    setTimeout(() => {
                      $(element).css("transform", `none`);
                      setRandomNum(Math.floor(Math.random() * (typeCount - 1)));
                      $(nextBtn).css("opacity", "1");
                      $(prevBtn).css("opacity", "1");
                    }, 250);
                  }, 20);
                }, 250);
              }, 20);
            }, 250);
          }, 20);
        }, 250);
      }
    };

    return (
      <Slider>
        <Carousel
          className={`carousel-${typeNum}`}
          axis="vertical"
          showArrows
          showThumbs={false}
          showStatus={false}
          selectedItem={randomNum || 0}
          centerMode
          swipeable
          emulateTouch
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={10}
          renderArrowPrev={(clickHandler, isPrev) => {
            return (
              isPrev && (
                <button type="button" id="prevBtn">
                  <svg
                    onClick={clickHandler}
                    width="61"
                    height="18"
                    viewBox="0 0 61 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.238281 16.8579L31.4243 1.43499L60.1155 16.8579"
                      stroke="#8B7E6A"
                    />
                  </svg>
                </button>
              )
            );
          }}
          renderArrowNext={(clickHandler, isNext) => {
            return (
              isNext && (
                <button type="button" id="nextBtn">
                  <svg
                    onClick={clickHandler}
                    width="64"
                    height="18"
                    viewBox="0 0 64 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.17969 1.21582L33.4125 16.6876L63.0668 1.21582"
                      stroke="#8B7E6A"
                    />
                  </svg>
                </button>
              )
            );
          }}
        >
          {data.map((el) => {
            return (
              <div key={el.id} className="carousel-el">
                {el.img}
                <p>{el.name}</p>
              </div>
            );
          })}
        </Carousel>
      </Slider>
    );
  }
);

export default CarouselTemplate;

const Slider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  button {
    cursor: pointer;
    z-index: 998;
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    transition: all 0.6s ease;
  }
  #nextBtn {
    bottom: 0;
  }

  .carousel-el {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
    transition: all 0.6s ease;
    @media (max-width: 767px) {
      zoom: 1.3;
    }
    p {
      font-family: "GmarketSansBold";
      font-style: normal;
      font-weight: 500;
      font-size: 0.938em;
      line-height: 175.5%;
      color: #a29b97;
      transition: all 0.6s ease;
    }
    svg {
      margin-bottom: 1.875em;
      width: 3.563em;
      height: 3.563em;
      transition: all 0.2s ease;
    }
  }
  #temp {
    svg {
      width: 5.188em;
    }
  }
  .carousel-root {
    height: 100%;
    width: 100%;

    .carousel-slider {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .control-dots {
        display: none;
      }
      .slider-wrapper {
        width: 100%;
        height: 100% !important;
        > .slider {
          height: 100% !important;
          .slide {
            height: 100%;
            list-style: none;
            .carousel-el {
              height: 100%;
            }
          }
          .selected {
            svg {
              transform: scale(1.4);
              filter: brightness(40%);
            }
            p {
              transform: scale(1.5);
            }
          }
        }
      }
    }
  }
`;
