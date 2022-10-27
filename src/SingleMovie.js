import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const {id}=useParams();
  return<>
    <h1>Single Movie {id}</h1>
  </>
}

export default SingleMovie