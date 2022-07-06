import React from "react";
import './article.css'

export default function Article(props) {
	const { title, description, urlToImage, publishedAt, content, url } = props.item;

	return (
		<>
			<div className="item px-3 col-md-4">
                <a href={url} target="_blank" rel="noreferrer">
				<article className="text-center bg-dark text-white overflow-auto">
					<header className="p-4">
						<h3>{title}</h3>
					</header>
					<figure className="mb-3">
						<img src={urlToImage} alt={title} className="w-100" />
						<figcaption>{description}</figcaption>
					</figure>
					<p className="p-4">{content}</p>
					<time className="p-4" dateTime={publishedAt}>
						{publishedAt}
					</time>
				</article>
                </a>
			</div>
		</>
	);
}
