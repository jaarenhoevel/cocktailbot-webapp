<script>
    import Navbar from "components/LandingNavbar.svelte";
    import Footer from "components/LandingFooter.svelte";
</script>

<Navbar />

<section class="dark:bg-slate-800 header relative pt-16 items-center flex h-screen max-h-860-px">
    <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div class="pt-32 sm:pt-0">
                <h2 class="font-semibold text-4xl text-slate-600 dark:text-slate-200">
                    CocktailBot - Automated cocktail and longdrink mixer.
                </h2>
                <p class="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                    CocktailBot is Free and Open Source. If you want to build
                    your own head over to GitHub to find instructions. If you
                    have already setup your bot you can go straight to the Control
                    Panel to control your CocktailBot.
                </p>
                <div class="mt-12">
                    <a
                        href="/control/overview"
                        class="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 dark:bg-red-500 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                        Control panel
                    </a>
                    <a
                        href="https://github.com/jaarenhoevel/cocktailbot-core"
                        class="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:slate-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                        target="_blank"
                    >
                        View on Github
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<Footer />
