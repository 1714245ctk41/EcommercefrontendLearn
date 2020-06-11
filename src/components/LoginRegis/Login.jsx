import React from "react";
import "./LoginRegister.scss";
import FormInput from "./FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  close = () => {
    document.getElementsByClassName("logreg-container")[0].style.opacity = 0;
    setTimeout(
      () =>
        (document.getElementsByClassName("logreg-container")[0].style.display =
          "none"),
      300
    );
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  <FormInput
                    value={this.state.email}
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    label="Email"
                  />

                  <span className="underline" />
                </td>
              </tr>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  {" "}
                  <FormInput
                    value={this.state.password}
                    name="password"
                    type="password"
                    handleChange={this.handleChange}
                    label="Password"
                  />
                  <span className="underline" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                {/* colspan="2" */}
                <td>
                  <CustomButton className="SIGNIN" type="submit">
                    SIGN IN{" "}
                  </CustomButton>
                </td>
              </tr>
              <tr>
                {/* colspan="2" */}
                <td>
                  <CustomButton
                    className="SIGNINGOOGLE"
                    type="submit"
                    onClick={signInWithGoogle}
                  >
                    SIGN IN WITH GOOGLE{" "}
                  </CustomButton>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
        <div className="close-block" onClick={this.close}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  }
}

export default Login;
