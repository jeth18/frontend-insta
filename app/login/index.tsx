'use client'

import { useState } from 'react'
import { Button, Input } from '../../components'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import app from '../../firebase/conf'

const auth = getAuth(app)
const storage = getStorage()
const starsRef = ref(storage, '59e598cbe8e14d39eaa0475b59dec58e.svg')

const logger = (user: any): any => {
  return fetch('http://localhost:8000/api/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((json) => json)
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
      console.log('Error => ' + error)
    })
}

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [imgV, setImg] = useState('')

  const handleClick = async (e: any) => {
    e.preventDefault()
    console.log(user)
    // const { token, username } = await logger(user);
    // console.log(token)

    // signInWithCustomToken(auth, token)
    //   .then((userCredential) => {
    //     // Signed in
    //     console.log(userCredential)
    //     // ...
    //     img().then((resp) => {
    //       if(resp ) setImg(resp)
    //     })
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     // ...
    //   })
  }

  const handleChange = (e: any): void => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="content">
      <form>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          handlechange={(e) => handleChange(e)}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          handlechange={(e) => handleChange(e)}
        />
        <Button onClick={(e: any) => handleClick(e)}>Login</Button>
      </form>
    </div>
  )
}

export default Login
