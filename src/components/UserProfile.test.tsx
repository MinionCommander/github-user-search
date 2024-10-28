import { render, screen } from '@testing-library/react';

import UserProfile from './UserProfile';
import { GitHubUserProfile } from '../types';

const mockProfile: GitHubUserProfile = {
  login: 'octocat',
  id: 1,
  node_id: 'MDQ6VXNlcjE=',
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
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

describe('UserProfile Component', () => {
  it('renders correctly with profile data', () => {
    render(<UserProfile profile={mockProfile} theme="dark" />);

    expect(screen.getByText('Monalisa Octocat')).toBeInTheDocument();
    expect(screen.getByText('@octocat')).toBeInTheDocument();
    expect(screen.getByText('There once was...')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('San Francisco');
    expect(screen.getByTestId('blog')).toHaveTextContent(
      'https://github.com/blog'
    );
    expect(screen.getByTestId('twitter')).toHaveTextContent('@monatheoctocat');
    expect(screen.getByTestId('company')).toHaveTextContent('@GitHub');
    expect(screen.getByText('Repos')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Followers')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('Following')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders "Not Available" for missing optional fields', () => {
    const profileWithoutOptionalFields = {
      ...mockProfile,
      location: undefined,
      twitter_username: undefined,
      blog: undefined,
      company: undefined,
    };

    render(
      <UserProfile profile={profileWithoutOptionalFields} theme="light" />
    );

    expect(screen.getByTestId('location')).toHaveTextContent('Not Available');
    expect(screen.getByTestId('twitter')).toHaveTextContent('Not Available');
    expect(screen.getByTestId('blog')).toHaveTextContent('Not Available');
    expect(screen.getByTestId('company')).toHaveTextContent('Not Available');
  });

  it('applies the correct theme classes for dark mode', () => {
    const { container } = render(
      <UserProfile profile={mockProfile} theme="dark" />
    );
    expect(container.firstChild).toHaveClass('bg-mediumBlue');
    expect(container.querySelector('.text-darkWhite')).toBeInTheDocument();
  });

  it('applies the correct theme classes for light mode', () => {
    const { container } = render(
      <UserProfile profile={mockProfile} theme="light" />
    );
    expect(container.firstChild).toHaveClass('bg-darkWhite');
    expect(container.querySelector('.text-darkBlue')).toBeInTheDocument();
  });
});
