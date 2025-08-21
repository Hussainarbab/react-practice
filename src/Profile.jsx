import Cardd from "./Cardd";
import imgp from "../src/assets/profile.png"


function Profile(){


   
    
    return(        <>
    
        <div className="main-profile-div">
            <div className="profile">
              <Cardd
  imageUrl={imgp}
  title="Ali"
  discription="Frontend Developer"
  text="Click Me"
  alertMessage="Ali function "
/>

<Cardd
  imageUrl={imgp}
  title="Hussain"
  discription="React Developer"
  text="Click Me"
  alertMessage="Hussain function "
/>

<Cardd
  imageUrl={imgp}
  title="Nasir"
  discription="UI/UX Designer"
  text="Click Me"
  alertMessage="Nasir function "
/>

            </div>
        </div>
       
        
        </>

    )
 


}
export default Profile;
