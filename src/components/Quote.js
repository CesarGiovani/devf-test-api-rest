import { useEffect, useState } from "react";
import { COVER_CHARACTER } from "../utils/covers";
import { useServices } from "../context/ServicesProvider";

const Quote = (props) => {
  const { _id, dialog, movie, character } = props;
  const {
    stateService,
    services: { getCharacterById },
  } = useServices();
  const [characterState, setCharacterState] = useState({ name: "???" });

  const getInitialData = async () => {
    try {
      const { docs, total } = await getCharacterById(character);
      setCharacterState(docs[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
      <img
        className="mx-auto mb-20 mt-10 w-40"
        src={COVER_CHARACTER[character]}
        alt={dialog}
      />
      <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
        {characterState.name}
      </h2>
      <p className="m-4 text-lg p-4 leading-relaxed text-center ">{dialog}</p>
    </article>
  );
};

export default Quote;
