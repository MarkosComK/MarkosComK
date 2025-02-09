import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import styled from 'styled-components';

const Wrapper = styled.section`
	background: ${({ theme }) => theme.colors.background}; !important
`;

const Pre = styled.pre`
	text-align: left;
	padding: 1rem;
	margin: 1rem 0;
	overflow: auto;
	background: ${({ theme }) => theme.colors.background};
	border-radius: 4px;

	& .token-line {
		background: ${({ theme }) => theme.colors.background};
		line-height: 1.5;
		height: 1.5em;
		z-index: 100;
	}
`;

const CodeComponent = ({ code, language = 'c' }) => {
	return (
		<Wrapper>
			<Highlight
				theme={themes.vsDark}
				code={code.trim()}
				language={language}
			>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<Pre className={className}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
					</Pre>
				)}
			</Highlight>
		</Wrapper>
	);
};

export default CodeComponent;
