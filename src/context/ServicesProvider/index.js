import React, { useContext, useState, createContext } from "react";
import createTheLordOfTheRingsServices from "../../services/TheLordOfTheRings/services";
import ApiTheLordOfTheRings from "../../services/TheLordOfTheRings/baseConfig";
import { toast } from "react-hot-toast";

const Context = createContext();

const useServices = () => useContext(Context);

const ServicesProvider = ({ children }) => {
  const [stateService, setStateService] = useState(false);

  const TheLordOfTheRings =
    createTheLordOfTheRingsServices(ApiTheLordOfTheRings);

  const handlerError = (error) => {
    const { status, data } = error.response;
    let message = "";
    switch (status) {
      case 401:
        message = "Sin token";
        break;
      case 429:
        message = data;
        break;
      default:
        message = "Error inesperado"
        break;
    }
    toast.error(message, {
      position: "top-right",
    });
  };

  const getAllBooks = async () => {
    setStateService(true);
    return TheLordOfTheRings.getAllBooks()
      .then((results) => {
        setStateService(false);
        return results;
      })
      .catch((err) => {
        setStateService(false);
        console.log(err);
        handlerError(err);
        throw err;
      });
  };

  const getBookById = async (id) => {
    setStateService(true);
    return TheLordOfTheRings.getBookById(id)
      .then((results) => {
        setStateService(false);
        return results;
      })
      .catch((err) => {
        setStateService(false);
        console.log(err);
        handlerError(err);
        throw err;
      });
  };

  const getAllMovies = async () => {
    setStateService(true);
    return TheLordOfTheRings.getAllMovies()
      .then((results) => {
        setStateService(false);
        return results;
      })
      .catch((err) => {
        setStateService(false);
        console.log(err);
        handlerError(err);
        throw err;
      });
  };

  const getAllCharacters = async (query) => {
    setStateService(true);
    return TheLordOfTheRings.getAllCharacters(query)
      .then((results) => {
        setStateService(false);
        return results;
      })
      .catch((err) => {
        setStateService(false);
        console.log(err);
        handlerError(err);
        throw err;
      });
  };

  const getCharacterById = async (id) => {
    return TheLordOfTheRings.getCharacterById(id)
      .then((results) => {
        return results;
      })
      .catch((err) => {
        console.log(err);
        handlerError(err);
        throw err;
      });
  };


  const getAllQuote = async (query) => {
    setStateService(true);
    return TheLordOfTheRings.getAllQuote(query)
      .then((results) => {
        setStateService(false);
        return results;
      })
      .catch((err) => {
        setStateService(false);
        console.log(err);
        handlerError(err);
        throw err;
      });
  };

  const getAllChapter = async (query) => {
    setStateService(true);
    return TheLordOfTheRings.getAllChapter(query)
      .then((results) => {
        setStateService(false);
        return results;
      })
      .catch((err) => {
        setStateService(false);
        console.log(err);
        handlerError(err);
        throw err;
      });
  };

  const value = {
    stateService,
    services: {
      getAllBooks,
      getBookById,
      getAllMovies,
      getAllCharacters,
      getCharacterById,
      getAllQuote,
      getAllChapter,
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { ServicesProvider, useServices };
