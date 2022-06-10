import React from "react";
import { AuthContext } from "./auth-context";

class Login extends React.Component {
  render() {
    const auth = this.context;
    // console.log(auth.account.idToken.emails,1);
    return (
      <div>
        <button
          type="primary"
          className="btn btn--ghost"
          block
          onClick={() => auth.onSignIn()}
        >
          Login
        </button>
        <button
          type="primary"
          className="btn btn--ghost"
          block
          onClick={() => auth.onSignOut()}
        >
          Logout
        </button>

		{
			auth.isAuthenticated ? <p>Welcome {auth.account.name} <br/>{auth.account.idToken.emails}</p> : <p>Please login</p>
		}
      </div>
    );
  }
}

Login.contextType = AuthContext;

export default Login;