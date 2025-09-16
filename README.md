# event-talks-app

# Tech Talk Day Website

This is a single-page website for a 1-day event filled with technical talks. The website displays the schedule for the entire day and allows users to search for talks based on category.

## Features

*   View the full day's schedule with timings.
*   Search for talks by category.

## Technology Stack

*   **Backend:** Node.js with Express
*   **Frontend:** HTML, CSS, JavaScript

## MCP Configuration code

{
  "theme": "Default",
  
  "selectedAuthType": "oauth-personal",
  
  "mcpServers": {
  
       "github": {
       
            "httpUrl": "https://api.githubcopilot.com/mcp/",
            
            "headers": {
            
                "Authorization": "GITHUB_PAT"
                
            },
            
            "timeout": 5000
       }
  }
}
## How to Run

1.  Install the dependencies:
    ```bash
    npm install
    ```
2.  Start the server:
    ```bash
    node server.js
    ```
3.  Open your browser and navigate to `http://localhost:3000`.

## Development with Gemini CLI

This project was created and is managed using the Gemini CLI. The Gemini CLI is a command-line interface that allows you to interact with Google's Gemini models to perform a variety of tasks, including:

*   Creating new projects
*   Managing files
*   Interacting with GitHub repositories
*   And much more!

## How to Use

*   Load the page to see the full schedule.
*   Use the search bar to filter talks by category (e.g., "Web," "AI," "Cloud").
*   The schedule will dynamically update to show only the talks that match your search.
