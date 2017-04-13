import React, { Component } from 'react';

import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
import './reset.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo:'',
      todoList: [
      ]
    }
  }
  render() {
   let todo = this.state.todoList.filter((item)=>!item.deleted)
    .map((item,index)=>{
     return <li key={index}>
              <TodoItem todo={item} onToggle={this.toggle.bind(this)}
                onDelete={this.delete.bind(this)}/>
            </li>
   })
    
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className='inputWrapper'>
          <TodoInput content={this.state.newTodo} 
            onSubmit={this.addTodo.bind(this)} 
            onChange={this.changeTitle.bind(this)}/>
        </div>
        <ol className="todoList">
          {todo}
        </ol>
      </div>
    )
 }
 
 delete(event,todo){
   todo.deleted = true;
   this.setState(this.state)
 }
 toggle(e,todo){
  //  todo.status=todo.status==='completed'?'':'completed'
  if(todo.status===""){
    todo.status = 'completed'
  }else{
    todo.status = ''
  }
   this.setState(this.state)
 }
 
 changeTitle(event){
   this.setState({
      newTodo:event.target.value,
      todoList:this.state.todoList
   })
 }

 addTodo(event){
   if(this.state.newTodo!==""){
      this.state.todoList.push({
      id: idMarker(),
      title:this.state.newTodo,
      status:"",
      delete:false
    })
   }
   
   this.setState({
      newTodo:'',
      todoList:this.state.todoList
   })
 }

}


export default App;
 let id=0;
 function idMarker(){
   id += 1
   return id
 }