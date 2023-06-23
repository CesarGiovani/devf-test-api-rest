import { useRouter } from "next/navigation";
import {COVER_MOVIES} from '../utils/covers'

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Movie = (props) => {
  const {
    _id,
    name,
    academyAwardNominations,
    academyAwardWins,
    boxOfficeRevenueInMillions,
    budgetInMillions,
  } = props;
  const router = useRouter();
  return (
    <article
      className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
      style={{
        backgroundImage: `url(${COVER_MOVIES[_id]})`,
      }}
    >
      <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
        <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
          {name}
        </h1>
        <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300" />
        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
          {`Nominaciones academia: ${academyAwardNominations}`}
        </p>
        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
          {`Academia ganada: ${academyAwardWins}`}
        </p>
        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
          {`Presupuesto en millones: ${formatter.format(budgetInMillions)}`}
        </p>
        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
          {`Ingresos de taquilla en millones: ${formatter.format(boxOfficeRevenueInMillions)}`}
        </p>
      </div>
    </article>
  );
};

export default Movie;
