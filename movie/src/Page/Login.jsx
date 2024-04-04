import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [persons, setpersons] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const addlogin = (event) => {
    event.preventDefault(event);

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    const person = {
      email: email,
      password: password
    }

    axios.post('http://localhost:2050/login', person).then((response) => {
      setpersons(persons.concat(response.data))
      console.log(persons.concat(response.data));
      if (response.data === "Success") {
        navigate('/movies')
      } else {
        setError(response.data);
      }

    }).catch(error => console.log(error))
  }
  return (
    <div>
      <h2>Singup Form</h2>
      <form onSubmit={addlogin}>
        <div>
          <b>Email :</b> <br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div><br />
        <div>
          <b>Password :</b> <br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div><br />
        <div>
          <button type='submit' className='btn'>Login</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <Link to="/singup">Sing up</Link>
      </div>
    </div>
  )
}

export default Login