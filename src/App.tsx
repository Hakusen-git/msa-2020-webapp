import React, {useState} from 'react';
import './App.css';
import { IUserInput } from './Component/Common/Interface';
import SearchBar from './Component/Picker/CitySearchBar';
import CardGrid from './Component/CardGrid/CardGrid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})


function App() {

  
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Auckland",
  });

  const handleSetUserInput = (a: IUserInput) =>{
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <SearchBar SetUserInput={(a: IUserInput) => handleSetUserInput(a)} />
        <CardGrid SearchQuery={UserInput.SearchQuery} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
