import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Contact({listing}) {
    const [Landlord,setLandlord] = useState(null);
    const [message,setMessage] = useState('');
    const onChange = (evt) =>{
        setMessage(evt.target.value);
    }
    useEffect(()=>{
       const fetchLandlord = async()=>{
       try {
         const res = await fetch(`/api/user/${listing.userRef}`);
         const data = await res.json();
         setLandlord(data);
       } catch (error) {
         console.log(error);
       } 
      }
    fetchLandlord();
    },[listing.userRef]);
    return (
    <>
    {Landlord && (
        <div className='flex flex-col gap-2'>
            <p>Contact <span className='font-semibold'>{Landlord.username}</span> for <span className='font-semibold'>{listing.name.toLowerCase()}</span></p>
            <textarea className='w-full border rounded-lg p-3' placeholder='Enter your message here...' name='message' id='message' rows='3' value={message} onChange={onChange}></textarea>
            <Link to={`mailto:${Landlord.email}?subject=Regarding ${listing.name}&body=${message}` } className='bg-slate-700 text-center p-3 text-white rounded-lg hover:opacity-95 uppercase'>
                Send Message
            </Link>
        </div>
    )}
    </>
  )
}
