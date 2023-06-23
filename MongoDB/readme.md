# README.md

## Installation

To install and launch MongoDB on Windows, Mac, and Linux, follow the steps below:

1. **Windows**:
   - Download the MongoDB Community Server installer from the official MongoDB website: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Run the downloaded installer and follow the installation instructions.
   - Once the installation is complete, MongoDB will be automatically launched as a service.

2. **Mac** (using Homebrew):
   - Open a terminal.
   - Install Homebrew if you haven't already. Visit the Homebrew website [https://brew.sh/](https://brew.sh/) for installation instructions.
   - Run the following command to install MongoDB:
     ```
     brew tap mongodb/brew
     brew install mongodb-community@6.0
     ```
   - Start MongoDB using the following command:
     ```
     brew services start mongodb-community@6.0
     ```

3. **Linux** (Ubuntu):
   - Open a terminal.
   - Import the MongoDB public GPG key with the following command:
     ```
     wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
     ```
   - Create a list file for MongoDB with the appropriate repository by running the following command:
     ```
     echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
     ```
   - Update the packages list by executing:
     ```
     sudo apt-get update
     ```
   - Install MongoDB with the following command:
     ```
     sudo apt-get install -y mongodb-org
     ```
   - Start MongoDB using the following command:
     ```
     sudo systemctl start mongod
     ```

## Usage

Once MongoDB is installed and running, you can interact with it using the MongoDB shell or a MongoDB client. Refer to the MongoDB documentation for more information on how to use MongoDB.

Note: The installation steps provided in this README assume the use of MongoDB Community Server version 6.0. Make sure to adjust the installation commands if you intend to use a different version.
