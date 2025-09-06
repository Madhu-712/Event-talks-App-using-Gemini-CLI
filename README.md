# Tech Talk Day

This is a simple web application that displays the schedule for a one-day tech talk event.

## Description

The application provides a clear and easy-to-read schedule of talks for the "Tech Talk Day" event. Users can view the talk titles, speakers, categories, and descriptions. The application also includes features to filter the schedule by category and time.

## Features

*   **View Schedule:** See a full-day schedule of tech talks.
*   **Search by Category:** Filter the talks by category (e.g., JavaScript, Python).
*   **Filter by Time:** Filter the talks by their start time.
*   **Breaks:** The schedule includes breaks and a lunch break.

## Tech Stack

*   **Frontend:**
    *   HTML
    *   CSS (with Bootstrap)
    *   JavaScript
*   **Backend:**
    *   Node.js
    *   Express.js

## Getting Started

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Madhu-712/event-talks-app.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd event-talks-app
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Usage

1.  Start the server:
    ```bash
    npm start
    ```
2.  Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure

```
.
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
└── talks.json
```