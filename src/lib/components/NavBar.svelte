<script>
    import logo from '$lib/assets/logo.png'
</script>

<nav class="outer">
    <div class="inner">
        <div class="logo-container">
            <img src={logo} alt="Wallgen logo"/>
            <h1>Wallgen</h1>
        </div>

    </div>
</nav>

<style>

    .outer {
        position: sticky;
        background-color: #0a1a3b;
        top: 0;
        height: 6vh;
        padding: 1.5rem;
        margin-bottom: 2rem;
        contain: content;
        box-shadow: white 0px 4px 2px;
    }


    .logo-container {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 1.5em;
    }

    .inner {
        display: flex;
        margin: 0 10%;
        height: 100%;
    }

    .logo-container > img {
        height: 100%; 
        object-fit: contain;
    }


    @media only screen and (max-width: 768px) {

        .logo-container {
            flex-direction: column;
            gap: 5px;
            width: 50px;
            font-size: 1em;
        }

        
        .logo-container > img {
            width: 100%; 
            object-fit: contain;
        }


        .inner {
            margin: 0 20px;
        }
    }
</style>