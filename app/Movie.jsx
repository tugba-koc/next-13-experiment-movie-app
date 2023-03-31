import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const Movie = (props) => {
  const { key, id, title, poster_path, release_date } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>Release date: {release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          width={300}
          height={400}
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt='test'
        />
      </Link>
    </div>
  );
};

export default Movie;
