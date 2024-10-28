import React from 'react';

import { GitHubUserProfile } from '../types';

interface UserProfileProps {
  profile: GitHubUserProfile;
  theme: 'light' | 'dark';
}

const UserProfile: React.FC<UserProfileProps> = ({ profile, theme }) => {
  const joinDate = new Date(profile.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div
      className={`${theme === 'dark' ? 'bg-mediumBlue' : 'bg-darkWhite'} p-12 rounded-lg shadow-lg text-white`}
    >
      <div className="flex justify-between items-start mb-6">
        <img
          src={profile.avatar_url}
          alt={`${profile.login}'s avatar`}
          className="w-24 h-24 rounded-full"
        />
        <div className="flex-1 ml-8 ">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h2
                className={`${theme === 'dark' ? 'text-darkWhite' : 'text-darkBlue'} text-h2 font-bold`}
              >
                {profile.name ? profile.name : profile.login}
              </h2>
              <p className="text-primary text-h4 mt-1 mb-3">@{profile.login}</p>
              <p className="text-body text-gray-400">
                {profile.bio ? profile.bio : 'This profile has no bio'}
              </p>
            </div>
            <p className="text-h3 text-gray-300">Joined {joinDate}</p>
          </div>

          <div
            className={`grid grid-cols-3 ${theme === 'dark' ? 'bg-darkBlue' : 'bg-gray-300'} text-white p-4 rounded-lg`}
          >
            <div className="pl-4">
              <p
                className={`text-h4 ${theme === 'dark' ? 'text-gray-300' : 'text-mediumBlue'}`}
              >
                Repos
              </p>
              <p
                className={`font-bold text-h3 ${theme === 'dark' ? 'text-gray-300' : 'text-darkBlue'}`}
              >
                {profile.public_repos}
              </p>
            </div>
            <div className="pl-4">
              <p
                className={`text-h4 ${theme === 'dark' ? 'text-gray-300' : 'text-mediumBlue'}`}
              >
                Followers
              </p>
              <p
                className={`font-bold text-h3 ${theme === 'dark' ? 'text-gray-300' : 'text-darkBlue'}`}
              >
                {profile.followers}
              </p>
            </div>
            <div className="pl-4">
              <p
                className={`text-h4 ${theme === 'dark' ? 'text-gray-300' : 'text-mediumBlue'}`}
              >
                Following
              </p>
              <p
                className={`font-bold text-h3 ${theme === 'dark' ? 'text-gray-300' : 'text-darkBlue'}`}
              >
                {profile.following}
              </p>
            </div>
          </div>

          <div className="flex justify-start mt-6">
            <div className="mr-12">
              <p
                className={`flex justify-start items-center ${theme === 'dark' ? 'text-gray-300' : 'text-mediumBlue'} text-body mb-4`}
              >
                <span className="font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                    />
                  </svg>
                </span>
                <span className="ml-4" data-testid="location">
                  {profile.location ? profile.location : 'Not Available'}
                </span>
              </p>
              <p
                className={`flex justify-start items-center ${theme === 'dark' ? 'text-gray-300' : 'text-mediumBlue'} text-body mb-4`}
              >
                <span className="font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0L5.4 5.4C4 6.9 4 9.1 5.4 10.6c.1.1.3.2.4.3l1.5-1.5c-.1-.1-.3-.2-.4-.3c-.6-.6-.6-1.6 0-2.2l4.4-4.4c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2L12.2 6c.4.8.5 1.7.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1"
                    />
                    <path
                      fill="currentColor"
                      d="M10.2 5.1L8.7 6.6s.3.2.4.3c.6.6.6 1.6 0 2.2l-4.4 4.4c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2L3.8 10c-.4-.8-.1-1.3-.4-2.5L1.1 9.8c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1c-.2-.1-.4-.3-.4-.3"
                    />
                  </svg>
                </span>
                {profile.blog ? (
                  <a
                    href={profile.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 hover:underline"
                    data-testid="blog"
                  >
                    {profile.blog}
                  </a>
                ) : (
                  <span className="ml-4" data-testid="blog">
                    Not Available
                  </span>
                )}
              </p>
            </div>
            <div>
              <p className="flex justify-start items-center text-lightGray text-body mb-4">
                <span className="font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="M14.977 1.467a.5.5 0 0 0-.87-.301a2.56 2.56 0 0 1-1.226.763A3.44 3.44 0 0 0 10.526 1a3.54 3.54 0 0 0-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 0 0-.916-.048C.004 3.373-.157 5.407.604 7.139C1.27 8.656 2.61 9.864 4.51 10.665C3.647 11.276 2.194 12 .5 12a.5.5 0 0 0-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236c.193-.546.232-1.178.177-2.006"
                    />
                  </svg>
                </span>
                {profile.twitter_username ? (
                  <a
                    href={`https://twitter.com/${profile.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 hover:underline"
                    data-testid="twitter"
                  >
                    @{profile.twitter_username}
                  </a>
                ) : (
                  <span className="ml-4" data-testid="twitter">
                    Not Available
                  </span>
                )}
              </p>
              <p
                className={`flex justify-start items-center ${theme === 'dark' ? 'text-gray-300' : 'text-mediumBlue'} text-body mb-4`}
              >
                <span className="font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"
                    />
                  </svg>
                </span>
                <span className="ml-4" data-testid="company">
                  {profile.company ? profile.company : 'Not Available'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
