import { Link } from "react-router-dom";

const Signup = () => {
  return (

    <>
      <div className="container">
      <h1>Enter new username to save Todo's.</h1>

      <div className="flex-row">
        <p>Enter new username: </p>
        <form>
          <input type="text" placeholder="username" />
          <button>Sign up</button>
        </form>
      </div>

      <div className="flex-row">
        <p>ALready a user Sign in.</p>
        <p><Link to={'/signin'}>SignIn</Link></p>
      </div>

      </div>
    </>
  )
}

export default Signup;
