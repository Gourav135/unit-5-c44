// This is an event details page which has its own route

import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

export const Event = () => {
    const [details,setDetails] = useState({})
    console.log(details)
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8080/meetups/${id}`).then(res=>{
            setDetails(res.data)
        })
    },[])
    return (
      <div className="eventContainer">
          <div className="title">{details.title}</div>
                    <div className="location">{details.location}</div>
                    <div className="date">{details.date}</div>
                    <div className="time">{details.time}</div>
                    <div className="theme">{details.theme}</div>
                    <div className="description">{details.description}</div>
                    <div className="image">{details.image}</div>
        {/* add your children here (divs)
        ex : title, theme, description, date, time, location, image(optional)
        the classNames should be also : title, theme, description, date, time, location, image(optional)
        */}
  
        {/* only one of the buttons should be visible depending on the status of subcription
        Hint : use conditional rendering */}
        <button className="unsubscribe">Unsubscribe</button>
        <button className="subscribe" onClick={() => { }}>Subscribe</button>
      </div>
    );
  };