import React,{ useState }  from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import {IUserInput} from '../Common/Interface';
import './CitySearchBar.css';

interface ICitySearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}

function CitySearchBar(props: ICitySearchBarProps){

    const [CitySearchQuery, setSearchQuery] = useState<string | null>("Auckland");

    const handleCitySearchQueryChange = (input: string | null) =>{
        setSearchQuery(input);
    }


    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        if(CitySearchQuery?.length !== 0 && CitySearchQuery !== null && CitySearchQuery !== ""){
            let UserInput: IUserInput = {
                SearchQuery: CitySearchQuery,
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }



    return(
        <div className="CitySearchBarContainer">
            <Grid className = "SearchField" container spacing={3}>
                <Grid item >
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        variant="outlined"
                        error={HasFocus && CitySearchQuery === ""}
                        onClick={()=> setHasFocus(true)}
                        value={CitySearchQuery}
                        onChange={e => handleCitySearchQueryChange(e.target.value)}
                    />
                </Grid>
                
                <Grid item >
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Search
                        </Button>
                </Grid>
            </Grid>

        </div>
    )


}

export default CitySearchBar