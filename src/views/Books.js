import dataBooks from '../assets/childrensbooks.json';
import { Link, Outlet } from "react-router-dom";

function Books(){
    
    
    return(
        <section className='container'>
            <h1>8 Classic Childrens books </h1>
            <nav>
                {dataBooks.map((book) => (
                <Link
                    style={{ backgroundColor:`${book.color}`} }
                    // to={`/books/${book.title}`}
                    to={{
                        pathname: `/books/${book.title}`
                      }}
                    key={book.id}
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