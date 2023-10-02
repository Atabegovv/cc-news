import React from "react";
import { categoryIds } from "../utils.js";
import Navigation from "../Navigation/Navigation.js";
import Articles from "../Articles/Articles.js";
import "./App.css";


const App = () => {
	const [category, setCategory] = React.useState('index');
	const [articles, setArticles] = React.useState({items: [], categories: [], sources: []});

	const onNavClick = (e) => {
		e.preventDefault();
		setCategory(e.currentTarget.dataset.href)
	}

	React.useEffect(() => {
		fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + (categoryIds[category] || ''))
		.then(response => response.json())
		.then((response) => {
			setArticles(response);
		})
	}, [category])

	return (
		<React.Fragment>
			<header className="header">
				<div className="container">
					<Navigation
						onNavClick={onNavClick}
						currentCategory={category}
					/>
				</div>
			</header>

			<Articles
				articles={articles}
			/>


			<footer className="footer">
				<div className="container">
					<Navigation
						className={"footer__nav"}
						onNavClick={onNavClick}
						currentCategory={category}
					/>
					<div className="footer__col">
						<a href="https://vk.com" className="footer__link" target="_blank">Атабегов А</a>
						<p className="footer__copyright">© 2023</p>
					</div>
				</div>
			</footer>
		</React.Fragment>
	)
};

export default App;