var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useImperativeHandle, useState, } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import $ from "jquery";
var CarouselTemplate = forwardRef(function (props, ref) {
    useImperativeHandle(ref, function () { return ({
        random: random,
    }); });
    var _a = useState(-1), typeNum = _a[0], setTypeNum = _a[1];
    var _b = useState(null), randomNum = _b[0], setRandomNum = _b[1];
    var _c = useState(0), resultIndex = _c[0], setResultIndex = _c[1];
    var data = props.dataArr;
    useEffect(function () {
        setTypeNum(props.type);
    }, [props.type]);
    useEffect(function () {
        if (randomNum != null && randomNum >= 0) {
            setResultIndex(randomNum);
        }
    }, [randomNum]);
    useEffect(function () {
        props.setSlot(data[resultIndex].value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultIndex]);
    var random = function () {
        var typeCount = props.dataArr.length;
        if (typeCount) {
            var element_1 = document.querySelectorAll(".carousel-".concat(typeNum, " .slider"))[0];
            var nextBtn_1 = document.querySelectorAll("#nextBtn");
            var prevBtn_1 = document.querySelectorAll("#prevBtn");
            $(nextBtn_1).css("opacity", "0");
            $(prevBtn_1).css("opacity", "0");
            setRandomNum(null);
            $(element_1).css("transform", "translate3d(0px, -".concat(typeCount, "00%, 0px)"));
            setTimeout(function () {
                $(element_1).css("transition", "none");
                $(element_1).css("transform", "translate3d(0px, 0%, 0px)");
                setTimeout(function () {
                    $(element_1).css("transition", "all 350ms ease");
                    $(element_1).css("transform", "translate3d(0px, -".concat(typeCount, "00%, 0px)"));
                    setTimeout(function () {
                        $(element_1).css("transition", "none");
                        $(element_1).css("transform", "translate3d(0px, 0%, 0px)");
                        setTimeout(function () {
                            $(element_1).css("transition", "all 350ms ease");
                            $(element_1).css("transform", "translate3d(0px, -".concat(typeCount, "00%, 0px)"));
                            setTimeout(function () {
                                $(element_1).css("transition", "none");
                                $(element_1).css("transform", "translate3d(0px, 0%, 0px)");
                                setTimeout(function () {
                                    $(element_1).css("transition", "all 350ms ease");
                                    $(element_1).css("transform", "translate3d(0px, -".concat(typeCount, "00%, 0px)"));
                                    setTimeout(function () {
                                        $(element_1).css("transform", "none");
                                        setRandomNum(Math.floor(Math.random() * (typeCount - 1)));
                                        $(nextBtn_1).css("opacity", "1");
                                        $(prevBtn_1).css("opacity", "1");
                                    }, 250);
                                }, 20);
                            }, 250);
                        }, 20);
                    }, 250);
                }, 20);
            }, 250);
        }
    };
    return (_jsx(Slider, { children: _jsx(Carousel, __assign({ className: "carousel-".concat(typeNum), axis: "vertical", showArrows: true, showThumbs: false, showStatus: false, selectedItem: randomNum || 0, centerMode: true, swipeable: true, emulateTouch: true, preventMovementUntilSwipeScrollTolerance: true, swipeScrollTolerance: 10, renderArrowPrev: function (clickHandler, isPrev) {
                return (isPrev && (_jsx("button", __assign({ type: "button", id: "prevBtn" }, { children: _jsx("svg", __assign({ onClick: clickHandler, width: "61", height: "18", viewBox: "0 0 61 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("path", { d: "M0.238281 16.8579L31.4243 1.43499L60.1155 16.8579", stroke: "#8B7E6A" }) })) }))));
            }, renderArrowNext: function (clickHandler, isNext) {
                return (isNext && (_jsx("button", __assign({ type: "button", id: "nextBtn" }, { children: _jsx("svg", __assign({ onClick: clickHandler, width: "64", height: "18", viewBox: "0 0 64 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("path", { d: "M1.17969 1.21582L33.4125 16.6876L63.0668 1.21582", stroke: "#8B7E6A" }) })) }))));
            } }, { children: data.map(function (el) {
                return (_jsxs("div", __assign({ className: "carousel-el" }, { children: [el.img, _jsx("p", { children: el.name })] }), el.id));
            }) })) }));
});
export default CarouselTemplate;
var Slider = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  overflow: hidden;\n  button {\n    cursor: pointer;\n    z-index: 998;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    transition: all 0.6s ease;\n  }\n  #nextBtn {\n    bottom: 0;\n  }\n\n  .carousel-el {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 60%;\n    transition: all 0.6s ease;\n    @media (max-width: 767px) {\n      zoom: 1.3;\n    }\n    p {\n      font-family: \"GmarketSansBold\";\n      font-style: normal;\n      font-weight: 500;\n      font-size: 0.938em;\n      line-height: 175.5%;\n      color: #a29b97;\n      transition: all 0.6s ease;\n    }\n    svg {\n      margin-bottom: 1.875em;\n      width: 3.563em;\n      height: 3.563em;\n      transition: all 0.2s ease;\n    }\n  }\n  #temp {\n    svg {\n      width: 5.188em;\n    }\n  }\n  .carousel-root {\n    height: 100%;\n    width: 100%;\n\n    .carousel-slider {\n      position: relative;\n      height: 100%;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      .control-dots {\n        display: none;\n      }\n      .slider-wrapper {\n        width: 100%;\n        height: 100% !important;\n        > .slider {\n          height: 100% !important;\n          .slide {\n            height: 100%;\n            list-style: none;\n            .carousel-el {\n              height: 100%;\n            }\n          }\n          .selected {\n            svg {\n              transform: scale(1.4);\n              filter: brightness(40%);\n            }\n            p {\n              transform: scale(1.5);\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  overflow: hidden;\n  button {\n    cursor: pointer;\n    z-index: 998;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    transition: all 0.6s ease;\n  }\n  #nextBtn {\n    bottom: 0;\n  }\n\n  .carousel-el {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 60%;\n    transition: all 0.6s ease;\n    @media (max-width: 767px) {\n      zoom: 1.3;\n    }\n    p {\n      font-family: \"GmarketSansBold\";\n      font-style: normal;\n      font-weight: 500;\n      font-size: 0.938em;\n      line-height: 175.5%;\n      color: #a29b97;\n      transition: all 0.6s ease;\n    }\n    svg {\n      margin-bottom: 1.875em;\n      width: 3.563em;\n      height: 3.563em;\n      transition: all 0.2s ease;\n    }\n  }\n  #temp {\n    svg {\n      width: 5.188em;\n    }\n  }\n  .carousel-root {\n    height: 100%;\n    width: 100%;\n\n    .carousel-slider {\n      position: relative;\n      height: 100%;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      .control-dots {\n        display: none;\n      }\n      .slider-wrapper {\n        width: 100%;\n        height: 100% !important;\n        > .slider {\n          height: 100% !important;\n          .slide {\n            height: 100%;\n            list-style: none;\n            .carousel-el {\n              height: 100%;\n            }\n          }\n          .selected {\n            svg {\n              transform: scale(1.4);\n              filter: brightness(40%);\n            }\n            p {\n              transform: scale(1.5);\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
