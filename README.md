# Pixel Tracker Application

## Overview
The Pixel Tracker Application is a web-based tool that allows users to visualize mouse hover events on a blank canvas. Each pixel on the canvas changes color based on the number of times the mouse pointer hovers over it. The application tracks these events and stores them in a database for further analysis.

## Features
- Interactive canvas that responds to mouse movements.
- Color changes of pixels based on hover counts.
- Data storage of hover events in MongoDB.
- RESTful API for managing event data.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
- **src/controllers/eventsController.ts**: Handles CRUD operations for event data.
- **src/models/event.ts**: Defines the Mongoose model for event data.
- **src/routes/events.ts**: Sets up API routes for event-related operations.
- **src/server.ts**: Entry point for the backend application, initializes the server and connects to MongoDB.
- **package.json**: Lists backend dependencies and scripts.
- **tsconfig.json**: TypeScript configuration for the backend.
- **README.md**: Documentation for the backend.

### Frontend
- **public/index.html**: Main HTML file serving the React application.
- **src/components/Canvas.tsx**: Renders the canvas and handles mouse events.
- **src/services/api.ts**: Functions for making API calls to the backend.
- **src/App.tsx**: Main application component.
- **src/index.tsx**: Entry point for the React application.
- **package.json**: Lists frontend dependencies and scripts.
- **tsconfig.json**: TypeScript configuration for the frontend.
- **README.md**: Documentation for the frontend.

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## Technologies Used
- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.