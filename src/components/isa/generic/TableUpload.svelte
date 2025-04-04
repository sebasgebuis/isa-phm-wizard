<script>
    import { createEventDispatcher } from "svelte";
    import { DataFrame } from "dataframe-js";
    import Svelecte from "svelecte";
    import OntologyAnnotation from "./OntologyAnnotation.svelte";
    
    function handleFileDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        loadFile(file);
    }

    function handleFileSelection() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.csv, .tsv'; // Specify the accepted file type(s) here
        input.addEventListener('change', ()=>{loadFile(input.files[0])});
        input.click();
    }

    let dataframe;
    let hasHeader = true;

    /**
     * @param {File} file
     */
    async function loadFile(file) {        
        let df = await DataFrame.fromCSV(file, true).then(df => df);
        dataframe = df;
        column_mapping = {};
        dataframe.listColumns().forEach(element => {
            column_mapping[element] = {
                type: 'ignore',
                value: null
            };
        });
    }

    let column_mapping = {};

    const dispatch = createEventDispatcher();
    function approve() {
        console.log('approve');
        dispatch('approve', {dataframe, column_mapping});
    }

    async function handleFetch(query) {
        const response = await fetch('https://swate-alpha.nfdi4plants.org/api/IOntologyAPIv3/searchTerm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{
                query: query,
                ontology: null,
                limit: 10,
                searchMode: null,
                parentTermId: null                
            }])
        });
        const data = await response.json();
        return data.map(option => {
            return {
                value: option.Accession,
                label: option.Name,
                ontology: option.FK_Ontology
            }
        });
    }

    function ontoRenderer(item, _isSelection, _inputValue) {
        return _isSelection
            ? `${item.label} (${item.value})`
            : `<div style="display: flex; justify-content: space-between;"><span>${item.label}</span><span>${item.value}</span></div>`;
    }

    function createHandler(elem) {
        console.log(elem);
        return {
            value: '',
            label: elem,
            ontology: '',
            $created: true
        }
    }

    function validate(mapping) {
        console.log(mapping);
        let hasInput = false, hasOutput = false, validCharacteristics = true, validFactors = true;
        Object.keys(mapping).forEach(key => {
            if (mapping[key].type === 'characteristic' && mapping[key].value === null) {
                validCharacteristics = false;
            }
            if (mapping[key].type === 'factor' && mapping[key].value === null) {
                validFactors = false;
            }
            if (mapping[key].type === 'input') {
                hasInput = true;
            }
            if (mapping[key].type === 'output') {
                hasOutput = true;
            }
        });
        if (!hasInput) {
            isValid = false;
            return;
        }
        if (!hasOutput) {
            isValid = false;
            return;
        }
        if (!validCharacteristics) {
            isValid = false;
            return;
        }
        if (!validFactors) {
            isValid = false;
            return;
        }
        isValid = true;
    }

    let isValid = false;

    $: validate(column_mapping);
    $: console.log(isValid);

</script>

<div>
    <p>
        Please upload the list of materials by clicking the upload area below or by dragging and dropping the file onto the upload area.
    </p>
    <div class="drag-drop-area" role="button" tabindex="0" on:drop={handleFileDrop} on:dragover={(event) => event.preventDefault()}>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p on:click={handleFileSelection}>Drag and drop your filled sample file here</p>
    </div>
    <label>
        <span>Has Header</span>
        <input type="checkbox" bind:checked={hasHeader}>
    </label>    
</div>

{#if dataframe}
<div class="table-responsive">
    <table>
        <thead>
            <tr>
                <th>Column</th>
                <th>Example Value</th>
                <th>Column Mapping</th>
            </tr>
        </thead>
        <tbody>
            {#each dataframe.listColumns() as column}
            <tr>
                <td>{column}</td>
                <td>{dataframe.getRow(0).get(column)}</td>
                <td>
                    <div class="flex-row">
                        <div>
                            <label>
                                <span>Ignore</span>
                                <input type="radio" name={"mapping-"+column} checked on:change={()=>column_mapping[column]={type: 'ignore', value: null}}/>
                            </label>
                            <label>
                                <span>Input</span>
                                <input type="radio" name={"mapping-"+column} on:change={()=>column_mapping[column]={type: 'input', value: null}}/>
                            </label>
                            <label>
                                <span>Output</span>
                                <input type="radio" name={"mapping-"+column} on:change={()=>column_mapping[column]={type: 'output', value: null}} />
                            </label>
                            <label>
                                <span>Characteristic</span>
                                <input type="radio" name={"mapping-"+column} on:change={()=>column_mapping[column].type='characteristic'}/>
                            </label>
                            <label>
                                <span>Factor</span>
                                <input type="radio" name={"mapping-"+column} on:change={()=>column_mapping[column].type='factor'}/>
                            </label>
                        </div>
                        {#if column_mapping[column].type === 'characteristic' || column_mapping[column].type === 'factor'}
                        <Svelecte creatable createTransform={createHandler} bind:readSelection={column_mapping[column].value} placeholder="Specify meaning" fetch={handleFetch} renderer={ontoRenderer} />
                        {/if}
                    </div>
                </td>
            </tr>                
            {/each}
        </tbody>
    </table>
</div>
{#if isValid}
<button disabled={!isValid} class="btn btn-primary" on:click={approve}>Approve</button>
{:else}
    <div style="color: red;">
        <p>The mapping is not valid. Please check the mapping.</p>
        <ul>
            <li>One Input Column</li>
            <li>One Output Column</li>
            <li>All Attribute Columns have a value</li>
            <li>All Variable Columns have a value</li>
        </ul>
    </div>
{/if}
{/if}

<style>
    label {
        display: flex;
        justify-content: end;
        margin: .5em 0;
        width: 100%;
        align-items: center;
    }

    label span {
        margin: 0 .5em;
        font-size: small;
        font-style: italic;
    }

    .drag-drop-area {
        margin-top: .5em;
        border: 2px dashed #ccc;
        padding: 1em;
        text-align: center;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    thead {
        background-color: #f2f2f2;
    }

    tbody tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tbody tr:hover {
        background-color: #e6e6e6;
    }
    td, th {
        padding: 10px;
        text-align: left;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
    }
</style>