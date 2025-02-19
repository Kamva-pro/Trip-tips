export default function Cart(props)
{
    return(
        <div>
            <article className="card">
                <div className="blur-load" >
                <img loading="lazy" className="card-img" alt={props.title} src={props.img}/>

                </div>

                <div className="card-content">

                    <p className="card-title">{props.title}</p>
                     
                    
                    <a className="location" rel="noreferrer" target="_blank" href={props.googleMapsUrl}><p >{props.location}</p> </a>

                    <p className="description">
                    {props.description.split('.')[0]}.
                    </p>

                </div>
             
            </article>
        </div>
    );
}