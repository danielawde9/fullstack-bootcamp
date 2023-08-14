Launch Postman: Start the Postman application.
Set Headers: Before making requests, ensure the Content-Type header is set to application/json.
Testing CRUD Operations:
# Create (POST request):
In Postman, select the POST method from the dropdown.
Enter the URL: http://localhost:3000/users.
Go to the Body tab.
Choose raw and select JSON (application/json) from the dropdown.
Enter your data in JSON format, e.g.:

```
{
"name": "John Doe",
"email": "john.doe@example.com"
}
```
Click Send. If everything is set up correctly, you'll get a response that the user was added.
# Read (GET request):
Select the GET method.
Enter the URL: http://localhost:3000/users.
Click Send. You should see a list of all users in the response body.
# Update (PUT request):
Select the PUT method.
Enter the URL: http://localhost:3000/users/1 (replace "1" with the ID of the user you want to update).
Go to the Body tab.
Choose raw and select JSON (application/json) from the dropdown.
Enter the updated data in JSON format, e.g.:
```
{
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
}
```
Click Send. You should get a response indicating that the user was updated.
# Delete (DELETE request):
Select the DELETE method.
Enter the URL: http://localhost:3000/users/1 (replace "1" with the ID of the user you want to delete).
Click Send. You should get a response indicating that the user was deleted
