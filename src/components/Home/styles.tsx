// styles.ts
import styled from 'styled-components';

export const Section= styled.section`
	padding: 1rem;
	max-width: 1000px;
	font-family: 'Source Code Pro', monospace;
	font-size: 0.9rem;
	line-height: 1.5;
`;

export const Heading = styled.h2`
	margin: 0;
	padding: 0;
	font-size: 1.3rem;
	.comment { color: #666; }
	.keyword { color: ${({ theme }) => theme.colors.copper}; }
	.string { color: ${({ theme }) => theme.colors.cream}; }
	& span {
		color: ${({theme}) => theme.colors.iron};
	}
`;

export const Code = styled.div`
	color: ${({ theme }) => theme.colors.cream};
`;

export const Prompt = styled.span`
	color: ${({ theme }) => theme.colors.copper};
`;

export const Description = styled.p`
	font-size: 1.3rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.cream};
	span {
		background-color: ${({ theme }) => theme.colors.textCopper};
		padding: 0 4px;
	}
`;

export const SocialLinks = styled.div`
	font-size: 1.3rem;
	margin-bottom: 1rem;
	a {
		color: ${({ theme }) => theme.colors.cream};
		text-decoration: underline;
		text-decoration-color: ${({ theme }) => theme.colors.copper};
		margin-right: 1rem;
	}
`;

