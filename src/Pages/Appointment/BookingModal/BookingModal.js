import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {name, slots} = treatment;

    // Style variable
    const formControl = 'py-4 px-5 rounded-lg border';

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        // to close the modal
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col gap-5'>
                        <input disabled type="text" value={format(date, 'PP')} className={formControl}/>
                        <select name="slot" id="" className={formControl}>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder='Full Name' className={formControl}/>
                        <input type="text" name='phone' placeholder='Phone Number' className={formControl}/>
                        <input type="email" name='email' placeholder='Email' className={formControl}/>
                        <button className='btn btn-accent text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;