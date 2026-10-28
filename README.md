## Building Todoist from Scratch Using React (Custom Hooks, Context), Firebase & React Testing Library (http://bit.ly/CognitiveSurge)

This application (a Todoist clone) was built using create-react-app as a base, and the technologies used were React (Custom Hooks, Context), Firebase & React Testing Library. I'm hoping this gives people a better understanding of React, and I've also included SCSS in this tutorial, but the main focus is to build a real application using React! If you clone this application, click the Pizza icon on the top right, it enables dark mode!

Subscribe to my YouTube channel here: http://bit.ly/CognitiveSurge where I build projects like this! And don't forget, you can contribute to this project (highly encouraged!). One thing I didn't get time to do was incorporate accessibility into this application, so I'd love to see that added!

![Preview](todoist-preview.png?raw=true)

## Development

### Prerequisites
- Node.js and npm installed on your system

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Firebase (optional):**
   - Copy `src/firebase.js.example` to `src/firebase.js`
   - Add your Firebase configuration credentials to the new file

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

### Running Tests

The project includes a comprehensive test suite using React Testing Library. To run the tests:

```bash
npm test
```

This will start the test runner in watch mode. Tests are located in `src/__tests__/` and cover components like AddProject, AddTask, App, Checkbox, Header, and more.

### Available Scripts

- `npm start` - Run the development server
- `npm build` - Build the application for production
- `npm test` - Run the test suite in watch mode
