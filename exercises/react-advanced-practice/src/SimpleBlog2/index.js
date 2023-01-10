import React from 'react';
import { UserProvider, useUser } from './userContext';

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello, <span>{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <LoggedInUser />
    </div>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.{' '}
      </p>
      <p>Written by: {user.name}</p>
    </div>
  );
};

function SimpleBlog2() {
  return (
    <UserProvider>
      <div>
        <Header />
        <Page />
      </div>
    </UserProvider>
  );
}

export default SimpleBlog2;
