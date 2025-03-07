<script>
    import { createCommitFromArc, createProject, getUserInfo, getUserNamespaces } from "@/lib/gitlab";
    import { gitlab_response } from "@/stores/gitlab-api";
    import { isaObj } from "@/stores/isa";
    import { onMount } from "svelte";

    export let auth_config;

    let user;

    let namespaces = [];
    let namespace;

    onMount(async ()=>{
        user = await getUserInfo(auth_config, $gitlab_response.access_token);
        namespaces = await getUserNamespaces(auth_config, $gitlab_response.access_token, user);
        namespace = namespaces[0].id;
    });

    async function tryExport() {
        let body = {
            // @ts-ignore
            "name": $isaObj.title,
            "namespace_id": namespace,
            "initialize_with_readme": false,
            "visibility": "private"
        }
        let project = await createProject(auth_config, $gitlab_response.access_token, body);

        let commit = await createCommitFromArc(auth_config, $gitlab_response.access_token, project, $isaObj);
        alert(commit.message);
    }
</script>

<div class="container">
    <span>Namespace</span>
    <select bind:value={namespace}>
        {#each namespaces as namespace}
        <option value={namespace.id}>{namespace.name}</option>
        {/each}
    </select>        
<button class="btn btn-huge" on:click={tryExport}>Export</button>
</div>

<style>
.btn-huge {
    padding: 1rem 2rem;
    width: 10rem;
}

.container {
    gap: 1rem;
    display: flex;
    align-items: center;
}
</style>