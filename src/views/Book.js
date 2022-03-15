import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import dataBooks from '../assets/childrensbooks.json';

function Book({data}){
    let params = useParams();
    const navigate = useNavigate();
    console.log(data);
    return (
        <section className="singleBook">
            <button className="btn" onClick={() => navigate(-1)}><span className="material-icons">
west
</span></button>
            <article className="singleBook-container">

                <div className="book">
                    <div>
                        <h3>r</h3>
                        <h4>Författare</h4>
                    </div>
                    
                </div>
                <div className="textBox">
                    <h1>{params.bookId}</h1>
                    <h3>By: HUH</h3>
                    <p>
                    Back on current bestseller lists, likely thanks to Disney’s recent movie adaptation, this groundbreaking 1962 novel features a heroine in a genre-bending science fiction–fantasy story about a girl tasked with traveling through space and time to save her scientist father—and the world. A forerunner of modern young-adult sci-fi and fantasy, including The Hunger Games and Harry Potter, and winner of the 1963 Newbery Medal, this story continues to thrill today. Check out more books you need to read before the movie version comes out.

                    </p>
                    <div className="infoBox">
                        <div>
                            <p>Audience: 8 - 12 years</p>
                            <p>Audience: 8 - 12 years</p>
                        </div>
                        <div>
                            <p>Audience: 8 - 12 years</p>
                            <p>Audience: 8 - 12 years</p>
                        </div>
                        
                    </div>
                    <button>Oh i want to read it</button>
                </div>
            </article>
        </section>

    );
}
export default Book;