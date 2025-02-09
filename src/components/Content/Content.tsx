"use client";

import * as Sec from "./styles.tsx"
import Home from "../Home/Home.tsx"

const Content = () => {
	return (
		<Sec.Wrapper>
			<Sec.tion>
				<div>
				<Home />
				</div>
				<Sec.Profile>
					profile
				</Sec.Profile>
			</Sec.tion>
		</Sec.Wrapper>
	);
};

export default Content;
