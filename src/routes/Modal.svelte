<!-- src/components/Modal.svelte -->
<script>
    /**
	 * @type {() => void}
	 */
    export let close;

    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    function handleSubmit(event) {
        event.preventDefault();
        close();
        // Handle the form submission logic here.
    }
</script>

<style>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: var(--color-secondary);
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 90%;
        max-width: 500px;
    }

    .close-button {
        float: right;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input, textarea {
        margin-bottom: 1rem;
        padding: 0.8rem;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    button[type="submit"] {
        padding: 0.8rem;
        background: var(--color-accent);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>

<div class="modal-background" on:click={close}>
    <div class="modal-content" on:click|stopPropagation>
        <button class="close-button" on:click={close}>&times;</button>
        <h2>Contact Me</h2>
        <form on:submit={handleSubmit}>
            <label for="email">Your Email:</label>
            <input id="email" type="email" required>
            <label for="message">Message:</label>
            <textarea id="message" rows="4" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</div>
