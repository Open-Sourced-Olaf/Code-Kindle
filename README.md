## Code Kindle

A ReactJS webapp to convert source code into pseudocode using SMT( Statistical Machine Translation).

<p align="center">
<img src="https://i.ibb.co/d6c1zfT/code.png" alt="code">
</p>

## How does it work

- The converter page contains two editors, one for writing the source code that you want to convert and the other one which will display the
pseudocode after the conversion.
- You can also upload the file to be converted by firstly choosing the language from the dropdown menu and then browsing the file and uploading it.
- The file that you chose will also be displayed in the text editor.
- Now, just click on the convert button, it will run the docker container based compiler in the background.

## Future Scopes
- Add support to more languages
- Convert one language code into other like cpp code to php and so on.
- Improving the algorithm of the translator to include complex cases like multiple functional calls inside the main.


## Project Structure
- `backend` folder contains the code for the Django based API to upload the files into the projects directory.
- `code_converter` folder contains the frontend code deployed on DFINITY.
- `cpp-pseudogen` folder contains the translator code for cpp/c languages.
- `frontend` folder contains the UI of the entire webapp.
- `python-scripts` folder contains the translator for python source code.

## How to run the project locally.
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


 ## How to contribute.
 - Fork and clone the repository.
 - create a branch
 - make changes in that branch
 - add and commit your changes
 - then push the changes into your branch
 - now you can create a PR using that branch in our repository.
 - :tada: you have successfully contributed to this project.

## Useful links
- https://sdk.dfinity.org/docs/developers-guide/tutorials/custom-frontend.html
- https://mlh-fellowship.gitbook.io/fellow-handbook/sponsor-resources/dfinity
- Other links can be found in the WIKI page of this repository.

## 🌟 Contributors

<table>
	<tr>
		<td>
      <a href="https://github.com/Open-Sourced-Olaf/Code-Kindle/graphs/contributors">
        <img src="https://contrib.rocks/image?repo=Open-Sourced-Olaf/Code-Kindle" />
      </a>
		</td>
	</tr>
</table>

</div>
