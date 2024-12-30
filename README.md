# Node.js Basic Form Project

This is a simple Node.js project that serves a stylish HTML form using `Express`. The form allows users to submit their name, email, subject, and message, and it logs the submitted data in the console.

![ScreenShot Tool -20241230111121](https://github.com/user-attachments/assets/b859d656-ad26-49f0-a780-8438c37034d5)

---

## Project Structure

```
.
├── app.js            # Main Node.js server file
├── index.html        # HTML file served to the user
├── node_modules/     # Node.js dependencies
├── package.json      # Project configuration and dependencies
├── package-lock.json # Dependency lockfile
```

## Prerequisites

To run this project, you need the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

---

## Setup Instructions

Follow these steps to set up and run the project:

1. **Clone the Repository**:
```bash
git clone git@github.com:r0han01/Node.js-Basic-Form-Project.git
```
**Install Dependencies**:  
- Run the following command to install all necessary dependencies:
```bash
npm install
```
#### Start the Server:
- To start the server, run:

```bash
node app.js
```
#### Access the Application:
- Open your browser and navigate to:

```text
http://localhost:8080
```
### How to Use
- Open the application in your browser at http://localhost:8080.
- Fill out the form with your name, email, subject, and message.
- Click the `"Submit"` button.
- Your form submission will be logged in the terminal running the Node.js server.
### Important Commands
#### Command	Description
- `npm install`	Installs project dependencies.
- `node app.js`	Starts the server.
- `npm start`	Alternative (if a start script is added).
### Project Details
- Server Framework: https://expressjs.com/
- Middleware: https://expressjs.com/en/resources/middleware/body-parser.html
- HTML Design: Simple and responsive form styling with inline CSS.
### License
- This project is open-source and available under the MIT License.

### Contributions
- Feel free to fork this repository, submit issues, or make pull requests. Contributions are welcome!
