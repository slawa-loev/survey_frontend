const answers = [{
    "value": 1,
    "text": "Strongly Disagree"
},
{
    "value": 2,
    "text": "Disagree"
},
{
    "value": 3,
    "text": "Neutral"
},
{
    "value": 4,
    "text": "Agree"
},
{
    "value": 5,
    "text": "Strongly Agree"
}];


export const json1 = {
    "elements": [
        {
            "type": "matrix",
            "title": "Please indicate if you agree or disagree with the following statements",
            "name": "survey1",
            "isRequired": true,
            "columns": answers,
            "rows": [
                {
                    "value": "happy",
                    "text": "I am happy"
                },
                {
                    "value": "sport",
                    "text": "I often play sports"
                },
                {
                    "value": "drink",
                    "text": "I do not drink much"
                },
                {
                    "value": "energy",
                    "text": "I feel energetic"
                }
            ]
        }
    ]
};

export const json2 = {
    "elements": [
        {
            "type": "matrix",
            "name": "survey2",
            "title": "Please indicate if you agree or disagree with the following statements",
            "isRequired": true,
            "columns": answers,
            "rows": [
                {
                    "value": "happy",
                    "text": "I am happy"
                },
                {
                    "value": "sleep",
                    "text": "I sleep well"
                },
                {
                    "value": "work",
                    "text": "I like my job"
                },
                {
                    "value": "food",
                    "text": "I eat healthy"
                }
            ]
        }
    ]
};