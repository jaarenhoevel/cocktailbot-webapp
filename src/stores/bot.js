import { readable } from "svelte/store";

const apiAddress = `http://${localStorage.getItem("api-address") || "localhost"}:${localStorage.getItem("api-port") || 8080}`;

export const status = readable({}, function start(set) {
    const interval = setInterval(async () => {
        fetch(apiAddress + "/status").then((response) => {
            response.json().then((status) => {
                set(status);
            }).catch(() => {
                set({});
            });
        }).catch(() => {
            set({});
        })
    }, 1000);

    return function stop() {
        clearInterval(interval);
    }
});

export const drinks = readable({}, function start(set) {
    const interval = setInterval(async () => {
        fetch(apiAddress + "/drinks").then((response) => {
            response.json().then((drinks) => {
                set(drinks);
            }).catch(() => {
                set({});
            });
        }).catch(() => {
            set({});
        })
    }, 30000);

    return function stop() {
        clearInterval(interval);
    }
});

export const ingredients = readable({}, function start(set) {
    const interval = setInterval(async () => {
        fetch(apiAddress + "/ingredients").then((response) => {
            response.json().then((ingredients) => {
                set(ingredients);
            }).catch(() => {
                set({});
            });
        }).catch(() => {
            set({});
        })
    }, 30000);

    return function stop() {
        clearInterval(interval);
    }
});

export const config = readable({}, function start(set) {
    const interval = setInterval(async () => {
        fetch(apiAddress + "/config").then((response) => {
            response.json().then((config) => {
                set(config);
            }).catch(() => {
                set({});
            });
        }).catch(() => {
            set({});
        })
    }, 30000);

    return function stop() {
        clearInterval(interval);
    }
});