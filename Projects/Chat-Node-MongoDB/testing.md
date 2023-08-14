# Testing the create Endpoint


## Nodemon

for automatic restart
``` bash
npm install -g nodemon
```

to run it
```bash
nodemon server.js
```

Endpoint: /api/create

HTTP Method: POST

Steps:

1.  Open Postman.
2.  Set the request type to POST.
3.  Enter the URL: http:localhost:3000/api/create
4.  Go to the "Body" tab, select raw and JSON from the dropdown.
5.  Enter a sample JSON payload, for example:

```json
[
  {
    "name": "John",
    "content": "John's post content."
  },
  {
    "name": "Jane",
    "content": "Jane's post content."
  }
]
```

6.  Click "Send" and check the response.

7.  Testing the read-multiple Endpoint:
    Endpoint: /api/read-multiple
    HTTP Method: POST

Steps:

1.  Set the request type to POST.
2.  Enter the URL: http:localhost:3000/api/read-multiple
3.  In the "Body" tab, provide the names of the documents you want to retrieve, for example:

```json
{
  "names": ["John", "Jane"]
}
```

4.  Click "Send" and check the response.

5.  Testing the update-multiple Endpoint:
    Endpoint: /api/update-multiple
    HTTP Method: PUT

Steps:

1.  Set the request type to PUT.
2.  Enter the URL: http:localhost:3000/api/update-multiple
3.  In the "Body" tab, provide the filters and data for the documents you want to update:

```json
{
  "updates": [
    {
      "filter": { "name": "John" },
      "data": { "content": "Updated content for John" }
    },
    {
      "filter": { "name": "Jane" },
      "data": { "content": "Updated content for Jane" }
    }
  ]
}
```

4.  Click "Send" and check the response.

5.  Testing the delete-multiple Endpoint:
    Endpoint: /api/delete-multiple
    HTTP Method: DELETE

Steps:

1.  Set the request type to DELETE.
2.  Enter the URL: http:localhost:3000/api/delete-multiple
3.  In the "Body" tab, provide the names of the documents you want to delete:

```json
{
  "names": ["John", "Jane"]
}
```

4.  Click "Send" and check the response.

These are the general steps to test each endpoint in Postman.
Make sure your server is running when you're sending requests.
If you encounter any issues or unexpected responses, check the error message and logs for more information.
