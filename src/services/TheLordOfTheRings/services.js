const createServices = (ApiServices) => {
  const TheLordOfTheRingsServices = {};
  TheLordOfTheRingsServices.getAllBooks = () => {
    return ApiServices.get("/book").then((response) => response.data);
  };
  TheLordOfTheRingsServices.getBookById = (id) => {
    return ApiServices.get(`/book/${id}`).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getBookChapterById = (id) => {
    return ApiServices.get(`/book/${id}/chapter`).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getAllMovies = () => {
    return ApiServices.get("/movie").then((response) => response.data);
  };
  TheLordOfTheRingsServices.getMovieById = (id) => {
    return ApiServices.get(`/movie/${id}`).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getMovieQuoteById = (id) => {
    return ApiServices.get(`/movie/${id}/quote`).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getAllCharacters = (params = {}) => {
    return ApiServices.get("/character",{params}).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getCharacterById = (id) => {
    return ApiServices.get(`/character/${id}`).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getCharacterQuoteById = (id) => {
    return ApiServices.get(`/character/${id}/quote`).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getAllQuote = (params = {}) => {
    return ApiServices.get("/quote",{params}).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getQuoteById = (id) => {
    return ApiServices.get(`/quote/${id}`).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getAllChapter = (params = {}) => {
    return ApiServices.get("/chapter",{params}).then((response) => response.data);
  };
  TheLordOfTheRingsServices.getChapterById = (id) => {
    return ApiServices.get(`/chapter/${id}`).then((response) => response.data);
  };
  return TheLordOfTheRingsServices;
};
export default createServices;
