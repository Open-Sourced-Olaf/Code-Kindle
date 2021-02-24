import code_converter from "ic:canisiters/code_converter";
import * as React from "react";
import { render } from "react-dom";
import "./App.css";
import { Converter, ConverterData } from "./converter.jsx";

class MyHello extends React.Component {
  render() {
    return <Converter {...ConverterData} />;
  }
}

render(<MyHello />, document.getElementById("app"));
