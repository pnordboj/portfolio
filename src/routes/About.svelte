<!-- src/routes/About.svelte -->
<script>
    import { onMount } from 'svelte';
    import { marked } from 'marked';

    let readmeContent = '';

    async function fetchReadme() {
        const url = "https://api.github.com/repos/pnordboj/pnordboj/readme";
        const response = await fetch(url, {
            headers: {
                "Accept": "application/vnd.github.VERSION.raw"
            }
        });
        if (response.ok) {
            const markdown = await response.text();
            readmeContent = await marked(markdown);
        } else {
            console.error('Failed to fetch README');
        }
    }

    onMount(() => {
        fetchReadme();
    });
</script>

<style>
    .readme {
        padding: 1rem;
        background: var(--color-secondary);
        color: var(--color-primary);
    }
</style>

<div class="readme" bind:innerHTML={readmeContent} contenteditable></div>
