import "./App.css";

import setID from "./IDSetter";

function Languages() {
	let languages = [
		{ id: "en", name: "English" },
		{ id: "fr", name: "Français" },
		{ id: "es", name: "Español" },
		{ id: "de", name: "Deutsch" },
		{ id: "nl", name: "Nederlands" },
		{ id: "nb", name: "Norsk" },
	];
	let selectedLanguage = 0;

	return (
		<>
			<h1 id="title">Language</h1>
			<ul>
				{languages.map((language, index) => (
					<li
						className={selectedLanguage === index ? "active" : undefined}
						id={language.id}
						key={language.id}
						onClick={() => setID("language", language.id)}
					>
						{language.name}
					</li>
				))}
			</ul>
		</>
	);
}

export default Languages;
