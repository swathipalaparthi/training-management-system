import "./events.css"
export const Events = () => {
    const config = [
        {
            eventName:"End to End testing",
            eventLink:"https://www.youtube.com/watch?v=68xvfrxlEYo",
            eventTime:"@4PM"
        },
        {
            eventName:"React Functional Components",
            eventLink:"https://meet.google.com/nid-bjby-tpp",
            eventTime:"@5PM"
        },
        {
            eventName:"Javscript vs Typescript",
            eventLink:"https://meet.google.com/nid-bjby-tpp",
            eventTime:"@6PM"
        },
    ]
    
    return (
        <>
            {config.map(item=>{
                return (
                    <a href={item.eventLink} className="events__container">
                        <div>{item.eventName}</div>
                        <div>{item.eventTime}</div>
                    </a>
                )
            })}
        </>
    )
}