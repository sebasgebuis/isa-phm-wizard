window.explanations = [
    {
        "id": "ENA-1",
        "enaTerm": "Study Name",
        "definition": "The name of the Study. Should be short but precise.",
        "example": "IPK:DNA_SEQ189B",
        "format": "1 per ENA submission",
        "cardinality": "1"
    },
    {
        "id": "ENA-2",
        "enaTerm": "Short descriptive study title",
        "question": "What is the title of your study?",
        "definition": "A short descriptive title of your study. Will be displayed in the Study Report.",
        "example": "DNA Sequencing Study of 189 Barley Accessions under drought stress",
        "format": "1 per ENA submission",
        "cardinality": "0-1"
    },
    {
        "id": "ENA-3",
        "enaTerm": "Detailed study abstract",
        "question": "What is the detailed study abstract?",
        "definition": "A detailed description of the studies goals and methods.",
        "example": "Barley Genebank Genomics: Genotyping-by-sequencing for all barley (Hordeum vulgare) accessions of the federal in-situ genebank IPK-Gatersleben in Germany.",
        "format": "Free text (short)",
        "cardinality": "1"
    },
    {
        "id": "ENA-4",
        "enaTerm": "Library name",
        "question": "What is the name of the library?",
        "definition": "The name for the library if any.",
        "example": "barley_sequencing_library_1",
        "format": "Free text (short)",
        "cardinality": "0-1"
    },
    {
        "id": "ENA-5",
        "enaTerm": "Geographic location (country and/or sea)",
        "question": "What is the name of the geographic location where the DNA sequencing experiment was conducted?",
        "definition": "The geographical origin of where the samples were collected from, with the intention of sequencing, as defined by the country or sea name. Country or sea names should be chosen from the INSDC country list (http://insdc.org/country.html).",
        "example": "Germany",
        "format": "Permitted values",
        "cardinality": "1"
    },
    {
        "id": "ENA-6",
        "enaTerm": "Geographic location (latitude)",
        "question": "What is the name of the latitude of the geographic location where the DNA sequencing experiment was conducted?",
        "definition": "The geographical origin of the samples as defined by latitude. The values should be reported in decimal degrees and in WGS84 system.",
        "example": "+51.816",
        "format": "Regular expression",
        "cardinality": "1"
    },
    {
        "id": "ENA-7",
        "enaTerm": "Geographic location (longitude)",
        "question": "What is the name of the longitude of the geographic location where the DNA sequencing experiment was conducted?",
        "definition": "The geographical origin of the sample as defined by longitude. The values should be reported in decimal degrees and in WGS84 system.",
        "example": "+11.283",
        "format": "Regular expression",
        "cardinality": "1"
    },
    {
        "id": "ENA-8",
        "enaTerm": "Growth Protocol Description",
        "definition": "Human-readable text describing how the plants were grown.",
        "example": "The plants were grown in a Lemna-Tec greenhouse under constant conditions.",
        "format": "",
        "cardinality": "0-1"
    },
    {
        "id": "DM-4",
        "miappeTerm": "Investigation description",
        "question": "Please describe your investigation.",
        "definition": "A text summarising the plant phenotyping project in more detail.",
        "example": "The migration of maize from tropical to temperate climates was accompanied by a dramatic evolution in flowering time. To gain insight into the genetic architecture of this adaptive trait, we conducted a 50K SNP-based genome-wide association and diversity investigation on a panel of tropical and temperate American and European representatives.",
        "format": "Free text",
        "cardinality": "0-1"
    },
    {
        "id": "DM-5",
        "miappeTerm": "Submission date",
        "question": "When was the dataset submitted to ENA?",
        "definition": "Date of submission of the dataset presently being described to ENA.",
        "example": "2012-12-17",
        "format": "Date/Time (ISO 8601, optional time zone)",
        "cardinality": "0-1"
    },
    {
        "id": "DM-6",
        "miappeTerm": "Public release date",
        "question": "What is the date of the first public release of the dataset?",
        "definition": "Date of first public release of the dataset presently being described.",
        "example": "2013-02-25",
        "format": "Date/Time (ISO 8601, optional time zone)",
        "cardinality": "0-1"
    },
    {
        "id": "DM-7",
        "miappeTerm": "License",
        "definition": "License for the reuse of the data associated with this study. The Creative Commons licenses cover most use cases and are recommended.",
        "example": "CC BY-SA 4.0, Unreported",
        "format": "Unique identifier",
        "cardinality": "0-1"
    },
    {
        "id": "DM-8",
        "miappeTerm": "MIAPPE version",
        "definition": "The version of MIAPPE used.",
        "example": "1.1",
        "format": "Version number",
        "cardinality": "1"
    },
    {
        "id": "DM-9",
        "miappeTerm": "Associated publication",
        "definition": "An identifier for a literature publication where the investigation is described. Use of DOIs is recommended.",
        "example": "doi:10.1371/journal.pone.0071377",
        "format": "DOI",
        "cardinality": "0+"
    },
    {
        "id": "DM-10",
        "miappeTerm": "Study",
        "definition": "A study (or experiment) comprises a series of assays (or measurements) of one or more types, undertaken to answer a particular biological question.",
        "example": "",
        "format": "1+ per investigation",
        "cardinality": ""
    },
    {
        "id": "DM-11",
        "miappeTerm": "Study unique ID",
        "definition": "Unique identifier comprising the name or identifier for the institution/database hosting the submission of the study data, and the identifier of the study in that institution.",
        "example": "\"EBI:12345678\nhttp://phenome-fppn.fr/maugio/2013/t2351\"",
        "format": "Unique identifier",
        "cardinality": "0-1"
    },
    {
        "id": "DM-12",
        "miappeTerm": "Study title",
        "definition": "Human-readable text summarising the study",
        "example": "2002 evaluation of flowering time for a panel of 375 maize lines at the experimental station of Maugio (France).",
        "format": "Free text (short)",
        "cardinality": "1"
    },
    {
        "id": "DM-13",
        "miappeTerm": "Study description",
        "definition": "Human-readable text describing the study",
        "example": "2002 evaluation of male and female flowering time for a panel of 375 maize lines representing the worldwide genetic diversity at the experimental station of Maugio, France.",
        "format": "Free text",
        "cardinality": "0-1"
    },
    {
        "id": "DM-14",
        "miappeTerm": "Start date of study",
        "definition": "Date and, if relevant, time when the experiment started",
        "example": "\"2002-04-04\n2006-09-27T10:23:21+00:00\"",
        "format": "Date/Time (ISO 8601, optional time zone)",
        "cardinality": "1"
    },
    {
        "id": "DM-15",
        "miappeTerm": "End date of study",
        "definition": "Date and, if relevant, time when the experiment ended",
        "example": "2002-11-27",
        "format": "Date/Time (ISO 8601, optional time zone)",
        "cardinality": "0-1"
    },
    {
        "id": "DM-16",
        "miappeTerm": "Contact institution",
        "definition": "Name and address of the institution responsible for the study.",
        "example": "IPK Gatersleben, Stadt Seeland, Germany",
        "format": "Free text (short)",
        "cardinality": "1"
    },
    {
        "id": "DM-17",
        "miappeTerm": "Geographic location (country)",
        "definition": "The country where the experiment took place, either as a full name or preferably as a 2-letter code.",
        "example": "FR",
        "format": "Country name or 2-letter code (ISO 3166)",
        "cardinality": "1"
    },
    {
        "id": "DM-18",
        "miappeTerm": "Experimental site name",
        "definition": "The name of the natural site, experimental field, greenhouse, phenotyping facility, etc. where the experiment took place.",
        "example": "Experimental field west, IPK Gatersleben, Germany",
        "format": "Free text (short)",
        "cardinality": "1"
    },
    {
        "id": "DM-19",
        "miappeTerm": "Geographic location (latitude)",
        "definition": "Latitude of the experimental site in degrees, in decimal format.",
        "example": "+43.619264",
        "format": "Degrees in the decimal format (ISO 6709)",
        "cardinality": "0-1 (1 if longitude is provided)"
    },
    {
        "id": "DM-20",
        "miappeTerm": "Geographic location (longitude)",
        "definition": "Longitude of the experimental site in degrees, in decimal format.",
        "example": "+3.967454",
        "format": "Degrees in the decimal format (ISO 6709)",
        "cardinality": "0-1 (1 if latitude is provided)"
    },
    {
        "id": "DM-21",
        "miappeTerm": "Geographic location (altitude)",
        "definition": "Altitude of the experimental site, provided in metres (m).",
        "example": "100 m",
        "format": "Numeric + unit abbreviation",
        "cardinality": "0-1"
    },
    {
        "id": "DM-67",
        "miappeTerm": "Growth Protocol Description",
        "definition": "Human-readable text describing how the plants growed up.",
        "example": "The plants were grown in a Lemna-Tec greenhouse under constant conditions.",
        "format": "",
        "cardinality": "0-1"
    }
]