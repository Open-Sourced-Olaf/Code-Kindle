import React from "react";
const axios = require("axios");

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    console.log(this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:3004/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
    var reader = new FileReader();
    var fileToRead = document.querySelector("input").files[0];

    // attach event, that will be fired, when read is end
    reader.addEventListener("loadend", function () {
      // reader.result contains the contents of blob as a typed array
      // we insert content of file in DOM here
      document.getElementById("file").innerText = reader.result;
     // content = reader.result;
      console.log(reader.result);
    });

    // start reading a loaded file
    reader.readAsText(fileToRead);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="file" name="myImage" id="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default Upload;
