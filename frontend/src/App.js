import React from "react";
import "./App.css";

function App() {
  return <Converter {...ConverterData} />;
}

export default App;

function Converter(props) {
  const {
    rectangle10,
    rectangle11,
    line3,
    goBack281344,
    pseudocode281345,
    text3,
    sourceCode281349,
    mainnavigationProps,
    primarybuttonProps,
    primarybutton2Props
  } = props;

  return (
    <div className="converter">
      <Mainnavigation
        place={mainnavigationProps.place}
        browseI281343271={mainnavigationProps.browseI281343271}
        messagesI2813432={mainnavigationProps.messagesI2813432}
        avatar={mainnavigationProps.avatar}
      />
      <div className="overlap-group">
        <div className="rectangle-9"></div>
        <img className="rectangle-10" src={rectangle10} />
        <img className="rectangle-11" src={rectangle11} />
        <img className="line-3" src={line3} />
        <div className="go-back-281344 valign-text-middle chivo-normal-white-16px">
          {goBack281344}
        </div>
        <h1 className="pseudocode-281345 nunitosans-bold-white-52px">
          {pseudocode281345}
        </h1>
        <div className="text-3 chivo-normal-nobel-16px">{text3}</div>
        <Primarybutton
          continuePracticing={primarybuttonProps.continuePracticing}
        />
        <Primarybutton2
          continuePracticing={primarybutton2Props.continuePracticing}
        />
        <div className="source-code-281349 nunitosans-bold-white-52px">
          {sourceCode281349}
        </div>
      </div>
    </div>
  );
}

function Mainnavigation(props) {
  const { place, browseI281343271, messagesI2813432, avatar } = props;

  return (
    <div className="main-navigation">
      <div className="place archivo-bold-black-18px">{place}</div>
      <div className="browse-i281343271 archivo-bold-olive-18px">
        {browseI281343271}
      </div>
      <div className="messages-i2813432 archivo-normal-olive-16px">
        {messagesI2813432}
      </div>
      <img className="avatar" src={avatar} />
    </div>
  );
}

function Primarybutton(props) {
  const { continuePracticing } = props;

  return (
    <div className="primary-button border-1px-nobel">
      <div className="continue-practicing valign-text-bottom archivo-bold-white-16px">
        {continuePracticing}
      </div>
    </div>
  );
}

function Primarybutton2(props) {
  const { continuePracticing } = props;

  return (
    <div className="primary-button-1 border-1px-nobel">
      <div className="continue-practicing-1 valign-text-bottom archivo-bold-white-16px">
        {continuePracticing}
      </div>
    </div>
  );
}
const mainnavigationData = {
  place: "Home",
  browseI281343271: "Converter",
  messagesI2813432: "",
  avatar:
    "https://anima-uploads.s3.amazonaws.com/projects/602ed17b8747711f3b22546f/releases/602ed9da0392314c332dde89/img/avatar@2x.png"
};

const primarybuttonData = {
  continuePracticing: "Upload file"
};

const primarybutton2Data = {
  continuePracticing: "Convert"
};

const ConverterData = {
  rectangle10:
    "https://anima-uploads.s3.amazonaws.com/projects/602ed17b8747711f3b22546f/releases/602ed35f8c32304a5f5ff95b/img/rectangle-10@1x.svg",
  rectangle11:
    "https://anima-uploads.s3.amazonaws.com/projects/602ed17b8747711f3b22546f/releases/602ed35f8c32304a5f5ff95b/img/rectangle-10@1x.svg",
  line3:
    "https://anima-uploads.s3.amazonaws.com/projects/602ed17b8747711f3b22546f/releases/602ed35f8c32304a5f5ff95b/img/line-3@1x.svg",
  goBack281344: "Go Back",
  pseudocode281345: "Pseudocode",
  text3: "Let’s get it started",
  sourceCode281349: "Source code",
  mainnavigationProps: mainnavigationData,
  primarybuttonProps: primarybuttonData,
  primarybutton2Props: primarybutton2Data
};
