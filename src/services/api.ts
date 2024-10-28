import axios from 'axios';
import { GitHubUserProfile } from '../types';

export const getUserProfile = async (
  username: string
): Promise<GitHubUserProfile> => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('User not found');
  }
};
