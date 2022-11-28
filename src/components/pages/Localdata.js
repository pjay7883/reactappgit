import React from "react";

import { useState } from "react";




function Localdata() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")


    const handle = () => {
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", pswd)
    }



    return (

        <div className="container">
            <div className="py-4">


                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Enter Your Name</label>
                        <input type="name" placeholder="Enter your Name" class="form-control" id="exampleInputname" onChange={(e) => setName(e.target.value)} />
                    </div>


                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" placeholder='Enter your Email address' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" placeholder='Enter your Password' class="form-control" id="exampleInputPassword1" onChange={(e) => setPswd(e.target.value)} />
                    </div>


                    <div class="form-group">

                        <button type="submit" onClick={handle} class="btn btn-primary"> Send to localStorage </button>
                    </div>

                    <div class="form-group">

                        <h1>Your Saved Data will be here </h1>
                        <div class="form-group">

                            <ul>
                            <div> <h4>Your Name : </h4> {localStorage.getItem("name")} </div>
                            <div> <h4>Your Email : </h4> {localStorage.getItem("email")} </div>
                            <div> <h4>Your Password : </h4> {localStorage.getItem("password")}</div>
                            </ul>
                            

                        </div>
                    </div>
                </form>

            </div>
        </div>

    )
};

export default Localdata;
