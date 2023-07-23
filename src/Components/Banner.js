import {movies} from './getMovies.js';

import React, { Component } from 'react'

export default class Banner extends Component {
  render() {

    let movie = movies.results[0]
    return (
        <>
        {
            movie == '' ? 
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div> :
                    <div className="card banner-card">
                    {/* <div className="card banner-card" style={{width: '18rem', }}> */}

                        <img src={ ` https://image.tmdb.org/t/p/original${movie.backdrop_path} `} className="card-img-top banner-img" alt={movie.title} />
                        {/* <div className="card-body"> */}
                        <h5 className="card-title banner-title">{movie.original_title}</h5>
                        <p className="card-text banner-text">{movie.overview}</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        {/* </div> */}
                    </div>
        }
        </>
    )
  }
}
