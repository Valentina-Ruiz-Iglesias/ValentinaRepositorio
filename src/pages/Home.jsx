import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import fotoPerfil from '../assets/imagenes/1000157373.jpg';

import MainLayout from '../components/templates/MainLayout/MainLayout';
import ProfileHeader from '../components/organisms/ProfileHeader/ProfileHeader';
import ProfileTabs from '../components/molecules/ProfileTabs/ProfileTabs';
import FeedSection from '../components/organisms/FeedSection/FeedSection';
import AboutSection from '../components/organisms/AboutSection/AboutSection';
import ProjectsSection from '../components/organisms/ProjectsSection/ProjectsSection';
import GuestbookSection from '../components/organisms/GuestbookSection/GuestbookSection';

const Home = () => {
    const [activeSection, setActiveSection] = useState('feed');
    const [isDarkMode, setIsDarkMode] = useState(true); // Estado para el tema

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    // Sincronizar el tema con el <body> para que toda la página cambie
    useEffect(() => {
        const body = document.body;
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
    }, [isDarkMode]);

    return (
        <MainLayout>
            {/* Ya no le ponemos la clase dark/light aquí, eso va en <body> */}
            <div className="twitter-profile">
                <ProfileHeader
                    fotoPerfil={fotoPerfil}
                    isDarkMode={isDarkMode}
                    onToggleTheme={toggleTheme}
                />

                <ProfileTabs activeTab={activeSection} onChange={setActiveSection} />

                <main className="profile-content">
                    {activeSection === 'feed' && <FeedSection />}
                    {activeSection === 'about' && <AboutSection />}
                    {activeSection === 'content' && <ProjectsSection />}
                    {activeSection === 'guestbook' && <GuestbookSection />}
                </main>
            </div>
        </MainLayout>
    );
};

export default Home;
