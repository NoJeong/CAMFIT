import React,{useState} from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }



    return (
        <div>
            <Space direction="vertical">
                <Search 
                placeholder="input search text" 
                onChange={searchHandler}
                onSearch={onSearch} style={{ width: 200 }}
                value={SearchTerm}
                />
            </Space>
        </div>
    )
}

export default SearchFeature
