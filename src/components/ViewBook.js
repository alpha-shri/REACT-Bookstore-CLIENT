import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

function ViewBook(){
     
    const [books, setBooks] = useState([]);
    const BASE_URL = "http://localhost:8080/bookapi/";

    const url_fetchAllBooks = BASE_URL+ "fetchAllBooks";

    // const url_saveBook = BASE_URL+ "saveBook";

    const getAllBooks = async () => {
    //?  USING PROMISE - AXIOS
        //     axios.get(url_fetchAllBooks)
        //          .then( (response) => {
        //             toast.success("All courses fetched");
        //             setBooks(response.data);

        //          })
        //          .catch(err => console.error(err))

    //? USING ASYNC-AWAIT - FETCH-API    
        // let response = await fetch(url_fetchAllBooks);
        // let data = await response.json();
        // toast.success("All courses fetched");
        // setBooks(data); 

    //? USING ASYNC-AWAIT - AXIOS   
        let response = await axios.get(url_fetchAllBooks);
        toast.success("All courses fetched");
        setBooks(response.data); 
            
    
                 
        
    }

    useEffect( () => {
        getAllBooks();
    }, []);
   


    return (
        <div className="ViewBook container mt-4">
            
            <ToastContainer />
            <Table bordered striped hover responsive>
                <thead>
                <tr>
                    <th>Book Title</th>
                    <th>Book Author</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>         
                    {
                        books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.description}</td>
                                <td>{book.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ViewBook;