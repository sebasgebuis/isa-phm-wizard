window.steps = [
    {
        title: 'Welcome to the ISA-PHM Wizard.',
        text: [
            'With this Wizard it is super easy to annotate measurements of your experiment with ISA-compliant metadata according to FAIR principles.',
            'Click on the Next button to start the metadata annotation of the results data of your experiments.'
        ]
    },
    {
        title: 'Investigation - Please provide the basic information of your Investigation and when you submitted and published the Dataset.',
        fields: [
            {
                label: 'Investigation Identifier',
                type: 'text',
                isaMapping: {
                    jsonPath: 'identifier'
                },
                explanation: 'DM-2'
            },
            {
                label: 'Investigation Title',
                type: 'text',
                isaMapping:{
                    jsonPath:'title'
                },
                explanation: 'DM-3'
            },
            {
                label: 'Investigation Description',
                type: 'textarea',
                isaMapping: {
                    jsonPath: 'description'
                },
                explanation: 'DM-4'
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
        title: 'Investigation - Please provide a list of Contacts relating to the investigation',
        component: 'People',
        jsonPath: 'people',
        componentConfig: {
            showComments: false,
            label: 'Authors'
        }
    },
    {
        title: 'Investigation - Please provide any publications relating to your experiment.',
        level: 'Investigation',
        component: 'Publications',
        jsonPath: 'publications',
        explanation: 'DM-9'
    },
    {
        hooks: [
            {
                type: 'addStudy'
            }
        ],
        title: 'Study - Please provide the general information about your study',
        fields: [
            {
                label: 'Study Identifier',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].identifier'
                },
                explanation: 'DM-12'
            },
            {
                label: 'Study Title',
                type: 'text',
                isaMapping:{
                    jsonPath: 'studies[0].title'
                }
            },
            {
                label: 'Study Description',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].description'
                },
            },
        ]
    },   
    {
        hooks: [
            {
                type: 'addProtocol',
                parameters: {
                    protocolName: ' ',
                    protocolParameters: [ 
                    ]
                }
            }
        ],
        title: 'Study Protocol - Please describe the protocol of the study.',
        fields: [
            {
                label: 'Protocol Name',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].name'
                }
            },
            {
                label: 'Protocol Description',
                type: 'textarea',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].description'
                },
                explanation: 'DM-67'
            },
            {
                label: 'Protocol Parameters',
                type: 'parameters',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].parameters'
                },
                explanation: 'DM-68'
            },
            {
                label: 'Protocol Components',
                type: 'components',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].components'
                },
                explanation: 'DM-69'
            }
        ]
    },
    {
        title: 'Study Publications - Please upload the publications used in your Study.',
        component: 'Publications',
        level: 'Study',
        jsonPath: 'studies[0].publications',
        componentConfig: {

        }
    },
    {
        hooks: [
            {
                type: 'addAssay',
                parameters: {
                    
                }
            }
        ],
        title: 'Assay - Please provide the information on the experiments of your Assay.',
        fields: [
            {
                label: 'Assay id',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].assays[0].comments',
                    commentName: 'Title'
                }
            },
            {
                label: 'Measurement Type',
                type: 'ontology_annotation',
                isaMapping: {
                    jsonPath: 'studies[0].assays[0].measurementType'
                },
            },
            {
                label: 'Technology Type',
                type: 'ontology_annotation',
                isaMapping: {
                    jsonPath: 'studies[0].assays[0].technologyType'
                },
            },
            {
                label: 'Technology Platform',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].assays[0].technologyPlatform'
                },
            },
            {
                label: 'Data File Name',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].assays[0].dataFiles'
                }
                
            },
            {
                label: 'Assay identifier',
                type: 'text',
                isaMapping:{
                    jsonPath: 'studies[0].assays[0].identifier'
                }
            }
        ]
    },
    
];