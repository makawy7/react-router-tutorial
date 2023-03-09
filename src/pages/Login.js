import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value && emailRef.current.value) {
      setUser({ name: nameRef.current.value, email: emailRef.current.value });
      navigate("/dashboard");
    }
  };
  return (
    <section className="section">
      <form className="form">
        <h5>Login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input ref={nameRef} type="text" className="form-input" id="name" />
          <label htmlFor="name" className="form-label">
            email
          </label>
          <input ref={emailRef} type="text" className="form-input" id="email" />
          <button onClick={handleSubmit} className="btn">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
