import React, { useEffect, useState } from 'react';
import './Styles.css';

function LoadUserProfile() {
  const [user, setUser] = useState({
    profile: [],
    reload: 0
  });

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => setUser({ ...user, profile: data }));
  }, [user.reload]);

  return (
    <div className='container'>
      {Object.keys(user.profile).length > 0 ? (
        <>
          <p>First Name: {user.profile.results[0].name.first}</p>
          <p>Last Name: {user.profile.results[0].name.last}</p>
          <img
            src={user.profile.results[0].picture.large}
            alt={user.profile.results[0].name.first}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => setUser({ ...user, reload: user.reload + 1 })}>
        Load another user
      </button>
    </div>
  );
}

export default LoadUserProfile;
