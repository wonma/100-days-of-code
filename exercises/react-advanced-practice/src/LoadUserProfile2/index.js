import React, { useState, useEffect } from 'react';

function LoadUserProfile2() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Hello User</h1>
    </div>
  ) : (
    <p>pending...</p>
  );
}

export default LoadUserProfile2;
