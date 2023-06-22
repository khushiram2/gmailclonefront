import React, { useState } from "react";
import List from "@mui/material/List";
import { Checkbox } from "@mui/material";
import { StarBorder, DeleteOutline } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import axios from "axios";
import { Api } from "./globalapi";
import { useLocation, useNavigate } from "react-router-dom";







export const Listview = ({ data }) => {

  const location=useLocation ()
  const navigate = useNavigate();
  const [select, setselect] = useState([]);
  const [bin, setbin] = useState(true);
  const userid=window.localStorage.getItem("userid")
  const email=window.localStorage.getItem("email")

  const deleteall = (result) => {
    if(location.pathname==="/user/sentmails"){
    axios.put(`${Api}/bin/all/${userid}`, { result });
    }else if(location.pathname==="/user/drafts"){
      axios.delete(`${Api}/drafts/delete`,{result})
    }else{
      axios.put(`${Api}/inbox/delete`, { result });
    }
  };




  const emailsselect = (e) => {
    if (e.target.checked) {
      const arr = data.map((e) => e._id);
      setselect(arr);
    } else {
      setselect([]);
    }
  };



  const [starred, setstarred] = useState(false);


  const setstarredemail = async (id, isstarred) => {
    setstarred(!isstarred);
    const res = await axios.put(`${Api}/starred/${id}`,{ starred: !isstarred});
  };

  return (
    <div>
      <div className="emailvisibleheader">
        <Checkbox className="checkbox" onChange={(e) => emailsselect(e)} />
        <DeleteOutline
          className="deleteicon"
          onClick={() => deleteall({ select, bin,email })}
        />
      </div>
      <List style={{ fontSize: "14px" }}>
        {data.map((e, i) => {
          return (
            <ListItem className="listemail" key={"email" + i}>
              <Checkbox checked={select.includes(e._id)} />
              <StarBorder  onClick={() => setstarredemail(e._id, e.starred||starred)} />
              <div
                className="subjectandcontent"
                onClick={() => navigate("/user/email/" + e._id)}
              >
                <p style={{ width: "200px" }}>{e.from}</p>
                <p style={{ width: "200px", overflow: "hidden" }}>
                  {e.subject}
                </p>
                <p style={{ width: "400px", overflow: "hidden" }}>
                  {e.content ? e.content : ""}
                </p>
                <p
                  style={{
                    width: "50px",
                    marginLeft: "auto",
                    marginRight: "none !important",
                  }}
                  className="date"
                >
                  {new window.Date(e.date).getDate()}&nbsp;
                  {new window.Date(e.date).toLocaleString("default", {
                    month: "long",
                  })}
                </p>
              </div>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
