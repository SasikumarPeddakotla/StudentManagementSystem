import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({search,setSearch}) => {
  return (
    <div className='col-sm-6 mb-4'>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className="input-group mb-3 shadow">
                <div className="input-group-prepend">
                    <span className="input-group-text mt-1" id="search-icon" style={{border: 'none',background: 'none'}}>
                        <FaSearch />
                    </span>
                </div>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Search student"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-describedby="search-icon"
                />
            </div>
        </form>
    </div>
  )
}

export default Search
