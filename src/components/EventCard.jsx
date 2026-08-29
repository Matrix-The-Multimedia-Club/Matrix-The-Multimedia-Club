import { Calendar, Users, Archive } from "lucide-react";

const EventCard = ({ image, title, date, attendees, description }) => {
  return (
    <div className="flex flex-col rounded-2xl bg-[#131416] border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-white/[0.12]">
      {/* Event Image */}
      <div className="w-full aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-col gap-3.5 p-5 sm:p-6">
        {/* Title */}
        <div className="flex items-center gap-2.5">
          <Archive className="w-4 h-4 text-purple-400 shrink-0" />
          <h3 className="text-[15px] sm:text-base font-bold text-white tracking-tight leading-snug">
            {title}
          </h3>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2.5">
          <Calendar className="w-4 h-4 text-gray-500 shrink-0" />
          <span className="text-[13px] text-gray-400">{date}</span>
        </div>

        {/* Attendees */}
        <div className="flex items-center gap-2.5">
          <Users className="w-4 h-4 text-gray-500 shrink-0" />
          <span className="text-[13px] text-gray-400">{attendees}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] my-0.5" />

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
