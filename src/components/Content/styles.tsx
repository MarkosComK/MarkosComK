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
	grid-template-columns: 4fr 1fr;  /* Splits into 4/5 and 1/5 */
	gap: 20px;
	width: clamp(50%, 800px, 100%);
	height: 100svh;
	padding: 0;
	margin: 0 8px;
	& div:first-of-type {
		overflow-y: auto;
		height: 100%;
	}
`;

export const Profile = styled.div`
	align-self: start;
`;
