import React from "react";

const Cards = React.memo(function Cards(props){
    const {fullName, place,description,interests,socialMedia,_id} = props.card;
    function deleteCardHandle(event,card){
        event.preventDefault();
        const id = card._id;
        fetch("http://localhost:3000/cards/deleteCard",{
            method:"DELETE",
            headers:{
                id:id
            }
        })
        .then(async function(res){
            const ans = await res.json()
            props.fetchData();
            alert(ans.message);
        })
    }
    return (
        <div className="card m-1" style={{minWidth:"30%",maxWidth:"30%", margin:"" }} >
            <h2 className="  card-header">{fullName}</h2>
            <div className="card-body ">
                <h5 className="card-title ">{place}</h5>
                <p className="card-text">{description}</p>
                {interests.map(function(each){
                    return <li key={Math.random()}>{each}</li>
                })}
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    {socialMedia.map(function(buttons){
                        return <button key={Math.random()} onClick={()=>window.open(buttons.link,"_blank","noopener noreferrer")}  type="button" className="btn btn-dark m-1">{buttons.name}</button>
                    })}
                </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="button" onClick={()=>deleteCardHandle(event,props.card)}  className="btn btn-dark m-1">Delete Card</button>
                </div>
            </div>
        </div>
    );
})
export {Cards}
