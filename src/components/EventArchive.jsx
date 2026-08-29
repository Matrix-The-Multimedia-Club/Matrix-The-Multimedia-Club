import EventCard from "./EventCard";

const archiveEvents = [
  {
    image: "/event-media-morphosis.png",
    title: "Media Morphosis 2025",
    date: "July 27, 2025",
    attendees: "200 attendees",
    description:
      "Matrix Club in partnership with Unstop hosted Media Morphosis at VIT Bhopal. The event explored how Data Science and Social Media Analytics shape branding and business strategies. Participants enjoyed an insightful learning session followed by a hackathon-style quiz and case study, applying data-driven insights to real-world challenges.",
  },
  {
    image: "/event-airm.png",
    title: "AIRM 2025",
    date: "December 30, 2025",
    attendees: "150 attendees",
    description:
      "Matrix Club, the Multimedia Club at VIT Bhopal, hosted AIRM 2025—an online event for college students focused on Artificial Intelligence, Robotics, and Multimedia. With over 100 participants, the session delivered valuable insights through expert talks, interactive discussions, and engaging quizzes, inspiring young minds to explore emerging technologies and real-world applications.",
  },
  {
    image: "/event-matrixmatch.png",
    title: "MatrixMatch 2026",
    date: "February 20, 2026",
    attendees: "150 attendees",
    description:
      "Matrix Club hosted MatchMatrix – Tech Compatibility & Collaboration Test, an interactive technical event that combined technology, logical thinking, and collaborative assessment in a safe campus environment. The event featured a custom-built in-house web platform developed by students, where participants completed a technical and personality-oriented quiz and were grouped using a compatibility algorithm.",
  },
];

const EventArchive = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {archiveEvents.map((event, idx) => (
        <EventCard
          key={idx}
          image={event.image}
          title={event.title}
          date={event.date}
          attendees={event.attendees}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default EventArchive;
