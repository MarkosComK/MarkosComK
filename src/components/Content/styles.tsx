import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin: 0;
`;

export const tion = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	display: grid;
	grid-template-columns: 4fr 1fr;
	gap: 20px;
	width: clamp(50%, 800px, 100%);
	height: 624px;
	padding: 0;
	margin: 0 8px;
	font-size: 1.2rem;
	& div:first-of-type {
		padding: 12px 16px;
		background-color: ${({theme}) => theme.colors.mediumGreen};
		overflow-y: auto;
		height: 100%;
	}
	& div{
		padding: 12px 16px;
	}
`;

export const Profile = styled.div`
	align-self: start;
`;
