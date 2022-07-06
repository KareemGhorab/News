import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios/dist/axios";
import Article from "../article/Article";
import { useRef } from "react";

export default function Home() {
	const [articles, setArticles] = useState([]);
	const [country, setCountry] = useState("eg");

	const getNews = async (country = "eg", category = "business") => {
		const { data } = await axios(
			`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=56c52ebff2364573b7d0226c65699423`
		);
		return data.articles;
	};

	const updateArticles = () => {
		getNews(country).then((articles) => {
			setArticles(articles);
		});
	};

	useEffect(() => {
		updateArticles();
	}, []);

	useEffect(() => {
		updateArticles();
	}, [country]);

	return (
		<>
			<header className="my-5">
				<h1 className="text-center">Latest articles</h1>
				<input
					onChange={(e) => setCountry(e.target.value)}
					className="form-control mx-auto"
					placeholder="Search by country"
					type="text"
				/>
			</header>

			{articles.length > 0 ? (
				<div className="container-fluid">
					<div className="row g-4">
						{articles.map((article) => (
							<Article item={article} />
						))}
					</div>
				</div>
			) : (
				<div className="container-fluid">
					<div className="row g-4">
						<div className="col-md-4">
							<div className="bg-dark text-white p-5 text-center">
								<i className="fa-solid fa-spinner fa-spin fa-5x"></i>
							</div>
						</div>
						<div className="col-md-4">
							<div className="bg-dark text-white p-5 text-center">
								<i className="fa-solid fa-spinner fa-spin fa-5x"></i>
							</div>
						</div>
						<div className="col-md-4">
							<div className="bg-dark text-white p-5 text-center">
								<i className="fa-solid fa-spinner fa-spin fa-5x"></i>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
