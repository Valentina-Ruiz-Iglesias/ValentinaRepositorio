import React from 'react';

const Avatar = ({ src, alt }) => (
    <div className="profile-picture">
        <img src={src} alt={alt} className="profile-img" />
    </div>
);

export default Avatar;
