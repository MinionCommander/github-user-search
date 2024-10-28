import { useState, useEffect } from 'react';

import { getUserProfile } from '../services/api';
import { GitHubUserProfile } from '../types';

export const useUserProfile = (username: string) => {
  const [profile, setProfile] = useState<GitHubUserProfile | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(username);
        setProfile(data);
        setError('');
      } catch (err) {
        console.log(err);
        setError('User not found');
      }
    };
    fetchProfile();
  }, [username]);

  return { profile, error };
};
