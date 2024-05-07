import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/domain";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  type createdBy = {
    _id: string;
    name: string;
  };

  interface News {
    _id: string;
    title: string;
    content: string;
    image: string;
    createdBy: createdBy;
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
        <p className="mx-auto mt-2 max-w-[530px] font-open text-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>

      {news.map((el) => (
        <>
          <img src={el.image} alt="" />
          <div>{el.title}</div>
          <div>{el.createdBy.name}</div>
          <div dangerouslySetInnerHTML={{ __html: el.content }}></div>
        </>
      ))}
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
