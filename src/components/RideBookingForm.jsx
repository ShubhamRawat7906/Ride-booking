import {useState} from 'react'
import './RideBookingForm.css'
function RideBookingForm()
{
const [pickup,setpickup]=useState("")
const [drop,setdrop]=useState("")
function handleSubmit(event)
{
event.preventDefault()
}
return (
<form className="booking-form" onSubmit={handleSubmit}>
<div className="location-section">
<input type="text" placeholder="Pickup Location" value={pickup} onChange={(event) => setpickup(event.target.value)} required/>
<input type="text" placeholder="Drop Location" value={drop} onChange={(event) => setdrop(event.target.value)} required/>
<button type="submit">Book Ride</button>
</div>
</form>
);

}
export default RideBookingForm