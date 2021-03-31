import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'

import { ToastContainer, toast } from 'react-toastify';

function AddBook(props){

    const url_saveBook = "http://localhost:8080/bookapi/saveBook";

    const [book, setBook] = useState({});

  
/*
    const getTitle = (event) => {
        event.preventDefault();
        // setTitle(event.target.value)
        setBook({...book, title: event.target.value})
    }
    const getAuthor = (event) => {
        event.preventDefault();
        // setAuthor(event.target.value)
        setBook({...book, author: event.target.value})
        
    }
    const getDescription = (event) => {
        event.preventDefault();
        // setDescription(event.target.value)
        setBook({...book, description: event.target.value})
        
    }
    const getPrice = (event) => {
        event.preventDefault();
        setBook({...book, price: event.target.value})
        
    }
*/

    const addNewBook = async (book) => {

        

        try {
            console.log("addNewBook: ", book);
            let response = await axios.post(url_saveBook, book);
            if(response.status == 200){
                toast.success("Book added successfully")


            }else{
                toast.error("Oops something went wrong")
                console.error("Oops something went wrong", response.statusText," ", response.status);
            }
            
        } catch (error) {
            toast.error("Oops something went wrong - ERROR")
            console.error("ERROR: ", error);
        }



    }

    const addBookMethod = () => {
        console.log("Book: ", book);
        addNewBook(book);
        

    }





    return (
        <div className="AddBook">
            <ToastContainer />
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from publishing your own book!</p>
                        <input type="submit" name="" value="Login" /><br />
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Enroll</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Update</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Enroll New Book</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                             placeholder="Book Title *"
                                             onChange={ (event) => {
                                                    event.preventDefault();
                                                    setBook({...book, title: event.target.value})
                                                }} />
                            </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Author Name *"  
                                             onChange={ (event) => {
                                                event.preventDefault();
                                                setBook({...book, author: event.target.value})
                                            }} />
                            </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Description *"  
                                            onChange={ (event) => {
                                                event.preventDefault();
                                                setBook({...book, description: event.target.value})
                                            }} />
                            </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Price *"  
                                            onChange={ (event) => {
                                                event.preventDefault();
                                                setBook({...book, price: event.target.value})
                                            }} />
                            </div>
                                        <div className="form-group">
                                            <input type="submit" className="btnRegister" value="Register Book"
                                             onClick={addBookMethod}/>
                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AddBook;