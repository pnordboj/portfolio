<header>
    <div class="header">
        <div class="headerContent">
            <div class="headerLogo">
                <a href="/">
                    <img src="/logo.svg" alt="Logo" />
                </a>
            </div>
            <div class="headerMenu">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </div>
    <div class="headerSpacer"></div>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .headerContent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        height: 64px;
    }

    .headerLogo img {
        height: 48px;
    }

    .headerMenu a {
        margin-left: 1rem;
        text-decoration: none;
        color: black;
    }

    .headerSpacer {
        height: 64px;
    }
</style>