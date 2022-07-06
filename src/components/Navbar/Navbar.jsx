import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
			<div className="container">
				<Link className="navbar-brand fs-2 fw-bolder" to="home">
					News
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item mx-3">
							<Link
								className="nav-link active"
								aria-current="page"
								to="home"
							>
								Home
							</Link>
						</li>
						<li className="nav-item mx-3">
							<Link
								className="nav-link active"
								aria-current="page"
								to="about"
							>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
