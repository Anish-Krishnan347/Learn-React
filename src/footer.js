function Footer(props){
    // const date = new DateTime()
    return (
        <>
            {props.isUserLogin === true ?
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <>
                <h2>Footer</h2>
                <h3>Loggin at :{props.date}</h3>
            </>    
            </div>:null}
        
        </>
    )
}
export default Footer
