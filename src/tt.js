// do nothing
// Testing if the assignee function works properly when created a pull request
console.log('Welcome to Musify');


      // spotify.getPlaylist("0vZcMiYx5QFnwB3Ppw55Eh").then(response=>{
      //         console.log(response);
      //           dispatch({
      //             type:"SET_DISCOVER_WEEKLY",
      //             discover_weekly:response
      //           });
      //         });


      useEffect(()=>{
        // exporting from spotify.js
        const hashObj = getTokenFromUrl();
        window.location.hash = "";//clearing the url
    
        const _token = hashObj.access_token;
    
        if(_token){
    
          dispatch({
            type:'SET_TOKEN',
            token:_token
          })
    
          //SWA
          spotify.setAccessToken(_token);
    
          // returns a promise
          spotify.getMe().then(user=>{
            console.log("Person", user);
    
            // pushing it in the data layer
            dispatch({
              type: 'SET_USER',
              user: user
            });
    
          });
    
          spotify.getUserPlaylists().then((playlists)=>{
            // dispatching the user playlist in the data layer
    
            dispatch({
              type:"SET_PLAYLISTS",
              playlists:playlists
            })
          });
    
        }
    
      }, [token, dispatch]);
    


      // doing normally without context & reducer
      token ? (
        // Player
        <Player spotify={spotify}/>
      ) : (
        // Login
        <Login/>
      )