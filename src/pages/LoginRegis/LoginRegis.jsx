import React from "react";

import "./LoginRegis.scss";
import Login from "../../components/LoginRegis/Login";

function close() {
  document.getElementsByClassName("logreg-container")[0].style.opacity = 0;
  setTimeout(
    () =>
      (document.getElementsByClassName("logreg-container")[0].style.display =
        "none"),
    500
  );
}

const LoginRegis = () => (
  <div className="logreg-container">
    <Login />
    <div className="override-logreg" onClick={close} />
  </div>
);

export default LoginRegis;
