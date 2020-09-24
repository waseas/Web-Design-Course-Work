import React, { Component } from "react";
import "./App.css";
import TableData from "./TableData";
import { withRouter } from 'react-router-dom';


class Form extends Component {

    emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    firstNameRegex = RegExp(/^[a-zA-Z]*$/);
    phoneNumberRegex = RegExp(/^\d{3}-?\d{3}-\d{4}$/);

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            firstName: null,
            lastName: null,
            email: null,
            phoneNumber: null,
            socialMedia: null,
            comments: null,
            
            formErrors: {
                title: "",
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                socialMedia: "",
                comments: "",
                
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const {
            title,
            firstName,
            lastName,
            email,
            phoneNumber,
            socialMedia,
            comments,
            

        } = this.state;
        if (this.state.formErrors.title == "" && this.state.formErrors.firstName == "" && this.state.formErrors.lastName == "" && this.state.formErrors.email == "" && this.state.formErrors.phoneNumber == "" && this.state.formErrors.socialMedia == "" && this.state.formErrors.comments == "" ) {
            localStorage.setItem("title", title);
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("socialMedia", socialMedia);
            localStorage.setItem("comments", comments);
            
            this.props.history.push('/table');
        } else {
            alert("Please enter correct details!!");
        }
    };

    handleChange = e => {
        const checkedArr = [];
        let { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case "firstName":
                formErrors.firstName = this.firstNameRegex.test(value)
                    ? ""
                    : "First Name is invalid, only letter allowed";
                break;
            case "lastName":
                formErrors.lastName = this.firstNameRegex.test(value)
                    ? ""
                    : "Last Name is invalid, only letter allowed";
                break;
            case "email":
                formErrors.email = this.emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "phoneNumber":
                formErrors.phoneNumber = this.phoneNumberRegex.test(value)
                    ? ""
                    : "invalid phone number";
                break;
            default:
                break;
        }

        if (e.target.type == 'checkbox') {
            const checkeds = document.getElementsByName('socialMedia');
            for (let i = 0; i < checkeds.length; i++) {
                if (checkeds[i].checked) {
                    checkedArr.push(checkeds[i].value);
                }
            }
            value = checkedArr;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {

        const { formErrors } = this.state;
        const isHobbyChecked = this.state.isHobbyChecked;
        return (
            <div className="Wrapper">
                <div className="form-Wrapper">
                    <h2>Feedback</h2>
                    <h3>Love something? Hate something? Let us know!</h3>
                    Note : Fields marked with an asterisk(*) are mandatory
                    <br></br>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <div className="title">
                            <label htmlFor="Title*" className="pr-3">Title*:</label>
                            <input type="radio" id="title" name="title" value="miss" required onChange={this.handleChange} /> Miss
                            <input type="radio" id="title" name="title" value="mr" required onChange={this.handleChange} /> Mr.
                            <input type="radio" id="title" name="title" value="mrs" required onChange={this.handleChange} />Mrs.
                        </div>

                        <div className="firstName">
                            <label htmlFor="firstName" className="pr-3">First Name*:</label>
                            <input className={formErrors.firstName.length > 0 ? "error" : null} placeholder="First Name" type="text" name="firstName" id="firstName" required onBlur={this.handleChange} />
                            <br />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <br></br>
                        <div className="lasttName pr-3">9
                            <label htmlFor="lastName" className="pr-3">Last Name*:</label>
                            <input className={formErrors.lastName.length > 0 ? "error" : null} placeholder="Last Name" type="text" name="lastName" id="lastName" required onBlur={this.handleChange} />
                            <br />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <br></br>
                        <div className="email">
                            <label htmlFor="email" className="pr-3">Email ID*:</label>
                            <input className={formErrors.email.length > 0 ? "error" : null} placeholder="xxxxx@xxx.xxx" type="text" name="email" id="email" required onBlur={this.handleChange} />
                            <br />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <br></br>
                        <div className="phoneNumber">
                            <label htmlFor="phoneNumber" className="pr-3">Phone Number*:</label>
                            <input
                                className={formErrors.phoneNumber.length > 0 ? "error" : null}
                                placeholder="xxx-xxx-xxxx"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                required
                                onBlur={this.handleChange}
                            />
                            <br />
                            {formErrors.phoneNumber.length > 0 && (
                                <span className="errorMessage">{formErrors.phoneNumber}</span>
                            )}
                        </div>
                        <br></br>
                        <div className="socialMedia pr-3">
                            <label htmlFor="socialMedia" className="pr-3">How did you hear:</label>
                            <input type="checkbox" name="socialMedia" value="facebook" onChange={this.handleChange} /> Facebook
                            <input type="checkbox" name="socialMedia" value="google" onChange={this.handleChange} /> Google
                            <input type="checkbox" name="socialMedia" value="yelp" onChange={this.handleChange} /> Yelp
                        </div>
                        <br></br>
                        <div className="comments">
                            <label htmlFor="comments" className="pr-3">Comments*: </label>
                            <textarea name="comments" id="form_comments" placeholder="Your comments" required onBlur={this.handleChange}></textarea>
                            <br />
                            {formErrors.comments.length > 0 && (
                                <span className="errorMessage">{formErrors.comments}</span>
                            )}
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-secondary mr-3">
                            Submit
                     </button>
                        <button type="Reset" name="Reset" value="Reset" className="btn btn-secondary"> Reset
                        </button>
                        <br></br>
                        <div className="data">
                            <table />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    

}

export default withRouter(Form);
