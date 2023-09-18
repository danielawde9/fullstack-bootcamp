## Challenge 3: Connecting Node.js and Express.js to MongoDB

**Objective:** Establish a fundamental connection between your Express application and a MongoDB instance.

### Setup:

- Confirm MongoDB's installation and operational status.
- Ensure the mongodb package, a MongoDB object modeling tool, is installed in your project.

### Tasks:

1. **Database Creation:** create databse and cluster in mongodb.com, make sure to select the free version and place it where ever you want, i prefer amazon bahrain since its the nearest to us.
1. **Database Initialize:** Add user name and password to access this newly created db, make sure its just text no need for symbol and numebrs, also make sure to whitelist your ip to be able to access the db.
1. **Database Connection:** Use mongo db library to initiate a connection to a MongoDB instance. Understand the necessary configurations and potential pitfalls, make sure to add permission to yourself to be able to access the mongo, as shown in the image.
1. **Error Handling:** Implement mechanisms to detect and respond to connection errors. Recognize the significance of error handling in database connections in case error in password or link for example.

![image](https://github.com/danielawde9/fullstack-bootcamp/assets/8840298/684bf5c3-139b-4d02-a10f-470490389a80)
