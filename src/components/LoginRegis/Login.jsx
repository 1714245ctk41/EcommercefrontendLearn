import React from "react";
import "./LoginRegister.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  close = () => {
    document.getElementsByClassName("logreg-container")[0].style.opacity = 0;
    setTimeout(
      () =>
        (document.getElementsByClassName("logreg-container")[0].style.display =
          "none"),
      500
    );
  };
  render() {
    return (
      <div className="logreg">
        <table>
          <caption>
            <h1>Login</h1>
          </caption>
          <tbody>
            <tr>
              <th>Username</th>
              <td className="logreg-input-container">
                <input type="text" required />
                <label>username</label>
                <span className="underline" />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td className="logreg-input-container">
                {" "}
                <input type="password" required />
                <label>password</label>
                <span className="underline" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="close-block" onClick={this.close}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  }
}

export default Login;
