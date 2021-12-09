import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../Assets/header.jpg';

const WelcomeMsg = styled.h1`
	color: white;
	font-family: 'Bebas Neue', cursive;
	word-spacing: 3px;
	font-size: 40px;
`;

const HeaderContainer = styled.section`
	background-image: url(${backgroundImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

export const Header = () => {
	return (
		<HeaderContainer>
			<WelcomeMsg> Welcome Back, what do you wanna watch? </WelcomeMsg>
		</HeaderContainer>
	);
};
