# How to configure ISA-Wizard


Config files are deposited under /config/xyz directory where xyz stands for a subdirectory for a specific configuration (e.g. a specific minimal checklist or project)

There are three config files:

 * wizard.config.js
 * wizard.explanations.config.js
 * wizard.steps.config.js

## wizard.config.js


### Prefilling of ISA entities during wizard initialization

`config.prefill` is an array of objects. Each object consists of the keys `isaMapping` and `values`

Example to prefill the initially empty ISA object with a person under investigation level:

```javascript
window.config = {
    prefill: [
        {
            type: 'person',
            isaMapping: {
                entity: 'investigation'
            },
            values: {
                lastName : 'John',
                firstName : 'Doe',
                midInitials : '',
                email : 'John.doe@university.com',
                phone : '1234',
                fax : '7890',
                address : 'Street 123',
                affiliation : 'University'
            }
        }
    ]
}    
```

Example to prefill a comment in the ISA object under investigation (alternatively study/assay) level:

```javascript
window.config = {
    prefill: [
        {
            type: 'comment',
            isaMapping: {
                entity: 'investigation',
                attribute: 'comments'
            },
            values: {
                name: 'Study Country',
                value: 'Germany'
            }
        }
    ]
} 
```

Example to prefill any ISA attribute, here the 'Study Description' in the ISA object under study (alternatively investigation/assay) level:

```javascript
window.config = {
    prefill: [
        {
            type: 'value',
            isaMapping: {
                entity: 'study',
                attribute: 'description',
                studyIndex: 0
            },
            value: 'Prefilled study description ...'
        }
    ]
}
```

## wizard.steps.config.js

This config file is structured like the following listing:

```javascript
window.steps = [
    // array of objects where each object is a single step in the questionnaire
]
```

Basic structure of a step object:

```javascript
{
    title: 'title of the step',
    fields: [
        {
            label: 'label of input field',
            type: 'text', // see below for available types
            explanation: 'DM-16', // optional: this gets mapped to wizard.explanations.config.js
            isaMapping: {
                entity: 'investigation',
                attribute: 'title'
            }
        }
    ],
    hook: 'addStudy' // optional: add a hook function to be executed after this step 
}
```

### Available field types

The following types for a field are available:

 * text
 * textarea
 * date
 * people

----

Example for a step consisting of one text and one textarea input field, both mapped to native ISA attributes:

```javascript
{
    title: 'Please provide title and description of your plant phenotyping project',
    fields: [
        {
            label: 'Project title',
            type: 'text',
            explanation: 'DM-16',
            isaMapping: {
                entity: 'investigation',
                attribute: 'title'
            }
        },
        {
            label: 'Project description',
            type: 'textarea',
            explanation: 'DM-17',
            isaMapping: {
                entity: 'investigation',
                attribute: 'description'
            }
        }
    ]
}
```

Example for a <b>field</b> that gets mapped to an ISA comment:

```javascript
fields: [
    {
        label: 'Contact address',
        type: 'text',
        explanation: 'DM-16',
        isaMapping: {
            entity: 'study',
            attribute: 'comments',
            commentName: 'Study Contact Institution'
        }
    }
]
```

### Hooks
!!! note

    When a Study is defined via 'prefill' then it will be also automatically added to the Investigation. The 'addStudy' hock is then only needed when you want to add an additional/second Study.
    

Available hook functions:
 * addStudy => creates a study <b>add the end</b> of a step
 * addProtocol => creates a protocol <b>add the end</b> of a step

---

Example of addStudy hook:
```javascript
{
    title: 'A step after which a study is created',
    fields: [],
    hook: 'addStudy' 
}
```

Example of addStudy hook:
```javascript
{
    title: 'A step after which a study is created',
    fields: [],
    hook: 'addProtocol',
    hookParameters: {
        protocolName: 'Growth',
        protocolVersion: 'MIAPPE v1.1',
        protocolDescription: 'How the plants were grown up.',
        protocolParameters: ['Light intensity', 'Air temperature']
    }
}
```