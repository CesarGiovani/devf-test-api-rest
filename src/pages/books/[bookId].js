import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useServices } from "../../context/ServicesProvider";
import Layout from "../../components/Layout";
import Book from "../../components/Book";

const BookChapter = (props) => {
  const {
    stateService,
    services: { getBookById },
  } = useServices();
  const router = useRouter();
  const { query } = router;

  const [booksState, setBooksState] = useState({});

  const getInitialData = async (id) => {
    try {
      const { docs, total } = await getBookById(id);
      setBooksState(docs);
    } catch (error) {}
  };

  useEffect(() => {
    getInitialData(query.bookId);
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

export default BookChapter;
