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
                "name": "ENA Default Sample Checklist",
                "id": "ena_default_sample",
                "parameters": [
                    { "label":"tax_id", "explanation":"Taxonomy ID of the organism as in the NCBI Taxonomy database https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi. Entries in the NCBI Taxonomy database have integer taxon IDs. See our tips for sample taxonomy https://ena-docs.readthedocs.io/en/latest/faq/taxonomy.html"},
                    { "label":"scientific_name", "explanation":"Scientific name of the organism as in the NCBI Taxonomy database https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi. Scientific names typically follow the binomial nomenclature. For example, the scientific name for barley is Hordeum vulgare."},
                    { "label":"sample_alias", "explanation":"Unique name of the sample. Example: IPK:HOR_337_BRG"},
                    { "label":"sample_title", "explanation":"Title of the sample that will be displayed in ENA Webin Submission Portal."},
                    { "label":"sample_description", "explanation":"Description of the sample."},
                    { "label":"collection date", "explanation":"The date the sample was collected with the intention of sequencing, either as an instance (single point in time) or interval. In case no exact time is available, the date/time can be right truncated i.e. all of these are valid ISO8601 compliant times: 2008-01-23T19:23:10+00:00; 2008-01-23T19:23:10; 2008-01-23; 2008-01; 2008."},
                    { "label":"cell_type", "explanation":"cell type from which the sample was obtained"},
                    { "label":"dev_stage", "explanation":"if the sample was obtained from an organism in a specific developmental stage, it is specified with this qualifier"},
                    { "label":"germline", "explanation":"the sample described presented in the entry has not undergone somatic genomic rearrangement as part of an adaptive immune response; it is the unrearranged molecule that was inherited from the parental germline"},
                    { "label":"tissue_lib", "explanation":"tissue library from which sample was obtained"},
                    { "label":"tissue_type", "explanation":"tissue type from which the sample was obtained"},
                    { "label":"isolation_source", "explanation":"describes the physical, environmental and/or local geographical source of the biological sample from which the sample was derived"},
                    { "label":"lat_lon", "explanation":"geographical coordinates of the location where the specimen was collected"},
                    { "label":"collected_by", "explanation":"name of persons or institute who collected the specimen"},
                    { "label":"geographic location (region and locality) ", "explanation":"The geographical origin of the sample as defined by the specific region name followed by the locality name."},
                    { "label":"identified_by", "explanation":"name of the expert who identified the specimen taxonomically"},
                    { "label":"environmental_sample", "explanation":"identifies sequences derived by direct molecular isolation from a bulk environmental DNA sample (by PCR with or without subsequent cloning of the product, DGGE, or other anonymous methods) with no reliable identification of the source organism. Permitted values: No, Yes"},
                    { "label":"mating_type", "explanation":"mating type of the organism from which the sequence was obtained; mating type is used for prokaryotes, and for eukaryotes that undergo meiosis without sexually dimorphic gametes"},
                    { "label":"sex", "explanation":"sex of the organism from which the sample was obtained"},
                    { "label":"lab_host", "explanation":"scientific name of the laboratory host used to propagate the source organism from which the sample was obtained"},
                    { "label":"host scientific name", "explanation":"Scientific name of the natural (as opposed to laboratory) host to the organism from which sample was obtained."},
                    { "label":"bio_material", "explanation":"Unique identifier that references the biological material from which the sample was obtained and that ideally exists in a curated collection (e.g. stock centres, seed banks, DNA banks). The ID should have the following structure: name of the institution (institution code) followed by the collection code (if available) and the voucher id (institution_code:collection_code:voucher_id). Please note institution codes and collection codes are taken from a controlled vocabulary maintained by the INSDC: https://ftp.ncbi.nih.gov/pub/taxonomy/biocollections/"},
                    { "label":"culture_collection", "explanation":"Unique identifier that references the culture (e.g. live microbial and viral cultures and cell lines) from which the sample has been obtained and that have been deposited in curated culture collections. The ID needs to provide an institution code and the culture id, with optional collection code, in the following structure: (-institution_code:(collection_code):voucher_id. Please note institution codes (and optional collection codes) are taken from a controlled vocabulary maintained by the INSDC: https://ftp.ncbi.nih.gov/pub/taxonomy/biocollections/"},
                    { "label":"specimen_voucher", "explanation":"Unique identifier that references the physical specimen that remains after the sequence has been obtained and that ideally exists in a curated collection. The ID should have the following structure: name of the institution (institution code) followed by the collection code (if available) and the voucher id (institution_code:collection_code:voucher_id). Please note institution codes and collection codes are taken from a controlled vocabulary maintained by the INSDC: https://ftp.ncbi.nih.gov/pub/taxonomy/biocollections/"},
                    { "label":"cultivar", "explanation":"cultivar (cultivated variety) of plant from which sample was obtained"},
                    { "label":"ecotype", "explanation":"a population within a given species displaying genetically based, phenotypic traits that reflect adaptation to a local habitat."},
                    { "label":"isolate", "explanation":"individual isolate from which the sample was obtained"},
                    { "label":"sub_species", "explanation":"name of sub-species of organism from which sample was obtained"},
                    { "label":"variety", "explanation":"variety (= varietas, a formal Linnaean rank) of organism from which sample was derived."},
                    { "label":"sub_strain", "explanation":"name or identifier of a genetically or otherwise modified strain from which sample was obtained, derived from a parental strain (which should be annotated in the strain field; sub_strain from which sample was obtained"},
                    { "label":"cell_line", "explanation":"cell line from which the sample was obtained"},
                    { "label":"serotype", "explanation":"serological variety of a species characterized by its antigenic properties"},
                    { "label":"serovar", "explanation":"serological variety of a species (usually a prokaryote) characterized by its antigenic properties"},
                    { "label":"strain", "explanation":"Name of the strain from which the sample was obtained."}
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