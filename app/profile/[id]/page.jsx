'use client';

import { useEffect, useState } from 'react';

import Profile from '@components/profile';
import { useSearchParams } from 'next/navigation';

const MyProfile = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/users/${userName}`);
      const data = await res.json();
      setUser(data);
    };
    if (userName) {
      fetchUser();
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${user._id}/posts`);
      const data = await res.json();
      setPosts(data);
    };

    if (user?._id) {
      fetchPosts();
    }
  }, [user]);

  return (
    <Profile
      name={`${user.username}'s`}
      desc={`Welcome to ${user.username}'s profile page`}
      data={posts}
    />
  );
};

export default MyProfile;
