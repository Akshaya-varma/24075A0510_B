# Pixel Tracker App - Frontend

This is the frontend part of the Pixel Tracker application, which allows users to interact with a blank canvas where pixels are tracked based on mouse hover events.

## Features

- A blank canvas that captures mouse hover events.
- Each pixel's color changes based on the number of times the mouse has hovered over that point.
- Integration with a backend service to store and retrieve hover event data.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd pixel-tracker-app/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the frontend application, run the following command:
```
npm start
```

This will start the development server and open the application in your default web browser.

### Project Structure

- `public/index.html`: The main HTML file that serves the React application.
- `src/components/Canvas.tsx`: The component responsible for rendering the canvas and handling mouse events.
- `src/services/api.ts`: Contains functions for making API calls to the backend.
- `src/App.tsx`: The main application component.
- `src/index.tsx`: The entry point for the React application.

### API Integration

The frontend communicates with the backend to store and retrieve hover event data. Ensure that the backend server is running to enable this functionality.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.