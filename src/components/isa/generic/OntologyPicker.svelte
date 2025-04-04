<script>
    import { onMount } from "svelte";

    let availableOntologies = [];
    let ontologies;
    export { ontologies as value };
    export let label;
    export let componentConfig;
    export let attr;
    export let jsonPath;

    onMount(async () => {
        const response = await fetch("https://api.terminology.tib.eu/api/ontologies/filterby?schema=collection&page=0&size=100000&exclusive=false&classification=DataPLANT");
        if (response.ok) {
            const data = await response.json();
            availableOntologies = data._embedded.ontologies;
        } else {
            console.error("Failed to fetch ontologies:", response.statusText);
        }
    })
</script>

<section>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
        {#each availableOntologies.sort((a, b) => a.config.id > b.config.id ? 1 : a.config.id < b.config.id ? -1 : 0) as ontology}
        <label style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem">
            <span>{ontology.config.id.toUpperCase()} - {ontology.config.title}</span>
            <input type="checkbox" style="margin-left: 0.5rem;" />
        </label>
        {/each}
    </div>
</section>
