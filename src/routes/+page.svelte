<script>
    import { onMount } from 'svelte';
    import About from './About.svelte';
    import { Fa } from 'svelte-fa';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';

    /**
	 * @type {any[]}
	 */
    export let repos = [];
    
    onMount(async () => {
        const response = await fetch('https://api.github.com/users/pnordboj/repos');
        const data = await response.json();
        repos = data;

        const readmeButton = document.querySelector('#readme-button');
        if (readmeButton) {
            readmeButton.addEventListener('click', () => {
                const readme = document.querySelector('#readme');
                if (readme) {
                    readme.classList.toggle('hidden');
                }
            });
        }

        const repoButton = document.querySelector('#repo-button');
        if (repoButton) {
            repoButton.addEventListener('click', () => {
                const repoData = document.querySelector('#repo-data');
                if (repoData) {
                    repoData.classList.toggle('hidden');
                }
            });
        }

    });

</script>

<main class="container mx-auto mt-32">
    <section class="mb-6">
        <button id="readme-button" class="text-2xl font-bold">About Me</button>
        <div id="readme">
            <About />
        </div>
        <h3 class="text-xl mt-2 mb-4">Fullstack Developer & AI Enthusiast</h3>
        <p>I am a Fullstack Developer with extensive experience in developing modern web applications using Svelte, React, and .NET. I have a deep passion for AI technologies and have applied my Python and C# skills in numerous projects.</p>
        <h3 class="text-xl mt-4">Technical Skills</h3>
        <p>Svelte, React, Python, C#, .NET, Frontend, Backend</p>
        <h3 class="text-xl mt-4">Projects & Contributions</h3>
        <p>Here are some of my projects and contributions to the software development community.</p>
    </section>
    <button id="repo-button" class="text-2xl font-bold">GitHub Repositories</button>
    <section id="repo-data">
        <h3 class="text-xl mt-2 mb-4">Latest Work</h3>
        {#each repos as repo}
        <div class="card bg-white p-4 shadow-lg rounded-lg mb-4">
            <h4 class="font-semibold">{repo.name}</h4>
            <p>{repo.description}</p>
        </div>
        {/each}
    </section>
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.200);
    }

    #seperator {
        margin-top: 2rem;
    }
</style>