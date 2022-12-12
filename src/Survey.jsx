import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import axios from "axios"; //added axios package for issuing (post) requests

Survey.StylesManager.applyTheme("default");

// creating the SurveyComponent
class SurveyComponent extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        const json = this.props.json; // obtains the input from the provided argument that you pass to the component in index.js

        const survey = new Survey.Model(json); // using the survey module from survey-react

        // function that prints the result to the console upon completion of the survey
        survey.onComplete.add(function (sender, options) {

            var data = JSON.stringify(sender.data) //formatting survey data
            //sending survey data to API that listens at localhost
            axios.post("http://127.0.0.1:8000/survey-results", data)
        });

        // output that will be rendered
        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;
