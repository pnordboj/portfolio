import React from 'react';
import { Octokit } from 'octokit';

const Github = () => {
  const octokit = new Octokit({
    auth: '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',
  });

  const getRepos = async () => {
    try {
      const response = await octokit.request('GET /users/{username}/repos', {
        username: 'pnordboj',
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={getRepos}>Get Repos</button>
    </div>
  );
};

export default Github;
