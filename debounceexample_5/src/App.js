import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import { debounce } from './assets/debounce';

function App() {
  const [loading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState("")
  const [characterData, setCharactersData] = useState([]);
  const [searchData, setSearchData] = useState([])

  const fetchCharactersData = () => {
    setLoading(true)
    fetch('https://api.disneyapi.dev/characters')
      .then((response) => {
        return response.json()
      }).then((data) => {
        setCharactersData(data.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchCharactersData()
  }, [])

  const onChange = (e) => {
    setTextInput(e.target.value)
  }

  const handleChange = debounce(onChange, 500)

  const filterData = (query) => {
    const arr = characterData?.filter(char => char.name?.toLowerCase().includes(query.toLowerCase()))
    setSearchData(arr);
  }

  useEffect(() => {
    filterData(textInput)
  }, [textInput])


  return (
    <div className="App">
      <h1>Debounce Example</h1>
      <input placeholder='Type to Search' defaultValue={textInput} onChange={handleChange} data-testid="text-input" />
      <p data-testid="debounced-text">{textInput && `Showing Results for ${textInput} ......`}</p>
      <CardList cardData={textInput.trim() !== "" ? searchData : characterData} loading={loading} />
    </div>
  );
}

export default App;
