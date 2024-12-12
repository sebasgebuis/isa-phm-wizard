window.steps = [
    {
        title: 'Welcome to the ISA Wizard.',
        text: [
            'With this Wizard it is super easy to annotate measurements of your DNA sequencing experiment with ISA-compliant metadata according to FAIR principles.',
            'Click on the Next button to start the metadata annotation of the results data of your experiments.'
        ]
    },
    {
        title: 'Please provide the basic information of your DNA Sequencing Project and when you submitted and published the Dataset.',
        fields: [
            {
                label: 'Study Name',
                type: 'text',
                isaMapping: {
                    jsonPath: 'identifier'
                },
                explanation: 'ENA-1'
            },
            {
                label: 'Short descriptive study title',
                type: 'text',
                isaMapping: {
                    jsonPath: 'title'
                },
                explanation: 'ENA-2'
            },
            {
                label: 'Detailed study abstract',
                type: 'textarea',
                isaMapping: {
                    jsonPath: 'description'
                },
                explanation: 'ENA-3'
            },
            {
                label: 'License',
                type: 'license',
                isaMapping: {
                    jsonPath: 'comments',
                    commentName: 'License'
                },
                explanation: 'DM-7'
            },
            {
                label: 'Submission Date',
                type: 'date',
                isaMapping: {
                    jsonPath: 'submissionDate'
                },
                explanation: 'DM-5'
            },
            {
                label: 'Public Release Date',
                type: 'date',
                isaMapping: {
                    jsonPath: 'publicReleaseDate'
                },
                explanation: 'DM-6'
            }
        ]
    },
    {
        title: 'Please provide the Authors of your Dataset and define their Contribution.',
        component: 'People',
        jsonPath: 'people',
        componentConfig: {
            showComments: false,
            label: 'Authors'
        }
    },
    {
        hooks: [
            {
                type: 'addStudy'
            }
        ],
        title: 'Please provide a Library Name and Location of your DNA Sequencing Experiment',
        fields: [
            {
                label: 'Library name',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].title'
                },
                explanation: 'ENA-4'
            },
            {
                label: 'Geographic location (country and/or sea)',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Experimental Site'
                },
                explanation: 'ENA-5'
            },
            {
                label: 'Geographic location (latitude)',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Latitude'
                },
                explanation: 'ENA-6'
            },
            {
                label: 'Geographic location (longitude)',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Longitude'
                },
                explanation: 'ENA-7'
            }
        ]
    },
    {
        title: 'Please provide the responsible Institution of your DNA Sequencing Experiment',
        fields: [
            {
                label: 'Institution Contact Address',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Contact Institution'
                },
                explanation: 'DM-16'
            },
            {
                label: 'ROR ID of your Institution',
                type: 'ror',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Contact Institution ROR'
                }
            }
        ]
    },
    {
        title: 'Here you can provide publications related to your experiment.',
        level: 'Study',
        component: 'Publications',
        jsonPath: 'studies[0].publications'
    },
    {
        title: 'Please provide a link to the data file of the study.',
        fields: [
            {
                label: 'Study Data File Link',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Data File Link'
                }
            },
            {
                label: 'Study Data File Description',
                type: 'textarea',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Data File Description'
                }
            }
        ]
    },
    {
        hooks: [
            {
                type: 'addProtocol',
                parameters: {
                    protocolName: 'ENA Default Sample Checklist',
                    protocolVersion: 'ENA_Default_Sample_Checklist_1.0',
                    protocolParameters: ['tax_id','scientific_name','sample_alias','sample_title','sample_description','collection date', 'geographic location (country and/or sea)']
                }
            }
        ],
        
        title: 'Please select all Parameters, which are constant for all Samples of your Experiment.',
        component: 'ProtocolParametersSelect',
        componentConfig: {
            protocolId: 'ena_default_sample'
        },
        jsonPath: 'studies[0].protocols[0].parameters'
    },
    {
        hooks: [
            {
                type: 'addProtocol',
                parameters: {
                    protocolName: 'ENA Sequencing',
                    protocolVersion: 'ENA_Sequencing_1.0',
                    protocolParameters: ['Instrument model','Library name','Library source','Library selection','Library strategy','Library layout']
                }
            }
        ],
        
        title: 'Please select all Sequencing Parameters, which are constant for all Samples of your Experiment.',
        component: 'ProtocolParametersSelect',
        componentConfig: {
            protocolId: 'ena_sequencing'
        },
        jsonPath: 'studies[0].protocols[1].parameters'
    },
    {
        title: 'Select Factors that are different between the Samples.',
        component: 'FactorsSelect',
        jsonPath: 'studies[0].factors'
    },
    {
        title: 'Upload template',
        component: 'Uploader',
        jsonPath: 'studies[0]'
    }
];