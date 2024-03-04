import React, { useEffect, useState } from "react"
const Input = React.memo(function input(props){
    const [fullName,setFullName] = useState('');
    const [place,setPlace] = useState('');
    const [description,setDescription] = useState('');
    const [interestFirst,setinterestFirst] = useState('');
    const [interestSecond,setinterestSecond] = useState('');
    const [instaLink,setInstaLink] = useState('');
    const [linkedInLink,setLinkedInLink] = useState('');
    function handleOnChange(event){
        const {name,value} = event.target;
        if(name==='fullName'){
            setFullName(value);
        }
        else if(name==='place')
            setPlace(value);
        else if(name==='description')
            setDescription(value);
        else if(name==='firstInterest')
            setinterestFirst(value);
        else if(name==='secondInterest')
            setinterestSecond(value);
        else if(name==='instagramLink')
            setInstaLink(value);
        else if(name==='linkedInLink')
            setLinkedInLink(value);
    }
    function makeEmptyField(){
        setFullName('');
        setPlace('');
        setDescription('');
        setinterestFirst('');
        setinterestSecond('');
        setInstaLink('')
        setLinkedInLink('');
    }
    function handleOnClick(event){
        if (!fullName || !place || !description || !interestFirst || !interestSecond || !instaLink || !linkedInLink) {
            alert('Please fill out all required fields');
            return; // Prevent further execution
        }    
        event.preventDefault();
        fetch("http://localhost:3000/cards/addNewCard",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                fullName:fullName,
                place:place,
                description:description,
                interests:[interestFirst,interestSecond],
                socialMedia:[{name:"Instagram",link:instaLink},{name:"LinkedIn",link:linkedInLink}]
            })
        })
        .then(async function(res){
            await res.json();
            makeEmptyField();
            props.fetchData();
        })
    }

    return (
        <form className="card mb-3 center" style={{ maxWidth: "30%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h3 className="  card-header ">Add Details</h3>
            </div>
            <div className="col g-3">
                <div className="col m-1" >
                    <input type="text"  className="form-control" placeholder="Full Name"value={fullName} onChange={handleOnChange} name="fullName" aria-label="Full Name" required  />
                </div>
                <div className="col m-1">
                    <input type="text" className="form-control" placeholder="Place" value={place} onChange={handleOnChange}  name="place" aria-label="Place" required />
                </div>
                <div className="col m-1">
                    <input type="text" className="form-control" placeholder="Description" value={description} onChange={handleOnChange} name="description" aria-label="Description" required />
                </div>
                <div className="col m-1">
                    <input type="text" className="form-control" placeholder="first Interest" value={interestFirst} onChange={handleOnChange} name="firstInterest" aria-label="First Interest" required />
                </div>
                <div className="col m-1">
                    <input type="text" className="form-control" placeholder="Second Interest" value={interestSecond} onChange={handleOnChange} name="secondInterest" aria-label="Second Interest" required/>
                </div>
                <div className="col m-1">
                    <input type="text" className="form-control" placeholder="Instagram Link" value={instaLink} onChange={handleOnChange} name="instagramLink"  aria-label="Insta link" required />
                </div>
                <div className="col m-1">
                    <input type="text" className="form-control" placeholder="LinkedIn Link" value={linkedInLink} onChange={handleOnChange} name="linkedInLink" aria-label="Linked In Link" required />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="button" onClick={handleOnClick} className="btn btn-dark m-1">Submit Details</button>
                </div>
            </div>
        </form>
    )
})

export {Input}