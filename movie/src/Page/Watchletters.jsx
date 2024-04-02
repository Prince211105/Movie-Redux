import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removetowatchletter } from '../Store/Movieslice'

function watchletters() {
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movie.watchLetter)
  const handleremove = (itemid) => {
    dispatch(removetowatchletter(itemid))
  }
  return (
    <div>
      <h2>watchletters</h2>
      <div className="productsWrapper">
        {
          movie.map((movies) => (
            <div key={movies.id} className="card">
              <Link to={`/movies/${movies.id}/${movies.movie.toLowerCase().replace(/\s+/g, '-')}`}>
                <video src={movies.image} alt="" />
              </Link>
              <h4>{movies.movie}</h4>
              <button className='btn' onClick={() => handleremove(movies.id)}>-</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default watchletters