import React from "react";

function LoginPage() {
    // Create your login form here   nhh
    return (
        <div className="center-content">
            <h2>Login Page</h2>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default LoginPage;