import { useEffect, useState } from "react";

import { useServices } from "../../context/ServicesProvider";
import Layout from "../../components/Layout";
import Quote from "../../components/Quote";

const Quotes = (props) => {
  const {
    stateService,
    services: { getAllQuote },
  } = useServices();

  const [quotesState, setQuotesState] = useState([]);

  const getInitialData = async () => {
    try {
      const req = { limit: 10 };
      const { docs, total } = await getAllQuote(req);
      setQuotesState(docs);
    } catch (error) {}
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Layout>
      <section className="container mx-auto p-10 md:p-20 antialiased">
        <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
          {Array.isArray(quotesState) &&
            quotesState.map((quote) => (
              <Quote key={quote._id} {...quote} />
            ))}
        </section>
      </section>
    </Layout>
  );
};

export default Quotes;
