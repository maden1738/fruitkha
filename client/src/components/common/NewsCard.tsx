interface formatDate {
  (arg1: string): string; // Function takes a string argument and returns string
}

interface NewsCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  createdBy: string;
  createdAt: string;
  formatDate: formatDate;
}

import { Link } from "react-router-dom";
import { FaUser, FaCalendar } from "react-icons/fa";

export default function NewsCard({
  id,
  title,
  subtitle,
  image,
  createdBy,
  createdAt,
  formatDate,
}: NewsCardProps) {
  return (
    <div className="shadow-lg hover:shadow-none">
      <img src={image} alt="" className="h-[200px] w-[350px] rounded-md" />
      <div className="p-5 font-open">
        <Link
          to={`/news/${id}`}
          className="  font-poppins text-xl font-semibold text-secondary"
        >
          {title}
        </Link>
        <div className="my-4 flex gap-5 text-xs text-secondary opacity-60">
          <div className="flex items-center gap-1 capitalize">
            <FaUser />
            {createdBy}
          </div>
          <div className="flex items-center gap-1 ">
            <FaCalendar />
            {formatDate(createdAt)}
          </div>
        </div>

        <p className=" mb-6 text-sm text-[#555555]">{subtitle}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: el.content }}></div> */}
        <Link
          to={`/news/${id}`}
          className="text-sm font-bold hover:text-accent"
        >
          read more &gt;
        </Link>
      </div>
    </div>
  );
}
