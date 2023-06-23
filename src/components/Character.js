import { useRouter } from "next/navigation";
import { COVER_CHARACTER } from "../utils/covers";

const Character = (props) => {
  const { _id, name, wikiUrl, birth, gender, death } = props;
  const router = useRouter();

  return (
    <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto my-5 max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
      <img className="w-full md:w-52" src={COVER_CHARACTER[_id]} alt={name} />
      <div className="">
        <div className="p-5 pb-10">
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">{name}</h1>
          <p className="text-xl text-gray-400 mt-2 leading-relaxed">
            Exercitation fugiat pariatur et sunt ut. Eiusmod reprehenderit sunt
            minim ea ad. Aute excepteur tempor reprehenderit veniam cillum non
            aliquip ea qui velit nulla. Aute officia laboris do reprehenderit
            occaecat.
          </p>
        </div>
        <div className="bg-blue-50 p-5">
          <div className="sm:flex sm:justify-between">
            <div>
              <div className="text-lg text-gray-700">
                <span className="text-gray-900 font-bold">Gender:</span>{" "}
                {gender != "" ? gender : "???"}
              </div>
              <div className="flex items-center">
                <div className="text-gray-600 text-sm md:text-base mt-1">
                  <span className="text-gray-900 font-bold">Birth:</span>{" "}
                  {birth != "" ? birth : "???"}
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href={wikiUrl}
              className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"
            >
              Ver más
            </a>
          </div>
          <div className="mt-3 text-gray-600 text-sm md:text-sm">
            <span className="text-gray-900 font-bold">Death:</span>{" "}
            {death != "" ? death : "???"}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Character;
