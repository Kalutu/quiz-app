# Quiz App
This is a quiz application built using React. Users can answer a series of questions, and the application provides immediate feedback on each answer. At the end of the quiz, the user's score is displayed.

## Preview
![Sample Question](public/images/questions.png)


## Features

- Randomized question order for each attempt.
- Immediate feedback on correct and incorrect answers.
- Simple and intuitive user interface.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```git clone https://github.com/Kalutu/quiz-app```
   
1. Navigate to the project directory:
   ```cd quiz-app```

1. Install dependencies:
   ```npm install```

1. Start the development server:
   ```npm start```

1. Open your browser and visit http://localhost:3000 to view the application.

## Usage
- Click on the choice buttons to answer each question.
- Immediate feedback is provided for each answer.
- Use the "Next" button to proceed to the next question.
- At the end of the quiz, your score will be displayed.
   

## Customization
You can customize the quiz app by modifying the `questions` array in the `questions.js` file. Each question is represented as an object with the following structure:

```javascript
{
    question: "Question goes here",
    choices: [
        { text: "Answer 1", answer: false },
        { text: "Answer 2", answer: true },
        { text: "Answer 3", answer: false },
        { text: "Answer 4", answer: false }
    ]
}
```
- Modify the question property to change the question text.
- Adjust the choices array to include the answer choices for the question.
- Set the answer property to true for the correct answer and false for the incorrect answers.
- Feel free to add, remove, or modify the questions to suit your needs.

## Acknowledgements
- The shuffle function used to shuffle the answer choices is based on the Fisher-Yates shuffle algorithm.


## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.
