import { useContext } from "react";
import { Banner } from "../../components/Banner";
import { Team } from "../../components/Team";
import { Card } from "../../components/Card";
import { ModalEditarCard } from "../../components/ModalEditarCard";
import "./Home.css";
import { MultimediaContext } from "../../Context";
import { VideoDetail } from "../../components/VideoDetail";

const Home = () => {
  const { videos, teams, deleteVideo } = useContext(MultimediaContext);

  return (
    <>
      <Banner />
      {teams &&
        teams.map((team, index) => {
          return (
            <Team title={team} key={index}>
              {videos.map((video) => {
                if (team === video.equipo) {
                  return (
                    <Card
                      key={video.id}
                      title={video.titulo}
                      description={video.descripcion}
                      url={video.url}
                      image={video.imagen}
                      id={video.id}
                      deleteVideo={deleteVideo}
                    >
                      <ModalEditarCard id={video.id} />
                    </Card>
                  );
                }
              })}
            </Team>
          );
        })}
      <VideoDetail />
    </>
  );
};

export { Home };
