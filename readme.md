# WTD - AI as Quality Engineer
![alt text](image-1.png)

## Project Description
"WTD - AI as Quality Engineer" is a project specifically designed for the hackathon hosted by Wizeline, leveraging OpenAI to assist Quality Assurance (QA) testers in automating and enhancing daily test processes.

### Motivation
The primary aim of this project is to explore the practical applications of OpenAI in the field of software testing and quality assurance.

On the other hand, to meet the criteria of the following standards
- The problem to be solved: Creating faster automation scripts from manual test cases can be time-consuming and prone to human error, especially when working with TestCafe, JavaScript, and Node.js. The goal is to automate the conversion of manual test cases into executable scripts to enhance efficiency and accuracy in testing.

- How it was solved? This challenge was addressed by developing two AI-powered scripts. The first script processes a text file containing the manual test case steps. It interprets these steps and generates a basic automation script. The second script then takes this generated code and refines it, producing the final, executable test files. This automated approach leverages OpenAI's capabilities to streamline the creation of automation scripts.

- Expected results after implementing the tool: Implementing this tool is expected to significantly boost my QA performance. By automating the script generation process, it reduces the time and effort required to create test scripts, enhances accuracy by minimizing human errors, and optimizes the overall testing workflow. As a result. my QA tasks can be completed faster, more efficiently, and with greater consistency.

- How the tool works internally? The tool operates in two primary stages.

   - Initial Script Generation:
   The first script reads a text file containing detailed manual test case steps.
   Based on this interpretation, it generates a basic automation .txt written in JavaScript for TestCafe following and refines the tests with a promp created by me that makes to follow a bunch of rules of good practices, ensuring it meets the minimum required standards.

   - Script Refinement and File Generation:
   The second script reads the initial script generated by the first one.
   It extracts and produces from this script the necessary files and folders that can be directly used in the testing environment.


### Key Features
- Automated generation of scripts and files using OpenAI.
- End-to-end testing with TestCafe.
- Secure environment configuration using dotenv.
- Comprehensive test coverage to ensure software quality with good practices.

## Table of Contents
1. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Installation Steps](#installation-steps)
   - [Configuration](#configuration)
2. [Usage](#usage)
   - [Basic Usage](#basic-usage)
3. [Testing](#testing)
   - [Running Tests](#running-tests)
   - [Test Coverage](#test-coverage)
4. [Acknowledgements](#acknowledgements)
5. [License](#license)
6. [Contact Information](#contact-information)

## Installation

### Prerequisites
- Node.js v20.13.1
- npm v10.5.2

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/wtd-ai-as-quality-engineer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd wtd-ai-as-quality-engineer
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

   ```env
   API_KEY=
   BASE_URL=
   USER_NAME=
   USER_PASSWORD=
   ```
   IMPORTANT: All required variables are available on the [saucedemo](https://www.saucedemo.com/) page.

## Usage

### Basic Usage
You can start by utilizing the OpenAI integration to generate automation test script and files based on predefined rules. It is essential to run them in the following order, otherwise will not work properly.

1. Use OpenAI to generate code from the example.txt file:
   ```bash
   npm run gen-code
   ```  
   OR

   ```bash
   node src/utils/openai-genCode.js
   ```
2. Use OpenAI to generate files from the generated code:
   ```bash
   npm run gen-files
   ```
   OR

   ```bash
   node src/utils/openai-genFile.js
   ```

## Testing

### Running Tests
After runing the AI scripts, Now you can run the test, use the following command:
```bash
npm run test
```
OR

```bash
testcafe chrome src/tests/Login.test.js
```

### Test Coverage
The project does not explicitly include a tool for test coverage reports, but you can integrate tools like Allure with TestCafe for this purpose.

## Acknowledgements

### Credits
- Node.js and npm for the runtime and package management.
- TestCafe v3.6.0 for the end-to-end testing framework.
- Dotenv v16.4.5 for environment variable security.
- OpenAI v4.47.1 for the AI model.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](LICENSE) file.

## Contact Information

Developed by rrodriguez.  
For questions or feedback, please reach out at ricardorodriguez9802@gmail.com.