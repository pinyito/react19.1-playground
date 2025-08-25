# react19.1-playground

A personal practice and learning space for exploring concepts from the React 19.1 documentation. This repository contains structured examples, demos, and exercises covering new and existing features in React, including components, hooks, state management, and concurrent rendering.
Install nodeJs
Install npm
Scaffold React project with Vite

Delete:
All content of App.css
All content of App.jsx
Comment out index.css import in main.jsx
Quick Start
-Create and nest components
-Add markup and styles
-Display data
-Render conditions and lists
-Respond to events and update the screen
-Share data between components

Adding Styles
-Use this within AboutPage component
-Implement the CSS in App.css
-Import App.css into App.jsx

Displaying Data
-Add your image into src/assets to use within the image tag
-Create a user object to define user profile details
-Create a Profile component and use display user details
-Adapt the styles to the profile using inline CSS within JSX

Conditional Rendering
-AdminPanel will be replaced with a coponent redering a list of products
-LoginForm will be replaced with a component rendering Login Form
-Explore more options of conditional rendering logic explained. Add and comment out code for exploration

Rendering Lists
-Create a an array of products
-Using JavaScript map() function transform the array into <li></li> tags with items, making use of the key attribute

Responding to Events
-Create a handler function within the component
-Pass the handler function down to the button

Updating the Screen
-Import useState
-Declare state variable (an array)
-useState provides 2 items within the dcalred array, the current state and the function that lets you update the current state
-Practice: Render the component multiple times, and notice how each component remembers its own data and doesn't affect the other

Using Hooks
-Check out the API Reference

Sharing Data Between Components
-We make use of props

QUICK START PROJECTS TUTORIALS
1.Tic-Tac-Toe
-Build an interactive tic-tac-toa game with React
-Try to read and mark each loc or section of loc within the code provided about what is expected at the end. Relate concpets with what you just learned.
-In addition, identify and jot down some patterns

=>Setup for the tutorial
-Create the main component (Square) for the game
-Explore the setup code line by line
-Create styles.css; we'll then import it into App.jsx
-src/styles.css
-Click fork to view the sandbox and copy/rewrite the (\*, body, and .square) styles code into your local styles.css
-Import styles.css into Square.jsx instead of index.js as stated
=>Overview
-Building the board
-Make nine squares and add naumbering instead of X
-Group then into 3 by wrapping into a div and apply some styles (.board-row)
=>Completing the game
=>Adding time travel
