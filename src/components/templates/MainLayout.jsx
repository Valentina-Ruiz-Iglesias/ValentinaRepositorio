// src/components/templates/MainLayout/MainLayout.jsx
import React from 'react';
import Navigation from '../../molecules/Navigation/Navigation';

// Template principal: Navbar arriba, contenido abajo
const MainLayout = ({ children }) => (
    <>
        <Navigation />
        <div className="page-content">{children}</div>
    </>
);

export default MainLayout;
