# Quiz App
This is a simple quiz application that presents multiple-choice questions and allows users to select their answers. The correct answers are shuffled randomly for each question, making it challenging and unpredictable for the users.

## Usage
1. Clone the repository or download the source code files.
2. Open the `index.html` file in your web browser.
3. The quiz app will be displayed, and you can start answering the questions.
4. Click on the desired answer choice for each question.
5. After selecting an answer, the app will indicate whether it is correct or incorrect.
6. Click the "Next" button to proceed to the next question.
7. At the end of the quiz, your score will be displayed.

## Customization
You can customize the quiz app by modifying the `questions` array in the `script.js` file. Each question is represented as an object with the following structure:

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

