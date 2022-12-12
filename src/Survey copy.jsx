import React, { Component } from "react";
import * as Survey from "survey-react";
// import BigQuery from "@google-cloud/bigquery";
import "survey-react/survey.css";
import axios from "axios"; 

// const bigquery = new BigQuery({
//   projectId: "survey-warehouse83123"
// });
// const dataset = bigquery.dataset("survey-warehouse83123.survey_data");
// const table = dataset.table("survey-warehouse83123.survey_data.survey_table");



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

            // table.insert(JSON.stringify(sender.data))

            var data = JSON.stringify(sender.data)

            axios.post("http://127.0.0.1:8000/survey-results", data)

            // with XMLHttpRequest
            // var xhr = new XMLHttpRequest();
            // xhr.open("POST", "https://a221b940-df51-44cf-b815-5802d48d7e05.mock.pstmn.io");
            // xhr.setRequestHeader('Content-type', 'application/json')
            // xhr.send(JSON.stringify(sender.data));


            //var dt = JSON.stringify(sender.data);
            //options.showDataSaving(dt);
            //console.log(JSON.stringify(sender.data)); // change here to push to your DB
            //console.log("hello world"); // change here to push to your DB
            //xhr.send(JSON.stringify(sender.data));
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
