import React, { useState } from "react";
import {firestore} from '../config/firebase';
import { collection , addDoc } from "firebase/firestore/lite";
export const Add = () => {

  const [UserName, setUserName] = useState("");
  const [Age, setAge] = useState(0);
  const collectionName = "users";
  const docsCollectionRef = collection(firestore , collectionName);

  const createDoc = async (event) => {
    event.preventDefault();
    
    let userAge = Number(Age);

    let formData = {name : UserName ,age : userAge};
    
    try {
        const docRef = await addDoc(docsCollectionRef , formData);
        console.log(docRef.id);
        console.log(formData);
    } catch (error) {
      console.error("Error Message : ",error);
    }
  } 
  return (
    // <div>
    //   <form onSubmit={createDoc} className="signup_section p-4 d-flex flex-column w-100">
    //     <label
    //       htmlFor="UserName"
    //       className="form-label my-2 fw-bold"
    //       >
    //       User Name :
    //     </label>
    //     <input
    //       type="text"
    //       name="name"
    //       className="form-control"
    //       placeholder="Name..."
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <label htmlFor="UserName" className="form-label my-2 fw-bold">
    //       Age :
    //     </label>
    //     <input
    //       type="text"
    //       name="age"
    //       className="form-control"
    //       placeholder="Age..."
    //       onChange={(e) => setAge(e.target.value)}
    //     />
    //     <button className="btn btn-primary mt-4">Add User</button>
    //   </form>
    // </div>
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-center text-white'>Add User</h1>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <form onSubmit={createDoc}>
                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder='Full Name' name='fullName' className='form-control' onChange={e => { setUserName(e.target.value) }} />
                        </div>
                        <div className="col">
                            <input type="number" placeholder='Age' name='age' className='form-control' onChange={e => { setAge(e.target.value) }} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <button className='btn btn-success'>Add User</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>

</div>
  )
}
