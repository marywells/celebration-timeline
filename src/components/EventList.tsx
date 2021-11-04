import { useState, useEffect, useRef } from "react";
import { EventItem } from "./EventItem";
import { allEvents } from "../data/allEvents";
import moment from "moment";

interface Event {
  title: string;
  description: string;
  time: string;
  isLeft: boolean;
}

export function EventList() {
  const now = useRef(moment().format());
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  const isLeftRef = useRef(false);

  useEffect(() => {
    setInterval(function () {
      const isLeft = isLeftRef.current;
      isLeftRef.current = !isLeft;
      setUpcomingEvents((events) => {
        const newEvent = {
          ...allEvents[Math.floor(Math.random() * 9)],
          isLeft,
          time: now.current,
        };
        return [newEvent, ...events.slice(0, 4)];
      });
      now.current = moment(now.current).add(57, "minutes").format();
    }, 5000);
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>Schedule of Celebrations</h1>
        <div className={styles.mobileTimeline}></div>
        <div className={styles.desktopTimeline}></div>
        <div className={styles.eventsContainer}>
          {upcomingEvents.map((event) => {
            return (
              <div
                key={event.time}
                className={`${styles.eventItem} ${
                  event.isLeft ? styles.left : styles.right
                }`}
              >
                <EventItem
                  title={event.title}
                  description={event.description}
                  time={event.time}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: "max-w-2xl min-w-sm relative",
  header: "text-2xl sm:text-4xl font-bold text-pink-900 pb-6",
  eventsContainer: "items-center justify-center m-auto",
  mobileTimeline: "absolute w-1 h-screen bg-pink-200 sm:bg-transparent ml-1 ",
  desktopTimeline: "absolute w-1 h-screen sm:bg-gray-200 left-1/2",
  eventItem: "first:animate-bounce sm:clear-both ml-2 mr-2",
  left: "sm:float-left",
  right: "sm:float-right",
};
