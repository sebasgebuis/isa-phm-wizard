<script>
    export let label = "";
    export let isaLevel = null;
    export let attr;
    export let value;
    export let showLabel = true;
    export let focus = false;
    export let componentConfig;

    if (!label) {
        label = attr;
    }

    import { explanationActionFactory } from "@/actions/explanation.js";
    import { appstate } from "@/stores/appstate";
    import { getContext } from "svelte";

    if (!isaLevel) {
        isaLevel = getContext("isaLevel");
    }

    let explanationAction = explanationActionFactory(isaLevel);

    function setFocus(el) {
        if ($appstate == appstate.WIZARD && focus) {
            el.focus();
        }
    }
</script>

<section style="border: 0px solid black;">
    <div class="attr pure-g v-center">
        <div class="pure-u-5-24">
            {#if showLabel}
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>{label}</label>
            {/if}
        </div>
        {#if componentConfig && componentConfig.options && componentConfig.options.length > 0}
            <div class="pure-u-19-24 border">
                {#each componentConfig.options as option}
                <div>
                    <label>
                        <input
                            type="radio"
                            name={attr}
                            value={option}
                            bind:group={value}
                            on:change
                        />
                        <span>{option}</span>
                    </label>
                </div>
                {/each}
            </div>
        {:else}
            <div class="pure-u-19-24">
                <input
                    style="width: 100%;"
                    class="input"
                    class:wide={!showLabel}
                    use:explanationAction
                    use:setFocus
                    data-isaLevel={isaLevel}
                    data-attr={attr}
                    type="text"
                    bind:value
                    on:change
                />
            </div>
        {/if}
    </div>
</section>

<style>
    .input {
        width: 500px;
    }

    .wide {
        width: 100%;
    }
    .border {
        border: 1px solid black;
        padding: 5px;
    }
</style>
