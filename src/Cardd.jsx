

function Cardd({title, discription, buttonText,imageUrl}){

    return(
        <>
        <div className="main-div">

            <img
            src={imageUrl}
            style={{width: "150px",height: "150px", borderRadius: "50%"}}
            
            />
            <h2>{title}</h2>
            <p>{discription}</p>
            <button>{buttonText}</button>

        </div>
        
        
        
        
        </>
    )


}

export default Cardd;