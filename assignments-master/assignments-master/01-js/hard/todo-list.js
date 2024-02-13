/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todoList =[];
  }
  add(task){
    this.todoList.push(task);
  }
  remove(index){
    if(index<this.todoList.length){
      // const newTodoList = this.todoList.slice(0,index).concat(this.todoList.slice(index+1));
      // this.todoList = newTodoList;
      this.todoList.splice(index,1);
    }
  }
  update(index,updatedTodo){
    if (index < this.todoList.length)
       this.todoList[index] = updatedTodo;
  }
  getAll(){
    return this.todoList;
  }
  get(index){
    if (index < this.todoList.length)
       return this.todoList[index];
    return null;
  }
  clear(){
    this.todoList.splice(0,this.todoList.length);
  }
}

module.exports = Todo;
