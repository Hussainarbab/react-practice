import Cardd from "./Cardd";
import imgp from "../src/assets/profile.png"


function Profile(){
    return(
        <>
        <div className="main-profile-div">


            <div className="profile">
                <Cardd
                imageUrl={imgp}
                title="Hussain Abbas"
                discription="Web developer"
                buttonText="Click Me"

                />
                 <Cardd
                imageUrl={imgp}
                title="Hussain Abbas"
                discription="Web developer"
                buttonText="Click Me"

                />
                 <Cardd
                imageUrl={imgp}
                title="Hussain Abbas"
                discription="Web developer"
                buttonText="Click Me"

                />
            </div>
        </div>
        
        </>

    )


}
export default Profile;