import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SingleBook from '../componetns/SingelBook';
import '../App.css';


function Book({data}){
    let params = useParams();
    const navigate = useNavigate(); 
    const [bocker, setBook] = useState([]);
    let sok;
    let urlID = parseInt(params.bookId);
    
    useEffect(() =>{
        sok = data.filter((book)=>{
            return book.id === urlID
        });
        setBook(sok);
    },[])
    console.log(bocker);
    
    return (
        <div className='fullscreen'>
        <section className="singleBook">
            <button className="btn" onClick={() => { navigate(-1); document.body.style.backgroundColor = '#ffffff';}}><span className="material-icons">
west
</span></button>
           
                {bocker.map((bok) => {
                    return (
                        <SingleBook dataBok={bok} key={bok.id}/>
                    )
                })}
                
                
        </section>
        </div>
    );
}
export default Book;