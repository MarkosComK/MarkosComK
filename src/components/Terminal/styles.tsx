import styled from "styled-components";

interface Props {
	$display: boolean;
}

export const Wrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items:center;
	width: 100%;
	bottom: 0;
`;

export const resp = styled.div`
	height: 100px;
	width: clamp(50%, 800px, 100%);
`;

export const inal = styled.div`
	position: relative;
	border-radius: 8px 8px 0 0;
	border: 1px solid ${({ theme }) => theme.colors.iron};
	overflow-y: ${({ $display }) => $display ? 'auto' : 'hidden'};
	height: ${({ $display }) => $display ? '400px' : '0px'};
	overflow-x: hidden;
	width: clamp(50%, 500px, 400px);
	width: 500px;
	padding: 1rem;
	background-color: ${({theme}) => theme.colors.background};
	bottom: ${({ $display }) => $display ? '300px' : '-64px'};
	transition: height 0.3s ease-in-out;
`;

export const Header = styled.header`
	text-align: center;
	border: 1px solid ${({ theme }) => theme.colors.iron};
	width: clamp(200px, 110%, 504px);
	position: relative;
	top: -18px;
	left: -18px;
	background-color: grey;
	border-radius: 12px 12px 0 0;
	cursor: pointer;
`;

export const Output = styled.div`
	height: calc(100% - 60px);
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column-reverse;
`;

export const HistoryContainer = styled.div`
	display: flex;
	flex-direction: column;

	& div {
		white-space: pre-wrap;
		word-wrap: break-word;
	}
`;

export const Input = styled.div`
	position: absolute;
	display: flex;
	display: ${({ $display }) => $display ? 'flex' : 'none'};
	bottom: 12px;
	width: calc(100% - 18px);
	align-items: center;
`;

export const Prompt = styled.span`
	color: ${({ theme }) => theme.colors.prompt};
	margin-right: 0.5rem;
	margin-top: 4px;
`;

export const InputField = styled.input`
	background: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.text};
	font-family: inherit;
	font-size: inherit;
	outline: none;
	width: 100%;
`;
