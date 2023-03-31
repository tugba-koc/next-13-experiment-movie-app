import Image from 'next/image';
import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export async function generateStaticParams() {
  const data = await fetch(
    `${process.env.BASE_URL}/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((movie) => ({
    movie: movie.id,
  }));
}

const MovieDetail = async ({ params: { movie } }) => {
  const data = await fetch(
    `${process.env.BASE_URL}/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <div>
      <div>
        <h1 className='text-2xl'>{res.title}</h1>
        <h2 className='text-lg'>{res.release_date}</h2>
        <h2 className='text-sm bg-green-600 inline-block my-2 py-2 px-4 text-white rounded-full'>
          {res.status}
        </h2>
        <Image
          className='my-12 w-full'
          width={600}
          height={600}
          src={`${IMAGE_BASE_URL}${res.backdrop_path}`}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
