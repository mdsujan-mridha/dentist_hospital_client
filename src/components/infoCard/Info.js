import React from 'react';
import InfoCard from './InfoCard';
import clock from '../assets/icons/clock.svg';
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";

const Info = () => {
    const cardDetails = [
        {
            "id": '1',

            "img": clock,
            "title": "Opening Hours",
            "content": "Lorem Ipsum is simply dummy text of the pri",
            "background": "bg-gradient-to-r from-secondary to-primary"
        },
        {
            "id": '2',

            "img": marker,
            "title": "Visit our location",
            "content": "Brooklyn, NY 10036, United States",
            "background": "bg-accent"
        },
        {
            "id": '3',

            "img": phone,
            "title": "Contact us now",
            "content": "+000 123 456789",
            "background": "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 pb-5'>
           {
            cardDetails.map(card => <InfoCard
             id = {card.id}
             card = {card}
            ></InfoCard> )
           }
        </div>
    );
};

export default Info;