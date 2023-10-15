import { useEffect, useState } from "react"

export const MovieList = () => {
    const[data,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    })

    const fetchData=async()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=233483de703793f10c35fd4818a6134a')
        const data = await res.json();

        setData(data.results);
        
    }
    return (
      <main>
        <div className="text-9xl bg-emerald-200 p-10 border-8 border-blue-700 rounded-lg m-5">
          MovieList
        </div>

        {
            data.map(movie=>(
                <div>
                    <h1>{movie.id}</h1>
                    <p>{movie.original_title}</p>
                    <p>{movie.overview}</p>
                    <img src={movie.poster_path} alt="" />
                </div>
            ))
        }
      </main>
    )
  }
  