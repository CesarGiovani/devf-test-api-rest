import { useRouter } from "next/navigation";
import { COVER_BOOKS } from "../utils/covers";

const Chapter = (props) => {
  const { _id, chapterName, book } = props;
  const router = useRouter();

  return (
    <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
      <img
        className="mx-auto mb-20 mt-10 w-40"
        src={COVER_BOOKS[book]}
        alt={chapterName}
      />
      <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
        {chapterName}
      </h2>
    </article>
  );
};

export default Chapter;
