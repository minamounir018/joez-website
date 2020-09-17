import axios from "axios";
import React, { useState, useEffect } from 'react';

const IP = 'http://3.19.79.15:5000';

const postContactUS = (email, question) => {

    axios.post(IP+'/contactus',{
        email:email,
        question,question
    },{}
    )
    .then(console.log("done"))
    .catch(function(error) {
          console.log(error);
        });
    };

const GetAll = (path) => {
    const [data, setData] = useState([]);
    useEffect(() => {async function fetchData(){ 
    const result = await axios(
        IP+'/'+path,
    );
      setData(result.data);
    }
    fetchData();
    },  []);
    return(data);
}

export { 
    postContactUS,
    GetAll,
 };