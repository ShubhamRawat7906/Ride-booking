import RideBookingForm from "../components/RideBookingForm"
import './Home.css'
import bike from "../assets/bike.png"
function Home()
{
return (
<section className="hero">
<div className="home">
<h1>Welcome and Let's book a ride</h1>
<RideBookingForm/>
</div>
<div className="hero-image">
<img src={bike} alt="bike"></img>
</div>
</section>
)
}
export default Home