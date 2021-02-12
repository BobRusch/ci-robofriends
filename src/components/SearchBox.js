import React from 'react'
import PropTypes from 'prop-types'

const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox')
  return (
    <div className='pa2'>
      <input
        aria-label='Search'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  )
}

SearchBox.propTypes = {
  searchfield: PropTypes.string,
  searchChange: PropTypes.func
}

export default SearchBox
