export default function Cart(props)
{
    return(
        <div>
            <article className="card">
                
                <img className="card-img" src={props.img}/>

                <div className="card-content">

                    <p className="card-title">{props.title}</p>
                     
                    
                    <a className="location" target="_blank" href={props.googleMapsUrl}><p >{props.location}</p> </a>

                    <p className="description">
                    {props.description.split('.')[0]}.
                    </p>
                    {/* <p className="card-date">{props.startDate} - {props.endDate}</p> */}

                </div>
             
            </article>
        </div>
    );
}