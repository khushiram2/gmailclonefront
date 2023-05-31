import React, { useState } from 'react'
import List from '@mui/material/List';
import { Checkbox } from '@mui/material'
import { StarBorder, DeleteOutline } from '@mui/icons-material'
import ListItem from '@mui/material/ListItem';
import { Api } from './globalapi';
export const Listview = ({ data }) => {
  const [select, setselect] = useState([])
  const emailsselect = (e) => {
    if (e.target.checked) {
      const result = data.map((e) => e._id)
      setselect(result)
    } else {
      setselect([])
    }
  }
  const [starred, setstarred] = useState(false)

      const setstarredemail = async (id,isstarred) => {
        setstarred(!isstarred)
      const requestOptions = {
        method: 'PUT',
        Headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ starred: true, name:"abc"})
      }
     const res= await fetch(`${Api}/starred/${id}`, requestOptions)
       const data=await res.json()
       console.log(data)

  }


  return (
    <div>
      <div className='emailvisibleheader'>
        <Checkbox className='checkbox' onChange={(e) => emailsselect(e)} />
        <DeleteOutline className='deleteicon' />
      </div>
      <List style={{ fontSize: "14px" }} >
        {data.map((e, i) => {
          return (<ListItem className='listemail' key={"email" + i}>
            <Checkbox checked={select.includes(e._id)} />
            <StarBorder onClick={() => setstarredemail(e.id,e.starred)} />
            <div className='subjectandcontent'>
              <p style={{ width: "200px" }}>{e.from}</p>
              <p style={{ width: "200px", overflow: "hidden" }}>{e.subject}</p>
              <p style={{ width: "400px", overflow: "hidden" }}>{e.content ? e.content : ""}</p>
              <p style={{ width: "50px", marginLeft: "auto", marginRight: "none !important" }} className='date'>{(new window.Date(e.date)).getDate()}
                {(new window.Date(e.date)).toLocaleString("default", { month: "long" })}
              </p>
            </div>
          </ListItem>)
        })

        }
      </List>

    </div>
  )
}
