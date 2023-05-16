import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://6430bc6ed4518cfb0e546b5e.mockapi.io/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        const { email, password } = this.state;
        const user = data.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          localStorage.setItem("user", JSON.stringify(user)); 
          alert("okkpassword");

          this.props.history.push("/");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div style={{ marginTop: "200px" }}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
