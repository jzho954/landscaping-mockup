import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const Timeline = ({ events, className }: TimelineProps) => {
  return (
    <div className={cn("relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-forest/50 before:to-transparent", className)}>
      {events.map((event, index) => (
        <div key={index} className="relative flex items-center">
          <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white shadow">
            <Calendar className="h-5 w-5" />
          </div>
          
          <div className="ml-16 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <div className="text-xl font-bold text-forest">{event.title}</div>
                <div className="flex items-center text-sm text-earth">
                  <Clock className="mr-1 h-4 w-4" />
                  {event.date}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-earth">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 