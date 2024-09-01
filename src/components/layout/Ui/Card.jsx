import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({currMovie}) => {
  const {Poster,imdbID,Title,Year,Type} = currMovie;
    
  return (
    <div className="h-[340px] md:h-[440px] bg-gray-100 py-2 flex flex-col md:flex-row justify-center sm:py-4">
      <div className="py-2 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-[23rem] border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl hover:animate-pulse shadow-lg"
              src={Poster}
              alt={imdbID}
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{Title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">{Type}</div>
              <div className="text-lg text-gray-800">{Year}</div>
            </div>
            <p className="text-gray-400 max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex text-2xl font-bold text-a">$83.90</div>
            <NavLink to={`/movie/${imdbID}`}>
            <button class="btn relative h-16 items-center justify-start overflow-hidden font-medium rounded-3xl transition-all bg-white  hover:bg-white group py-1 px-4">
            <span class="w-60 h-52 rounded bg-green-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left font-semibold text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Watch Now
            </span>
          </button>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
