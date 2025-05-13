# React Quiz Application

![image](https://github.com/user-attachments/assets/343e2c5f-67ae-475d-833d-53a92ad28f4a)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Components](#components)
8. [API](#api)
9. [Styling](#styling)
10. [Future Enhancements](#future-enhancements)
11. [Contributing](#contributing)
12. [License](#license)

## Introduction

This React Quiz Application is an interactive, web-based quiz game that allows users to test their knowledge across various categories and difficulty levels. Built with React and Vite, it offers a smooth, responsive user experience with features like timed questions, progress tracking, and score display.

## Features

- Dynamic quiz generation based on user-selected category and difficulty
- Timed questions with automatic progression
- Progress bar to track quiz completion
- Score calculation and display
- Option to view correct answers after quiz completion
- Ability to restart the quiz
- Responsive design for various screen sizes

## Technologies Used

- React 18.3.1
- Vite (for project setup and build optimization)
- OpenTrivia Database API (for quiz questions)
- CSS3 for styling

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/DonGuillotine/react-quiz-app.git
   ```

2. Navigate to the project directory:
   ```
   cd react-quiz-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Usage

1. Select a category and difficulty level from the quiz settings.
2. Click "Start Quiz" to begin.
3. Answer each question within the time limit.
4. Use the "Next" and "Previous" buttons to navigate through questions.
5. After answering all questions, click "Finish" to see your score.
6. Optionally, view correct answers and restart the quiz.

![image](https://github.com/user-attachments/assets/96451f9e-ec7f-4045-aac3-b3aef70d2dba)


## Project Structure

```
quiz-app/
│
├── src/
│   ├── components/
│   │   ├── AnswerOptions.jsx
│   │   ├── NavigationButtons.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Question.jsx
│   │   ├── QuizContainer.jsx
│   │   ├── QuizSettings.jsx
│   │   └── ScoreDisplay.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

- `QuizContainer`: Main component managing quiz state and logic
- `QuizSettings`: Handles category and difficulty selection
- `Question`: Displays current question and answer options
- `AnswerOptions`: Renders selectable answer options
- `NavigationButtons`: Provides navigation between questions
- `ProgressBar`: Shows quiz progress
- `ScoreDisplay`: Displays final score and correct answers

## API

This application uses the Open Trivia Database API to fetch quiz questions. The API endpoint is:

```
https://opentdb.com/api.php
```

Parameters used:
- `amount`: Number of questions (default: 10)
- `category`: Question category ID
- `difficulty`: easy, medium, or hard
- `type`: multiple (for multiple-choice questions)

## Styling

The application uses CSS for styling, with styles defined in `App.css` and `index.css`. The layout is responsive and centered on the screen for optimal viewing on various devices.

## Future Enhancements

- User authentication and score tracking
- Leaderboard functionality
- More customization options (number of questions, time limit)
- Additional question types (true/false, fill in the blank)
- Accessibility improvements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
