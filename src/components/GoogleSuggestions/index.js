// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInputVal: ''}
  searchInput = event => {
    const {searchFun} = this.props
    searchFun(event.target.value)
  }
  arrowClicked = list_item_Id => {
    const {suggestionsList, searchFun} = this.props
    const clickedItem = suggestionsList.filter(
      eachObj => eachObj.id === list_item_Id,
    )
    console.log(clickedItem[0].suggestion)
    this.setState({searchInputVal: clickedItem[0].suggestion})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    return (
      <div className="page-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />

        <div className="search-with-suggestion-item">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-element"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.searchInput}
            />
          </div>
          <ul className="list-container">
            {suggestionsList.map(eachObj => (
              <SuggestionItem
                item={eachObj}
                key={eachObj.id}
                updatedSearchInput={this.arrowClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
