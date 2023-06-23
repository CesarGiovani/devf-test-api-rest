import { useEffect, useState } from "react";

import { useServices } from "../../context/ServicesProvider";
import Layout from "../../components/Layout";
import Book from "../../components/Book";

const Books = (props) => {
  const { books } = props;
  const {
    stateService,
    services: { getAllBooks },
  } = useServices();

  const [booksState, setBooksState] = useState([]);

  const getInitialData = async () => {
    try {
      const { docs, total } = await getAllBooks();
      setBooksState(docs);
    } catch (error) {}
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Layout>
      <section className="container mx-auto p-10 md:p-20 grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-y-10 transform duration-500">
        {Array.isArray(booksState) &&
          booksState.map(({ _id, name }) => (
            <Book key={_id} id={_id} name={name} />
          ))}
      </section>
    </Layout>
  );
};

export default Books;
