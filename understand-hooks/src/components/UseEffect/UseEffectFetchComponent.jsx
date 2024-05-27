import React from 'react'
import { useEffect } from 'react'

const UseEffectFetchComponent = () => {

    useEffect( ()=> {
        const fetchData= async ()=>{
            const api = await fetch("https://jsonplaceholder.typicode.com/todos")
            const result = await api.json()
    
            console.table(result)
        }
    
    fetchData()
    
    },[])

  return (
    <div>
      <h4>UseEffectFetchComponent</h4>
    </div>
  )
}

export default UseEffectFetchComponent
