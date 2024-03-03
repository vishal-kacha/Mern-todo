import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className="container">
      <h1>Hey! Signin with username to save Todo's.</h1>

      <div className="flex-row">
        <p>Enter your username: </p>
        <form>
          <input type="text" placeholder="username" />
          <button>Sign in</button>
        </form>
      </div>

      <div className="flex-row">
        <p>If new user signup.</p>
        <p><Link to={'/signup'}>SignUp</Link></p>
      </div>

      </div>
    </>
  )
}

export default Signin;
