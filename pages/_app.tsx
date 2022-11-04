import '../styles/globals.css'

import { useState } from 'react'
import { getAuth, signInWithCustomToken } from "firebase/auth";
import app from '../firebase/conf';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const auth = getAuth(app);
const storage = getStorage();
const starsRef = ref(storage, "59e598cbe8e14d39eaa0475b59dec58e.svg");

const logger = (user: any): any => {
  return fetch("http://localhost:8000/api/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((response) => response.json())
    .then(json => json)
    .catch((e) => console.log(e.error))
}

const img = () => {
  return getDownloadURL(starsRef)
    .then((url) => {
      // Insert url into an <img> tag to "download"
      console.log(url)
      return url
    })
    .catch((error) => {
      console.log("Error => " + error)
    });

}

function App() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [imgV, setImg] = useState('')

  const handleClick = async (e: any) => {
    e.preventDefault()
    const { token, username } = await logger(user);
    console.log(token)

    signInWithCustomToken(auth, token)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential)
        // ...
        img().then((resp) => {
          console.log(resp)
          setImg(resp)
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });

  }

  const handleChange = (e: any) => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  return (
    <div>
      <form>
        <input type="text" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button onClick={(e) => handleClick(e)}>Login</button>
      </form>
      <div>
        <img src={imgV} />
      </div>
    </div>
  )
}


export default App;