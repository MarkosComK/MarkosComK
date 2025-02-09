import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin: 0;
`;

export const Bar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: clamp(50%, 800px, 100%);
	height: 80px;
	padding: 0;
	margin: 0 8px;

	& div {
		font-size: 1.2rem;
		margin-left: 4px;
		background-color: ${({theme}) => theme.colors.iron};
		& span {
			color: ${({theme}) => theme.colors.mediumGreen};
		}
	}
	& ul {
		display: flex;
		list-style-type: none;
		& li {
			margin-right: 4px;
			& span {
				color: ${({theme}) => theme.colors.iron};
			}
		}
	}
`;
