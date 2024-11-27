# Timetable Management System Documentation

## Table of Contents

* [Overview](#overview)
* [Modules](#modules)
    * [Frontend](#frontend)
        * [index.html](#indexhtml)
        * [App.js](#appjs)
        * [App.css](#appcss)
        * [Navbar.js](#navbarjs)
        * [Navbar.css](#navbarcss)
        * [Home.js](#homejs)
        * [Login.js](#loginjs)
        * [Login.css](#logincss)
        * [Register.js](#registerjs)
        * [Register.css](#registercss)
        * [Admin.js](#adminjs)
        * [Admin.css](#admincss)
        * [Data.js](#datajs)
        * [Faculty.js](#facultyjs)
        * [Faculty.css](#facultycss)
        * [Student.js](#studentjs)
        * [Section1.js](#section1js)
        * [Section2.js](#section2js)
        * [Subsect1.js](#subsect1js)
        * [Subsect2.js](#subsect2js)
        * [Chart1.js](#chart1js)
        * [Chart2.js](#chart2js)
        * [NotFound.js](#notfoundjs)
        * [EditUser.js](#edituserjs)
        * [EditUser.css](#editusercss)
        * [App.test.js](#apptestjs)
        * [index.css](#indexcss)
        * [index.js](#indexjs)
        * [reportWebVitals.js](#reportwebsitlesjs)
        * [setupTests.js](#setuptestsjs)

    * [Backend](#backend)
        * [index.js](#indexjs-1)
        * [auth.js](#authjs)
        * [user.js](#userjs)
        * [db.js](#dbjs)


* [Key Functions](#key-functions)


## Overview

This document provides comprehensive documentation for a timetable management system. The system consists of a frontend built using React and a backend built using Node.js and MySQL.  The application allows for user registration, login, and viewing/editing of timetables based on user roles (admin, faculty, student).  The frontend utilizes charting libraries to visualize timetable data.


<img width="1438" alt="Screenshot 2022-02-01 at 1 52 06 PM" src="https://user-images.githubusercontent.com/84470487/151934656-8575dc2a-3070-4a1e-ac3c-b85572330e3f.png">



<img width="1438" alt="Screenshot 2022-02-01 at 1 52 44 PM" src="https://user-images.githubusercontent.com/84470487/151934754-f208bdc3-b449-4bd6-a398-43054370ae12.png">




<img width="1438" alt="Screenshot 2022-02-01 at 1 53 26 PM" src="https://user-images.githubusercontent.com/84470487/151934828-3d6d4cc6-eaf0-4581-ae69-77277bebbe96.png">


<img width="1438" alt="Screenshot 2022-02-01 at 1 54 30 PM" src="https://user-images.githubusercontent.com/84470487/151934949-8d4b0e0d-87f8-43a9-aee8-735f4453a39d.png">



## Modules

### Frontend

#### index.html
This file is the main HTML file for the React application. It sets up the basic structure of the page, including linking to the stylesheets and JavaScript files.

#### App.js
This is the main component of the React application. It uses React Router to manage navigation between different pages (Login, Register, Home, Admin, Faculty, Student, Data, EditUser, and NotFound). It also manages the authentication state using useState and useEffect hooks, checking for a logged-in user on component mount.  Bootstrap is integrated for styling.

javascript
// Example of using useState and useEffect for authentication:
function App() {
  const [isAuth, setIsAuth] = useState(false); 

  useEffect(() => {
    setIsAuth(localStorage.getItem("loggedIn")); 
  }, []);

  // ... rest of the component
}


#### App.css
This file contains the global CSS styles for the application.

#### Navbar.js & Navbar.css
The Navbar.js component renders the navigation bar at the top of the application.  It dynamically displays different navigation links based on the user's login status and role. Navbar.css styles the navigation bar.  The logout functionality removes relevant local storage items.

#### Home.js
This component is the landing page after successful login.  It renders different components (Student, Admin, Faculty) based on the user's role retrieved from local storage.  It redirects to the login page if the user is not logged in.

#### Login.js & Login.css
The Login.js component handles user login.  It makes a POST request to the backend /auth/login endpoint using Axios.  Login.css styles the login form.

#### Register.js & Register.css
The Register.js component handles user registration.  It makes a POST request to the /auth/register endpoint. Register.css styles the registration form.

#### Admin.js & Admin.css
The Admin.js component displays the timetable data for an administrator.  It fetches data from the backend and uses React-Bootstrap's Table component to display it.  It also provides functionality to edit entries via links to the EditUser component.  Admin.css styles the admin panel.

#### Data.js
This component acts as a central hub for data viewing for admins, offering selection between section 1 and section 2 data.

#### Faculty.js & Faculty.css
The Faculty.js component displays timetable data for faculty members. It fetches and displays data for the section assigned to the faculty member. Faculty.css provides styling for this view.

#### Student.js
Displays timetable information for students.

#### Section1.js & Section2.js
These components display timetable data for sections 1 and 2, respectively.

#### Subsect1.js & Subsect2.js
These components display summarized data using tables for sections 1 and 2, respectively.

#### Chart1.js & Chart2.js
These components use react-chartjs-2 to generate bar charts visualizing the frequency of different subjects in sections 1 and 2 respectively.  Axios is used to fetch data from the backend.

#### NotFound.js
This component is displayed when a user tries to access a non-existent route.

#### EditUser.js & EditUser.css
The EditUser.js component allows admins to edit timetable entries.  It uses Axios to make POST requests to update data on the backend.  EditUser.css styles the edit form.

#### App.test.js
This file contains a basic test for the App component.

#### index.css
This file contains global CSS styles for the application.

#### index.js
This is the entry point for the React application.

#### reportWebVitals.js
This file is used for performance monitoring.

#### setupTests.js
This file sets up Jest for testing.


### Backend

#### index.js
This file is the entry point for the Node.js backend.  It sets up Express, body-parser, and cors middleware. It also defines routes for authentication (/auth) and user data (/user).


#### auth.js
This file defines the routes for user authentication (registration and login). It uses bcrypt for password hashing and MySQL for database interaction.  The example shows how bcrypt.compare is used to verify passwords.

javascript
// Example of bcrypt password comparison:
router.post("/login", (req, res) => {
  // ...
  bcrypt.compare(password, result[0].password, (err, response) => {
    if (response) {
      // Login successful
    } else {
      // Login failed
    }
  });
  // ...
});


#### user.js
This file defines the routes for accessing and manipulating user data (timetables).  It uses MySQL to interact with the database. It includes endpoints for fetching timetable data by section and for updating timetable entries.


#### db.js
This file establishes the connection to the MySQL database.


## Key Functions

* *User Registration (/auth/register):*  Registers a new user with username, password, role (admin, faculty, student), and section.  Uses bcrypt to hash the password before storing it in the database.

* *User Login (/auth/login):* Authenticates a user based on username and password.  Compares the provided password with the hashed password in the database using bcrypt.  Sets session variables or local storage upon successful login.

* *Get Timetable Data (/user/section1, /user/section2):* Retrieves timetable data for a specific section (1 or 2) from the database.

* *Get Timetable Summary (/user/periodslist1, /user/periodslist2):*  Retrieves summarized timetable data, counting occurrences of each subject within a section.  This data is used to populate the bar charts.

* *Edit Timetable Entry (/user/edit/:id & /user/update/:id):*  Fetches a specific timetable entry by ID and allows for updating the timetable entry.


*Example Usage (Frontend - Axios):*

javascript
import axios from 'axios';

// Function to fetch timetable data for section 1
const fetchSection1Data = async () => {
  try {
    const response = await axios.get('/user/section1');
    const data = response.data;
    // Process the timetable data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Function to update a timetable entry
const updateTimetableEntry = async (id, updatedData) => {
  try {
    const response = await axios.post(`/user/update/${id}`, updatedData);
    // Process the response
  } catch (error) {
    console.error("Error updating data:", error);
  }
};


This documentation provides a high-level overview.  More detailed function-specific documentation might be needed within the codebase itself using JSDoc or similar tools.  Error handling and input validation are crucial aspects which are only briefly touched upon here and warrant detailed consideration within the implementation.
