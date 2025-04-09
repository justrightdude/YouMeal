import { writable } from 'svelte/store';

const { subscribe, set } = writable(0);

export default {
	subscribe,
	set
};