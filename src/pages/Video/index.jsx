import { useContext, useEffect, useState } from "react";
import "./Video.css";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound";
import { MultimediaContext } from "../../Context";

const Video = () => {
  const URL_API = "http://localhost:3000/videos";
  const { setIsSuccessful } = useContext(MultimediaContext);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getVideo = async () => {
      try {
        const fetchData = await fetch(`${URL_API}/${id}`);
        const selectedVideo = await fetchData.json();
        setVideo(selectedVideo);
      } catch (error) {
        console.error(error);
      }
    };
    getVideo();
  }, [id]);
  console.log(video);

  if (video.length === 0) return <NotFound />;

  return (
    <div className="video_container">
      <h1>{video.titulo}</h1>
      <section className="section_video">
        <iframe
          width="100%"
          height="100%"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export { Video };
