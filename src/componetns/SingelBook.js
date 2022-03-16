import './SingelBook.css';
function SingleBook({dataBok}){
    return(
        <article className="singleBook-container">
        <div className="book" style={{ backgroundColor:`${dataBok.color}`} }>
            <div>
                <h3>{dataBok.title}</h3>
                <h4>{dataBok.author}</h4>
                </div>
        </div>
        <div className="textBox">
            <h1>{dataBok.title}</h1>
            <h3>By: {dataBok.author}</h3>
            <p className='ingress'>{dataBok.plot}</p>
            <div className="infoBox">
                <div className="column">
                    <p><span>Audience:</span> {dataBok.audience}</p>
                    <p><span>Pages:</span> {dataBok.pages}</p>
                </div>
                <div className="column">
                    <p><span>First published:</span> {dataBok.year}</p>
                    <p><span>Publisher:</span> {dataBok.publisher}</p>
                </div>
            </div>
            <button className='btn-read'>Oh i want to read it</button>
        </div>
    </article>
    )
}
export default SingleBook;