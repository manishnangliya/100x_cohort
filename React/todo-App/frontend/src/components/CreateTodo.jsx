import { useState } from "react";


export function CreateTodo() {
    const [description, setDescription] = useState();
    function onClickHandler() {
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                description: description
            })
        })
            .then(async function (res) {
                const json = await res.json();
                alert(json.msg);
            })
    }
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" id="title" placeholder="title"></input><br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function (e) {
            setDescription(e.target.value);
        }}></input><br />
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={onClickHandler}
        >Add a todo</button>
    </div>
}