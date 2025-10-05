import { isValid } from "./authServices";

export const getTasks= async () =>{
  const token = await isValid()
  if(!token) return false

  try{
    const res = await fetch('http://localhost:3000/todos');
    if(!res.ok){
      throw new Error('Can`t fetch tasks')
    }
    return res.json()
  } catch(error) {
    console.error(error.message)
  }
}

export const addTask = async(task) => {
  const token = await isValid()
  if(!token) return false
  
  try{
    const res = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'content-type': 'application/json'
      }
    })
    if(!res.ok){
      throw new Error('Can`t add task')
    }
    return await res.json();
  } catch(error) {
    console.error(error.message)
  }
}

export const updateTask = async (id, updates) => {
  const token = await isValid()
  if(!token) return false

  try{
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updates),
        headers: {
          'content-type': 'application/json'
        }
    })
    if(!res.ok){
        throw new Error('Can`t update task')
      }
    return await res.json();
  } catch(error) {
    console.error(error.message)
    throw error;
  }
}

export const deleteTask = async (id) => {
  const token = await isValid()
  if(!token) return false

  try{
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
    })
    if(!res.ok){
        throw new Error('Can`t delete task')
      }
    return await res.json();
  } catch(error) {
    console.error(error.message)
  }
}