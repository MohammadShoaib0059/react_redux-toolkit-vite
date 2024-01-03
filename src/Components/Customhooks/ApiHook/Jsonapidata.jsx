import React from 'react'
import fetchApi from './fetchApi';

const Jsonapidata = () => {
    const data = fetchApi('http://jsonplaceholder.typicode.com/todos');
    return (
      <div>
      <h4>Fake Json Users</h4>
        {
          data.map((ele)=>{
              return <li key={ele.id}>{ele.title}</li>
          })
        }
      </div>
  )
}

export default Jsonapidata;
