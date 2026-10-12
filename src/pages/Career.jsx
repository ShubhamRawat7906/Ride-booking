import {useState} from "react";
import './Career.css';
export default function Career(){
    // set up state variable for form fields
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [role,setRole]=useState("Driver");

    function handleFormSubmit(event){
      event.preventDefault();
      alert(`Application submitted for ${role}.`);
    }

    return (
        <div className="career-form">
        <h1>Apply for job</h1>
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required></input>
            </div>
            <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
            </div>
            <div className="form-group">
            <label>Phone</label>
            <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} required></input>
            </div>
            <div className="form-group">
            <label>Resume</label>
            <input type="file" required></input>
            </div>
            <div className="input-group">
          <label>Select Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Driver">Ride Partner / Driver</option>
            <option value="Support">Customer Support</option>
            <option value="Admin">Office Admin</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        </form>
        </div>
    );
}