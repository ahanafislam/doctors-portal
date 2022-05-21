import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {_id, name, slots} = treatment;
    const [user] = useAuthState(auth);

    // Style variable
    const formControl = 'py-4 px-5 rounded-lg border';

    const formattedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // to close the modal
                setTreatment(null);
            })
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
                        <input disabled value={user?.displayName} type="text" name='name' placeholder='Full Name' className={formControl}/>
                        <input type="text" name='phone' placeholder='Phone Number' className={formControl}/>
                        <input disabled value={user?.email} type="email" name='email' placeholder='Email' className={formControl}/>
                        <button className='btn btn-accent text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;