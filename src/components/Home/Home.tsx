import React from 'react';
import CodeComponent from "./CodeComponent"
import * as H from "./styles.tsx"

const Home = () => {

const code = `
#include <unistd.h>

int	main() {
	write(1, "Hello, World!\\n", 13);
	return (0);
}`;

	return (
		<H.Section>
			<H.Heading>
				<span># </span>Hey 👋, I'm Markos
			</H.Heading>
			<H.Code>
				<CodeComponent code={code} />
			</H.Code>
			<H.Description>
				I'm currently a clerk at <span>Casa Guedes</span> and formerly a <span>waiter</span>. 
				Based in Porto, I am working on some side projects, learning a couple new things, and trying 
				to conquer the world as Kratos against his enemies.
			</H.Description>
			<H.SocialLinks>
				<a href="https://markos.click">Website</a>
				<a href="https://www.linkedin.com/in/markos-soares/">LinkedIn</a>
				<a href="https://instagram.com/markoscomk">Instagram</a>
			</H.SocialLinks>
		</H.Section>
	);
};

export default Home;
