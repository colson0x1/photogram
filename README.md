# Photogram

Photogram is a simple React app that allows users to add random photos to a photo list. It demonstrates the concepts of states and props in React. 

## Screenshots

![photogram](https://i.imgur.com/97ZRdCJ.png)

![photogram potos](https://i.imgur.com/XxAbJqw.png)

![photogram heart photo](https://i.imgur.com/EYIxUN5.png)

## Installation

To run Photogram locally, follow these steps:

1. Clone the repository: `git clone https://github.com/colson0x1/photogram.git`
2. Navigate to the project directory: `cd photogram`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000`

## Usage

Clicking on each photo in the Photogram app triggers an interaction where the heart icon associated with the photo grows bigger in size. This feature is implemented using state management in React.

When a photo is clicked, the application utilizes the state concept to update the size of the heart icon dynamically. The PhotoShow component, responsible for rendering each photo and its associated heart icon, maintains its own state using the useState hook.

Upon clicking a photo, the handleClick function is invoked, which updates the state value representing the size of the heart icon. As a result, the heart icon visually grows bigger on the screen.

The usage of state in this manner demonstrates how React components can maintain and update their internal state, allowing for dynamic interactions and visual feedback within the application.

Feel free to explore and interact with Photogram by adding photos and observing the growth of the heart icon upon clicking each photo.
