import React from 'react';

const TABS = [
    { id: 'feed', label: 'Feed' },
    { id: 'about', label: 'Sobre mi' },
    { id: 'content', label: 'Proyectos' },
    { id: 'guestbook', label: 'Contactame' },
];

const ProfileTabs = ({ activeTab, onChange }) => {
    return (
        <nav className="profile-nav">
            {TABS.map((tab) => (
                <button
                    key={tab.id}
                    type="button"
                    className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    );
};

export default ProfileTabs;
