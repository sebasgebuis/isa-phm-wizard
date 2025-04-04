<script>
    import Svelecte from "svelecte";
    import { createEventDispatcher } from "svelte";
    import String from "../generic/String.svelte";
    import OntologyAnnotation from "../generic/OntologyAnnotation.svelte";

    export let component;

    const dispatch = createEventDispatcher();
    function removeComponent() {
        dispatch("remove", component);
    }
</script>

<div class="border padding">
    <div class="flex-end">
        <button class="btn btn-warning" on:click={removeComponent}>Remove Component</button>
    </div>
    <String bind:value={component.componentName} attr="name" label="Component Name" />
    <OntologyAnnotation bind:value={component.componentType} attr="type" label="Component Type" />
</div>

<style>
    .border {
        border: 1px solid black;
        margin: 1vh 1vh;
    }

    .padding {
        padding: 1vh;
    }

    .flex-end {
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
    }
</style>