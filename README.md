<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/Open-Sourced-Olaf/Code-Kindle/">
    Code Kindle<br/>
    <img src="https://i.ibb.co/d6c1zfT/code.png" alt="code" height="100" width="200">
  </a>

  <p align="center">
    "A ReactJS webapp to convert source code into pseudocode using SMT( Statistical Machine Translation)."
    <br /><br />
    <a href="https://gb33l-zyaaa-aaaab-aagyq-cai.ic0.app/"><strong>Use Code Kindle</strong></a>
    <br />
    <br />
    <a href="https://en.wikipedia.org/wiki/Statistical_machine_translation">What is SMT?</a>
    ·
    <a href="https://gb33l-zyaaa-aaaab-aagyq-cai.ic0.app/">Live</a>
    .
    <a href="https://github.com/Open-Sourced-Olaf/Code-Kindle/issues">Report Bug</a>
    ·
    <a href="https://github.com/Open-Sourced-Olaf/Code-Kindle/issues">Request Feature</a>
  </p>
</p>


<!-- ABOUT THE PROJECT -->

## About The Project

An aid to learning which helps to visualize source code into pseudocode using SMT 
<br/>
You can  use it live here: <a href="https://gb33l-zyaaa-aaaab-aagyq-cai.ic0.app/">Code Kindle</a>

<!-- Usage Guidelines -->
### Usage Guidelines 

- The converter page contains two editors, one for writing the source code that you want to convert and the other one which will display the
pseudocode after the conversion.
- You can also upload the file to be converted by firstly choosing the language from the dropdown menu and then browsing the file and uploading it.
- The file that you chose will also be displayed in the text editor.
- Now, just click on the convert button, it will run the docker container based compiler in the background.

### Built With

- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [React](https://reactjs.org/)
- [Dfinity](https://dfinity.org/)
- And obviously lot of ❤️



<!-- Project Breakdown -->
## Project Architecture 

- `backend` folder contains the code for the Django based API to upload the files into the projects directory.
- `code_converter` folder contains the frontend code deployed on DFINITY.
- `cpp-pseudogen` folder contains the translator code for cpp/c languages.
- `frontend` folder contains the UI of the entire webapp.
- `python-scripts` folder contains the translator for python source code.



<!-- GETTING STARTED -->

## Getting Started as Contributor

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/Open-Sourced-Olaf/Code-Kindle.git
```

2. Install NPM packages

```sh
npm install
```
3. Run Locally

```sh
npm run start
```
<!-- ROADMAP -->

## Roadmap

- Add support to more languages
- Convert one language code into other like cpp code to php and so on.
- Improving the algorithm of the translator to include complex cases like multiple functional calls inside the main.
- See the [open issues](https://github.com/Open-Sourced-Olaf/Code-Kindle/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->

## Local Dev Setup

- To translate the cpp/c codes,move to the cpp-pseudogen folder upload a file named "prog.cpp" and then compile the main.cpp using the command
 `g++ main.cpp -o main` after that execute `./main`, it will display the output in the terminal as well as create a output.text file.
 - To translate the python code, move to the python-scripts folder, upload a file named hello.py, then compile the generate-pseudo.py file using the
   `python3 generate-pseudo.py`, it will produce hello-pseudo file in the working directory.
  - to run the frontend code, move to the frontend directory and run `npm i` followed by `npm start`.
 - to deploy and run the code on DFINITY, run `dfx start --background` to start the server in the background, then run `dfx deploy`, it will produce a      code_converter_assets canister id, copy that.
 - then open dfx.json and find the ip address, now the url of the web app will be http://127.0.0.1:8000/?canisterId=[canister-id].
 - to deploy, run `dfx ping ic`, `dfx deploy --network=ic`.
 - the deployed url will be https://[ your canisterId here ].ic0.app/ 
 > https://gb33l-zyaaa-aaaab-aagyq-cai.ic0.app/


## Admins
Important decisions regarding the project are taken by the following maintainer.

| Anjali  | Deepak | Prashi | Bushra | Yvon Manzi |
|---|---|---|---|---|
| <img  height="100" width="100" src="https://avatars.githubusercontent.com/u/51020896?v=4">  | <img  height="100" width="100" src="https://avatars.githubusercontent.com/u/64848982?v=4">   | <img  height="100" width="100" src="https://avatars.githubusercontent.com/u/40317432?v=4">   | <img  height="100" width="100" src="https://avatars.githubusercontent.com/u/45208821?v=4">   | <img  height="100" width="100" src="https://avatars.githubusercontent.com/u/46822938?v=4">   |
| [@anjalisoni3655](https://github.com/anjalisoni3655)  | [@DebugAgrawal](https://github.com/DebugAgrawal/)  | [@prashi23](https://github.com/prashi23) | [@codingbug671](codingbug671)  | [@yvonmanzi](https://github.com/yvonmanzi)  |



## Deployment and Resources
- https://sdk.dfinity.org/docs/developers-guide/tutorials/custom-frontend.html
- https://mlh-fellowship.gitbook.io/fellow-handbook/sponsor-resources/dfinity
- Other links can be found in the [WIKI page](https://github.com/Open-Sourced-Olaf/Code-Kindle/wiki).



