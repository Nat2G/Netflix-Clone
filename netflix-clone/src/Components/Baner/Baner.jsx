import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Baner.css";

function Baner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        // Proper async function inside useEffect
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request);

                // Fix setMovie syntax
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                    ]
                );
            } catch (error) {
                console.log("Error", error);
            }
        }

        fetchData(); // Call the function

    }, []);
    function truncate(str,n){
        return str?.length>n?str.substr(0, n-1)+ "...":str;
    }

    return (
        <div
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("http://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button play">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fadeBottom" />
        </div>
    );
}

export default Baner;
