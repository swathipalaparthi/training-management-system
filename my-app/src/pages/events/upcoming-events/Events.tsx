export const Events = () => {
    const config = [
        {
            eventName:"",
            eventLink:"",
            eventTime:""
        },
        {
            eventName:"",
            eventLink:"",
            eventTime:""
        },
        {
            eventName:"",
            eventLink:"",
            eventTime:""
        },
    ]
    
    return (
        <>
            {config.map(item=>{
                return (
                    <a href={item.eventLink}>
                        <div>{item.eventName}</div>
                        <div>{item.eventTime}</div>
                    </a>
                )
            })}
        </>
    )
}