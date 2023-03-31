import Movie from './Movie';

export default async function Home() {
  const data = await fetch(
    `${process.env.BASE_URL}/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main>
      <div className='grid gap-9 grid-cols-fluid'>
        {res?.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
