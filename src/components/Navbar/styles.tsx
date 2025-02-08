import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 50px;
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
	height: 50px;
	padding: 0;
	margin: 0 8px;

	& div {
		margin-left: 4px;
		background-color: grey;
	}
	& ul {
		display: flex;
		list-style-type: none;
		& li {
			margin-right: 4px;
			& span {
				color: grey;
			}
		}
	}
`;
