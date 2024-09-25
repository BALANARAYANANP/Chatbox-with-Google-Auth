
# Chatbox-With-Google-Authentication
# Chatbox-With-Google-Authentication


# React Chatbot and Google Authentication Integration

This project demonstrates how to integrate two key features into a React application:

1. **Chatbot**: A simple interactive chatbot interface that responds to 3 perdefind queries Only.
2. **Google Authentication**: Google OAuth 2.0 login integration that allows users to sign in with their Google accounts.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Google OAuth Setup](#google-oauth-setup)
- [Running the Project](#running-the-project)
- [Usage](#usage)
  - [Chatbot Usage](#chatbot-usage)
  - [Google Authentication Usage](#google-authentication-usage)
- [Project Structure](#project-structure)
- [Libraries Used](#libraries-used)

- [License](#license)



## Features

- **Chatbot Interface**:
  - Users can ask questions, and the chatbot responds with predefined or dynamically generated answers.
  - Clean, user-friendly UI to simulate chatbot interactions.
  
- **Google Authentication**:
  - Google OAuth 2.0 login allows users to sign in using their Google accounts.
  - Once logged in, user details such as name, email, and profile picture are displayed.



## Requirements


- npm or yarn package manager
- A Google Cloud Console project with OAuth 2.0 credentials (for Google login)

---

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/react-chatbot-google-login.git
    cd react-chatbot-google-login
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Add your Google OAuth Client ID (see [Google OAuth Setup](#google-oauth-setup) for details).


## Google OAuth Setup

To integrate Google login, follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).

2. Create a new project:
   - In the top left, click Select Project and then New Project.
   - Name the project and click Create.

3. Set up OAuth credentials:
   - Go to APIs & Services > Credentials.
   - Click Create Credentials and select OAuth 2.0 Client ID.
   - Choose Web application for the type.
   - In Authorized JavaScript Origins, add `http://localhost:3000` 
   - Leave the Authorized redirect URIs empty for now.
   - Click Create and copy the Client ID.

4. Replace `'YOUR_GOOGLE_CLIENT_ID'` in `GoogleLoginButton.js` with your generated Client ID:

    ```javascript
    const clientId = 'YOUR_GOOGLE_CLIENT_ID';  // Replace this with your actual Client ID
    ```



## Running the Project

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000). You will see the chatbot and the Google Login button on the screen.



## Usage

### Chatbot Usage

- **Chatbot Interface**: Users can type questions or prompts, and the chatbot will respond with predefined or dynamically generated responses.
- To extend the chatbot, you can add new responses or enhance its logic in the `Chatbot.js` file.

### Google Authentication Usage

- **Google Login Button**: Use the `GoogleLoginButton` component to allow users to log in using their Google account.
- Once logged in, the user’s name, email, and profile picture will be displayed.
- If any issues arise during the login process, they will be logged in the browser console.


## Project Structure


react-chatbot-google-login/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Chatbot.js                # Chatbot component
│   │   └── GoogleLoginButton.js      # Google login component
│   ├── App.js                        # Main application entry
│   ├── index.js                      # React entry point
│   └── styles.css                    # Global CSS styles
├── .gitignore                         # Files to ignore in Git
├── package.json                       # Project metadata and dependencies
└── README.md                          # Documentation


## Libraries Used

### For Chatbot:

- **React**: Core framework for building the UI.
- **Custom State and Props**: The chatbot logic is handled within the React component, and state is used to manage conversations.

### For Google Authentication:

- **@react-oauth/google**: A package to integrate Google OAuth authentication into React apps.
- **jwt-decode**: A package to decode the JWT token received from Google to extract user information.


## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions, issues, and feature requests are welcome!



