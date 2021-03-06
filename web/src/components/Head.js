import React from "react";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { fab } from "@fortawesome/free-brands-svg-icons";
import {faSearch, faArrowCircleLeft, faArrowsAltH} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faArrowCircleLeft, faArrowsAltH);

const IndexPage = () => {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
    )
}

export default IndexPage;