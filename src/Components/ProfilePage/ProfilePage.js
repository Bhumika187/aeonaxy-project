import React, { useState,useRef } from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';

function ProfileCreationPage() {
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState('');

  const inputRef=useRef(null);
  const handleImageClick=()=>{
    inputRef.current.click();
  }
  const handleAvatarChange = (e) => {
    // Handle avatar upload
    const file = e.target.files[0];
    setAvatar(file);

    
  };

  const handleLocationChange = (e) => {
    // Handle location input change
    setLocation(e.target.value);
  };

  const handleNext = () => {
    // Handle next button click
    // You can perform additional actions such as submitting data to backend, etc.
    console.log("Avatar:", avatar);
    console.log("Location:", location);
    // Navigate to the next step/page
  }

  return (
    <>
    <h1 className="text-pink-700 font-semibold flex justify-start ml-8 mt-6 text-xl">dribbble</h1>
    <div className="profile-creation-container flex flex-col justify-items-center items-center">
      
      <h2 className="text-2xl font-bold">Welcome! Let's create your profile</h2>
      <p className="text-xs text-gray-400 mt-4">Let others get to know you better! You can do these later</p>
      <div className="profile-form ">
        <div className="form-group font-bold text-sm mt-8">
          <label htmlFor="avatar">Add an Avatar</label>
        <div onClick={handleImageClick} className="flex justify-center items-center">
           {avatar ?
              <img src={URL.createObjectURL(avatar)} alt="" className="img-display-after rounded-full  h-40 w-40 mt-4 mr-8"/>
           :
              <img src="https://cdn-icons-png.flaticon.com/128/8191/8191595.png" alt="circ-img" className="img-display-before rounded-full h-40 w-40 mt-4 mr-8"/>
           }
           <input type="file" ref={inputRef}  onChange={handleAvatarChange}/>
        </div>
        </div>

        <div className="form-group text-sm font-bold mt-10 pt-10">
          <label htmlFor="location">Add your location</label>
          <input
            placeholder='Enter a location'
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
          />
        <hr width="100%" className='mb-12'/>
        <div> 
        <button type="submit" onClick={handleNext}>
        <Link to="/img" className='nav-item-1'>Next</Link>
        </button>
        </div>
        </div>
     </div>
    </div>
    </>
  );
}

export default ProfileCreationPage;
