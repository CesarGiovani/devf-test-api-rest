import { useRouter } from "next/router";
import { COVER_BOOKS } from '../utils/covers'

const Book = (props) => {
  const { id, name } = props;
  const router = useRouter();
  return (
    <article
      className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => router.push(`/books/${id}`)}
    >
      <div className="max-h-140 overflow-hidden">
        <img
          className="w-full h-auto"
          src={COVER_BOOKS[id]}
          alt={name}
        />
      </div>
      <div className="p-7 my-auto pb-12 ">
        <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>
      </div>
    </article>
  );
};

export default Book;
