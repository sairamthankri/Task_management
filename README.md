Assignment: Build a Task Management Application



Figma link for UI:-

https://www.figma.com/design/X7OVmYRFu2d9H5vc5ABqZN/Assignment-web-dev?node-id=0-1&t=1LWVGoW6ZnvRxTSZ-1


Prototype - https://www.figma.com/proto/X7OVmYRFu2d9H5vc5ABqZN/Untitled?node-id=0-1&t=j3t1AWECTBGtnw3l-1

Objective
Develop a task management application with the following features:
1.	Basic CRUD operations for tasks.
2.	A UI slider for navigating between task categories.
3.	Advanced async operations to fetch streaming data.
4.	Automatic task timeout handling.
5.	Deployment of the application.
Requirements
Frontend
1.	Framework: React with TypeScript.
2.	Components:
●	Task List: Display tasks.
●	Task Item: Individual task details.
●	Task Form: Add/edit tasks.
●	Category Slider: A slider to switch between different task categories (e.g., "To Do", "In Progress", "Done", "Timeout").
3.	State Management: Use React hooks or Context API.
4.	API Interaction:
●	Implement API calls using async/await.
●	Handle timeouts for API requests.
5.	Styling: Use CSS or a CSS-in-JS library.
6.	Form Handling: Proper form validation and error handling.
7.	User Experience: Ensure a good UX with loading indicators and error messages.
8.	Timeout Handling: Automatically move tasks to the "Timeout" category if their duration exceeds a certain limit.
Backend
1.	Framework: Node.js with Express and TypeScript.
2.	Endpoints:
●	GET /tasks: Fetch all tasks.
●	GET /tasks/:id: Fetch a single task by ID.
●	POST /tasks: Create a new task.
●	PUT /tasks/:id: Update a task by ID.
●	DELETE /tasks/:id: Delete a task by ID.
●	GET /streaming: Fetch data from a streaming API (e.g., Twitch API for live streams).
3.	Async Challenge: Create an endpoint that fetches additional data from a streaming API and integrates it with the task details.
4.	Database: Use an in-memory database for simplicity or a lightweight database like SQLite or MongoDB.
5.	Error Handling: Implement proper error handling and validation for all endpoints.
Deployment
●	Frontend Deployment: Deploy the frontend on Vercel or Netlify.
●	Backend Deployment: Deploy the backend on AWS, Heroku or Render.
●	Environment Configuration: Ensure the frontend communicates with the deployed backend using environment variables for API URLs.
Deliverables
1.	Source Code: Complete source code for frontend and backend.
2.	README: Detailed setup and run instructions, explanation of project structure, and design decisions.
3.	Live Demo: Links to the deployed frontend and backend applications.
Evaluation Criteria
1.	Code Quality: Clean, readable, and well-organized code.
2.	Functionality: Completeness and correctness of features.
3.	Async/Await: Proper use and handling of async/await, especially in the advanced async endpoint.
4.	Error Handling: Robust error handling on client and server sides.
5.	Styling and UX: User-friendly interface and consistent styling.
6.	Timeout Handling: Correct implementation of the timeout feature.
7.	Deployment: Successful deployment and functionality of the live demo.
8.	Documentation: Clarity and completeness of the README file.
Implementation Details
1.	Task Timeout Handling:
●	Backend: Add a field to tasks for their duration and a method to check if a task has timed out.
●	Frontend: Implement a mechanism to move tasks to the "Timeout" category if their duration exceeds a certain limit.

