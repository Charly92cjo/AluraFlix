import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MultimediaContextProvider } from "../../Context";
import { NewVideo } from "../NewVideo";
import { Video } from "../Video";
import { NotFound } from "../NotFound";
import { SuccesfulVideo } from "../SuccessfulVideo";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/nuevo-video", element: <NewVideo /> },
    { path: "/:id", element: <Video /> },
    { path: "/success", element: <SuccesfulVideo /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <MultimediaContextProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </MultimediaContextProvider>
    </>
  );
};

export default App;
