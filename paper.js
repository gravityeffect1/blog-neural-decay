document.addEventListener('DOMContentLoaded', function() {
    const curatedPapers = [
        {
            title: "Design of highly functional genome editors by modeling the universe of CRISPR-Cas sequences",
            authors: "Jeffrey A. Ruffolo, Stephen Nayfach, Joseph Gallagher, et al.",
            abstract: "Using large language models trained on biological diversity at scale, we demonstrate the first successful precision editing of the human genome with a programmable gene editor designed with AI. We generated 4.8x the number of protein clusters across CRISPR-Cas families found in nature.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.04.22.590591v1",
            date: "April 2024"
        },
        {
            title: "Successful Gene Editing of Apolipoprotein E4 to E3 in Brain of Alzheimer Model Mice After a Single IV Dose",
            authors: "Teter B, Campagna J, Zhu C, McCauley GE, et al.",
            abstract: "We describe our use of synthetic exosomes carrying CRISPR to successfully edit ApoE4 to E3 in brain tissue of an E4-expressing mouse model, providing proof-of-concept for Alzheimer's treatment.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.04.23.590784v1",
            date: "April 2024"
        },
        {
            title: "CRISPR-GPT for Agentic Automation of Gene Editing Experiments",
            authors: "Yuanhao Qu, Kaixuan Huang, Ming Yin, Kanghong Zhan, et al.",
            abstract: "We present CRISPR-GPT, an LLM agent system to automate and enhance CRISPR-based gene-editing design and data analysis, incorporating domain expertise for complex task decomposition and decision-making.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.04.25.591003v4",
            date: "April 2024"
        },
        {
            title: "Packaged delivery of CRISPR-Cas9 ribonucleoproteins accelerates genome editing",
            authors: "Karp H, Zoltek M, Wasko K, Vazquez AL, et al.",
            abstract: "We compared electroporation and enveloped delivery vehicles (EDVs) to investigate Cas9 dosage requirements for genome editing. EDV-mediated editing was over 30-fold more efficient than electroporation.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.10.18.619117v1",
            date: "October 2024"
        },
        {
            title: "Viral delivery of compact CRISPR-Cas12f for in vivo gene editing applications",
            authors: "Sharrar A, Meacham Z, Staples-Ager J, et al.",
            abstract: "We demonstrate viral delivery using adeno-associated virus (AAV) serotypes for compact CRISPR-Cas12f systems, overcoming size limitations that constrain drug development flexibility and manufacturing efficiency.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.02.06.578965v1",
            date: "February 2024"
        },
        {
            title: "Sustained efficacy of CRISPR-Cas13b gene therapy for FSHD is challenged by immune response",
            authors: "Afrooz Rashnonejad, Manal Farea, Gholamhossein Amini-Chermahini, et al.",
            abstract: "We developed a CRISPR-Cas13b system that cleaves DUX4 mRNA for treating facioscapulohumeral muscular dystrophy (FSHD), but found sustained efficacy is limited by immune responses to Cas13b.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.12.18.629250v1",
            date: "December 2024"
        },
        {
            title: "Long Read Sequencing reveals transgene concatemerization following AAV-driven CRISPR delivery",
            authors: "Muhammad W. Luqman, Piroon Jenjaroenpun, Jessica Spathos, et al.",
            abstract: "We employed Oxford Nanopore long-read sequencing to analyze editing outcomes following AAV-driven electroporation of CRISPR RNP complexes in mouse zygotes, revealing important integration patterns.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.02.18.580906v1",
            date: "February 2024"
        },
        {
            title: "Development of a CRISPR/Cas9-induced gene editing system for Pseudoalteromonas fuliginea",
            authors: "Zedong Duan, Ruyi Yang, Tingyi Lai, et al.",
            abstract: "We introduced the CRISPR/Cas9 system into Pseudoalteromonas for the first time, investigating applications for gene editing in P. fuliginea, a species thriving in frigid polar oceans.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2025.05.30.657001v1",
            date: "May 2025"
        },
        {
            title: "Machine Learning Empowering Drug Discovery: Applications, Opportunities and Challenges",
            authors: "Xin Qi, Yuanchun Zhao, Zhuang Qi, et al.",
            abstract: "This review examines how machine learning, especially transformer-based models, is revolutionizing drug discovery by accelerating the pace and reducing the cost of new drug development.",
            source: "MDPI Molecules",
            url: "https://www.mdpi.com/1420-3049/29/4/903",
            date: "February 2024"
        }
    ];

    let displayedPapers = [];
    const container = document.getElementById('paper-of-the-day');
    if (!container) return;

    function showRandomPaper() {
        let available = curatedPapers.filter(p => !displayedPapers.includes(p.title));
        if (available.length === 0) {
            displayedPapers = [];
            available = [...curatedPapers];
        }
        const paper = available[Math.floor(Math.random() * available.length)];
        displayedPapers.push(paper.title);
        displayPaper(paper);
    }

    function displayPaper(paper) {
        container.innerHTML = `
            <a href="${paper.url}" target="_blank" rel="noopener noreferrer" class="paper-title">${paper.title}</a>
            <div class="paper-meta">${paper.authors} — ${paper.source}, ${paper.date}</div>
            <p class="paper-abstract">${paper.abstract}</p>
            <a href="${paper.url}" target="_blank" rel="noopener noreferrer" class="paper-link">read abstract →</a>
        `;
    }

    showRandomPaper();
});
