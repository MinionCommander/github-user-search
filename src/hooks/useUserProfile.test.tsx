import { renderHook, waitFor } from '@testing-library/react';
import { useUserProfile } from './useUserProfile';
import { getUserProfile } from '../services/api';
import { GitHubUserProfile } from '../types';

jest.mock('../services/api');

describe('useUserProfile Hook', () => {
  const mockProfile: GitHubUserProfile = {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url:
      'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'Monalisa Octocat',
    company: '@GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: undefined,
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z',
  };

  it('fetches the GitHub user profile successfully', async () => {
    (getUserProfile as jest.Mock).mockResolvedValueOnce(mockProfile);

    const { result } = renderHook(() => useUserProfile('octocat'));

    expect(result.current.profile).toBeNull();
    expect(result.current.error).toBe('');

    await waitFor(() => {
      return expect(result.current.profile).toEqual(mockProfile);
    });

    expect(result.current.error).toBe('');
  });

  it('handles error when GitHub user is not found', async () => {
    (getUserProfile as jest.Mock).mockRejectedValueOnce(
      new Error('User not found')
    );

    const { result } = renderHook(() => useUserProfile('invaliduser'));

    expect(result.current.profile).toBeNull();
    expect(result.current.error).toBe('');

    await waitFor(() => {
      return expect(result.current.error).toBe('User not found');
    });

    expect(result.current.profile).toBeNull();
  });
});
