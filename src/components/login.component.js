import React, { useState } from "react";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    username: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { username, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === username.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">
        <label>{errorMessages.message}</label>
      </div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username </label>
          <input type="text" name="username" className="form-control" placeholder="Enter username" required />
          {renderErrorMessage("username")}
        </div>
        <div className="mb-3">
          <label>Password </label>
          <input type="password" name="pass" className="form-control" placeholder="Enter password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="d-grid">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <h3>Sign In</h3>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;