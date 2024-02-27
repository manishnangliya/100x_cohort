/*
todos = [{
    title:"go to gym",
    description:"timing 9-10am"
}]
*/

// eslint-disable-next-line react/prop-types
function markCompleteHandler(todo){
        fetch("http://localhost:3000/completed",{
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            id: todo._id
        })
    })
    .then(async function(res){
        const json = await res.json();
        alert(json.msg);
    })
}
export function Todos({todos}){
    return <div>
        {/* eslint-disable-next-line react/prop-types*/}
        {todos.map(function(todo){
            // eslint-disable-next-line react/jsx-key
            return <div>
            {console.log(todo)}
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={()=>{markCompleteHandler(todo)}}>{todo.completed ==true ?"Completed":"Mark as complete"}</button>
            </div>
        })}
    </div>
}