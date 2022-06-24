import React, {useState} from "react";



function LoginForm({
    Login 
    
}){

    const[details,setDetails]=useState({name:"",password:""})

    const submitHendler = e =>{
        e.preventDefault();

        Login(details);
    };


    return(
        <form onSubmit={submitHendler}>
            <div className="form-inner">
                <h3>Login</h3>
                <div className="form-group">
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" placeholder="Your name" name="name" id="name" onChange={e=> setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Password" name="password" id="password" onChange={e=> setDetails({...details, name:e.target.value})} value={details.password}></input>
                </div>
                <input type="submit" value="LOGIN"></input>    
            </div>
        </form>

    )

}

export default LoginForm