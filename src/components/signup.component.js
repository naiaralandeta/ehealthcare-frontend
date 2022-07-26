import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Date of birthday</label>
          <input
            type="text"
            className="form-control"
            placeholder="DOB"
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adress"
          />
        </div>
        <div className="mb-3">
          <label>Account number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Account number"
          />
        </div>
        <div className="mb-3">
          <label>Funds</label>
          <input
            type="text"
            className="form-control"
            placeholder="Funds"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}