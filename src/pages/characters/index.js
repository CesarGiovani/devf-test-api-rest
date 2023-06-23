import { useEffect, useState } from "react";

import { useServices } from "../../context/ServicesProvider";
import Layout from "../../components/Layout";
import Character from "../../components/Character";

const Characters = (props) => {
  const {
    stateService,
    services: { getAllCharacters },
  } = useServices();

  const [charactersState, setCharactersState] = useState([]);

  const getInitialData = async () => {
    try {
      const req = { limit: 5 };
      const { docs, total } = await getAllCharacters(req);
      setCharactersState(docs);
    } catch (error) {}
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Layout>
      <section className="container mx-auto p-10 md:p-20 antialiased">
        {Array.isArray(charactersState) &&
          charactersState.map((character) => (
            <Character key={character._id} {...character} />
          ))}
      </section>
    </Layout>
  );
};

export default Characters;
