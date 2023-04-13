import { useRouter } from "next/router";
import React, { useState } from "react";

function EventList({ eventsList }) {
  const [events, setEvents] = useState(eventsList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const responce = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await responce.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sport events</button>
      <h1>Event List</h1>
      {events.map(({ id, title, date, category, description }) => {
        return (
          <div key={id}>
            <h2>
              {id} {title} {date} | {category}
            </h2>
            <p>{description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;

  const queryString = category ? `category=${category}` : "";

  const responce = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await responce.json();

  return {
    props: {
      eventsList: data,
    },
  };
};
