import React from "react";
import { NavLink } from "react-router-dom";
import movie from '../assets/movies.png'

const Home = () => {
  return (
    <div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-20 lg:m-11">
  <div className="text-center lg:text-left p-7">
    <h1 className="text-4xl lg:text-6xl text-green-600 font-bold mb-4">
      Unlimited Movies & TV Shows
    </h1>
    <p>Discover The Top Best Movie And Drama's Information This episode is all about Agatha! Join us for an exclusive interview with Mary Livanos, executive producer of the upcoming Agatha All Along, to hear what’s ahead for everyone’s favorite witch.</p>
    <NavLink to="movie">
      <button className="mt-4 px-5 py-2 bg-green-500 text-white text-lg rounded-full">
        Explore More
      </button>
    </NavLink>
  </div>
  <div>
    <img
      src={movie}
      className="w-full rounded-lg"
      alt="Movie Thumbnail"
    />
  </div>
</div>

      {/* About Section */}
      <section className="m-5 lg:m-20" id="MyProjects">
        <div className="text-center mb-12">
          <span className="text-4xl font-bold">Relesed</span>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xs text-center p-6 bg-yellow-300 shadow-lg rounded-lg m-4">
            <a href="#" className="text-xl font-semibold mb-2 block">
            Avengers
            </a>
            <p className="text-gray-700">
            The Avengers movie unites Marvel's heroes in an epic battle against Loki, showcasing teamwork and heroism.
            </p>
          </div>
          <div className="max-w-xs text-center p-6 bg-yellow-300 shadow-lg rounded-lg m-4">
            <a href="#" className="text-xl font-semibold mb-2 block">
              BEN-10
            </a>
            <p className="text-gray-700">
            Ben 10 centers on a boy who discovers the Omnitrix, a device that allows him to transform into different aliens.
            </p>
          </div>
          <div className="max-w-xs text-center p-6 bg-yellow-300 shadow-lg rounded-lg m-4">
            <a href="#" className="text-xl font-semibold mb-2 block">
              Iron Man
            </a>
            <p className="text-gray-700">
            Iron Man tells the story of Tony Stark, a genius billionaire who becomes a powerful armored hero.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="m-5 lg:m-20" id="contact">
        <div className="text-center mb-12">
          <span className="text-4xl font-bold">Sign Up</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="lg:w-1/2 p-6">
            <div className="mb-4">
              <label className="text-lg font-bold">Your Name</label>
              <input
                type="text"
                placeholder="Enter your Name here"
                className="block w-full p-2 mt-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-bold">Your Email</label>
              <input
                type="text"
                placeholder="Enter your Email here"
                className="block w-full p-2 mt-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg font-bold">Your Password</label>
              <input
                type="password"
                placeholder="Enter your Password here"
                className="block w-full p-2 mt-2 border rounded-lg"
              />
            </div>
            <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700">
              Sign Up
            </button>
          </div>
          <div className="lg:w-1/2 p-6 text-gray-700">
            <div className="mb-8">
              <span className="text-lg font-bold">Contact Us</span>
              <p className="mt-2">
                A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida,
                Uttar Pradesh - 201305
              </p>
            </div>
            <div>
              <span className="text-lg font-bold">More Information</span>
              <p className="mt-2">
                Greetings to all the Geeks out there! We welcome you to the
                platform where we consistently strive to offer the best of
                education. This platform has been designed for every geek
                wishing to expand their knowledge, share their knowledge and is
                ready to grab their dream job. We have millions of articles,
                live as well as online courses, thousands of tutorials, and much
                more just for the geek inside you. Thank you for choosing and
                supporting us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
