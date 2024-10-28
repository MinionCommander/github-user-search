import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import App from './App';
import { getUserProfile } from './services/api';
import { GitHubUserProfile } from './types';

jest.mock('./services/api');

describe('App Component', () => {
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the App with the default user profile', async () => {
    (getUserProfile as jest.Mock).mockResolvedValueOnce(mockProfile);

    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.getByText('Monalisa Octocat')).toBeInTheDocument();
    });
  });

  it('allows searching for another user and displays the profile', async () => {
    const mockNewProfile: GitHubUserProfile = {
      ...mockProfile,
      login: 'newuser',
      name: 'New User',
      bio: 'New user bio',
    };

    (getUserProfile as jest.Mock).mockResolvedValueOnce(mockNewProfile);

    await act(async () => {
      render(<App />);
    });

    const searchInput = screen.getByPlaceholderText(
      'Search GitHub username...'
    );
    fireEvent.change(searchInput, { target: { value: 'newuser' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(screen.getByText('New User')).toBeInTheDocument();
      expect(screen.getByText('New user bio')).toBeInTheDocument();
    });
  });

  it('displays an error when the user is not found', async () => {
    (getUserProfile as jest.Mock).mockRejectedValueOnce(
      new Error('No user found')
    );

    await act(async () => {
      render(<App />);
    });

    const searchInput = screen.getByPlaceholderText(
      'Search GitHub username...'
    );
    fireEvent.change(searchInput, { target: { value: 'invaliduser' } });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(screen.getByText('No results')).toBeInTheDocument();
    });
  });

  it('toggles between dark and light themes', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('LIGHT')).toBeInTheDocument();

    fireEvent.click(screen.getByText('LIGHT'));

    await waitFor(() => {
      expect(screen.getByText('DARK')).toBeInTheDocument();
    });
  });
});
