import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function Addcolor() {
    const [desc, setdesc] = useState('');

    const handelDesc=(e)=>{
        setdesc(e)
    }
  return (
    <>
    <h3 className="mb-4 title">
       Add color
      </h3>
    <div className="">
        <form action="">
          <div className="mt-4">
            <CustomInput
              type="color"
              label="Enter Blog Title"
              name="title"
              
            />
              <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >Add color</button>
          </div>
           
         
         
    

            </form>
            </div>
    </>
  )
}

export default Addcolor