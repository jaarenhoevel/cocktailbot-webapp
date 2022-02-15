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
    });

    return function stop() {
        clearInterval(interval);
    }
});