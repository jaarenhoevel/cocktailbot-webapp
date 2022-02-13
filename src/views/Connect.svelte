<script>
    import ConnectNavbar from "../components/ConnectNavbar.svelte";
    import ConnectFooter from "../components/ConnectFooter.svelte";

    const background = "../assets/img/connect_bg.png";
</script>

<div>
    <ConnectNavbar />
    <main>
        <section class="relative w-full h-full py-40 min-h-screen">
            <div
                class="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
                style="background-image: url({background});"
            />
            <div class="container mx-auto px-4 h-full">
                <div
                    class="flex content-center items-center justify-center h-full"
                >
                    <div class="w-full lg:w-4/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0"
                        >
                            <div class="rounded-t mb-0 px-6 py-6">
                                <div class="text-center mb-3">
                                    <h6
                                        class="text-slate-500 text-sm font-bold"
                                    >
                                        Connect to CocktailBot
                                    </h6>
                                </div>

                                <form>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            for="grid-email"
                                        >
                                            Address
                                        </label>
                                        <input
                                            id="grid-email"
                                            type="email"
                                            class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label
                                            class="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            for="grid-email"
                                        >
                                            port
                                        </label>
                                        <input
                                            id="grid-email"
                                            type="email"
                                            class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Port"
                                            value="8080"
                                        />
                                    </div>

                                    <div class="text-center mt-6">
                                        <button
                                          class="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                          type="button"
                                        >
                                          Connect
                                        </button>
                                      </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConnectFooter absolute="true" />
        </section>
    </main>
</div>
