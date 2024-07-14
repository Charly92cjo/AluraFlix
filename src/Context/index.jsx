import { createContext, useEffect, useState } from "react";

const MultimediaContext = createContext();

const MultimediaContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [teams, setTeams] = useState([
    "Front end",
    "Back end",
    "Innovación y gestión",
    "Inteligencia Artificial",
  ]);
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [videoToShow, setVideoToShow] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const openVideoDetail = () => {
    setIsAsideOpen(true);
  };
  const closeVideoDetail = () => {
    setIsAsideOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoId(null);
  };
  const openModal = (id) => {
    setIsModalOpen(true);
    setCurrentVideoId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const conection = await fetch("http://localhost:3000/videos");
        const data = await conection.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const deleteVideo = async (id) => {
    const isDeleted = confirm("Estás seguro que quieres eliminar este video?");
    if (isDeleted) {
      await fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    }
  };
  const updateVideo = async (id, updatedInfo) => {
    try {
      await fetch(`http://localhost:3000/videos/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: updatedInfo,
      });
      const updatedVideo = JSON.parse(updatedInfo);
      setVideos((prevVideos) =>
        prevVideos.map((video) => (video.id === id ? updatedVideo : video))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MultimediaContext.Provider
      value={{
        isModalOpen,
        closeModal,
        openModal,
        videos,
        setVideos,
        teams,
        isAsideOpen,
        openVideoDetail,
        closeVideoDetail,
        deleteVideo,
        updateVideo,
        currentVideoId,
        videoToShow,
        setVideoToShow,
        isSuccessful,
        setIsSuccessful,
      }}
    >
      {children}
    </MultimediaContext.Provider>
  );
};

export { MultimediaContext, MultimediaContextProvider };
