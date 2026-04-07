// See https://svelte.dev/docs/kit/types#app.d.ts
import type { Blog } from '$lib/blogs';

declare global {
    namespace App {
        interface Locals {
            isAdmin: boolean;
        }
        interface PageData {
            blogs?: Blog[];
            blog?: Blog;
            latestBlogs?: Blog[];
        }
    }
}

export {};
