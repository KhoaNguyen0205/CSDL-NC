import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";
import PhotosUploader from "../PhotosUploader";


export default function PlacesPage() {
  const { action } = useParams();
  const[title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhots, setAddedPhotos] = useState([]);
 
  const [desctiption, setDescription] = useState('');
  const [perks,setPerks] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
  const [redirect,setRedirect] = useState('');
  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription (text) {
  return(
    <p className="text-gray-500 text-sm">{text}</p>
  );
  }
  function preInput(header, desctiption) {
    return(
   <>
     {inputHeader(header)}
     {inputDescription(desctiption) } 
   </>
    );
  }
 
async function addNewPlace(ev) {
  ev.preventDefault();
  await axios.post('/places', {
    title,address,addedPhots,
    desctiption,perks,extraInfo,
    checkIn,checkOut,maxGuests
  }); 
  setRedirect('/account/places')
}

if(redirect) {
  return<Navigate to={redirect} />
}

  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add new Place
          </Link>
        </div>

      )}
      {action === 'new' && (
        <div>
          <form onSubmit={addNewPlace}> 
            {preInput('Title', 'Title for you place, should be sort and catchy as in advertisements')}
            <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title" />
            {preInput('Address', 'Address to this place')}
            <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address" />
            {preInput('Photos','More = Better')}
            <PhotosUploader addedPhots={addedPhots} setAddedPhotos={setAddedPhotos} />
            {preInput('Description', 'desctiption of the place')}
            <textarea value={desctiption} onChange={ev => setDescription(ev.target.value)} />
            {preInput('Perks','Select all the perks of your place ')}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-col-3 lg:grid-cols-6    ">
              <Perks selected={perks} onChange={setPerks} />
            </div>
            {preInput('ExtraInfo','house rules, etc ')}
            <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
            {preInput('Check  In&Out time , max Guests','add check in and out times, remember to have some time window cleaning the room between guests')}
            <div className="grid gap-2 sm:grid-col-3">
              <div>
                <h3 className="mt-2 -mb-1">CheckIn time</h3>
              <input type="text" value={checkIn} 
              onChange={ev => setCheckIn(ev.target.value)} placeholder="14" />
              </div>
              <div>
              <h3 className="mt-2 -mb-1">CheckOut time</h3>
              <input type="text" value={checkOut} 
              onChange={ev => setCheckOut(ev.target.value)} placeholder="11" />
              </div>
              <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input type="number"  value={maxGuests} 
              onChange={ev => setMaxGuests(ev.target.value)}  />
              </div>
              
            </div>
              <button className="primary my-4">Save</button>
            
          </form>
        </div>
      )}
    </div>
  )
};