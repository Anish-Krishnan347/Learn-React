import { useState } from "react"

function Login(props){
    const [loginEmail,setLoginEmail] = useState('')
    const [loginPassword,setLoginPassword] = useState('')
    

        
    let checkLogin = ()=>{
        for(const each of props.user){
            if(each.email === loginEmail && each.password === loginPassword){
                const userDetail = {
                    userName : each.name,
                    loginEmail,
                    loginPassword
                }
                alert('login successfull')
                props.setLoginDetail(userDetail)
                props.setIsUserLogin(true)
                return;
               
            }
            else{alert('invalid email or password')}
        }
        
    }
    
    return (
        <>
        {props.isUserLogin === false ?
        <>
        <div style={{display:'flex', justifyContent:'center',marginBottom:'15px'}}>
            <input style={{width:'250px'}} type='email' placeholder='Enter your email' onKeyUp={(e)=>setLoginEmail(e.target.value)}/>
        </div>
        <div style={{display:'flex', justifyContent:'center',marginBottom:'15px'}}>
            <input style={{width:'250px'}} type='password' placeholder='Enter your password' onKeyUp={(e)=>setLoginPassword(e.target.value)}/>
        </div>
        <div style={{display:'flex', justifyContent:'center',marginBottom:'15px'}}>
            <button type='button' onClick={checkLogin}>Login</button>
        </div>
        </>:null}
             
       </>
        
    )

}
export default Login