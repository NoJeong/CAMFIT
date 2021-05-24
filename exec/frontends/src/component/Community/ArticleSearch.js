import React, { useState } from 'react';
import { Input } from 'antd';


function ArticleSearch(props) {

  const {Search} = Input
  const [SearchTerm, setSearchTerm] = useState("")

  const searchHandler = (e) => {
    setSearchTerm(e.currentTarget.value)
    props.refreshFunction(e.currentTarget.value)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto'}}>
      <Search 
        placeholder="input search text" 
        onChange={searchHandler} 
        style={{ width: 200 }} 
        value={SearchTerm}
      />
    </div>
  )
}


export default ArticleSearch;