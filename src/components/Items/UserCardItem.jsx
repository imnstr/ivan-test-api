import React from 'react';
import './UserCardItem.css';

const UserCardItem = ({ user }) => {
  if (!user) {
    return <div className="user-card">No user data available</div>;
  }

  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-avatar">
          {user.name.charAt(0)}
        </div>
        <div className="user-info">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-username">@{user.username}</p>
        </div>
      </div>
      
      <div className="user-details">
        <div className="user-section">
          <h4 className="section-title">Contact</h4>
          <div className="user-detail">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="user-detail">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{user.phone}</span>
          </div>
          <div className="user-detail">
            <span className="detail-label">Website:</span>
            <span className="detail-value">{user.website}</span>
          </div>
        </div>
        
        {user.address && (
          <div className="user-section">
            <h4 className="section-title">Address</h4>
            <div className="user-detail">
              <span className="detail-value">
                {user.address.street}, {user.address.suite}
              </span>
            </div>
            <div className="user-detail">
              <span className="detail-value">
                {user.address.city}, {user.address.zipcode}
              </span>
            </div>
            {user.address.geo && (
              <div className="user-detail">
                <span className="detail-label">Coordinates:</span>
                <span className="detail-value">
                  {user.address.geo.lat}, {user.address.geo.lng}
                </span>
              </div>
            )}
          </div>
        )}
        
        {user.company && (
          <div className="user-section">
            <h4 className="section-title">Company</h4>
            <div className="user-detail">
              <span className="detail-value company-name">{user.company.name}</span>
            </div>
            <div className="user-detail">
              <span className="detail-value catchphrase">"{user.company.catchPhrase}"</span>
            </div>
            <div className="user-detail">
              <span className="detail-value">{user.company.bs}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCardItem;
