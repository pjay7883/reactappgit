import React from "react";
import { useState } from 'react'

function Contact() {

  const [details, setDetails] = useState({
    email: '',
    password: '',
    

  })

  const PostData = async (e) => {
    e.preventDefault()

    const { email, password } = details;

    const res = await fetch("https://web2-11ca8-default-rtdb.firebaseio.com/website.json",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,

        })
      })

  }

  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact  Page</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type='email'
              placeholder='Enter your Email address'
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" onChange={(e) =>
                setDetails({ ...details, email: e.target.value })} />

            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type='password' placeholder='Enter your Password' class="form-control" id="exampleInputPassword1" onChange={(e) => setDetails({ ...details, password: e.target.value })} />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" onClick={PostData} class="btn btn-primary">
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact;
