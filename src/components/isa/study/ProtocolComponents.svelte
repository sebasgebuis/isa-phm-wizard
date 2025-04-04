<script>
    import Schemas from "@/lib/schemas";
    import ProtocolComponent from "./ProtocolComponent.svelte";

    let components = [];
    export {components as value};
    export let showLabel;
    export let label;

    function addComponent() {
        let component = Schemas.getObjectFromSchema('protocol_component');
        components = [...components, component];
    }

    function removeComponent(index) {
        components = components.filter((_, i) => i !== index);
    }
</script>

<section style="border: 0px solid black;">
    <div class="attr pure-g v-center align-top">
        <div class="pure-u-5-24">
            {#if showLabel}
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>{label}</label>
            {/if}
        </div>
        <div class="pure-u-19-24 v-center container border">
            <div class="flex-end">
                <button class="btn btn-secondary" on:click={addComponent}>Add Component</button>
            </div>
            {#each components as component, i}
            <ProtocolComponent bind:component on:remove={()=>removeComponent(i)}/>
            {/each}
        </div>
    </div>
</section>

<style>
    .border {
        border: 1px solid black;
    }

    .align-top {
        display: flex;
        align-items: flex-start;
    }

    .flex-end {
        display: flex;
        justify-content: flex-end;
        margin: .5vh 1vh;
    }
</style>
