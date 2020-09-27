import React from 'react';
import {connect} from 'react-redux';
import './Search.css';
import { useDataLayerValue } from './DataLayer';
import Row from './Row';
import SearchRow from './SearchRow';
import SearchLogo from './assets/magnifying-glass.svg';
import {
    setSearchResult
} from './actions/search'

function Search({spotify, setSearchResult, search:{search_result}}) {
    // const [{search_result}, dispatch] = useDataLayerValue();

    const gensearchResult = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        spotify.search(e.target.value, ["album","artist","playlist","track"]).then(res=>{
            setSearchResult(res)
;        })
    }

    console.log(search_result);

    return (
        <div className="search__div">
            <form role="search">
                <label htmlFor="search">Search for stuff</label>
                <input onChange={gensearchResult}  id="search" type="search" placeholder="Search..." autoFocus required autoComplete="off"/>
            </form>

                {search_result === null ? (
                    <div className="search__logoDiv">
                    <img className="search__logo" src={SearchLogo} alt=""/>
                    <span> . . . Search Musify</span>
                    </div>
                    
                ): (
                    <div className="search_results">
                
                        <SearchRow title="Albums" items={search_result?.albums?.items}/>
                        <SearchRow title="Playlists" items={search_result?.playlists?.items}/>
                        <SearchRow title="Tracks" items={search_result?.tracks?.items}/>
                        <SearchRow title="Artists" items={search_result?.artists?.items}/>
                
                    </div>
                )}
            
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.search
})

export default connect(mapStateToProps, {setSearchResult})(Search);
