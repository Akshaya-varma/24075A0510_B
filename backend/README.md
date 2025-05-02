# Pixel Tracker Backend

This is the backend part of the Pixel Tracker application. It is built using Node.js, Express, and MongoDB. The backend handles the storage and retrieval of pixel hover events.

## Features

- **Event Tracking**: Records the coordinates of mouse hover events and the number of times each point has been hovered over.
- **CRUD Operations**: Supports creating, reading, updating, and deleting event data.
- **MongoDB Integration**: Uses Mongoose for MongoDB interactions.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd pixel-tracker-app/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the MongoDB server.
2. Run the backend server:
   ```
   npm start
   ```

### API Endpoints

- `POST /events`: Create a new event.
- `GET /events`: Retrieve all events.

## Directory Structure

- **src/controllers**: Contains the event controller for handling requests.
- **src/models**: Contains the Mongoose model for events.
- **src/routes**: Contains the routes for event-related API endpoints.
- **src/server.js**: Entry point for the backend application.

## License

This project is licensed under the MIT License.
