window.config = {

    general: {
        layoutMode: 'standalone', // standalone | plugin
        initialView: 'questionnaire', // questionnaire
        showQuestionnaireProgressBar: true,
    },

    prefill: [
        {
            type: 'person',
            isaMapping: {
                entity: 'investigation'
            },
            values: {
                lastName : 'Mustermann',
                firstName : 'Max',
                midInitials : '',
                email : 'mustermann@ipk-gatersleben.de',
                phone : '1234',
                fax : '7890',
                address : 'Corrensstraße 3, 06646 Seeland',
                affiliation : 'IPK Gatersleben'
            }
        },
    ],

    "checklist": {
        "checklistName": "MIAPPE",
        "checklistVersion": "1.1",
        "studyFactors": [
            { "label":"Seasonal environment", "explanation":"A plant treatment (EO:0001001) involving an exposure to a given conditions of regional seasons." },
            { "label":"Air treatment regime", "explanation":"The treatment involving an exposure to wind/air with varying degree of temperature, which may depend on the study type or the regional environment." },
            { "label":"Soil temperature regime", "explanation":"A physical plant treatment (EO:0007316) involving an exposure to varying degree of temperature, which may depend on regional environment." },
            { "label":"Soil treatment regime", "explanation":"The treatment (EO:0007049) involving growing plants and exposing them to soil growth media with varying contents" },
            { "label":"Antibiotic regime", "explanation":"A chemical treatment (EO:0007189) involving the use of antibiotic for selection purposes." },
            { "label":"Chemical administration", "explanation":"An abiotic plant treatment (EO:0007191) involving the application of chemical(s)." },
            { "label":"Biotic treatment", "explanation":"A plant treatment (EO:0001001) involving the application of a biotic or biological factor such as a microbe, insect, animal, or plant or a combination thereof" },
            { "label":"Fertilizer regime", "explanation":"A plant nutrient treatment (EO:0007241) involving the use of a fertilizer, a combination of plant nutrients." },
            { "label":"Fungicide regime", "explanation":"A treatment (EO:0007167) involving the application of a fungicide; a chemical entity or mixture of chemical entities." },
            { "label":"Gaseous regime", "explanation":"A physical plant treatment (EO:0007316) involving the application of a gas or a combination of gasses." },
            { "label":"Gravity", "explanation":"The treatment involving use of gravity factor to study various types of responses in presence, absence or modified levels of gravity." },
            { "label":"Plant hormone regime", "explanation":"A chemical treatment (EO:0007189) involving the use of growth hormones to study various types of responses on their extrinsic and/or intrinsic application." },
            { "label":"Herbicide regime", "explanation":"A treatment (EO:0007167) involving the application of a herbicide; a chemical entity or mixture of chemical entities." },
            { "label":"Mechanical treatment", "explanation":"A treatment involving the application of a mechanical force" },
            { "label":"Chemical regime", "explanation":"A chemical treatment (EO:0007189) involving the application of inorganic chemicals, nutriment, organic chemicals, etc. as supplement to study various types of responses" },
            { "label":"Humidity regimen", "explanation":"A treatment involving an exposure to varying degree of humidity, which may depend on regional environment." },
            { "label":"Radiation (light, UV-B, X-ray) regime", "explanation":"A physical plant treatment (EO:0007316) involving an exposure with a radiation type, intensity or quantity. EMR is classified according to the frequency of its wave. The electromagnetic spectrum, in order of increasing frequency and decreasing wavelength, consists of radio waves, microwaves, infrared radiation, visible light, ultraviolet radiation, X-rays and gamma rays. (from Wikipedia)." },
            { "label":"Rainfall regime", "explanation":"Treatment involving an exposure to a given amount of rainfall." },
            { "label":"Salt regime", "explanation":"This treatment may be used to simulate the growth conditions of sea coast regions and saline/sodic soils. A chemical treatment (EO:0007189) involving use of salts as supplement to liquid and soil growth media to study various types of responses on their application." },
            { "label":"Watering regime", "explanation":"Treatment involving an exposure to watering frequencies." },
            { "label":"Water temperature regime", "explanation":"Treatment involving an exposure to water with varying degree of temperature, which may depend on regional environment." },
            { "label":"Standing water regime", "explanation":"The treatment involving an exposure to standing water during a plant's life span. This also results in anaerobic soil conditions for either long or short periods." },
            { "label":"Pesticide regime", "explanation":"A chemical treatment (EO:0007189) involving the application of a pesticide; a chemical entity or mixture of chemical entities." },
            { "label":"pH regime", "explanation":"The treatment involving exposure of plants to varying levels of pH of the growth media." }
        ],

        "defaultProtocols": [
            {
                "name": "ENA Plant Sample Checklist",
                "id": "ena_plant_sample",
                "parameters": [
                    { "label":"plant developmental stage", "explanation":"Developmental stage at the time of sample collection; for Plant Ontology (PO) (v 20) terms, see http://purl.bioontology.org/ontology/PO, e.g. hypocotyl emergence stage (PO_0007043)" },
                    { "label":"plant structure", "explanantion":"name of plant structure that the sample was obtained from; for Plant Ontology (PO) terms see http://purl.bioontology.org/ontology/PO, e.g. petiole epidermis (PO_0000051); if an individual flower is sampled the sex of it can be recorded here"},
                    { "label":"plant growth medium", "explanation":"Specification of the media for growing the plants or tissue cultured samples, e.g. soil, aeroponic, hydroponic, in vitro solid culture medium, in vitro liquid culture medium. Recommended value is a specific value from ENVO (follow this link http://purl.obolibrary.org/obo/ENVO_00001998)." },
                    { "label":"isolation and growth condition", "explanation":"Publication reference in the form of pubmed ID (pmid), digital object identifier (doi) or url for isolation and growth condition specifications of the organism/material. Mandatory for MIGS and MIMARKS Specimen."},
                    { "label":"tax_id", "explanation":"Taxonomy ID of the organism as in the NCBI Taxonomy database https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi. Entries in the NCBI Taxonomy database have integer taxon IDs. See our tips for sample taxonomy https://ena-docs.readthedocs.io/en/latest/faq/taxonomy.html"},
                    { "label":"scientific_name", "explanation":"Scientific name of the organism as in the NCBI Taxonomy database https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi. Scientific names typically follow the binomial nomenclature. For example, the scientific name for barley is Hordeum vulgare."},
                    { "label":"sample_alias", "explanation":"Unique name of the sample. Example: IPK:HOR_337_BRG"},
                    { "label":"sample_title", "explanation":"Title of the sample that will be displayed in ENA Webin Submission Portal."},
                    { "label":"sample_description", "explanation":"Description of the sample."},
                    { "label":"collection date", "explanation":"The date the sample was collected with the intention of sequencing, either as an instance (single point in time) or interval. In case no exact time is available, the date/time can be right truncated i.e. all of these are valid ISO8601 compliant times: 2008-01-23T19:23:10+00:00; 2008-01-23T19:23:10; 2008-01-23; 2008-01; 2008."},
                    { "label":"propagation", "explanation":"The type of reproduction from the parent stock. Values for this field is specific to different taxa. For phage or virus: lytic/lysogenic/temperate/obligately lytic. For plasmids: incompatibility group. For eukaryotes: sexual/asexual. Mandatory for MIGs of eukayotes, plasmids and viruses."},
                    { "label":"soil_taxonomic/FAO classification ", "explanation":"soil classification from the FAO World Reference Database for Soil Resources"},
                    { "label":"soil pH", "explanation":"pH measurement of the soil; e.g. 6.2"},
                    { "label":"growth facility", "explanation":"type of facility where the sampled plant was grown, permitted values: experimental garden, field, glasshouse, growth chamber, open top chamber, other"},
                    { "label":"sample health state", "explanation":"health status of the subject at the time of sample collection, permitted values: diseased, healthy"},
                    { "label":"sample disease status", "explanation":"list of diseases with which the subject has been diagnosed at the time of sample collection; can include multiple diagnoses; the value of the field depends on subject; e.g. Charcoal rot (Macrophomina phaseolina), Late wilt (Cephalosporium maydis)"},
                    { "label":"ploidy", "explanation":"The ploidy level of the genome (e.g. allopolyploid, haploid, diploid, triploid, tetraploid). It has implications for the downstream study of duplicated gene and regions of the genomes (and perhaps for difficulties in assembly). For terms, please select terms listed under class ploidy (PATO:001374) of Phenotypic Quality Ontology (PATO), and for a browser of PATO (v 2018-03-27) please refer to http://purl.bioontology.org/ontology/PATO"},
                    { "label":"number of replicons", "explanation":"Reports the number of replicons in a nuclear genome of eukaryotes, in the genome of a bacterium or archaea or the number of segments in a segmented virus. Always applied to the haploid chromosome count of a eukaryote. Mandatory for MIGS of eukaryotes, bacteria, archaea and segmented virus. Regular expression:[+-]?[0-9]+"},
                    { "label":"estimated size", "explanation":"The estimated size of the genome (in bp) prior to sequencing. Of particular importance in the sequencing of (eukaryotic) genome which could remain in draft form for a long or unspecified period. Mandatory for MIGS of eukaryotes. Regular expression:[+-]?[0-9]+"},
                    { "label":"organism common name", "explanation":"Common name of the subject organism, e.g. barley."},
                    { "label":"source material identifiers", "explanation":"A unique identifier assigned to a material sample (as defined by http://rs.tdwg.org/dwc/terms/materialSampleID, and as opposed to a particular digital record of a material sample) used for extracting nucleic acids, and subsequent sequencing. The identifier can refer either to the original material collected or to any derived sub-samples. The INSDC qualifiers /specimen_voucher, /bio_material, or /culture_collection may or may not share the same value as the source_mat_id field. For instance, the /specimen_voucher qualifier and source_mat_id may both contain 'UAM:Herps:14' , referring to both the specimen voucher and sampled tissue with the same identifier. However, the /culture_collection qualifier may refer to a value from an initial culture (e.g. ATCC:11775) while source_mat_id would refer to an identifier from some derived culture from which the nucleic acids were extracted (e.g. xatc123 or ark:/2154/R2)."},
                    { "label":"subspecific genetic lineage rank", "explanation":"further information about the genetic distinctness of this lineage by recording additional information i.e. variety, cultivar, ecotype, inbred line,; it can also contain alternative taxonomic information"},
                    { "label":"subspecific genetic lineage name", "explanation":"Name of the infraspecific rank, e.g ecotype Col-0"},
                    { "label":"rooting conditions", "explanation":"relevant rooting conditions, such as field plot size, sowing density, container dimensions, number of plants per container"},
                    { "label":"culture rooting medium", "explanation":"name or reference for the hydroponic or in vitro culture rooting medium, can be a name of a commonly used medium or reference to a specific medium; e.g. Murashige and Skoog medium, if the medium has not been formally published, use the rooting medium descriptors"},
                    { "label":"rooting medium macronutrients", "explanation":"measurement of the culture rooting medium macronutrients (N,P, K, Ca, Mg, S); e.g. KH2PO4 (170mg/L)"},
                    { "label":"rooting medium micronutrients", "explanation":"measurement of the culture rooting medium micronutrients (Fe, Mn, Zn, B, Cu, Mo); e.g. H3BO3 (6.2mg/L)"},
                    { "label":"rooting medium organic supplements", "explanation":"organic supplements of the culture rooting medium, such as vitaimins, amino acids, organic acids, antibiotics activated charcoal; e.g. Nicotinic acid (0.5mg/L)"},
                    { "label":"rooting medium carbon", "explanation":"source of organic carbon in the culture rooting medium; e.g. sucrose"},
                    { "label":"rooting medium regulators", "explanation":"growth regulators in the culture rooting medium, such as cytokinins, auxins, gybberellins, abscisic acid; e.g. 0.5mg/L NAA"},
                    { "label":"rooting medium solidifier", "explanation":"specification of the solidifying agent in the culture rooting medium; e.g. agar"},
                    { "label":"rooting medium pH", "explanation":"pH measurement of the culture rooting medium; e.g. 5.5"},
                    { "label":"air temperature regimen", "explanation":"information about treatment involving an exposure to varying temperatures; should include the temperature, treatment duration, interval and total experimental duration; can include different temperature regimens"},
                    { "label":"mineral nutrient regimen", "explanation":"information about treatment involving the use of mineral supplements; should include the name of mineral nutrient, amount administered, treatment duration, interval and total experimental duration; can include multiple mineral nutrient regimens"},
                    { "label":"watering regimen", "explanation":"information about treatment involving an exposure to watering frequencies; can include multiple regimens"},
                    { "label":"plant treatment", "explanation":"ontology term(s) that describes the plant treatment or relevant environmental conditions, recommend use of Environment Ontology (ENVO) or other ontology, such as XEML Environment Ontology (XEO) or Crop Ontology (CO), more specific fields in the treatment section can be used in addition to or in place of this field"},
                    { "label":"light regimen", "explanation":"information about treatment involving an exposure to light, this includes both light intensity and quality"}
                ]
            },
            {
                "name": "ENA sequencing",
                "id": "ena_sequencing",
                "parameters": [
                    { "label":"Instrument model", "explanation":"The sequencing instrument model used in the experiment. Permitted values: MinION, GridION, PromethION, 454 GS, 454 GS 20, 454 GS FLX, 454 GS FLX+, 454 GS FLX Titanium, 454 GS Junior, Illumina Genome Analyzer, Illumina Genome Analyzer II, Illumina Genome Analyzer IIx, Illumina HiSeq 1000, Illumina HiSeq 1500, Illumina HiSeq 2000, Illumina HiSeq 2500, Illumina HiSeq 3000, Illumina HiSeq 4000, Illumina iSeq 100, Illumina HiScanSQ, Illumina NextSeq 500, Illumina NextSeq 550, Illumina NovaSeq 6000, Illumina NovaSeq X, Illumina HiSeq X Five, Illumina HiSeq X Ten, Illumina MiSeq, Illumina MiniSeq, NextSeq 1000, NextSeq 2000, AB SOLiD System, AB SOLiD System 2.0, AB SOLiD System 3.0, AB SOLiD 3 Plus System, AB SOLiD 4 System, AB SOLiD 4hq System, AB SOLiD PI System, AB 5500 Genetic Analyzer, AB 5500xl Genetic Analyzer, AB 5500xl-W Genetic Analyzer System, Ion Torrent PGM, Ion Torrent Proton, Ion Torrent S5, Ion Torrent S5 XL, Complete Genomics, Onso, PacBio RS, PacBio RS II, Revio, Sequel, Sequel II, Sequel IIe, AB 3730xl Genetic Analyzer, AB 3730 Genetic Analyzer, AB 3500xl Genetic Analyzer, AB 3500 Genetic Analyzer, AB 3130xl Genetic Analyzer, AB 3130 Genetic Analyzer, AB 310 Genetic Analyzer, BGISEQ-500, SNBSEQ-T7, DNBSEQ-G400, DNBSEQ-G50, DNBSEQ-G400 FAST, Ion GeneStudio S5 Prime, Ion GeneStudio S5 Plus, Ion GeneStudio S5, Ion Torrent Genexus, Illumina HiSeq X, MGISEQ-2000RS, BGISEQ-50, Element AVITI, UG 100, Sentosa SQ301, GENIUS, Genapsys Sequencer, GS111, GenoCare 1600, GenoLab M, FASTASeq 300, Tapestri"},
                    { "label":"Library name", "explanation":"The name for the library if any."},
                    { "label":"Library source", "explanation":"The type of source material that is being sequenced. Permitted values: GENOMIC, TRANSCRIPTOMIC, METAGENOMIC, METATRANSCRIPTOMIC, SYNTHETIC, VIRAL RNA, OTHER"},
                    { "label":"Library selection", "explanation":"The method used to select for or against, enrich, or screen the material being sequenced. Permitted values: RANDOM, PCR, RANDOM PCR, RT-PCR, HMPR, MF, repeat fractionation, size fractionation, MSLL, cDNA, ChIP, MNase, DNase, Hybrid Selection, Reduced Representation, Restriction Digest, 5-methylcytidine antibody, MBD2 protein methly-CpG binding domain, CAGE, RACE, MDA, padlock probes capture method, Oligo-dT, Inverse rRNA selection, ChIP-Seq, other, unspecified"},
                    { "label":"Library strategy", "explanation":"The sequencing technique intended for this library. Permitted values: WGA, WXS, RNA-Seq, snRNA-seq, ssRNA-seq, miRNA-Seq, ncRNA-Seq, FL-cDNA, EST, Hi-C, ATAC-seq, WGS, WCS, RAD-Seq, CLONE, POOLCLONE, AMPLICON, CLONEEND, FINISHING, ChIP-Seq, MNase-Seq, DNase-Hypersensivity, Bisulfite-Seq, CTS, MRE-Seq, MeDIP-Seq, MBD-Seq, Tn-Seq, VALIDATION, FAIRE-seq, SELEX, RIP-Seq, ChIA-PET, Synthetic-Long-Read, Targeted-Capture, Tethered Chromatin Conformation Capture, ChM-Seq, GBS, Ribo-Seq, OTHER"},
                    { "label":"Library layout", "explanation":"The library layout specifies whether to expect single or paired configuration of reads. Permitted values: SINGLE, PAIRED"},
                    { "label":"Library construction protocol ", "explanation":"The protocol used to construct the library."},
                    { "label":"Design description", "explanation":"The design of the library including details of how it was constructed. "},
                    { "label":"Insert size", "explanation":"The distance between paired reads."}
                ]
            },
            {
                "name": "Growth",
                "id": "growth",
                "parameters": [
                    { "label":"Growth facility", "explanation":"Type of growth facility in which the study was carried out" },
                    { "label":"Air temperature", "explanation":"List of hourly air temperature throughout the experiment." },
                    { "label":"Organ temperature", "explanation":"List of hourly organ temperatures throughout the experiment" },
                    { "label":"Change over the course of experiment", "explanation":"Difference between the maximum air temperature recorded and the minimum." },
                    { "label":"Photon flux density (PPFD) measured at plant or canopy level", "explanation":"List of hourly Photosynthetic photon flux density (PPFD) throughout the experiment." },
                    { "label":"Average length of the light period", "explanation":"Average length of the light period in h." },
                    { "label":"Light intensity", "explanation":"Intensity of total light" },
                    { "label":"Range in peak light intensity", "explanation":"Range in peak light intensity for the whole experiment." },
                    { "label":"Fraction of outside light intercepted by growth facility components and surrounding structures", "explanation":"Fraction of outside light intercepted by growth facility components and surrounding structures." },
                    { "label":"Type of lamps used", "explanation":"Nature of the light source for controlled environments. XEO: 00137" },
                    { "label":"R/FR ratio", "explanation":"Red light to far red light ratio. XEO:00036" },
                    { "label":"Daily UV-A radiation", "explanation":"Intensity of UVA radiation (320-400 nm); XEO:00037" },
                    { "label":"Daily UV-B radiation", "explanation":"Intensity of UVB radiation (290-320 nm); XEO:00038" },
                    { "label":"Total daily irradiance", "explanation":"Intensity of total light (XEO:00034) averaged over the experiment." },
                    { "label":"Atmospheric CO2 concentration", "explanation":"Denotes whether the atmospheric CO2 concentrations were controlled during the experiment." },
                    { "label":"Average CO2 during the light and dark periods", "explanation":"Concentration of CO2 in the air during the light and dark periods (XEO:00023)" },
                    { "label":"Vapour pressure deficit", "explanation":"Vector of hourly VPD throughout the experiment .The Vapour Pressure Deficit in the air defines the difference between the maximal amount of water in the air minus the actual amount during the light period in kPa (XEO:00021)" },
                    { "label":"Average relative humidity during the light period", "explanation":"The relative humidity describes the amount of water vapor in the air, generally expressed as the percentage of the maximum water vapor during the light period (XEO:00020)" },
                    { "label":"Average VPDair during the dark period.", "explanation":"The Vapour Pressure Deficit in the air defines the difference between the maximal amount of water in the air minus the actual amount during the light period in kPa (XEO:00021)" },
                    { "label":"Average relative humidity during the dark period", "explanation":"The relative humidity describes the amount of water vapor in the air, generally expressed as the percentage of the maximum water vapor during the dark period (XEO:00020)" },
                    { "label":"Rooting conditions", "explanation":"" },
                    { "label":"Rooting medium", "explanation":"An abiotic plant treatment (EO:0007191) involving the use of a solid or liquid substrate for growing plants or tissue-cultured plant samples." },
                    { "label":"Container type", "explanation":"Type of container used to grow/treat the plants.XEO:00040" },
                    { "label":"Container volume", "explanation":"Volume that is available to the roots. XEO:00113" },
                    { "label":"Container height", "explanation":"Height of the container." },
                    { "label":"Number of plants per containers", "explanation":"Number of plants per container. XEO:00112" },
                    { "label":"Plot size", "explanation":"Description of experimental sites." },
                    { "label":"Sowing density", "explanation":"Sowing density." },
                    { "label":"Rooting medium replenishment", "explanation":"Frequency and volume of replenishment or addition of the rooting medium." },
                    { "label":"pH", "explanation":"Value of soil pH, separated by a colon, the depth (cm) from where soil sample was taken. Multiple values are separated by semicolon. " },
                    { "label":"Porosity", "explanation":"A permeability quality inhering in a bearer by virtue of the bearer's disposition to admit the passage of gas or liquid through pores or interstices. PATO:0000973" },
                    { "label":"Medium temperature", "explanation":"Temperature of the replenishment medium. " },
                    { "label":"Soil penetration strength", "explanation":"Soil penetration strength as measured by the standard penetration test (SPT; ISO 22476-3), the cone penetrometer test (CPT), in-situ vane shear tests, and shear wave velocity measurements." },
                    { "label":"Water retention capacity", "explanation":"Potential energy of water per unit mass of water in the soil.XEO:00126" },
                    { "label":"Organic matter content", "explanation":"Proportion of organic matter in the soil. XEO:00117" },
                    { "label":"Nutrients", "explanation":"" },
                    { "label":"Medium composition", "explanation":"Concentration of the nutrients" },
                    { "label":"Extractable N content per unit ground volume before fertiliser added", "explanation":"Extractable N content per unit ground area before fertiliser added" },
                    { "label":"Type and amount of fertiliser added per container/m2", "explanation":"The current practice in field /greenhouse management for fertilization" },
                    { "label":"Concentration of [nutrient] before start of the experiment", "explanation":"Concentration of a nutrient at the start of an experiment." },
                    { "label":"Extractable N content per unit ground area at the end of the experiment", "explanation":"Extractable N content per unit ground area at the end of the experiment" },
                    { "label":"Volume and timing of water added per container", "explanation":"A defined volume of water supplied to each pot." },
                    { "label":"Matrix potential", "explanation":"Range in water potential for soil." },
                    { "label":"Watering regimen", "explanation":"The treatment involving an exposure to watering frequencies." },
                    { "label":"Composition of nutrient solutions used for irrigation", "explanation":"For all nutrients, including micronutrients, the ontology term with concentration." },
                    { "label":"Electrical conductivity", "explanation":"A conductivity quality inhering in a bearer by virtue of the bearer's ability to convey electricity." }
                ]
            },
            {
                "name": "Phenotyping",
                "id": "phenotyping"
            }
        ]
    }
}