import React from 'react';
import Avatar from '../../atoms/Avatar/Avatar';

const ProfileHeader = ({ fotoPerfil, isDarkMode, onToggleTheme }) => {
    return (
        <header className="profile-header">
            <div className="profile-info">
                <Avatar src={fotoPerfil} alt="Valentina Ruiz Iglesias" />

                <div className="profile-text">
                    <h1 className="profile-name">Valentina Ruiz Iglesias</h1>
                    <p className="profile-tagline">"Un dia a la vez"</p>
                    <p className="profile-bio">
                        Estudiante de Ingeniería en Informática · Ciberseguridad
                    </p>
                </div>
            </div>

            {/* Botón de toggle del tema */}
            <button
                className="theme-toggle"
                onClick={onToggleTheme}
                type="button"
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>
        </header>
    );
};

export default ProfileHeader;
