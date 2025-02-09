import React from 'react';
import * as H from "./styles.tsx"

const Home = () => {
	return (
	<H.ProfileSection>
		<H.HeadingWrapper>
			<h2>Hey 👋, I'm <a target="_blank" href="https://markos.click">Markos</a></h2>
		</H.HeadingWrapper>

		<H.Description>
			I'm currently a clerk at <strong>Casa Guedes</strong> and formerly a <strong>waiter</strong>. 
			Based in Porto, I am working on some side projects, learning a couple new things, and trying 
			to conquer the world as Kratos against his enemies.
		</H.Description>

		<H.SocialLinks>
			<a href="https://markos.click">Website</a>
			<a href="https://www.linkedin.com/in/markos-soares/">LinkedIn</a>
			<a href="https://instagram.com/markoscomk">Instagram</a>
		</H.SocialLinks>

		<p style={{ color: '#DCD7C9', marginBottom: '2rem' }}>💧 Remember to drink water 💧</p>

		<H.FactsList>
			<div>
				<h2 style={{ color: '#DCD7C9', marginBottom: '1.5rem' }}>⚡️ A Few Quick Facts</h2>
				<ul>
					<li>🔭 I'm currently working on <a href="https://github.com/MarkosComK/42-Libft">Libft</a>.</li>
					<li>🧐 Learning about <strong>Linux</strong>, <strong>C</strong>, and a bit of <strong>Shell</strong>.</li>
					<li>👨‍💻 Most of my projects are available on <a href="https://github.com/MarkosComK">Github</a>.</li>
					<li>💬 Ping me about <strong>C, Shell, React, JS, art, and any tech stuff</strong>.</li>
					<li>📙 Check out my <a href="#">resume (coming)</a>.</li>
				</ul>
			</div>
			<div>
			<img 
				src="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif" 
				alt="Coding gif"
				style={{ width: '100%', borderRadius: '4px' }}
			/>
			</div>
		</H.FactsList>

		<H.CodeBlock>
			{`const Markos = {
			code: ["C, Javascript", "Typescript", "Python"],
			askMeAbout: ["web dev", "tech", "app dev", "photography", "art"],
			technologies: {
			frontEnd: {
			technologies: ["C", "Shell", "HTML", "CSS", "SASS", "JS", "React", "Typescript", "Redux"],
			},
			misc: ["styled-components", "tailwind", "GIT"]
			},
			architecture: ["Progressive web applications", "Single page applications"],
			currentFocus: "Piscine 42School",
			funFact: "I love drawn people and play instruments"
			};`}
		</H.CodeBlock>

		<div style={{ marginTop: '2rem' }}>
			<img 
				src="https://skillicons.dev/icons?i=c,js,ts,md,bash,vim,vscode,html,css,react,github,git" 
				alt="My Skills"
				style={{ maxWidth: '100%' }}
			/>
		</div>
	</H.ProfileSection>
	);
};

export default Home;
