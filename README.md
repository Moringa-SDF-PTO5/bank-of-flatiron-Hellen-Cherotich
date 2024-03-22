
Bot Battlr
Welcome to Bot Battlr, a React application where you can build and manage your own Bot Army.

Table of Contents
Introduction
Installation
Features
Usage
API Integration
Technologies Used
Author
License

Introduction
Bot Battlr allows you to browse through a list of available robots, view their details, and enlist them into your army. You can release bots from your army or permanently discharge them from both the frontend and backend.

Installation
To run this application locally, follow these steps:

Clone this repository to your local machine:
bash
Copy code
git clone https://github.com/Moringa-SDF-PTO5/botbattlr-Hellen-cherotich.git
Navigate to the project directory:
bash
Copy code
cd botbattlr-Hellen-cherotich
Install dependencies using npm :
bash
Copy code
npm install
or

bash
Copy code
yarn install
Start the development server:
bash
Copy code
npm start
or

bash
Copy code
yarn start
Features
View profiles of all available bots in the Bot Collection.
Add individual bots to your army by clicking on them.
Release bots from your army by clicking on them.
Permanently discharge bots .
Usage
Once the application is running, you can access it in your web browser. You will see two sections:

Bot Collection: Displays all available bots. Click on a bot to enlist it into your army.
Your Bot Army: Displays the bots enlisted into your army. Click on a bot to release it from your army or permanently discharge it by clicking the red "x" button.
API Integration
The application integrates with a JSON server to fetch and manipulate bot data. The endpoints used are:

GET /bots: Retrieve a list of available bots.
DELETE /bots/:id: Delete a bot by its ID.

Technologies Used
React
useState and useEffect hooks for state management and side effects.
Fetch API for asynchronous data fetching.
JSON server for backend simulation.



License
This project is licensed under the MIT License.












