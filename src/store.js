// imports 
import { atom } from 'nanostores';

/**
 * Website Loading Spinner
 */
export const isLoading = atom(false);

/**
 * User Created PFP
 */
export const genImage = atom({
    url: "https://picsum.photos/200/200",
    cap: "Welcome To Profile Pic Gen."
});