import { writable } from "svelte/store";

export const showLinkBubbleMenu = writable(false);
export const currentFocusLink = writable("");