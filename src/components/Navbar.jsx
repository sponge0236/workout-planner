// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Brightness4 } from '@mui/icons-material';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-right: 16px;
`;

function Navbar({ toggleTheme }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <StyledLink to="/">Dashboard</StyledLink>
                <StyledLink to="/schedule">Schedule</StyledLink>
                <StyledLink to="/statistics">Statistics</StyledLink>
                <StyledLink to="/goals">Goals</StyledLink>
                <StyledLink to="/community">Memo</StyledLink>
                <StyledLink to="/nutrition">Nutrition</StyledLink>
                <StyledLink to="/tutorials">Tutorials</StyledLink>
                <IconButton color="inherit" onClick={toggleTheme}>
                    <Brightness4 />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
