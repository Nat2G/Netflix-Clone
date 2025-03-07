import React from 'react'
import Row from "../Row/Row"; 

import requests from '../../../Utils/requests'

function Rowlist() {
  return (
    <>
    <Row
    title="NETFLIX ORGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    />
    <Row/>
    <Row/>
    <Row/>
        </>
  )
}

export default Rowlist