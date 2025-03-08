import React from 'react'
import Row from "../Row/Row"; 

import requests from '../../../Utils/requests'

function Rowlist() {
  return (
    <>
    <Row
    title="NETFLIX ORGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />
    <Row
    title="TRENDING NOW"
    fetchUrl={requests.fetchTrending}
    
    />
     <Row
    title="TOP RATED"
    fetchUrl={requests.fetchTopRated}
    
    />
     <Row
    title="ACTION MOVIES"
    fetchUrl={requests.fetchActionMovies}
    
    />
     <Row
    title="COMEDY"
    fetchUrl={requests.fetchComedyMovies}
    
    />
     <Row
    title="HORROR"
    fetchUrl={requests.fetchHorrorMovies}
    
    />
     <Row
    title="ROMANCE"
    fetchUrl={requests.fetchRomanceMovies}
    
    />
     <Row
    title="DOCUMETNRY"
    fetchUrl={requests.fetchDocumentaries}
    
    />
        </>
  )
}

export default Rowlist