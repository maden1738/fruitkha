import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/domain";
import { useNavigate } from "react-router-dom";

import NewsCard from "../common/NewsCard";

function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  return `${day}th ${month}, ${dateObj.getFullYear()}`;
}

export default function News() {
  const navigate = useNavigate();
  type createdBy = {
    _id: string;
    name: string;
  };

  interface News {
    _id: string;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    createdBy: createdBy;
    createdAt: string;
    [key: string]: any;
  }

  const [news, setNews] = useState<News[] | []>([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/news/?perPage=3`)
      .then((res) => {
        setNews(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="wrapper py-36">
      <div className="text-center text-secondary">
        <h3 className=" relative inline-block pb-3 font-poppins text-4xl font-bold ">
          <div className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-[20%] bg-accent bg-center content-none"></div>
          <span className="  text-accent">Our </span>News
        </h3>
        <p className="mx-auto mb-32 mt-2 max-w-[530px] font-open text-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7 ">
        {news.map((el, idx) => (
          <NewsCard
            key={idx}
            id={el._id}
            title={el.title}
            subtitle={el.subtitle}
            image={el.image}
            createdAt={el.createdAt}
            createdBy={el.createdBy.name}
            formatDate={formatDate}
          />
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <button
          className="button1"
          onClick={() => {
            navigate("/news");
          }}
        >
          More news
        </button>
      </div>
    </section>
  );
}
