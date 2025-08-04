

function List(){


    const fruits =["apple","Banana","orange","Mangoe","grapes"];

    const listItems =fruits.map(fruit => <li>{fruit}</li>)

    return(
        <ol className="huss">{listItems}</ol>
    );


}

export default List