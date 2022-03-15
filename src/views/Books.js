
import { Link, Outlet } from "react-router-dom";

function Books({data}){
    
    
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