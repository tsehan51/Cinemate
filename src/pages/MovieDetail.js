import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks";
import Backup from '../assets/backup.png';

export const MovieDetail = () => {
  const [details, setDetails] = useState({}); //to get and store details for each id
  const {id} = useParams();  //to get the id from url
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const image = details.poster_path ? `https://image.tmdb.org/t/p/w500/${details.poster_path}` : Backup;

  useEffect(()=>{
    async function fetchMovieDetails(){
      const response = await fetch(url);
      const json = await response.json();
      setDetails(json);
    }
    fetchMovieDetails();
  }, [id]);

  const pageTitle = useTitle(details.title); 

  return (
    <main className="min-h-90vh max-w-7xl mx-auto p-3">
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt={details.title} className="rounded" />
        </div>

        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{details.title}</h1>

          <p className="my-4">{details.overview}</p>

          {details.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
            {details.genres && details.genres.map((genre) => {
              return (
                <span
                  key={genre.id} className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">
                  {genre.name}
                </span>
              ); })}
            </p>
          ) : ''}
          
          <div className="flex items-center">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p className="ml-2 text-gray-900 dark:text-white">{details.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">{details.vote_count} reviews</span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{details.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{details.budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{details.revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{details.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${details.imdb_id}`} target='_blank' rel='noreferrer'>{details.imdb_id}</a>
          </p>
        </div>
      </section>
      
    </main>
  )
}


