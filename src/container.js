function Container(props){
    return(
    <>
    {props.isUserLogin === true ? 
        <div style={{backgroundColor:'skyblue',width:'75%',height:'450px',margin:'0 auto'}}>
            <>
                <div style={{marginTop:'-25px'}}>
                <h3 style={{textAlign:'center',fontSize:'35px',paddingTop:'100px'}}>Welcome! {props.loginDetail.loginEmail}</h3>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button onClick={()=>{
                        props.setIsUserLogin(false)
                    }}>Logout</button>
                </div>
            </>
        

        </div>:null    
    }
    
    </>)
}
export default Container;