// import axios from 'axios'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// function Singup() {
//   const [persons, setPersons] = useState([])
//   const [firstname, setfirstName] = useState("")
//   const [lastname, setlastName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const navigate = useNavigate();


//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!firstname.trim()) {
//       setError("Please enter your first name.");
//       return;
//     }


//     if (!lastname.trim()) {
//       setError("Please enter your last name.");
//       return;
//     }


//     if (!email.trim()) {
//       setError("Please enter your email.");
//       return;
//     }


//     if (!password.trim()) {
//       setError("Please enter your password.");
//       return;
//     }


//     if (password.length < 8) {
//       setError("Password must be at least 8 characters long.");
//       return;
//     }
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     if (!passwordRegex.test(password)) {
//       setError("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
//       return;
//     }


//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
// const person = {
//   firstname: firstname,
//   lastname: lastname,
//   email: email,
//   password: password
// }
// axios.post('http://localhost:2050/singup', person).then((response) => {
//   setPersons(persons.concat(response.data));
//   console.log(persons.concat(response.data));
//   setfirstName('')
//   setlastName('')
//   setEmail('')
//   setPassword('')
//   navigate('/login')
// }).catch((error) => {
//   console.log(error);
// });

//   }

//   return (
//     <div>
//       <h2>Singup Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <b>FirstName :</b> <br />
//           <input type="text" value={firstname} onChange={e => setfirstName(e.target.value)} />
//         </div><br />
//         <div>
//           <b>LastName :</b> <br />
//           <input type="text" value={lastname} onChange={e => setlastName(e.target.value)} />
//         </div><br />
//         <div>
//           <b>Email :</b> <br />
//           <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//         </div><br />
//         <div>
//           <b>Password :</b> <br />
//           <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//         </div><br />
//         <div>
//           <button type='submit' className='btn'>Sing Up</button>
//         </div><br />

//       </form>
//       <div>
//         <Link to="/login">Login</Link>
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   )
// }

// export default Singup


import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [persons, setPersons] = useState([])
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 
  const navigate = useNavigate();

  

  const handleSubmit = (event) => {
    event.preventDefault();

    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");

    if (!firstname.trim()) {
      setFirstNameError("Please enter your first name.");
      setTimeout(() => {
        setFirstNameError("");
      }, 5000);
      return;
    }

    if (!lastname.trim()) {
      setLastNameError("Please enter your last name.");
      setTimeout(() => {
        setLastNameError("");
      }, 5000);
      return;
    }

    if (!email.trim()) {
      setEmailError("Please enter your email.");
      setTimeout(() => {
        setEmailError("");
      }, 5000);
      return;
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      setTimeout(() => {
        setPasswordError("");
      }, 5000);
      return;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      setTimeout(() => {
        setPasswordError("");
      }, 5000);
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      setTimeout(() => {
        setPasswordError("");
      }, 5000);
      return;
    }

    const person = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }
    axios.post('http://localhost:2050/singup', person).then((response) => {
      setPersons(persons.concat(response.data));
      console.log(persons.concat(response.data));
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      navigate('/login')
    }).catch((error) => {
      console.log(error);
    });
  }


  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <b>First Name :</b> <br />
          <input type="text" value={firstname} onChange={e => setFirstName(e.target.value)} />
          {firstnameError && <p style={{ color: 'red' }}>{firstnameError}</p>}
        </div><br />
        <div>
          <b>Last Name :</b> <br />
          <input type="text" value={lastname} onChange={e => setLastName(e.target.value)} />
          {lastnameError && <p style={{ color: 'red' }}>{lastnameError}</p>}
        </div><br />
        <div>
          <b>Email :</b> <br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div><br />
        <div>
          <b>Password :</b> <br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div><br />
        <div>
          <button type='submit' className='btn'>Signup</button>
        </div><br />
      </form>
      <div>
        <Link to="/login">Login</Link>
      </div>

    </div>
  )
}

export default Signup;
