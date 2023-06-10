/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import { Octokit } from 'octokit';
import { Loader } from '../../components/Loader/Loader';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [netlify, setNetlify] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  const [allRepos, setAllRepos] = useState([]);

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
        setAllRepos(repos);
        const filteredRepos = repos.filter((repo) =>
          ['semester-project', 'js-framework-ca', 'Holidaze-project-exam-2'].includes(repo.name),
        );
        setRepos(filteredRepos);
        console.log(filteredRepos);
        getNetlify();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const getNetlify = () => {
    const baseUrl = 'https://api.netlify.com/api/v1/';
    fetch(`${baseUrl}sites`, {
      headers: {
        Authorization: 'Bearer OpUTthmECAHgnOL47AoIMR7HyxN-K2VT1-WdtIUUcgQ',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((site) =>
          ['patrick-project-exam-2', 'js-framework-ca', 'patrick-semester-project'].includes(
            site.name,
          ),
        );
        setNetlify(filteredData);
        mergeData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (repos.length > 0 && netlify.length > 0) {
      mergeData();
    }
  }, [repos, netlify]);

  const mergeData = () => {
    try {
      const mergedData = repos.map((repo) => {
        let netlifyRepo = null;

        if (repo.name.includes('semester')) {
          netlifyRepo = netlify.find((netlifyRepo) => netlifyRepo.name.includes('semester'));
        } else if (repo.name.includes('exam')) {
          netlifyRepo = netlify.find((netlifyRepo) => netlifyRepo.name.includes('exam'));
        } else if (repo.name.includes('framework')) {
          netlifyRepo = netlify.find((netlifyRepo) => netlifyRepo.name.includes('framework'));
        }

        return {
          github: {
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            id: repo.id,
          },
          netlify: netlifyRepo
            ? {
                screenshot_url: netlifyRepo.screenshot_url,
                url: netlifyRepo.ssl_url,
              }
            : null,
        };
      });
      setMergedData(mergedData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto items-center min-h-screen'>
      <h1 className='text-4xl font-bold mb-8 mt-8 text-white'>Portfolio</h1>
      <div className='flex flex-row'>
        <div className='flex flex-col w-6/12'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>About Me</h2>

          <div className='flex flex-col bg-gradient-to-b mb-4 from-white to-slate-300 rounded p-6 w-8/12 shadow-lg'>
            <p>Hello! My name is Patrick, i am a 26 year old student at Noroff</p>
            <p>I am currently taking a higher professional degree in front end development</p>
          </div>
          <div className='flex flex-col bg-gradient-to-b mb-4 from-white to-slate-300 rounded p-6 w-8/12 shadow-lg'>
            <p>
              I am currently working as a full time developer at a company called CustomPublish AS
            </p>
            <p>
              I have been working there for about 1 year now, as a web developer, with the goal of
              becoming a full stack developer
            </p>
          </div>
          <div className='flex flex-col bg-gradient-to-b from-white to-slate-300 rounded p-6 w-8/12 shadow-lg'>
            <p>
              I’m currently learning different ways to utilize AI to benefit my workflow or other
              projects
            </p>
            <p>Currently learning svulte, but only just begun trying it out!</p>
            <p>
              Also learning react-native for mobile development, but currently using ionic with
              capacitor and
            </p>
            <p>angular.js. But will be switching to React-Native soon.</p>
          </div>
          <div className='flex flex-row space-x-4 items-center mt-4'>
            <p className='text-white font-bold text-lg'>Find me on:</p>
            <a
              href='https://github.com/pnordboj'
              target='_blank'
              rel='noopener noreferrer'
              className={'text-white hover:text-gray-700'}
            >
              <FaGithub className='h-12 w-12' />
            </a>
            <a
              href='https://www.linkedin.com/in/p-n-j'
              target='_blank'
              rel='noopener noreferrer'
              className={'text-white hover:text-gray-700'}
            >
              <FaLinkedin className='h-12 w-12' />
            </a>
            <p className='text-white font-bold text-lg'>Contact me:</p>
            <a
              href='mailto:utlpatrick@yahoo.no'
              target='_blank'
              rel='noopener noreferrer'
              className={'text-white hover:text-gray-700'}
            >
              <FaEnvelope className='h-12 w-12' />
            </a>
          </div>
          <h2 className='text-white font-bold mt-4'>My Github Repositories</h2>
          <div className='flex flex-col w-fit mt-4 mb-10'>
            <div className='grid grid-cols-2'>
              {allRepos.map((repo) => (
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={repo.id}
                  className='bg-gray-200 p-4 rounded shadow-md w-11/12 m-2 hover:bg-gray-300'
                >
                  <h2 className='font-bold text-xl'>{repo.name}</h2>
                  <p>{repo.description}</p>
                  <p className='text-sm text-gray-600'>{repo.language}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col space-x-8 rounded w-6/12'>
          <h2 className='text-2xl font-semibold text-white ml-8'>Projects</h2>
          {mergedData.map((repo) => (
            <div key={repo.github.id} className='flex flex-col'>
              <button
                className='flex p-4 font-semibold text-white bg-gray-700 rounded-md shadow-lg w-fit mt-2 hover:bg-gray-600'
                onClick={() => window.open(repo.github.html_url, '_blank')}
              >
                View on Github <FaGithub className='h-6 w-6 ml-4' />
              </button>
              <a
                href={repo.netlify.url}
                target='_blank'
                rel='noopener noreferrer'
                className=' bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md shadow-lg cursor-pointer w-10/12 mb-8 mt-2 hover:bg-opacity-30'
              >
                <h3 className='text-xl p-4 font-semibold text-white'>{repo.github.name}</h3>

                <img src={repo.netlify.screenshot_url} className='rounded border' />
                <p className='text-white text-center p-4'>{repo.github.description}</p>
              </a>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Home;
