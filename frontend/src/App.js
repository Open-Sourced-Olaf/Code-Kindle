import React, { useState } from "react";
import "./App.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["c", "cpp", "python"];
var language;
const defaultOption = options[0];

function App() {
  return <Converter {...ConverterData} />;
}

export default App;

function Converter(props) {
  const [state, setState] = useState({
    ans: "pseudocode",
  });
  const [file, setFile] = useState({ files: null });

  var myCode;
  const onSelect = (e) => {
    language = e.value;
    //  console.log(e.value);
  };

  function onChange(newValue) {
    //  value = ans;
    myCode = `${newValue}`;
    console.log("mycode", myCode);
    console.log("change", newValue);
  }

  console.log(state.ans); // 0

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
    primarybutton2Props,
  } = props;
  function handleConvert() {
    //alert("hello")code = "hello";
    console.log(myCode);
    console.log(language);
    let url2 = `http://localhost:3004?lang=${language}&code=${myCode}`;

    axios
      .post(url2, {
        body: myCode,
      })
      .then((res) => {
        console.log(res.data);

        // state.ans = res.data.stdout;
        // console.log(ans);
        setState({ ans: res.data.stdout });

        //setState({ count: state.count + 1 });
      })
      .catch((err) => console.log(err));
  }
  const handleFilesChange = (e) => {
    setFile(e.target.files[0]);

    console.log(e.target.files[0]);
    console.log(file.files);

    let form_data = new FormData();
    form_data.append("files", e.target.files[0]);
    var name = e.target.files[0];

     let url2 = `http://localhost:3004?lang=${language}&file=${name}`;

    axios
      .post(url2, {
        body: myCode,
      })
      .then((res) => {
        console.log(res.data);

        // state.ans = res.data.stdout;
        // console.log(ans);
        setState({ ans: res.data.stdout });

        //setState({ count: state.count + 1 });
      })
      .catch((err) => console.log(err));
  };

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

        <AceEditor
          width="600px"
          className="rectangle-10"
          mode="C++"
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          placeholder="Write the code to be converted"
          editorProps={{ $blockScrolling: true }}
          onChange={onChange}
          fontSize={14}
          wrapEnabled="true"
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <AceEditor
          value={state.ans}
          className="rectangle-11"
          placeholder={state.ans}
          mode="text"
          theme="monokai"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          width="600px"
          fontSize="14px"
          highlightActiveLine="true"
          wrapEnabled="true"
          readOnly="true"
        />

        <img className="line-3" src={line3} />
        <div className="go-back-281344 valign-text-middle chivo-normal-white-16px">
          {goBack281344}
        </div>
        <h1 className="pseudocode-281345 nunitosans-bold-white-52px">
          {pseudocode281345}
        </h1>

        <div className="primary-button border-1px-nobel">
          <div className="continue-practicing valign-text-bottom archivo-bold-white-16px">
            <input
              type="file"
              id="myfile"
              name="hello"
              enctype="multipart/form-data"
              onChange={handleFilesChange}
              required
            />
          </div>
        </div>

        <div className="primary-button-1 border-1px-nobel">
          <div className="continue-practicing-1 valign-text-bottom archivo-bold-white-16px">
            <button onClick={handleConvert}>Convert</button>
          </div>
        </div>
        <div className="text-3 chivo-normal-nobel-16px">
          <Dropdown
            options={options}
            onChange={onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>

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

const mainnavigationData = {
  place: "Home",
  browseI281343271: "Converter",
  messagesI2813432: "",
  avatar:
    "https://anima-uploads.s3.amazonaws.com/projects/602ed17b8747711f3b22546f/releases/602ed9da0392314c332dde89/img/avatar@2x.png",
};

const primarybuttonData = {
  continuePracticing: "Upload file",
};

const primarybutton2Data = {
  continuePracticing: "Convert",
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
  primarybutton2Props: primarybutton2Data,
};
