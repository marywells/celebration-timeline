import { useState, useEffect } from 'react';
import { EventItem } from './EventItem';
import { allEvents } from '../data/allEvents';

interface Event {
  title: string;
  description: string;
}

export function EventList() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    eventGenerator();
  }, []);

  function eventGenerator() {
    setUpcomingEvents(allEvents);
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Event List</h1>
        <div className={styles.eventsContainer}>
          <div className={styles.mobileTimeline}></div>
          <div className={styles.desktopTimeline}></div>
          {upcomingEvents.map((event) => {
            return (
              <div className={styles.eventItem}>
                <EventItem
                  title={event.title}
                  description={event.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: 'max-w-2xl relative',
  eventsContainer: 'items-center justify-center m-auto',
  mobileTimeline: 'absolute w-1 h-screen bg-gray-200 sm:bg-transparent ml-2 ',
  desktopTimeline: 'absolute w-1 h-screen sm:bg-gray-200 left-1/2',
  eventItem: 'sm:odd:float-left sm:clear-both sm:even:float-right',
};
