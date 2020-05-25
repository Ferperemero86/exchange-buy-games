import Link from "next/link";
import React, {useEffect, useContext, useRef} from "react";
import {useRouter} from "next/router";

import disableScroll from 'disable-scroll';

import {ExploreGamesContext} from "../providers/ExploreGamesProvider";


const Cover = ({cover}) => {
    if(cover) {
        return <img src={`${cover}`} />
    } else {
        return <p>Image no available</p>
    }
};

const Game = ({game}) => {
    const {exploreGames} = useContext(ExploreGamesContext);
    const {page, platform} = exploreGames;
    const gameId = game.id;
    const summary = game.summary;
    const longName = game.name; 
    let nameString;
    let cover;
    const router = useRouter();
    
    if (game.name) {
        nameString = game.name;
    } else {
        nameString = "No Title";
    }

    let name = nameString;

    if(nameString.length > 19) {
        const shorterName = nameString.substring(0,19);
        name = `${shorterName} ...`;
    }

    if (game.cover) {
        const bigImage = game.cover.url.replace("t_thumb", "t_cover_big");
        cover = bigImage;
    } else {
        cover = "";
    }

    const goToDetails = () => {
        router.push({pathname: "/explore/details", 
        query: {id: gameId, 
                title: longName, 
                platform, 
                cover, 
                summary,
                page } })
    }


    return (
        <div className="game">
            <p className="title">{name}</p>
            <div className="cover">
                 <Cover cover={cover} />
            </div>
            <button className="button" onClick={goToDetails}>Details</button>
        </div>
    )
    
}
const Games = () => {
    const {exploreGames} = useContext(ExploreGamesContext);
    let index = parseInt(exploreGames.page);

    useEffect(() => {
        disableScroll.off();
    })

    if (index > 0) {
        index--;
    }

    if (exploreGames.games[index]) {
        return exploreGames.games[index].map(game=> {
            return <Game game={game} key={game.id}/>
        })
    } 
       
    return null;
    
};

const Pagination = () => {
    const {exploreGames} = useContext(ExploreGamesContext);
    const listRef = useRef(null);
    let indexNav = 0;

    const changeStyle = (e) => {
        const children = listRef.current.children;

        disableScroll.on();

        Object.keys(children).map(val => {
            const classExists = children[val].classList.contains("selected");
            
            if(classExists) {
                children[val].classList.remove("selected");
            }
        });

        e.currentTarget.classList.add("selected");
        
    };

    const setFirstPageStyle = () => {
        let selected = "";

        if (exploreGames.page === indexNav) {
            selected = "selected";
        } else {
            selected = "";
        }

        return selected;
    };

    if(exploreGames.games.length > 0) {

        return(  
            <div className="pagination">
                <ul className="pagination-list" ref={listRef}>
                    {
                        exploreGames.games.map(() => {
                            indexNav++;
                           
                            const selected = setFirstPageStyle();

                            return (
                                <Link 
                                    href={{ pathname: `/explore/${exploreGames.platform}`, query: {page: indexNav} }} 
                                    key={indexNav} >
                                    <li className={`pagination-list-element ${selected}`}
                                        data-page={indexNav}
                                        onClick={changeStyle}>{indexNav}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        )
    } 
        
    return null;
    
};

const organizeGames = (games) => {
    let gamesIndex = 0;
    let paginationGames = [];

    Object.keys(games).map((val) => {    
        games[val].map((game) => {
            if(!paginationGames[gamesIndex]) {
                paginationGames[gamesIndex] = [];
            }
            if( paginationGames[gamesIndex].length < 50) {
                paginationGames[gamesIndex].push(game);
            } else {
                gamesIndex++;
                paginationGames[gamesIndex] = [];
                paginationGames[gamesIndex].push(game);
            }
        });
    });
    return paginationGames;
};

const GamesDisplay = () => {
    const {exploreGames, dispatchExploreGames} = useContext(ExploreGamesContext);
    const result = organizeGames(exploreGames.games);

    useEffect(() => {
        dispatchExploreGames({type: "UPDATE_GAMES", payload: result});
    }, [exploreGames.games.length]);

    return (
        <div id="explore-games">
            <Games />
            <Pagination />         
        </div>
    )
};


export default GamesDisplay;




