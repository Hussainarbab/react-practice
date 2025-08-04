


function UserGreeting(props){

if(props.isloggedIn){
    return <h1 > Wellcome {props.username}</h1>
    
}else{
    return <h1>please login to continue</h1>
}


}

export default UserGreeting