import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite";
import { firestore } from "../config/firebase";

export const Update = () => {

    const [documents , setDocuments] = useState([]);
    const [isLoading , setIsLoading] = useState(true)

    const collectionName = "users";
    const docsCollectionRef = collection(firestore, collectionName);

    const updateUser = async (user) => {

    console.log("user :" , user);

    const newName = prompt("Enter New Name :");
    const newAge = Number(prompt("Enter New Age"));

    const updatedDoc = {name : newName , age : newAge}

    const updateDocRef = doc(docsCollectionRef, user.id);
    await updateDoc(updateDocRef,updatedDoc);

    let newArray = documents.map((doc) => {

        if(doc.id === user.id)
            return {...updatedDoc, id: user.id}
        return doc
    });

    setDocuments(newArray);
    console.log("New users :", newArray);
    console.log("old users :" ,  documents);
}
useEffect(() => {
    let arr = [];
    
    const docsCollectionRef = collection(firestore, collectionName);
    
    const readDocs = async () => {
    
        const readDoc = await getDocs(docsCollectionRef);
    
        readDoc.forEach((e) => {
            arr.push({...e.data() , id: e.id});
        });
    
        setDocuments(arr)
        setIsLoading(false);
        console.log(arr);
    }    
    
    readDocs();

},[]);

return (<>
    <div className='d-flex justify-content-center align-items-center '>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-white'>Update Users</h1>
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
                                        return <p key={doc.id} className="text-white text-center" onClick={() => updateUser(doc)}>FullName: {doc.name} || Age: {doc.age} || id : {doc.id}</p>
                                    })
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
</>);
};