window.steps = [
    {
        title: 'Welcome to the ISA-PHM Wizard.',
        text: [
            'With this Wizard it is super easy to annotate measurements of your experiment with ISA-compliant metadata according to FAIR principles.',
            'Click on the Next button to start the metadata annotation of the results data of your experiments.'
        ]
    },
    {
        title: 'Please provide the basic information of your project and when you submitted and published the Dataset.',
        fields: [
            {
                label: 'Project Title',
                type: 'text',
                isaMapping: {
                    jsonPath: 'title'
                },
                explanation: 'DM-3'
            },
            {
                label: 'Project Description',
                type: 'textarea',
                isaMapping: {
                    jsonPath: 'description'
                },
                explanation: 'DM-4'
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
        title: 'Here you can provide publications related to your experiment.',
        level: 'Investigation',
        component: 'Publications',
        jsonPath: 'publications'
    },
    {
        hooks: [
            {
                type: 'addStudy'
            }
        ],
        title: 'Please provide the Title and Location of your Study',
        fields: [
            {
                label: 'Study Title',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].title'
                },
                explanation: 'DM-12'
            },
            {
                label: 'Location',
                type: 'location',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Experimental Site'
                },
                explanation: 'DM-18'
            },
            {
                label: 'ROR ID of your Institution',
                type: 'ror',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Contact Institution ROR'
                }
            },
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
                label: 'Country',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].comments',
                    commentName: 'Study Country'
                },
                explanation: 'DM-17'
            }
        ]
    },    
    {
        hooks: [
            {
                type: 'addProtocol',
                parameters: {
                    protocolName: ' ',
                    protocolVersion: 'MIAPPE v1.1',
                    protocolType: {
                        "@id": "",
                        "annotationValue": " ",
                        "termSource": "DPBO",
                        "termAccession": "DPBO:1000164",
                        "comments": []
                      },
                    // protocolDescription: 'How the plants were grown up.',
                    protocolParameters: [ 
                    ]
                }
            }
        ],
        title: 'Please provide a brief summary of the study.',
        fields: [
            {
                label: 'Description',
                type: 'textarea',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].description'
                },
                explanation: 'DM-67'
            },
            {
                label: 'Protocol URI',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].uri'
                },
                explanation: 'DM-66'
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
        title: 'Please upload the Material used in your Study.',
        component: 'StudyProcesses',
        level: 'Study',
        jsonPath: 'studies[0]',
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
        title: 'Please provide the information on the experiments of your Study.',
        fields: [
            {
                label: 'Experiment Title',
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

            }
        ]
    },
    {

        hooks: [
            {
                type: 'addProtocol',
                parameters: {
                    protocolName: '',
                    protocolVersion: 'MIAPPE v1.1',
                    protocolType: {
                        "@id": "",
                        "annotationValue": "",
                        "termSource": "",
                        "termAccession": "",
                        "comments": []
                      },
                    // protocolParameters: ['Phenotyping method']
                }
            }
        ],

        title: 'Please select all Parameters corresponding to your protocol.',
        fields: [
            {
                label: 'Protocol name',
                type: 'textarea',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].protocolName'
                },
                explanation: 'DM-67'
            },
            {
                label: 'Protocol Description',
                type: 'text',
                isaMapping: {
                    jsonPath: 'studies[0].protocols[0].description'
                },
                explanation: 'DM-66'
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
                    jsonPath: 'studies[0].protocols[1].components'
                },
                explanation: 'DM-69'
            }
        ]
    },
    {
        title: 'Please upload the results of your Study.',
        component: 'AssayProcesses',
        level: 'Assay',
        jsonPath: 'studies[0].assays[0]',
        componentConfig: {

        }
    }
];