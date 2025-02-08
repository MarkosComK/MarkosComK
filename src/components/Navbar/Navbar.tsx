"use client";

import * as Nav from "./styles.tsx"

const Navbar = () => {
	return (
		<Nav.Wrapper>
			<Nav.Bar>
				<div>
					[Markos@comk] $
				</div>
				<ul>
					<li>
						<span>./</span>home
					</li>
					<li>
						<span>./</span>about
					</li>
				</ul>
			</Nav.Bar>
		</Nav.Wrapper>
	);
};

export default Navbar;
