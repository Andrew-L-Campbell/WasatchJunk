import React from "react";
import { Link } from 'react-router-dom';
import '../../Styling/Locations.scss';


const Holiday = () => {

    return (
        <div className="city-container">
        <h1 className="city-title">Trash Removal Holiday</h1>
        <h2 className="city-desc">Wasatch Junk Pros proudly serves Holiday as your reliable, professional, and eco-friendly solution for junk removal needs.</h2>
        <p className="main-description">
          When you need swift and efficient removal of items from your personal or professional location, trust us for a process that prioritizes respect for your property and responsible disposal of all unwanted items. Our extensive junk removal services encompass everything from appliance removal, storage unit cleanouts, furniture pick-up, convenient curbside junk removal, and so much more.
        </p>
        <h2 className="city-desc">How Our Holiday Junk Removal Works:</h2>
        <ol className="steps-list">
          <li>Book an Appointment: Schedule your junk removal appointment seamlessly over the phone by call or text.</li>
          <li>Prompt Arrival: Anticipate a punctual arrival within 2-hour appointment windows.</li>
          <li>Free On-Site Estimates: Our experienced crew assesses your junk, providing a transparent, written estimate.</li>
          <li>Hauling Stage: Witness our crew efficiently hauling away your unwanted items.</li>
          <li>Environmentally Conscious Sorting: Prioritizing donation and recycling, we ensure proper disposal for all remaining items.</li>
        </ol>
        <p className="cta-description">
          Ready to reclaim your space? Click <Link to={`/book-now`} className="cta-link">HERE</Link> to schedule your eco-friendly junk removal services in Holiday!
        </p>
      </div>
    )
}
export default Holiday;