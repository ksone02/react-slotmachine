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
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import styled from "styled-components";
import CarouselTemplate from "./CarouselTemplate";
var SlotMachine = function (_a) {
    var firstList = _a.firstList, secondList = _a.secondList, thirdList = _a.thirdList, resultToParams = _a.resultToParams;
    var _b = useState(["", "", ""]), resultData = _b[0], setResultData = _b[1];
    var _c = useState(""), firstValue = _c[0], setFirstValue = _c[1];
    var _d = useState(""), secondValue = _d[0], setSecondValue = _d[1];
    var _e = useState(""), thirdValue = _e[0], setThirdValue = _e[1];
    var ChildComponentRef1 = useRef(null);
    var ChildComponentRef2 = useRef(null);
    var ChildComponentRef3 = useRef(null);
    useEffect(function () {
        setResultData([firstValue, secondValue, thirdValue]);
    }, [firstValue, secondValue, thirdValue]);
    useEffect(function () {
        resultToParams(resultData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultData]);
    var onClickRandom = function () {
        var _a, _b, _c;
        $("#random-button").css("margin-top", "160px");
        setTimeout(function () {
            $("#random-button").css("margin-top", "24px");
        }, 600);
        if (ChildComponentRef1.current) {
            (_a = ChildComponentRef1.current) === null || _a === void 0 ? void 0 : _a.random();
        }
        if (ChildComponentRef2.current) {
            (_b = ChildComponentRef2.current) === null || _b === void 0 ? void 0 : _b.random();
        }
        if (ChildComponentRef3.current) {
            (_c = ChildComponentRef3.current) === null || _c === void 0 ? void 0 : _c.random();
        }
    };
    return (_jsx(Inner, { children: _jsxs(MachineWrap, { children: [_jsxs(MachineHead, { children: [_jsxs("div", __assign({ id: "circleWrap" }, { children: [_jsx(Circle, {}), _jsx(Circle, { black: true }), _jsx(Circle, {})] })), _jsx(LongCircle, { children: _jsx("h1", { children: "SLOT MACHINE" }) }), _jsxs("div", __assign({ id: "circleWrap" }, { children: [_jsx(Circle, {}), _jsx(Circle, { black: true }), _jsx(Circle, {})] }))] }), _jsxs(MachineContent, { children: [_jsxs(RectangleWrap, { children: [_jsx(Rectangle, { children: _jsx(CarouselTemplate, { dataArr: firstList, type: 0, ref: ChildComponentRef1, setSlot: setFirstValue }) }), _jsx(Rectangle, { children: _jsx(CarouselTemplate, { dataArr: secondList, type: 1, ref: ChildComponentRef2, setSlot: setSecondValue }) }), _jsx(Rectangle, { children: _jsx(CarouselTemplate, { dataArr: thirdList, type: 2, ref: ChildComponentRef3, setSlot: setThirdValue }) })] }), _jsx(MachineBtnWrap, { children: _jsx("div", { children: _jsx("div", { onClick: onClickRandom, "aria-hidden": true, id: "random-button" }) }) })] })] }) }));
};
export default SlotMachine;
var Inner = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  zoom: 0.9;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: baseline;\n  @media (max-width: 767px) {\n    zoom: 1;\n    flex-direction: column;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  zoom: 0.9;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: baseline;\n  @media (max-width: 767px) {\n    zoom: 1;\n    flex-direction: column;\n  }\n"])));
var MachineWrap = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 52.879em;\n  height: 32.411em;\n  border: 1px solid #4f4941;\n  border-radius: 47px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 3.75em;\n  @media (max-width: 767px) {\n    zoom: 0.4;\n  }\n"], ["\n  width: 52.879em;\n  height: 32.411em;\n  border: 1px solid #4f4941;\n  border-radius: 47px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 3.75em;\n  @media (max-width: 767px) {\n    zoom: 0.4;\n  }\n"])));
var MachineHead = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  margin-top: 2.125em;\n  margin-bottom: 1.813em;\n  display: flex;\n  justify-content: center;\n  #circleWrap {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n"], ["\n  width: 100%;\n  margin-top: 2.125em;\n  margin-bottom: 1.813em;\n  display: flex;\n  justify-content: center;\n  #circleWrap {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n"])));
var MachineContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])));
var RectangleWrap = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var Circle = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: 1.404em;\n  height: 1.346em;\n  background: ", ";\n  border: 1px solid #cac2b7;\n  border-radius: 50%;\n"], ["\n  box-sizing: border-box;\n  width: 1.404em;\n  height: 1.346em;\n  background: ", ";\n  border: 1px solid #cac2b7;\n  border-radius: 50%;\n"])), function (props) { return (props.black ? "#AAA39F" : "#FFFFFF"); });
var LongCircle = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 36.125em;\n  height: 5.125em;\n  background: #ffffff;\n  border: 1px solid #c3baae;\n  border-radius: 42.5px;\n  margin: 0 3.741em;\n  h1 {\n    font-family: \"LABDigital\";\n    font-size: 3.125em;\n    line-height: 104%;\n    color: #675b4f;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 36.125em;\n  height: 5.125em;\n  background: #ffffff;\n  border: 1px solid #c3baae;\n  border-radius: 42.5px;\n  margin: 0 3.741em;\n  h1 {\n    font-family: \"LABDigital\";\n    font-size: 3.125em;\n    line-height: 104%;\n    color: #675b4f;\n  }\n"])));
var Rectangle = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  .cls-1 {\n    fill: none;\n    stroke: #a9a09c;\n    stroke-miterlimit: 10;\n    stroke-width: 6px;\n  }\n  .cls-2 {\n    fill: none;\n  }\n  box-sizing: border-box;\n  width: 12.284em;\n  height: 18.368em;\n  background: #ffffff;\n  border: 1px solid #675b4f;\n  border-radius: 2.938em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:not(:nth-of-type(3)) {\n    margin-right: 1.471em;\n  }\n  > div {\n    box-sizing: border-box;\n    height: 17.307em;\n    width: 9.828em;\n    border-right: 1px solid #675b4f;\n    border-left: 1px solid #675b4f;\n  }\n"], ["\n  .cls-1 {\n    fill: none;\n    stroke: #a9a09c;\n    stroke-miterlimit: 10;\n    stroke-width: 6px;\n  }\n  .cls-2 {\n    fill: none;\n  }\n  box-sizing: border-box;\n  width: 12.284em;\n  height: 18.368em;\n  background: #ffffff;\n  border: 1px solid #675b4f;\n  border-radius: 2.938em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:not(:nth-of-type(3)) {\n    margin-right: 1.471em;\n  }\n  > div {\n    box-sizing: border-box;\n    height: 17.307em;\n    width: 9.828em;\n    border-right: 1px solid #675b4f;\n    border-left: 1px solid #675b4f;\n  }\n"])));
var MachineBtnWrap = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: 3.451em;\n  height: 18.368em;\n  border: 1px solid #675b4f;\n  border-radius: 47px;\n  margin-left: 2.268em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  > div {\n    box-sizing: border-box;\n    width: 2.632em;\n    height: 16.145em;\n    background: #ffffff;\n    border: 1px solid #675b4f;\n    border-radius: 47px;\n    > div {\n      cursor: pointer;\n      box-sizing: border-box;\n      width: 4.504em;\n      height: 4.563em;\n      background: #675b4f;\n      border: 1px solid #675b4f;\n      border-radius: 50%;\n      margin-top: 1.5em;\n      margin-left: -1.03em;\n      transition: all 1s ease-out;\n    }\n  }\n"], ["\n  box-sizing: border-box;\n  width: 3.451em;\n  height: 18.368em;\n  border: 1px solid #675b4f;\n  border-radius: 47px;\n  margin-left: 2.268em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  > div {\n    box-sizing: border-box;\n    width: 2.632em;\n    height: 16.145em;\n    background: #ffffff;\n    border: 1px solid #675b4f;\n    border-radius: 47px;\n    > div {\n      cursor: pointer;\n      box-sizing: border-box;\n      width: 4.504em;\n      height: 4.563em;\n      background: #675b4f;\n      border: 1px solid #675b4f;\n      border-radius: 50%;\n      margin-top: 1.5em;\n      margin-left: -1.03em;\n      transition: all 1s ease-out;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
