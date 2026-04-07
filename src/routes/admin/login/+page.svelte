<script lang="ts">
    import type { ActionData } from './$types';
    export let form: ActionData;
    let loading = false;
</script>

<svelte:head><title>Admin Login</title></svelte:head>

<div class="min-h-screen bg-[#050014] flex items-center justify-center px-4">
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative w-full max-w-sm">
        <div class="border border-white/10 bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8">
            <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <h1 class="text-2xl font-black text-white mb-1">Admin Panel</h1>
            <p class="text-white/40 text-sm mb-8">Enter your password to continue</p>

            {#if form?.error}
                <div class="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {form.error}
                </div>
            {/if}

            <form method="POST" on:submit={() => loading = true}>
                <div class="mb-6">
                    <label class="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                        Password
                    </label>
                    <input type="password" name="password" required autofocus
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#FF014F]/50 focus:bg-white/[0.07] transition-all" />
                </div>

                <button type="submit" disabled={loading}
                    class="w-full py-3 rounded-xl font-bold text-white bg-[#FF014F] hover:bg-[#cc0040] disabled:opacity-50 transition-colors duration-200">
                    {loading ? 'Signing in…' : 'Sign In'}
                </button>
            </form>
        </div>
    </div>
</div>
