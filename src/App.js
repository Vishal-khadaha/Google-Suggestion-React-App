import GoogleSuggestions from './components/GoogleSuggestions'
import {Component} from 'react'
import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class App extends Component {
  state = {searchinput: '', list: suggestionsList}

  search = msg => {
    const {searchinput} = this.state
    console.log(msg)
    this.setState({searchinput: msg})
  }
  render() {
    const {searchinput, list} = this.state
    const filtered_search_list = list.filter(eachObj =>
      eachObj.suggestion.toLowerCase().includes(searchinput),
    )

    return (
      <GoogleSuggestions
        suggestionsList={filtered_search_list}
        searchFun={this.search}
      />
    )
  }
}

export default App
