import React from 'react';
import {connect} from 'react-redux';
import './Row.css';
// importing the action creators
import {
    setCatPlayId
} from './actions/home'


function Row({items, title, setCatPlayId}) {
    // const [{cat_playid}, dispatch] = useDataLayerValue();


    const genCatPlaylist = (e) => {
        // console.log(e.target.getAttribute("posterid"));
        setCatPlayId(e.target.getAttribute("posterid"));

    }

    return (
// {item?.images[0].url}
        <div className="row">
        <h1 className="row__h2">{items && title}</h1>

        <div className="row__posters">
            {(title==="New Releases" || title==="Featured Playlists") && items && items.map(item=>(   
                    <div className="row__poster" key={item?.id}>
                        <div className="inner_post">
                            <img src={item?.images[0].url} className="row__image" alt="..."/>
                            <h3>{item?.name}</h3>
                            {
                                item?.artists && item?.artists.map(artist=>(
                                    <span>{artist?.name}</span>
                                ))
                            }
                        </div>
                    </div>
                    
                    ))     
            }
        
            {/* For categories */}
            
            {title==="Categories" && items && items.map(item=>(   
                    <div className="row__poster" key={item?.id}>
                        <div className="inner_post">
                            <img src={item?.icons[0].url} className="row__image" posterid={item?.id} onClick={genCatPlaylist} alt="..."/>
                            <h3>{item?.name}</h3>
                        </div>
                    </div>
                    
                    ))     
            }


            {/* for the cats playlist */}
            {title==="Interests" && items && items.map(item=>(   
                    <div className="row__poster" key={item?.id}>
                        <div className="inner_post">
                            <img src={item?.images[0].url} className="row__image" alt="..."/>
                            <h3>{item?.name}</h3>
                            {
                                item?.artists && item?.artists.map(artist=>(
                                    <span>{artist?.name}</span>
                                ))
                            }
                        </div>
                    </div>
                    
                    ))     
            }


            {

            }

            </div>

        </div>
    )
}

export default connect(null, {setCatPlayId})(Row);
