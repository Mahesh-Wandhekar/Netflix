
export const SeriesData=(props)=>{
    console.log(props);
    return(
        <li key={props.data.id}>
            <div className='card  m-4 bg-light'>
            <h3 className='mb-3'><strong>Name : </strong>{props.data.name}</h3>
            <div className=''>
                <img src={props.data.img_url} alt={data.img_url}  width="60%" height="50%"/>
            </div>
            <div>
           <button className='btn btn-primary m-2 mb-3'><span className='bi bi-person-video'></span> <a className='text-white ' href={props.data.watch_url}>Watch Now</a></button>
            
            <p><strong><span className='bi bi-star-fill text-success'></span> Rating : </strong>{props.data.rating }</p>
            <p><strong>Discription : </strong>{props.data.description}</p>
            <p><strong>Cast : </strong>{props.data.cast}</p>
            <p><strong>Genre :</strong>{props.data.genre}</p>
            <footer><p>Thank you for Visit this site @bookmyshow...</p></footer>
            </div>
            </div>
        </li>
    );
}