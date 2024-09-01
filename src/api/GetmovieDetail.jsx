export const getMovieDetail = async ({params}) => {
    const id = params.movieId;
    try {
      // const res = await fetch(`https://www.omdbapi.com/?s=Ben&page=2&apikey=${import.meta.env.VITE_API_KEY}`);
      const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`); 
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  