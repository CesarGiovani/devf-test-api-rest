import { useEffect, useState } from "react";

import { useServices } from "../../context/ServicesProvider";
import Layout from "../../components/Layout";
import Chapter from "../../components/Chapter";

const Chapters = (props) => {
  const {
    stateService,
    services: { getAllChapter },
  } = useServices();

  const [chaptersState, setChaptersState] = useState([]);

  const getInitialData = async () => {
    try {
      const req = { limit: 5 };
      const { docs, total } = await getAllChapter();
      setChaptersState(docs);
    } catch (error) {}
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Layout>
      <section className="container mx-auto p-10 md:p-20 antialiased">
        <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
          {Array.isArray(chaptersState) &&
            chaptersState.map((chapter) => (
              <Chapter key={chapter._id} {...chapter} />
            ))}
        </section>
      </section>
    </Layout>
  );
};

export default Chapters;
