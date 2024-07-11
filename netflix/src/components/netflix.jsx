
import seriesData from '../api/series.json'

export const Netflix=()=>{
    return(
        <div>
<ul>
    {
        seriesData.map((data)=>{
            return(
                <li key={data.id}>
                    <div className='card  m-4 bg-light'>
                    <h3 className='mb-3'><strong>Name : </strong>{data.name}</h3>
                    <div className=''>
                        <img src={data.img_url} alt={data.img_url}  width="60%" height="50%"/>
                    </div>
                    <div>
                   <button className='btn btn-primary m-2 mb-3'><span className='bi bi-person-video'></span> <a className='text-white ' href={data.watch_url}>Watch Now</a></button>
                    
                    <p><strong><span className='bi bi-star-fill text-success'></span> Rating : </strong>{data.rating }</p>
                    <p><strong>Discription : </strong>{data.description}</p>
                    <p><strong>Cast : </strong>{data.cast}</p>
                    <p><strong>Genre :</strong>{data.genre}</p>
                    <footer><p>Thank you for Visit this site @bookmyshow...</p></footer>
                    </div>
                    </div>
                </li>
            );
        })
    }
</ul>
        </div>
    );
}