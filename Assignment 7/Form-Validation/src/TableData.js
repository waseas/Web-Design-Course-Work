import React, { Component } from "react";
import { Table } from 'react-bootstrap';

class TableData extends Component {
  title = (localStorage.getItem("title"));
  firstName = (localStorage.getItem("firstName"));
  lastName = (localStorage.getItem("lastName"));
  email = (localStorage.getItem("email"));
  phoneNumber = (localStorage.getItem("phoneNumber"));
  socialMedia = (localStorage.getItem("socialMedia"));
  comments = (localStorage.getItem("comments"));
  constructor(props) {
    super(props);

    this.state = {
      title: this.title,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      socialMedia: this.socialMedia,
      comments: this.comments,
      hobbies: this.hobbies
    };
  }

  render() {
    return (
      <div className="Wrapper">
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Social Media Source</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.title.toUpperCase()}</td>
              <td>{this.firstName.toUpperCase()}</td>
              <td>{this.lastName.toUpperCase()}</td>
              <td>{this.email}</td>
              <td>{this.phoneNumber}</td>
              <td>{this.socialMedia}</td>
              <td>{this.comments}</td>
            </tr>
          </tbody>
        </Table>
        <button type="button" className="btn btn-secondary my-2" onClick={this.back}>Back</button>
      </div>
    );
  }

  back = () => {
    this.props.history.push("/");
  }

}
export default TableData;
