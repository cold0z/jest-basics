# jest-basics
The "jest-basics" repository is a comprehensive mini project that focuses on teaching the fundamental concepts of testing JavaScript code using Jest, a popular testing framework, in conjunction with Node.js.

This project serves as an educational resource for developers who are new to Jest or want to enhance their understanding of unit testing in JavaScript. It provides a hands-on learning experience with practical examples and exercises that cover the essential concepts and techniques required to write effective tests.


# My Project

Welcome to My Project! This is a Node.js project that utilizes Jest for testing.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js (version 12 or above)
- npm (Node Package Manager)


## Initialize the project by running the following command:
```
npm init -y
```
This will create a package.json file with default values.

Install Jest as a dev dependency by running the following command:
```
npm install --save-dev jest
```
Install TypeScript types for Jest by running the following command:
```
npm install --save @types/jest
```

### Running Tests

To run the tests, we will be using Jest. Follow the steps below:

Open the terminal and navigate to the project directory.

```
cd my-project
```
Run the following command to execute the tests:

```
npm test
```

Jest will automatically look for test files matching the pattern *.test.js or *.spec.js in the project's directory structure and execute them.

By default, Jest will run the tests once and exit. However, if you want to keep the tests running and automatically re-run them whenever there are changes, you can use the watch mode. To update the test script in the package.json file, follow these steps:

Open the package.json file in your project directory.
Locate the "test" script, which might look like this:
```
"test": "echo \"Error: no test specified\" && exit 1"
```
Replace the existing command with the following:
```
"test": "jest --watchAll"
```
Now, when you run npm test, Jest will stay in watch mode, constantly monitoring your files for changes and re-running the tests.

