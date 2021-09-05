# CRMPro_POMFramework_WebDriverIO
Test Automation Suite for Free CRMPRO Application using Web Driver IO POM Framework

This is a sample project that uses WebdriverIO and JavaScript. 
It includes examples of the PageObject Model for using WebdriverIO for web browser testing.

Installation Instructions:

1. Install Node.js: www.nodejs.org/en/download:
   Check the version using $node -v to check the latest node version installed.
   Also look for npm using $npm -v to check the latest npm version installed.
2. Set Node home path in System variables(NODE_HOME)
3. Create new NPM project: $npm init --> In a folder where project needs to be created.
   Answer the questions to create package.json file having basic configuration information.
4. Install VS Code Editor
5. Download and import project into editor like Visual Studio Code
6. Importance of package.json in Node projects
7. Install WebDriver CLI Dependencies:
8. Run using cmd prompt to install WebDriverIO dependencies:
    $npm install webdriverio --save-dev
	or using the single command:
	$npm install @wdio/cli
9. Generate Configuration File to store WebDriver IO Settings(Below cmd has wdio -> WebDriverIO installed in node_modules directory
	TestRunner y -> default settings)
	$npx wdio config -y
	Certain questions will be asked like under WDIO Configuration Helper(without -y option):
	Where should your tests be launched? local
	Where is your automation backend located?Select >On my local machine
		>On my local machine
		>In the cloud using sauce labs 
		>In the cloud using BrowserStack or TestingBot or a different service
		>I have my own Selenium cloud
	Which automation framework do you want to use?Select >Mocha
		>Mocha
		>Jasmine
		>Cucumber
	Do you want to run WDIO Commands synchronous or asynchronous?Select >sync
		>sync
		>async
	Where are your test specs located?Select (./test/specs/**/*.js)
		>(./test/specs/**/*.js)
	Which reporter do you want to use?(Press <space> to select, <a> to toggle all, <i> to invert selection)Select spec
		>spec
		>dot
		>junit
		>allure
		>sumologic
		>concise
		>reportportal
		>video
		>json
		>cucumber
		>mochawesome
		>timeline
		>html
		>markdown
		(Move up and doen to reveal more choices)
	Do you want to add a service to your test setup?(Press <space> to select, <a> to toggle all, <i> to invert selection)Select chromedriver
		>chromedriver
		>sauce
		>testingbot
		>selenium-standalone
		>devtools
		>applitools
		>browserstack
		>crossbrowsertesting
		>zafira-listener
		>reportportal
		>docker
		>wiremock
		>slack
		(Move up and doen to reveal more choices)
	Whats your base Url?(http://localhost)
	or write a sepcific URL like https://www.app.hubspot.com/login 
    Do you want to use a compiler? No!
    Do you want WebdriverIO to autogenerate some test files? Yes
    Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? No

	VS Code Intellisense: Visual Studio Code usually has type support automatically integrated and there is no action needed.
	Go to automcompletion WebDriverIO page: https://webdriver.io/docs/autocompletion/:
	Create a jsconfig.json in your project root and refer to used wdio packages
	Sync mode with Mocha framework:
	{
		"compilerOptions": {
			"types": [
				"node",
				"webdriverio/sync",
				"@wdio/mocha-framework"
			]
		},
		"include" :[
			"test/specs/*.js",
			"**/*.json",
			"node_modules/@wdio/sync",
			"node_modules/@wdio/mocha-framework"
		]
	}

10. Create Mocha Spec/Test file to write first Automation Program:
    Note: add "@wdio/sync" : "7.6.0" to the package.json file in the project path, to include the same:
	{
		"name": "WebDriverIONavProject",
		"version": "1.0.0",
		"description": "",
		"main": "index.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"keywords": [],
		"author": "",
		"license": "ISC",
		"devDependencies": {
			"@wdio/cli": "^7.10.0",
			"@wdio/local-runner": "^7.10.0",
			"@wdio/mocha-framework": "^7.10.0",
			"@wdio/spec-reporter": "^7.10.0",
			"@wdio/sync": "7.6.1",
			"chromedriver": "^92.0.1",
			"wdio-chromedriver-service": "^7.2.0"
		}
	}

11.Run the test with WebDriver TestRunner
	To run the tests, execute the configuration file created as:
	$npx wdio run wdio.conf.js

	Mocha -> JavaScript Test framework written in Node.js:
	Mocha test Spec file keywords:
	describe: Similar to Test suite 
	it:Similar to Test case

12.Install chai-webdriverio library:
	$npm install chai-webdriverio --save-dev

	Install chai library:
	$npm install chai --save-dev
	or can be installed using:
	$npm i --save-dev chai
	The above ways can be used to install any library in WebDriverIO

13.Install Allure reports:
	$npm install @wdio/allure-reporter --save-dev
	Configure the o/p directory in your wdio.conf.js file.

14.Install Allure command Line:
	$npm install -g allure-commandline --save-dev

	Run the wdio.config.js in the cmd prompt.Check the allure reports using:
	allure generate && allure open


Note:
In wdio.conf.js file:
const envurl = require("./envurls")
const ENV = process.env.ENV

envurls.js:
module.exports = 
{
    qa:"https://www.google.com",
    dev:"https://www.amazon.com",
    stage:"https://www.apple.com",
    prod:"https://www.rediffmail.com"

}
For running env variables of wdio in Windows :
Setting up .env variable on windows - "set ENV=qa && npm run envtest"
We can set this command in the package.json file against the scripts like - "envtest" : '"set ENV=qa && wdio"

Use cross-env package for managing the .env file/variable irrespective of platorm (windows/mac)-
-- npm install --save-dev cross-env
-- npx cross-env ENV=qa npm run envtest
we can set this command in the package.json file against the scripts like - "envtest" : '"npx cross-env ENV=qa wdio"


To run a specific file in the test files, can be done as:
$npx wdio run wdio.conf.js --spec .\test\specs\<filename> 
<filename> can be *.js file.

POM Framework:
Technologies Used:
1. Webdriver IO - Javascript Node based Library
2. Chai Assertion
3. Mocha Test Framework
4. Allure Report
5. JavaScript - Programming Language
6. Visual Studio Code - Code Editor


