import React, { useEffect, useState } from 'react'

function SelectMenu() {

    const [listOfUser, setlistOfUser] = useState([])

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then((data) => {
                setlistOfUser(data)
            }).catch(err => {
                console.log(err)
            })

    }



    const onChangeOption = (e) => {

        let id = e
        fetch()

    }











    return (
        <div style={{ margin: 50 }}>
            <select
                onChange={(e) => onChangeOption(e.target.value)}
            >
                {
                    listOfUser.map((item, index) => (
                        <option
                            value={item.name}
                            key={item.id}>{item.name}</option>
                    ))
                }
            </select>


            {/* {
                listOfUser.map((item,i)=>(
                    <h1 key={i}>{item.name}</h1>
                ))
            } */}

        </div>
    )
}

export default SelectMenu