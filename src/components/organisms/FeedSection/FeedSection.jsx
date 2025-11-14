import React from 'react';

const FEED_ITEMS = [
    {
        date: 'Octubre 2025',
        badge: 'Certificacion obtenida!',
        text: 'Completé mi curso de Ethical Hacking de Certiprof!',
    },
    {
        date: 'Septiembre 2025',
        badge: 'Proyecto avanzado',
        text: 'Primera version de PocketCardDB terminada!',
    },
    {
        date: 'Enero 2025',
        badge: 'Certificacion obtenida!',
        text: 'Completé mi curso de introduccion a la cibeseguridad!',
    },
];

const FeedSection = () => (
    <div className="section">
        <h2>Mi Actividad Reciente</h2>

        <div className="feed-timeline">
            {FEED_ITEMS.map((item) => (
                <div className="feed-item" key={item.date}>
                    <div className="feed-header">
                        <span className="feed-date">{item.date}</span>
                        <span className="feed-badge">{item.badge}</span>
                    </div>
                    <p className="feed-content">{item.text}</p>
                </div>
            ))}
        </div>
    </div>
);

export default FeedSection;
