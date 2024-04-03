import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtowatchletter, filtermovie, moviedata, setCurrentPage, setPerPageSize } from '../Store/Movieslice'
function Home() {
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movie.movie)
    const filter = useSelector(state => state.movie.filtermovies)
    const currentPage = useSelector(state => state.movie.currentPage)
    const pageSize = useSelector(state => state.movie.pageSize)


    useEffect(() => {
        dispatch(moviedata())
    }, [dispatch])

    const handleFilterChange = event => {
        dispatch(filtermovie(event.target.value));
        dispatch(setCurrentPage(1));
    };
    const handleAddToWatchLetter = (movie) => {
        dispatch(addtowatchletter(movie));
    };
    const handlePerPageChange = (e) => {
        const newPageSize = parseInt(e.target.value);
        dispatch(setPerPageSize(newPageSize));
        dispatch(setCurrentPage(1));
    };

    const handlePageChange = page => {
        let newPage = page;
        if (page < 1) {
            newPage = totalPages;
        } else if (page > totalPages) {
            newPage = 1;
        }
        dispatch(setCurrentPage(newPage));
        const params = new URLSearchParams(window.location.search);
        params.set('page', newPage);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState(null, null, newUrl);

    };

    const totalPages = Math.ceil((filter?.length || movie?.length || 0) / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;


    return (

        <div>
            <h1>Movies</h1>
            <input className='input' type="text" placeholder='Search Movie Name' onChange={handleFilterChange} /><br /><br />
            <div className='perpage'>
                <h4>Perpage Size</h4><select className='select' value={pageSize} onChange={handlePerPageChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select><br /><br />
            </div><br /><br />
            <div className="productsWrapper">
                {filter.length > 0 ? (
                    filter.slice(startIndex, endIndex).map(filteredMovie => (
                        <div key={filteredMovie.id} className="card">
                            <Link to={`/movies/${filteredMovie.id}/${filteredMovie.movie.toLowerCase().replace(/\s+/g, '-')}`}>
                                <video src={filteredMovie.image} alt="" />
                            </Link>
                            <h4>{filteredMovie.movie}</h4>
                            <button className='btn' onClick={() => handleAddToWatchLetter(filteredMovie)}>+</button>
                        </div>
                    ))
                ) : (
                    <div className="productsWrapper">
                        {movie.slice(startIndex, endIndex).map(movieItem => (
                            <div key={movieItem.id} className="card">
                                <Link to={`/movies/${movieItem.id}/${movieItem.movie.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <video src={movieItem.image} alt="" />
                                </Link>

                                <h4>{movieItem.movie}</h4>
                                <button className='btn' onClick={() => handleAddToWatchLetter(movieItem)}>+</button>
                            </div>
                        ))}
                    </div>

                )}

            </div>
            <br />
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                {/* {[...Array(totalPages).keys()].map(page => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                ))} */}
                {[...Array(totalPages).keys()].map(page => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                ))}

                <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </div>


    )
}

export default Home