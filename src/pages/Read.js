import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../config/firebase";

export const Read = () => {
    
    const [documents , setDocuments] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    useEffect(() => {
        let arr = [];
      const collectionName = "users";
      const docsCollectionRef = collection(firestore, collectionName);
      const readDocs = async () => {
         const readDoc = await getDocs(docsCollectionRef);
         readDoc.forEach((e) => {
              arr.push({...e.data() , id: e.id});
         });
         setDocuments(arr)
         setIsLoading(false);
      }
      readDocs();
    },[]);
  return (<>
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-white'>Read Users</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {isLoading ?
                            <div className="text-center">
                                <div className="spinner-grow text-white" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : <>
                                {
                                    documents.map((doc) => {
                                        return <p key={doc.id} className="text-white text-center">FullName: {doc.name} || Age: {doc.age} || id : {doc.id}</p>
                                    })
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
  </>
  );
};
