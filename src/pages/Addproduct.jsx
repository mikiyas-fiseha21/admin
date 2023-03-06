import React, { useState } from 'react'
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Addproduct = () => {
    const [desc, setdesc] = useState('');

    const handelDesc=(e)=>{
        setdesc(e)
    }
    return (
        <div>
          <h3 className="mb-4 title">Add Product</h3>
          <div>
            <form >
              <CustomInput
                type="text"
                label="Enter Product Title"
                name="title" />
              
              <div className="">
              <ReactQuill className="mt-3"
            name="description" 
            theme="snow" 
            value={desc} 
            onChange={(eve)=>{handelDesc(eve)}} />
              </div>
             
              <CustomInput
                type="number"
                label="Enter Product Price"
                name="price"
                
              />
          
              <select
                name="brand"
                className="form-control  my-3 py-3 mb-3"
               
              >
                <option value="">Select Brand</option>
                
              </select>
            
              <select
              className="form-control py-3 mb-3"
                name="category" >
                <option value="">Select Category</option>
               
              </select>
              <select
              className="form-control py-3 mb-3"
                name="category" >
                <option value="">Select Category</option>
               
              </select>
             
    
              
             
              <CustomInput
                type="number"
                label="Enter Product Quantity"
                name="quantity"
               
              />
           
             
             
              <button
                className="btn btn-success border-0 rounded-3 my-5"
                type="submit"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      );
}

export default Addproduct