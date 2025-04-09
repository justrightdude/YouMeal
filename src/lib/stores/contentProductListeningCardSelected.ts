import { writable } from "svelte/store";

const { subscribe, set, update } = writable({
    title: '',
    img: '',
    price: 0,
    weight: 0,
    num: 1
}
);

export default {
	subscribe,
	set,
    update
};