import React, { useState, useEffect, useCallback, useMemo } from 'react';
import UserCardItem from '../Items/UserCardItem';
import './UserListSection.css';

const UserListSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Do not needed debounce, because we are filtering on the client side.
  const handleFilterChange = useCallback((e) => {
    setFilterQuery(e.target.value);
  }, []);

  const clearFilter = useCallback(() => {
    setFilterQuery('');
  }, []);

  const filteredUsers = useMemo(() => 
    users.filter(user => 
      user.name.toLowerCase().includes(filterQuery.toLowerCase())
    ),
    [users, filterQuery]
  );

  if (loading) {
    return (
      <div className="user-list-loading">
        <div className="loader"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-list-error">
        <h2>Error loading users</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="user-list-section">
      <h1>User Directory</h1>
      
      <div className="filter-container">
        <input
          type="text"
          className="filter-input"
          placeholder="Filter users by name..."
          value={filterQuery}
          onChange={handleFilterChange}
        />
        {filterQuery && (
          <button 
            className="clear-filter" 
            onClick={clearFilter}
            aria-label="Clear filter"
          >
            ×
          </button>
        )}
      </div>
      
      <div className="user-list-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <UserCardItem key={user.id} user={user} />
          ))
        ) : (
          <p className="no-users">
            {users.length > 0 
              ? `No users found matching "${filterQuery}"` 
              : "No users found"}
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(UserListSection);
