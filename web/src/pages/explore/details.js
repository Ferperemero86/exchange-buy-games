import React, { useContext, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import axiosModule from "../../utils/APIcall";
import { StoreContext } from "../../utils/store";

import SuccessMessage from "../../components/messages/Success";

const Details = ({ name, platform }) => {
    const { gameDetails, setGameDetails } = useContext(StoreContext);
     const { messageSuccess, setMessageSuccess } = useContext(StoreContext);
    const dataContent = `fields name, summary, cover.url ; where name="${name}"; limit 1;`;

    useEffect(() => {
        if(SuccessMessage !== "") {
            setMessageSuccess(false);
        }

        axiosModule.getPostCall(`/api/games/details`, "POST", dataContent)
            .then(response => {
                setGameDetails(response.data.gameDetails);
            })
            .catch(err => {
                console.error(err);
            });
    }, [gameDetails.length]);

    const addToList = (e) => {
        gameDetails[0].platform = platform;

        axios({
            url: "/api/addgametolist",
            method: "POST",
            data: { gameDetails }
        })
        .then(result => {
            setMessageSuccess("Game added to the list");

            const timer = setTimeout(() => {
                setMessageSuccess(false);
            }, 3000);
            return () => clearTimeout(timer);
        })
    }

    return gameDetails.map(game => {
        const gameCoverString = game.cover.url;
        const coverURL = gameCoverString.replace("t_thumb", "t_logo_med");

        return (
            <div className="game-details" key={game.id}>
                <div className="header">
                    <SuccessMessage message={messageSuccess} />
                    <h2 className="title">{game.name}</h2>
                    <FontAwesomeIcon icon={faArrowCircleLeft} className="left-arrow" />
                    <Link href={`/explore/${platform}`}>
                        <span className="header-link link">Back To Games</span>
                    </Link>
                </div>
                <img src={`${coverURL}`} className="cover" />
                <div className="links">
                    <ul>
                        <li
                            className="link"
                            onClick={addToList}>Add to list</li>
                        <li className="link">Find a seller</li>
                    </ul>
                </div>
                <p className="summary">{game.summary}</p>
            </div>
        )
    })
};

Details.getInitialProps = ({ query }) => {
    return {
        name: query.name,
        platform: query.platform
    }
}

export default Details;
