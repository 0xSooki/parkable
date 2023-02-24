export default function(props)
{
    let status;
    if(props.item.plot==="true"){
        status="Reserved"
    }   
    else{
        status="Available";
    }
    return (

        <div className="card">
            {status&&<div className="card-badge">{status}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
        </div>
    )
}