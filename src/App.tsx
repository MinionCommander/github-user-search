import React, { useState, useEffect } from 'react';

import UserProfile from './components/UserProfile';
import SearchBar from './components/SearchBar';
import { getUserProfile } from './services/api';
import { GitHubUserProfile } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [profile, setProfile] = useState<GitHubUserProfile | null>({
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
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleSearch('octocat');
  }, []);

  const handleSearch = async (username: string) => {
    if (username.trim()) {
      try {
        const data = await getUserProfile(username.trim());
        setProfile(data);
        setError(null);
      } catch (err) {
        setProfile(null);
        setError('No user found');
      }
    } else {
      setError('Please enter a valid username');
    }
  };

  return (
    <div
      className={`min-h-screen pt-16 font-mono ${theme === 'dark' ? 'bg-darkBlue' : 'bg-lightBlue'} text-white`}
    >
      <header className="flex justify-between items-center py-6 max-w-4xl mx-auto px-4">
        <h1
          className={`text-h1 font-bold ${theme === 'dark' ? 'text-white' : 'text-darkBlue'}`}
        >
          devfinder
        </h1>
        <div
          className={`cursor-pointer flex items-center ${theme === 'dark' ? 'text-darkWhite hover:text-mediumGray' : 'text-mediumGray hover:text-darkGray'}`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <span className="text-h3 mr-4">
            {theme === 'light' ? 'DARK' : 'LIGHT'}
          </span>
          {theme === 'light' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 8 8"
            >
              <path
                fill="currentColor"
                d="M2.72 0A3.99 3.99 0 0 0 0 3.78c0 2.21 1.79 4 4 4c1.76 0 3.25-1.14 3.78-2.72c-.4.13-.83.22-1.28.22c-2.21 0-4-1.79-4-4c0-.45.08-.88.22-1.28"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  fill="currentColor"
                  fillOpacity="0"
                  strokeDasharray="36"
                  strokeDashoffset="36"
                  d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1s"
                    dur="0.5s"
                    values="0;1"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.5s"
                    values="36;0"
                  />
                </path>
                <path
                  strokeDasharray="2"
                  strokeDashoffset="2"
                  d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
                  opacity="0"
                >
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.6s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="2;0"
                  />
                  <set
                    fill="freeze"
                    attributeName="opacity"
                    begin="0.6s"
                    to="1"
                  />
                </path>
                <path
                  strokeDasharray="2"
                  strokeDashoffset="2"
                  d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
                  opacity="0"
                >
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.8s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.8s"
                    dur="0.2s"
                    values="2;0"
                  />
                  <set
                    fill="freeze"
                    attributeName="opacity"
                    begin="0.8s"
                    to="1"
                  />
                </path>
              </g>
            </svg>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4">
        <SearchBar
          onSearch={handleSearch}
          theme={theme}
          error={error ? true : false}
        />

        {profile ? (
          <UserProfile profile={profile} theme={theme} />
        ) : (
          !error && <p>No user found</p>
        )}
      </div>
    </div>
  );
};

export default App;
