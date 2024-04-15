function Header(props){
    return (
        <>
        {props.isUserLogin === true ?
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <>
                <h3>Hi! {props.loginDetail.userName}</h3>
                <h3>Learn REACT</h3>
            </>    
            </div>:null}
        </>
    )
}
export default Header