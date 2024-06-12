import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import '../../Styling/BookNowStyle.scss'

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    date: new Date(),
    time: '',
    phoneNumber: '',
    description: ''
};

const BookNowPage = () => {


    return (
        <div className="contact-us-container">
            <div className="title">
                <h1>Book Now</h1>
                <h2>
                    Give us a Call or Text at: 801-707-9107
                </h2>

            </div>

        </div>
    );
}
export default BookNowPage;