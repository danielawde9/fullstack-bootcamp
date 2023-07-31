

Installing React Router

Now, install the react-router-dom package. This package provides DOM bindings for React Router.

bash
Copy code
npm install react-router-dom@6
Step 3: Creating Components

Before setting up the router, let's create some components. For simplicity, we'll create three simple components.

Home.js

jsx
Copy code
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
About.js

jsx
Copy code
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
Contact.js

jsx
Copy code
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
Step 4: Setting Up Routes

Now let's set up routing. We will import the necessary components from react-router-dom and define our routes.

App.js

jsx
Copy code
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
In this setup:

<Router> is a React component that wraps the application.
<Routes> is where you put <Route> components.
Each <Route> defines a route for the application, where the path prop is the URL path, and the element prop is the React element that gets rendered when the path is matched.
We've also added a simple navigation bar above the routes. When you click a link, it navigates to the corresponding route.

Step 5: Testing the Application

You can now run your application to see the routing in action:

bash
Copy code
npm start
Browse to http://localhost:3000 to see your application. Try clicking the links to navigate between the different components.

This is a basic introduction to React Router. It has many more features such as nested routes, route parameters, programmatically navigating, etc. that you might find useful in larger applications.




Modified Nav bar 

App.js:

jsx
Copy code
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
Navigation.js:

jsx
Copy code
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;