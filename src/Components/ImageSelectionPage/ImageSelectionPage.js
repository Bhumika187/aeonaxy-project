import React, { useState } from 'react';
import './ImageSelectionPage.css';
import { Link } from 'react-router-dom';


function ImageSelectionPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    // You can perform additional actions here based on the selected image
  };

  return (
    <>
    <h1 className="text-pink-700 font-semibold flex justify-start ml-8 mt-6 text-xl">dribbble</h1>
    <div className="image-selection-container flex flex-col justify-center items-center">
     
      <h1 className='text-2xl font-bold mb-5 mt-15'>What brings you to Dribbble?</h1>
      <p className='mb-40 text-gray-500 text-xs'>Select the options that best describes you.Don't worry, you can explore other options later.</p>
      <div className="image-cont gap-8 flex flex-row justify-center items-center">
      <div className="image-container h-40 w-40 flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1712521635520-8e8d4a6aa0aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D"
          alt="Image 1"
          className="image"
          onClick={() => handleImageSelect(1)}
        />
        <p className='font-semibold text-sm mt-5 mb-3'>I'm looking for design inspiration.</p>
        <input
          type="radio"
          name="imageSelection"
          checked={selectedImage === 1}
          onChange={() => handleImageSelect(1)}
        />
      </div>
      <div className="image-container h-40 w-40 flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1712466760071-adfbf8df41b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"
          alt="Image 2"
          className="image"
          onClick={() => handleImageSelect(2)}
        />
        <p className='font-semibold text-sm mt-5 mb-3'>I'm a designer looking to share my work</p>
        <input 
          type="radio"
          name="imageSelection"
          checked={selectedImage === 2}
          onChange={() => handleImageSelect(2)}
        />
      </div>
      <div className="image-container h-40 w-40 flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1711814704253-734a7c95c8cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D"
          alt="Image 3"
          className="image"
          onClick={() => handleImageSelect(3)}
        />
        <p className='font-semibold text-sm mt-5 mb-3'>I'm looking to hire a designer.</p>
        <input
          type="radio"
          name="imageSelection"
          checked={selectedImage === 3}
          onChange={() => handleImageSelect(3)}
        />
      </div>
      </div>
      <div>
      <button className="btn mt-40 w-40" type="submit">
        <Link to="/finish" className='nav-item-2 w-40'>Finish</Link>
      </button>
      </div>
    </div>
    </>
  );
}

export default ImageSelectionPage;
