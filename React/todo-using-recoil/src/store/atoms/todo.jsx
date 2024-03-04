import { atom, selector } from "recoil";

const allTodos = atom({
    key:"todos",
    default:[]
})
const filterAtom = atom({
    key:"filterAtom",
    default:""
})
const filterTodoSelector = selector({
    key:"filterTodoSelector",
    get: ({get})=>{
        const todos = get(allTodos);
        const filter = get(filterAtom);
        return todos.filter(x=>x.title.includes(filter)||x.description.includes(filter))
    }
});
export {allTodos,filterTodoSelector,filterAtom};