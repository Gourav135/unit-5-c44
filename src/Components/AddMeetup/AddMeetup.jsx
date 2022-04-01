// User should be able to add/create new meetups 
import { useState } from "react";
import axios from "axios";

export const AddMeetup = () => {
    const [meet,setMeet] = useState({
        title: "",
        location: "",
        date: "",
        time: "",
        theme: "",
        description: "",
        image: ""
      })
    const handelChange = (event)=>{
        setMeet({...meet,[event.target.className]:event.target.value})
    }
    return (
      <div className="addMeetupContainer">
        <form onSubmit={(event)=>{
            event.preventDefault()
            axios.post("http://localhost:8080/meetups",meet)
        }}>
          <h1>Add Meetup</h1>
          <label>title</label>
          <input type="text" className="title" onChange={(event) => {handelChange(event)}} required />
          <label>Location</label>
          <select className="location" onChange={(event) => {handelChange(event) }}>
            <option value=""></option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
          <br />
          <label>date</label>
          <input
            type="text"
            className="date"
            onChange={(event) => {handelChange(event) }}
            placeholder="format YYYY-MM-DD"
            required
          />
          <br />
          <label>time</label>
          <input
            type="text"
            className="time"
            onChange={(event) => {handelChange(event) }}
            placeholder="format HH:MM"
            required
          />
          <br />
          <label>Theme</label>
          <select className="theme" onChange={(event) => {handelChange(event) }}>
            <option value="">-----------</option>
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="movies">Movies</option>
            <option value="culture">Culture</option>
            <option value="art">Art</option>
            <option value="drama">Drama</option>
          </select>
          <label>description</label>
          <input
            type="text"
            className="description"
            onChange={(event) => {handelChange(event) }}
            placeholder="Description"
            required
          />
          <br />
          <label>Image</label>
          <input
            type="text"
            className="image"
            onChange={(event) => {handelChange(event) }}
            required
          />
          <br />
          <input className="submitMeetupForm" type="submit" />
        </form>
      </div>
    );
  };