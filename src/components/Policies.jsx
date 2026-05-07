import React, { useState } from 'react';

export default function Policies() {

    const [view, setView] = useState("policies");
    const [animate, setAnimate] = useState(true);

    const switchView = (newView) => {
        if (newView === view) return;

        setAnimate(false); // fade out

        setTimeout(() => {
            setView(newView);
            setAnimate(true); // fade in
        }, 200);
    };


    const policies = [
        {
            id: 1,
            title: 'Revamp Policy',
            description: 'Send to us a video of your wig unit or visit us for evaluation.'
        },
        {
            id: 2,
            title: 'Service Policy',
            description: 'We suggest services based on your unit(s) condition but you have the freedom to opt in for any service of your choice'
        },
        {
            id: 3,
            title: 'Priority Policy',
            description: 'If you need your wig completed sooner, extra charges will apply.'
        },
        {
            id: 4,
            title: 'Payment Security',
            description: 'Full payment must be completed on or before dropping off your wig unit for service.'
        },
        {
            id: 5,
            title: 'Pickup and Delivery',
            description: 'You are required to pick up your wig at the agreed time. After 7 days, we will not be responsible for the unit if not picked-up.'
        },
        {
            id: 6,
            title: 'Extension Ventilation',
            description: 'Extensions for ventilating is to be provided by the client. It will take 2 to 5 buiness days to complete the service depending on the condition of the unit and the type of service.'
        }
    ];

    const policies2 = [
        {
            id: 1,
            title: 'Refund Policy',
            description: '60% refund on cancellation made at least 72 hours in advance, otherwise, no refund.'
        },
        {
            id: 2,
            title: 'Studio Policy',
            description: 'One escort per individual is allowed in the studio. We maintain a clean and safe environment for our clients and staff.'
        },
        {
            id: 3,
            title: 'Touch-up Policy',
            description: 'One touch-up included for bridal events.'
        },
        {
            id: 4,
            title: 'Booking Policy',
            description: 'Book early to secure your preferred date and time, especially for peak seasons and weekends.'
        },
        {
            id: 5,
            title: 'Location Policy',
            description: 'Any location outside kaduna will be considered a Client-venue and will attract extra charges for transportation and accomodation (if necessary).'
        },
        {
            id: 6,
            title: 'Accomodations',
            description: 'Accomodation must be provided by the client as the makeup artist is to arrive a night before the event.'
        },
        {
            id: 7,
            title: 'Payment Policy',
            description: '75% booking fee must be paid atleast 3 weeks before the event.'
        },
        {
            id: 8,
            title: 'Timely Delivery Policy',
            description: `₦5000 will de deucted from the client's charge if the makeup artist is 30 minutes late`
        },
        {
            id: 9,
            title: 'Late time Policy',
            description: 'Late arrival by the client by 30 minutes will attract a ₦5000 fee and by 1 hour will lead to cancellation of appointment and zero refund.'
        }

    ];

    const prices = [
        {
            id: 1,
            title: 'Coloring',
            description: `Highlights ₦8,000 - ₦15,000`,
            description2: 'Full Coverage ₦25,000 - ₦38,000'
        },
        {
            id: 2,
            title: 'Texture Revamp',
            description: 'Closure Wig ₦9,000 - ₦12,000',
            description2: 'Frontal Wig ₦11,000 - ₦13,000'
        },
        {
            id: 3,
            title: 'Styling and Customization',
            description: 'Closure Wig ₦7,500 - ₦9,000',
            description2: 'Frontal Wig ₦11,000 - ₦13,000'

        },
        {
            id: 4,
            title: 'Full Lace Ventilation',
            description: '2 x 6 Lace Closure ₦10,000 / 4 x 4 Lace Closure ₦15,000',
            description2: '5 x 5 Lace Closure ₦20,000 / 13 x 4 Lace Closure ₦25,000'
        },
        {
            id: 5,
            title: 'Ventilation Repair',
            description: 'Depending on the condition of the unit ₦2,500 - ₦8,000'
        },
        {
            id: 6,
            title: 'Re-Wigging',
            description: 'Full service  ₦10,000'
        },
        {
            id: 7,
            title: 'Installation',
            description: 'Closure ₦15,000',
            description2: '13*4/6 Frontal ₦20,000',
            description3: '360 Lace Frontal ₦25,000'
        },
        {
            id: 8,
            title: 'Sew-in Installation',
            description: 'Closure ₦25,000',
            description2: '13*4/6 Frontal ₦30,000',
            description3: '360 Lace Frontal ₦35,000'
        },
        {
            id: 9,
            title: 'Home Service Installation',
            description: 'Closure ₦35,000',
            description2: '13*4/6 Frontal ₦40,000',
            description3: '360 Lace Frontal ₦45,000'
        }
    ];

    const prices2 = [
        {
            id: 1,
            title: 'Studio',
            description: 'Walk-in ₦25,000',
            description2: 'Gele - ₦10,000'
        },
        {
            id: 2,
            title: 'Home Service',
            description: 'Kaduna-South ₦35,000',
            description2: 'Kaduna-North ₦45,000'
        },
        {
            id: 3,
            title: 'Bridal Glam (Client Venue)',
            description: '1-Day ₦75,000',
            description2: '2-Days ₦150,000',
            description3: 'Gele ₦10,000',
        },
    ];

    return (
        <section className="policies" id='policies'>
            <h1>Our Policies</h1>

            {/* Toggle Buttons */}
            <div className="policy-toggle">
                <button 
                    type='button'
                    className={`policy-btn ${view === "policies" ? "active" : ""}`} 
                    onClick={() => switchView("policies")}
                >
                    Policies
                </button>

                <button 
                    type='button'
                    className={`policy-btn2 ${view === "prices" ? "active" : ""}`} 
                    onClick={() => switchView("prices")}
                >
                    Price List
                </button>
            </div>

            {/* Dynamic Grid */}
            <h2>{view === "policies" ? "Wigs Policies" : "Wig Revamp Prices"}</h2>
            <div className={`policies-grid ${animate ? "fade-in" : "fade-out"}`}>
                {(view === "policies" ? policies : prices).map((item) => (
                    <div key={item.id} className="policy-card">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                        <p>{item.description3}</p>
                    </div>
                ))}
            </div><br/>
            <h2>{view === "policies" ? "Bridal & Makeup Policies" : "Makeup Prices"}</h2>
            <div className={`policies-grid ${animate ? "fade-in" : "fade-out"}`}>
                {(view === "policies" ? policies2 : prices2).map((item) => (
                    <div key={item.id} className="policy-card">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                        <p>{item.description3}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}