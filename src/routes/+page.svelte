<script>
</script>

<svelte:head>
    <title>Svelte.Tree - a place for links</title>
    <meta name="description" content="Sveltekit Demo project" />
</svelte:head>

<main class="flex w-full min-h-screen">
    <div class="hero bg-base-200">
        <div class="hero-content text-center">
            <div class="w-full">
                <h1 class="text-7xl font-bold">Svelte.Tree</h1>
                <p class="py-6 text-2xl">One simple link to share your entire developer portfolio</p>

                <!-- <a href="/{$userData.username}/edit" class="btn btn-primary">Edit Profile</a> -->

                <a href="/login" class="btn btn-primary">Get Started</a>
                <!-- <a href="/fireship" class="btn btn-secondary">Example Profile</a> -->

                <p class="py-6">
                    Find other cool projects build by me on my
                    <a class="link" href="https://github.com/tomasluque">Github</a>
                </p>
            </div>
        </div>
    </div>
</main>
