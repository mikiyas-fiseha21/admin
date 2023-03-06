import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function Addblog() {
    const [desc, setdesc] = useState('');

    const handelDesc=(e)=>{
        setdesc(e)
    }
  return (
    <>
    <h3 className="mb-4 title">
        {/* {getBlogId !== undefined ? "Edit" : "Add"} Blog */}Add Blog
      </h3>
    <div className="">
        <form action="">
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              
            />
          </div>
         
          <select
            name="category"
           
            className="form-control py-3  mt-3"
            id=""
          >
            <option value="">Select Blog Category</option>
            {/* {bCatState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })} */}
          </select>
          
    <ReactQuill className="mt-3"
            name="description" 
            theme="snow" 
            value={desc} 
            onChange={(eve)=>{handelDesc(eve)}} />

            </form>
            </div>
    </>
  )
}

export default Addblog