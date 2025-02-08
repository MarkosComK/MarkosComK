import styled from "styled-components";

interface Props {
	$display: boolean;
}

export const Header = styled.header`
	text-align: center;
	border: 1px solid green;
	width: clamp(200px, 110%, 504px);
	position: relative;
	top: -18px;
	left: -18px;
	background-color: grey;
	border-radius: 12px 12px 0 0;
	cursor: pointer;
`;

export const Wrapper = styled.div`
	border-radius: 12px 12px 0 0;
	border: 1px solid green;
	overflow-y: auto;
	overflow-y: ${({ $display }) => $display ? 'auto' : 'hidden'};
	overflow-x: hidden;
	position: absolute;
	width: clamp(200px, 100%, 500px);
	height: ${({ $display }) => $display ? '400px' : '0px'};
	transition: height 0.3s ease-in-out;
	margin: 0 auto;
	padding: 1rem;
	bottom: 12px;
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
