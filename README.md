
Bot Army Manager

This is a simple web application built using React.js for functionality and Chakra UI for styling. The application allows users to manage a collection of bots, including adding bots to their army, releasing bots from their army, and permanently discharging bots.

Features

Bot Collection: View profiles of all bots rendered in the BotCollection component.
Add to Army: Add an individual bot to your army by clicking on it. The selected bot will render in the YourBotArmy component. Each bot can only be enlisted once.
Release from Army: Release a bot from your army by clicking on it. The bot will disappear from the YourBotArmy component.
Discharge from Service: Permanently discharge a bot from service by clicking the red button marked "x". This action will delete the bot both from the backend and from the YourBotArmy on the frontend.

Installation

git clone <repository-url>

Navigate into the project directory:

cd bot-army-manager

Start the development server:

npm start


Technologies Used
React.js: A JavaScript library for building user interfaces.
Chakra UI: A simple, modular and accessible component library for React.js applications.
Folder Structure
src/components: Contains React components used to build the application.
src/pages: Contains main pages of the application.
src/utils: Contains utility functions used throughout the application.
public: Contains public assets such as HTML files and images.
src/App.js: Main entry point for the application.

Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Author

Allen Shamrock


