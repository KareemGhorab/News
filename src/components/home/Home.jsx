import React from "react";
import { useState } from "react";

export default function Home() {

    const [articles, setArticles] = useState([]);

    return (
        <>
            <header className="mt-4">
                <h1 className="text-center">Latest articles</h1>
            </header>

            <div className="container">
                <div className="row">

                </div>
            </div>
        </>
    );
}
