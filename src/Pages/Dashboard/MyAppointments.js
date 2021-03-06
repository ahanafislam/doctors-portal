import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointments = () => {
    // const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let appointments = []

    const { isLoading, data } = useQuery(['appointments', user.email], () =>
        fetch(`https://enigmatic-scrubland-01488.herokuapp.com/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>{
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
    )

    if(isLoading) {
        return <Loading/>
    }

    appointments = data;

    // useEffect(() => {
    //     if (user) {
    //         fetch(`https://enigmatic-scrubland-01488.herokuapp.com/booking?patient=${user.email}`)
    //             .then(res => res.json())
    //             .then(data => setAppointments(data));
    //     }
    // }, [user])

    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.length > 0
                            ?
                            appointments?.map((a, index) =><tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                                    {(a.price && a.paid) && <span className='text-success'>Paid</span>}
                                </td>
                            </tr>)
                            :
                            <tr>
                                <td colSpan="5" className='text-center'>Sorry Nothing to display</td>
                            </tr>
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;