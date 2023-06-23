import { useEffect, useState } from "react";

import { useServices } from "../../context/ServicesProvider";
import Layout from "../../components/Layout";
import Movie from "../../components/Movie";

const Movies = (props) => {
  const { books } = props;
  const {
    stateService,
    services: { getAllMovies },
  } = useServices();

  const [moviesState, setMoviesState] = useState([]);

  const getInitialData = async () => {
    try {
      const { docs } = await getAllMovies();
      setMoviesState(docs);
    } catch (error) {}
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Layout>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
        <section className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-40">
          {Array.isArray(moviesState) &&
            moviesState.map((movie) => <Movie key={movie._id} {...movie} />)}
        </section>
      </section>
    </Layout>
  );
};

export default Movies;
