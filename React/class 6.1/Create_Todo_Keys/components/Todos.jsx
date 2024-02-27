// eslint-disable-next-line react/prop-types
export function Todos({id,title,description}){
    return <>
        <h3>{id}</h3>
        <h1>{title}</h1>
        <h4>{description}</h4>
    </>
}