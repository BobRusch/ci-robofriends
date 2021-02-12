import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'
import Header from './Header'

export class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }



componentDidMount() {
this.props.onRequestRobots()
}

filterRobots = () => {
const { robots, searchField } = this.props
return robots.filter((robot) => {
return robot.name.toLowerCase().includes(searchField.toLowerCase())
})
}

  render() {
    const { onSearchChange, isPending } = this.props

return (
<div className='tc'>
<Header count={this.state.count} />
<SearchBox searchChange={onSearchChange} />
<Scroll>
{isPending ? (
<h1>Loading</h1>
) : (
<ErrorBoundry>
<CardList robots={this.filterRobots()} />
</ErrorBoundry>
)}
</Scroll>
</div>
)
}
}

MainPage.propTypes = {
robots: PropTypes.array,
searchField: PropTypes.string,
onRequestRobots: PropTypes.func,
onSearchChange: PropTypes.func,
isPending: PropTypes.bool,
filterRobots: PropTypes.func
}

export default MainPage
