
<script lang="ts">
    import { page } from "$app/stores";
  import { getPokemon, getPokemonList } from "$lib/pokemonAPI";

    $: email = $page.params.email
    export let data

    
let {supabase,session} = data

$: ({supabase,session} = data)

    let pokemonList : any = []
    let pokemonData : any = []
    let profile : any = {
        description : "This is your description,feel free to write about yoursefl or your favorite Pokemon",
        pokemon_ids : [1,2,3]
    }

    let isModalOpen = false
    let searchInput = ""

    async function refreshPokemonData(){
        pokemonData = []

        const promises = profile.pokemon_ids.map(async (id:number)=> {
            const data = await getPokemon(id.toString())
            return data
        })
       
        pokemonData = await Promise.all(promises)

    }

    async function saveProfile(){
        const { data : profileData , error : profileError} = await supabase.from("profiles").select("description,pokemon_ids").eq('email',email)

        if(profileData?.length === 0)
    {
        await supabase.from("profiles").insert({...profile, user_id :session?.user?.id , email : session?.user?.email})
    }
    else
    {
        const {data,error} = await supabase.from("profiles").update(profile).eq("user_id", session?.user?.id)
    }

    }

    page.subscribe(async() => {
       pokemonList = await getPokemonList()
       
       const { data : profileData , error : profileError} = await supabase.from("profiles").select("description,pokemon_ids").eq('email',email)
       console.log("email",email);
       console.log("user email",session?.user?.email);
       console.log(profileData);
       console.log(profileData?.length);
       
       if(profileData?.length == 0 && email == session?.user?.email)
       {
           console.log("profile save");
           await saveProfile()
           
        }
        else if(profileData !== null && profileData.length > 0)
        {
            profile = profileData[0]
       }
       else
       {
           console.log("No profile");
           profile = {
               description : "This user does not have a profile yet",
               pokemon_ids : []
            }
        }
        
        await refreshPokemonData()
    })

    async function savePageEdits() {
       await saveProfile()
       await refreshPokemonData()
        isModalOpen = false
        
    }
    async function  togglePokemon(id :number) {
        let pokemonIDS = profile.pokemon_ids

        if(pokemonIDS.length >=3 && !pokemonIDS.includes(id))
    {
        alert("you can only have 3 pokemon maximum")
    }

    if(pokemonIDS.includes(id))
    {
        let index = pokemonIDS.indexOf(id)
        pokemonIDS.splice(index + 1)

    }
    else
    {
        pokemonIDS.push(id)
    }

    profile.pokemon_ids = [...pokemonIDS]
        
    }
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content">
        <div class="max-w-2xl font-bold text-4xl">
            <h1 class="text-white font-bold text-4xl">{email}'s page</h1>
            <p class="py-3 max-w-md mx-auto text-base text-center">{profile.description}</p>

            <div class="grid grid-cols-3">

                {#if pokemonData === undefined}
                <p>Loading ...</p>
                {:else}

                {#each pokemonData as pokemon }
                <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900">
                    <div class="card-body">
                        <div class="text-center">
                            <img src={pokemon.sprites.front_default} alt="Pikachu" class="w-32 h-32 mx-auto" />

                            <h2 class="text-white text-2xl font-bold">{pokemon.name}</h2>
                            <p class="text-info text-base">{pokemon.types[0].type.name}</p>
                        </div>
                    </div>

                </div>
                    
                {/each}
                {/if}

              
            </div>
            <button class="btn btn-info mx-auto flex justify-center" on:click={() =>isModalOpen=true}>Edit Page</button>

            {#if email == session?.user?.email}

         
            <dialog class="modal min-w-lg overflow-y-scroll " class:modal-open={isModalOpen} >
                <div class="modal-box relative">
                    <button class="absolute top-0 right-2 text-base" on:click={() => isModalOpen = false}>x</button>
                    <p class="text-base text-center">Edit your page</p>
                    <p class="text-base text-center">Here you can make edits to your page, such as description or pokemon selected</p>
                    <p class="text-white p-2">Edit your description</p>
                    <textarea bind:value={profile.description} class="textarea textarea-bordered textarea-lg w-full max-w-md h-[300px]"></textarea>
                  
                    <p class="text-white p-2">Select your pokemon</p>
                    <div class="grid grid-cols-3 overflow-y-scroll max-h-[600px] m-3">
                        <div class="col-span-3">
                            <input type="text" class="input input-bordered w-full mb-2" placeholder="search for pokemon!" bind:value={searchInput} />
                        </div>
                        {#each pokemonList as  pokemon, index}

                        {#if pokemon.name.includes(searchInput)}

                            <button class={"card bg-slate-700 h-12 p-1 m-1 justify-center items-center " + (profile.pokemon_ids.includes(index+1) ? "border-2 border-blue-600" : "")} on:click={() => togglePokemon(index+1)}>
                                <div class="text-center">
                                    <h2 class="text-base">{pokemon.name}</h2>
                                </div>
                            </button>
                            {/if}
                        {/each}
                    </div>
                    <button class="btn btn-success" on:click={() => savePageEdits()}>Save Edits</button>
                </div>
            </dialog>

            {/if}
        </div>
    </div>
</div>