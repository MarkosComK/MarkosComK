import styled from 'styled-components';

export const ProfileSection = styled.section`
	padding: 1rem;
	max-width: 1000px;
	margin: 0 auto;
`;

export const HeadingWrapper = styled.div`
	margin-bottom: 1rem;
	h2 {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.cream};
		a {
			color: ${({ theme }) => theme.colors.copper};
		}
	}
`;

export const Description = styled.p`
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.cream};
	strong {
		color: ${({ theme }) => theme.colors.copper};
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1rem;
	flex-wrap: wrap;
	a {
		background: ${({ theme }) => theme.colors.mediumGreen};
		color: ${({ theme }) => theme.colors.cream};
		padding: 0.25rem 0.5rem;
		font-size: 0.8rem;
	}
`;

export const FactsList = styled.div`
	display: grid;
	grid-template-columns: 1fr 400px;
	gap: 1rem;
	
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
	
	ul {
		list-style: none;
		li {
			margin-bottom: 0.5rem;
			color: ${({ theme }) => theme.colors.cream};
			strong {
				color: ${({ theme }) => theme.colors.copper};
			}
			a {
				color: ${({ theme }) => theme.colors.copper};
			}
		}
	}
`;

export const CodeBlock = styled.pre`
	background: ${({ theme }) => theme.colors.mediumGreen};
	padding: 1rem;
	color: ${({ theme }) => theme.colors.cream};
	font-size: 0.8rem;
	overflow-x: auto;
	margin: 1rem 0;
`;
