import { useState } from "react";
import { ChevronDown, ChevronUp, Video } from "lucide-react";

const AccordionItem = ({ title, lectures, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2C333F] bg-gray-800 w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center px-4 py-3 cursor-pointer text-white bg-gray-700"
      >
        <div className="text-xl font-semibold h-12">{title}</div>
        <div className="text-yellow-400 flex items-center gap-2">
          <span >{lectures} Lecture(s)</span>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>

      {isOpen && (
        <div className="bg-gray-900 text-white text-sm">
          {children.map((lecture, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-2 border-t border-gray-800 hover:bg-gray-700"
            >
              <Video size={16} className="h-8" />
              {lecture.Title}
             <hr className="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
