import React from 'react';
import ReactDOM from 'react-dom';
import SurveyComponent from './Survey';

import * as input from './input'; // imports the survey questions from input.jsx

ReactDOM.render(
<SurveyComponent json={input.json1} />, // change json1 to json2 to get a different survey
document.getElementById('root'));