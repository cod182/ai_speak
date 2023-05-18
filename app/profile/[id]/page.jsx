'use client';

import { useEffect, useState } from 'react';

import Profile from '@components/profile';

const MyProfile = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch(`/api/users/${session?.user.id}/posts`);
  //     const data = await res.json();
  //     setPosts(data);
  //   };
  //   if (session?.user.id) {
  //     fetchPosts();
  //   }
  // }, []);

  return (
    <Profile
      name="OTHER USER"
      desc={`Welcome to OTHER personalised profile page`}
      data={posts}
    />
  );
};

export default MyProfile;
