import avatar1 from "./assets/avatar1.png";
import avatar3 from "./assets/avatar3.png";

interface testimonialData {
  avatar: string;
  name: string;
  designation: string;
  review: string;
}

export const testimonialData: testimonialData[] = [
  {
    avatar: avatar1,
    name: "Swastima Khadka",
    designation: "Local Shop Owner",
    review:
      " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
  },
  {
    avatar: avatar3,
    name: "Nischal Basnet",
    designation: "Local Shop Owner",
    review:
      " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
  },
];
