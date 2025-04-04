<script>
    import Schemas from "@/lib/schemas";
    import TableUpload from "../generic/TableUpload.svelte";
    import { isaObj } from "@/stores/isa";

    export let componentConfig;
    // export let jsonPath;
    export let value;

    function loadTable(e) {
        let column_mapping = e.detail.column_mapping;
        let dataframe = e.detail.dataframe;

        let process = Schemas.getObjectFromSchema("process");
        process["name"] = "Growth";
        
        // @ts-ignore
        process["executesProtocol"] = $isaObj.studies[0].protocols.find(p=>p.name == "Growth");
        for (let parameter of process["executesProtocol"].parameters) {
            let parameteValue = Schemas.getObjectFromSchema('process_parameter_value');
            parameteValue['category'] = parameter;
            parameteValue['value'] = parameter.comments.find(c=>c.name == 'value').value;
            parameteValue['unit'] = parameter.comments.find(c=>c.name == 'unit').value;
            process["parameterValues"] = [...process["parameterValues"], parameteValue];
        }
        console.log(column_mapping);

        for (let row of dataframe) {
            console.log(row)
            let source = Schemas.getObjectFromSchema("source");
            let sample = Schemas.getObjectFromSchema("sample");

            for (let key of dataframe.listColumns()) {
                if (column_mapping[key].type == "ignore") {
                    continue;
                }
                if (column_mapping[key].type == "input") {
                    source.name = row.get(key);
                } else if (column_mapping[key].type == "output") {
                    sample.name = row.get(key);
                } else if (column_mapping[key].type == "characteristic") {
                    let characteristic = Schemas.createCharacteristicObject(column_mapping[key].value.label, row.get(key));
                    characteristic.category.characteristicType.termSource = column_mapping[key].value.ontology;
                    characteristic.category.characteristicType.termAccession = column_mapping[key].value.value;
                    source.characteristics = [...source.characteristics, characteristic];
                } else if (column_mapping[key].type == "factor") {
                    let factorValue = Schemas.getObjectFromSchema("factor_value");
                    factorValue.category = Schemas.getObjectFromSchema("factor");
                    factorValue.category.factorName = column_mapping[key].value.label;
                    factorValue.category.factorType = Schemas.getObjectFromSchema("ontology_annotation");
                    factorValue.category.factorType.annotationValue = column_mapping[key].value.label;
                    factorValue.category.factorType.termSource = column_mapping[key].value.ontology;
                    factorValue.category.factorType.termAccession = column_mapping[key].value.value;
                    factorValue.value = row.get(key);
                    sample.factorValues = [...sample.factorValues, factorValue];
                }
            }
            if (!value.materials.sources.find(s=>s.name == source.name) && source.name) {
                value.materials.sources = [...value.materials.sources, source];                
            }
            if (!value.materials.samples.find(s=>s.name == sample.name) && sample.name) {
                value.materials.samples = [...value.materials.samples, sample];
            }
            
            if (source.name) {
                process["inputs"] = [...process["inputs"], source];
            }
            if (sample.name) {
                process["outputs"] = [...process["outputs"], sample];
            }
        }        
        value.processSequence = [...value.processSequence, process];
    }

    function resetProcess() {
        value.processSequence = [];
        value.materials.sources = [];
        value.materials.samples = [];
    }

    let df;

    let page = 0,
        pageSize = 5;
</script>

{#if !(value.processSequence.length>0)}
    <TableUpload
        on:approve={(e) => loadTable(e)}
    />
{:else}
    <div class="justify-end">
        <button class="btn btn-secondary" on:click={resetProcess}>Reset</button>
    </div>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Source Name</th>
                    {#if value.processSequence[0].inputs.length > 0}
                    {#each value.processSequence[0].inputs[0].characteristics as characteristic}
                        <th>{characteristic.category.characteristicType.annotationValue}</th>
                    {/each}
                    {/if}
                    <th>Sample Name</th>
                    {#if value.processSequence[0].outputs.length > 0}
                    {#each value.processSequence[0].outputs[0].factorValues as factorValue}
                        <th>{factorValue.category.factorName}</th>
                    {/each}
                    {/if}
                </tr>
            </thead>
            <tbody>
                {#each value.processSequence[0].inputs as input, idx}
                    {#if idx >= page * pageSize && idx < (page + 1) * pageSize}
                        <tr>
                            <!-- {#each input as cell}
                                <td>{cell}</td>
                            {/each} -->
                            <td>{input.name}</td>
                            {#each input.characteristics as characteristic}
                                <td>{characteristic.value}</td>
                            {/each}
                            {#if value.processSequence[0].outputs[idx]}
                            <td>{value.processSequence[0].outputs[idx].name}</td>
                            {#each value.processSequence[0].outputs[idx].factorValues as factorValue}
                            <td>{factorValue.value}</td>
                            {/each}
                            {:else}
                            <td>{" "}</td>
                            {/if}
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
    <div class="pagination">
        <button on:click={() => (page = 0)} disabled={page == 0}>First</button>
        <button on:click={() => page--} disabled={page == 0}>Previous</button>
        <select bind:value={pageSize}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
        </select>
        <button on:click={() => page++} disabled={page >= Math.ceil(value.processSequence[0].inputs.length / pageSize) - 1}>Next</button>
        <button on:click={() => (page = Math.ceil(value.processSequence[0].inputs.length / pageSize) - 1)} disabled={page >= Math.ceil(value.processSequence[0].inputs.length / pageSize) - 1} >Last</button>
        <span>Page {page + 1} of {Math.ceil(value.processSequence[0].inputs.length / pageSize)}</span>
    </div>
{/if}

<style>
    .table-responsive {
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f1f1f1;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4caf50;
        color: white;
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-top: 2rem;
    }

    .pagination button,
    .pagination select {
        padding: 0.5rem 1rem;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        font-size: medium;
        transition: background-color 0.3s ease;
    }

    .pagination button:hover,
    .pagination select:hover {
        background-color: hsl(
            var(--neutral-h),
            var(--neutral-s),
            calc(var(--neutral-l) - 10%)
        );
    }

    .pagination button[disabled] {
        border: 1px solid #ccc;
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination button[disabled]:hover {
        background-color: var(--neutral);
    }

    .pagination select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .pagination span {
        font-size: medium;
        font-style: italic;
        color: #333;
    }

    .justify-end {
        display: flex;
        justify-content: flex-end;
        padding: 5px 0;
    }
</style>
