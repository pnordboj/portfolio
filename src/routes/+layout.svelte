<main bind:this={main} class:header class:footer on:scroll={Scroll}>
    <slot {scroller}/>
</main>

<div class="slotHeader" class:hide={hideHeader && scroller.hide}>
    <slot name="header" />
    <!-- Header -->

    <div class="header">
        <strong class="text-3xl">Portfolio</strong>
        <div class="navigation">
            <div class="flex flex-nowrap">
                <button class="button" on:click={toggleModal}> <Fa icon={faEnvelope} size=1x />  Contact Me</button>
            </div>
        
            <div class="flex flex-nowrap">
                <a href="https://github.com/pnordboj" target="_blank" class="button"> <Fa size=1x icon={faGithub} /> GitHub</a>
            </div>
        </div>
    </div>
</div>

{#if showModal}
    <Modal close={toggleModal} />
{/if}

<!--
<div class="slotFooter" class:hide={hideFooter && scroller.hide}>
    <slot name="footer" />
    <div class="footer">
        <small>Email: utlpatrick@yahoo.no • LinkedIn: <a href="https://linkedin.com/in/p-n-j">p-n-j</a></small>
        <div class="navigation">
            <div class="flex flex-nowrap">
                <button class="button" on:click={toggleModal}> <Fa icon={faEnvelope} size=1x />  Contact Me</button>
            </div>
        
            <div class="flex flex-nowrap">
                <a href="https://github.com/pnordboj" class="button"> <Fa size=1x icon={faGithub} /> GitHub</a>
            </div>
        </div>
    </div>
</div>
-->

<script>
    import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
    import "../app.css";
    import { Fa } from 'svelte-fa';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import Modal from './Modal.svelte';
    export const ssr = false;

    let showModal = false;

    /**
	 * @type {HTMLElement}
	 */
    let main;

    function toggleModal() {
        showModal = !showModal;
    }
    
    export let header = false;
    export let headerHeight = 52;

    export let footer = false;
    export let footerHeight = 64;

    export let scroller = {
        scroll: 0,
        direction: true, // true: scroll down; false: scroll up
        delta: 0,
        hide: false,
        initialScroll: 0
    };
    export let threshold = 64;
    export let hideHeader = true;
    export let hideFooter = true;

    const dispatch = createEventDispatcher();

    const Scroll = () => {
        scroller.delta = main.scrollTop - scroller.scroll;
        scroller.direction = scroller.delta > 0;
        scroller.scroll = main.scrollTop;

        if(scroller.scroll > threshold) {
            if(scroller.direction && !scroller.hide) {
                scroller.hide = true;
            } else if(!scroller.direction && scroller.hide) {
                scroller.hide = false;
            }
        } else {
            scroller.hide = false;
        }
        dispatch("scroll", scroller);
    };

    $: if(main) {
        main.style.setProperty('--header-height', headerHeight + 'px');
        main.style.setProperty('--footer-height', footerHeight + 'px');
    }
    onMount(() => {
        main.onscroll = () => {
            scroller.delta = main.scrollTop - scroller.scroll;
            scroller.direction = scroller.delta > 0;
            scroller.scroll = main.scrollTop;

            if (scroller.scroll > threshold) {
                if (scroller.direction && !scroller.hide) {
                    scroller.hide = true;
                } else if (!scroller.direction && scroller.hide) {
                    scroller.hide = false;
                }
            } else {
                scroller.hide = false;
            }
            dispatch("scroll", scroller);
        };
    });
</script>

<style>

    :global(:root) {
        --color-primary: #755f4f;
        --color-secondary: #efebe9;
        --color-accent: #c0a080;
    }

    .header, .footer {
        background-color: var(--color-primary);
        color: white;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: fixed;
        z-index: 10;
    }

    .header {
        top: 0;
    }

    .footer {
        bottom: 0;
    }

    .navigation {
        display: flex;
        gap: 2rem;
    }

    .button {
        background: var(--color-accent);
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 8px;
        cursor: pointer;
        color: white;
    }

    main {
        height: 100%;
        overflow-y: auto;
    }  main.header {
        padding-top: var(--header-height, 0px);
    }  main.footer {
        padding-bottom: var(--footer-height, 0px);
    }  .slotHeader {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        transition: all .2s ease-in-out;
    }  .slotHeader.hide {
        transform: translateY(-100%);
    }  .slotFooter {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        transition: all .2s ease-in-out;
    }  .slotFooter.hide {
        transform: translateY(100%);
    }
</style>