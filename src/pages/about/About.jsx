import React, { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Octokit } from 'octokit';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [readme, setReadme] = useState('');

  const octokit = new Octokit({
    auth: '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',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await octokit.request('GET /users/{owner}/repos', {
          owner: 'pnordboj',
        });

        const repos = response.data;
        const filteredRepos = repos.filter((repo) => {
          return repo.name === 'pnordboj';
        });
        getRepoReadme(filteredRepos[0]);
        console.log(filteredRepos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRepoReadme = async (repo) => {
    const response = await octokit.request('GET /repos/{owner}/{repo}/readme', {
      owner: 'pnordboj',
      repo: repo.name,
    });

    const readme = response.data;
    const readmeContent = atob(readme.content);

    setReadme(readmeContent);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-center'>About</h1>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500'>
        {readme && <ReactMarkdown>{readme}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default About;
