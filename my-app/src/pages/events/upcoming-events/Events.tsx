import "./events.css";
import { eventsData } from "../../../constants/eventsData";
import EventCard from "../../../common/event-card/EventCard";

export const Events = () => {
  return (
    <>
      {eventsData.map((item) => {
        return (
          <EventCard
            eventDate={item.eventDate}
            eventLink={item.eventLink}
            eventName={item.eventName}
            eventOrganizer={item.eventOrganizer}
          />
        );
      })}
    </>
  );
};
