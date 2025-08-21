function Cardd({ title, description, buttonText, imageUrl }) {
  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
        <img
         src={imageUrl}
         
         style={{width: "100px", height: "100px", borderRadius: "50%"}}
        
        />
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Cardd;
