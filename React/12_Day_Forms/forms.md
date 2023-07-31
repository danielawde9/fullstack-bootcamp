# forms 

Let's start with a simple form and gradually add more features to it.

1. Basic Form

```jsx
import React from 'react';

function SimpleForm() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
```


This will render a form with a single text input and a submit button. However, this form doesn't do anything yet because we haven't told it what to do when the form is submitted.

2. Adding a Form Submission Handler

To make the form do something when submitted, we'll add a function to handle the submission. We'll use the onSubmit event handler in React to call this function when the form is submitted.

```jsx
import React from 'react';

function SimpleForm() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
```

Now, when you submit the form, an alert will pop up saying "Form submitted." Note that we call event.preventDefault() to prevent the form from being submitted in the traditional way, which would cause the page to refresh.

3. Controlled Components

In React, form inputs such as input,textarea, and select are typically used as "controlled components." This means that the value of the input is controlled by the state of the component, and every change to the input updates the state.

Let's make the text input in our form a controlled component.

```jsx
import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted');
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
```

Now, every time you type into the text input, the handleChange function is called, updating the state with the new value of the input. The state then updates the value of the input, keeping everything in sync.

4. Handling Multiple Inputs

If you have multiple controlled inputs, you can add a name attribute to each element and let the handler function choose what to do based on the name of the target element.

```jsx
import React, { useState } from 'react';

function SimpleForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Name: ${formState.name}, Email: ${formState.email}`);
  }

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formState.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formState.email} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
```

5. Validation

We can add validation to our form to ensure that the user has filled out all necessary fields. We'll add a simple validation that requires the user to fill out both the name and email fields.

```jsx
import React, { useState } from 'react';

function SimpleForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (!formState.name || !formState.email) {
      alert('Please fill out all fields');
      return;
    }
    alert(`Name: ${formState.name}, Email: ${formState.email}`);
  }

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formState.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formState.email} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
```

Now, if the user tries to submit the form without filling out both the name and email fields, an alert will pop up asking them to fill out all fields.

This is a simple example of a form in React. Forms in real-world applications can be much more complex, with many inputs and complex validation rules. However, the basic principles demonstrated here—using controlled components and handling form submission—remain the same.


```jsx
import React, { useState } from "react";

function App() {
   declaring state
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setState(prevState => ({
        ...prevState,
        skills: { ...prevState.skills, [name]: checked },
      }));
    } else if (type === "file") {
      setState(prevState => ({ ...prevState, [name]: e.target.files[0] }));
    } else {
      setState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = state;

    const formattedSkills = [];
    for (const key in skills) {
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    };
    console.log(data);
  };

  const {
    firstName,
    lastName,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    country,
    gender,
    bio,
  } = state;

  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First Name"
            /> <br />
            <small>{firstName}</small>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telephone </label>
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={handleChange}
            placeholder="Tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth </label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color</label>
          <input
            type="color"
            id="favoriteColor"
            name="favoriteColor"
            value={favoriteColor}
            onChange={handleChange}
            placeholder="Favorite Color"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="Weight in Kg"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label> <br />
          <select name="country" onChange={handleChange} id="country">
            {selectOptions}
          </select>
        </div>

        <div>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div>
          <p>Select your skills</p>
          <div>
            <input
              type="checkbox"
              id="html"
              name="html"
              onChange={handleChange}
            />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="css"
              name="css"
              onChange={handleChange}
            />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={handleChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
        <div>
          <label htmlFor="bio">Bio</label> <br />
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
            cols="120"
            rows="10"
            placeholder="Write about yourself ..."
          />
        </div>

        <div>
          <input type="file" name="file" onChange={handleChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
```
