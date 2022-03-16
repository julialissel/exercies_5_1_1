import '../App.css';
import { Link} from "react-router-dom";
import { useState} from 'react';

function Books({data}){
    const [color, changeColor] = useState("#282c34");

    function colorBody(colorIn){
        changeColor(colorIn)
        document.body.style.backgroundColor = color;
    }
    
    
    return(
        <section className='container'>
            <h1>8 Classic Childrens books </h1>
            <nav>
                {data.map((book) => (
                <Link
                    style={{ backgroundColor:`${book.color}`} }
                    // to={`/books/${book.title}`}
                    to={{
                        pathname: `/books/${book.id}`
                      }}
                    key={book.id}
                    onClick={() => colorBody("#282c34")}
                >   
                    <article >
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                    </article>
                    
                </Link>
                ))}
            </nav>
        </section> 
            
    )
}
export default Books;