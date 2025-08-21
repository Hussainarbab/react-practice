function Cardd({ title, discription, imageUrl, text, alertMessage }) {
  const handleClick = () => {
    alert(alertMessage);
  };

  return (
    <div className="main-div">
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <h2>{title}</h2>
      <p>{discription}</p>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default Cardd;
