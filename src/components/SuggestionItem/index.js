// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  onClickUpdateSearchInput = () => {
    const {updatedSearchInput, item} = this.props
    updatedSearchInput(item.id)
  }
  render() {
    const {item} = this.props
    return (
      <li className="list-item" key={item.id}>
        <p class="suggestion-text">{item.suggestion}</p>
        <img
          className="arrow-logo"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={this.onClickUpdateSearchInput}
        />
      </li>
    )
  }
}

export default SuggestionItem
