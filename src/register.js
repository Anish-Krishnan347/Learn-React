import { useState } from "react"
function Register(props){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

     const register = ()=> {
        const registerData = {
        name,
        email,
        password
    }
    props.setUser([...props.user,registerData])
  }
  return (
    <>
      {/* <div>
        {props.isLogged == false ? <b>{JSON.stringify(props.user)}</b>:null}
      </div> */}
      
    {props.isLogged === false ?
    <><div style={{display:'flex', justifyContent:'center',marginBottom:'15px'}}>
        <input style={{width:'250px'}} type='text' placeholder='Enter your name' onKeyUp={(e)=>setName(e.target.value)}/>
    </div>
      
    <div style={{display:'flex', justifyContent:'center',marginBottom:'15px'}}>
       <input style={{width:'250px'}} type='email' placeholder='Enter your email' onKeyUp={(e)=>setEmail(e.target.value)}/>
    </div>
    <div style={{display:'flex', justifyContent:'center',marginBottom:'15px'}}>
      <input style={{width:'250px'}} type='password' placeholder='Enter your password' onKeyUp={(e)=>setPassword(e.target.value)}/>
    </div>
    <div style={{display:'flex', justifyContent:'center',marginBottom:'15px'}}>
         
      <button type='button' onClick={()=>{return(
        register(),
        props.setIsLogged(true),
        props.setIsUserLogin(false)
        
      )}} >Register</button>
    </div>
    </>
      :null}
    </>
  );
}
export default Register