# Setting up the front-end app

In the following you will setup the front-end app on your machine.

## Dependencies

Before we get going, dependancies are important. The following programs and packages are requiered on your machine in order for the app to run:

1. git
2. node.js

If you do not have them, please install them before you continue.

## Clone, install and run

Clone this repository to your local machine with:

> git clone git@bitbucket.org:yabbadatadoo/survey.git

Go to the cloned directory and install the react dependencies (this makes use of node.js):

> cd survey <br/>
> nmp install

If all goes well, you can run the app via:

> npm start

Go to the following page on your browser to look and play with the app:

> http://localhost:3000/

Use `Developer Tools` to view the output on the console when filling in the survey. On Chrome it can be started by left-mouse-click and selecting `inspect`.

## The program

The program is small and only consists of 3 source files located in the `src` directory:

1. `index.js` <br/>
This is where the `SurveyComponent` is rendered. The following line:
> <SurveyComponent json={input.json1} />, <br/>

    Calls the component with a JSON argument that stores the survey questions. Change `json1` to `json2` to get a survey with different questions. All these survey questions are provided in:

2. `input.jsx` <br/>
Here two sets of a very basic surveys are written as `json1` and `json2` in the format used by the `react-survey` package. For more examples on possible arguments and types of questions see: https://surveyjs.io/Examples/Library

3. `Survey.jsx` <br/>
This file contains the `SurveyComponent` using modules from `react-survey`. The line:
> const json = this.props.json; <br/>

    obtains the JSON input from the provided argument that you pass to the component in `index.js`. The line:
    > survey.onComplete.add(function (sender, options) <br/>

    adds a function to the survey module that logs the result to the console. This is the function that you should alter to push the formatted result to your database, in stead of logging it to the console.

# Good luck