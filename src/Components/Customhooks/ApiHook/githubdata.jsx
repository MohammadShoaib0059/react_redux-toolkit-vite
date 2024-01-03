import React from 'react'
import fetchApi from './fetchApi'

const githubdata = () => {
    const data = fetchApi('http://api.github.com/users');
  return (
    <div>
    <h4>Fake Json Users</h4>
      {
        data.map((ele)=>{
            return <li key={ele.id}>{ele.login}</li>
        })
      }
    </div>
  )
}

export default githubdata
