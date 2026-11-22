import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { db, ref, onValue, isFirebaseDemoConfig } from "../firebase";

const defaultArchiveEvents = [
  {
    id: "evt_1",
    image: "/event-media-morphosis.png",
    title: "Media Morphosis 2025",
    date: "July 27, 2025",
    category: "archive",
    attendees: "200 attendees",
    description:
      "Matrix Club in partnership with Unstop hosted Media Morphosis at VIT Bhopal. The event explored how Data Science and Social Media Analytics shape branding and business strategies. Participants enjoyed an insightful learning session followed by a hackathon-style quiz and case study, applying data-driven insights to real-world challenges.",
  },
  {
    id: "evt_2",
    image: "/event-airm.png",
    title: "AIRM 2025",
    date: "December 30, 2025",
    category: "archive",
    attendees: "150 attendees",
    description:
      "Matrix Club, the Multimedia Club at VIT Bhopal, hosted AIRM 2025—an online event for college students focused on Artificial Intelligence, Robotics, and Multimedia. With over 100 participants, the session delivered valuable insights through expert talks, interactive discussions, and engaging quizzes, inspiring young minds to explore emerging technologies and real-world applications.",
  },
  {
    id: "evt_3",
    image: "/event-matrixmatch.png",
    title: "MatrixMatch 2026",
    date: "February 20, 2026",
    category: "archive",
    attendees: "150 attendees",
    description:
      "Matrix Club hosted MatchMatrix – Tech Compatibility & Collaboration Test, an interactive technical event that combined technology, logical thinking, and collaborative assessment in a safe campus environment. The event featured a custom-built in-house web platform developed by students, where participants completed a technical and personality-oriented quiz and were grouped using a compatibility algorithm.",
  },
];

const EventArchive = ({ category = "archive" }) => {
  const [events, setEvents] = useState(defaultArchiveEvents);

  useEffect(() => {
    if (isFirebaseDemoConfig()) {
      const saved = localStorage.getItem("mock_events_list");
      if (saved) {
        setEvents(JSON.parse(saved));
      } else {
        setEvents(defaultArchiveEvents);
      }
      return;
    }

    try {
      const eventsRef = ref(db, "events");
      const unsubscribe = onValue(eventsRef, (snapshot) => {
        if (snapshot.exists()) {
          const val = snapshot.val();
          const list = Object.keys(val).map((k) => ({ ...val[k], id: val[k].id || k }));
          setEvents(list);
        } else {
          setEvents(defaultArchiveEvents);
        }
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn("Error fetching events from Firebase:", err);
      setEvents(defaultArchiveEvents);
    }
  }, []);

  const categoryEvents = events.filter(
    (e) => (e.category || "archive").toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      {categoryEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryEvents.map((event, idx) => (
            <EventCard
              key={event.id || idx}
              image={event.image}
              title={event.title}
              date={event.date}
              attendees={event.attendees}
              description={event.description}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-500 font-mono text-sm border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/40">
          No {category} events listed at the moment. Admin can add events from the Admin Panel.
        </div>
      )}
    </div>
  );
};

export default EventArchive;
