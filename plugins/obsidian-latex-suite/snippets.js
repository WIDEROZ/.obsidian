[
    // General Obsidian macro

    // Text mode
    {trigger: "vaiid", replacement: "variables aléatoires indépendantes identiquement distribuées", options: "tAw"},
    {trigger: "tab", replacement: "|  |  |\n| -- | -- |\n", options: "tAw"},

	// Math mode
	{trigger: "mk", replacement: "$$0$", options: "c"},
	{trigger: "dm", replacement: "$$$0$$", options: "tAw"},

    // ----- Ajouté par moi ----- //
    // --- Algèbre --- //
    // Groupes
    {trigger: "sg", replacement: "\\underset{sg}{\\subset}", options: "mA"},
    {trigger: "sev", replacement: "\\underset{sev}{\\subset}", options: "mA"},

    // Espaces vectoriels
    {trigger: "scal", replacement: "\\left< $0 \\right> $1", options: "mA"},
    {trigger: "dim", replacement: "\\dim", options: "mA"},
    {trigger: "diag", replacement: "\\mathrm\{diag\}", options: "mA"},
    {trigger: "deg", replacement: "\\deg", options: "mA"},
    {trigger: "rac", replacement: "\\mathrm{Rac}", options: "mA"},
    {trigger: "Ker", replacement: "\\mathrm\{Ker\}", options: "mA"},
    {trigger: "rg", replacement: "\\mathrm{rg}", options: "mA"},
    {trigger: "Im", replacement: "\\mathrm\{Im\}", options: "mAw"},
    {trigger: "Tr", replacement: "\\mathrm{Tr}", options: "mA"},

    // Matrices
    {trigger: "Com", replacement: "\\mathrm{Com}", options: "mA"},
    {trigger: "cof", replacement: "\\mathrm{cof}", options: "mA"},
    

    // --- Analyse --- //
    {trigger: "deriv", replacement: "\\frac{\\partial $0}{\\partial $1} $2", options: "mA"},
    {trigger: "mapsto", replacement: "\\mapsto", options: "mA"},
    {trigger: "tend", replacement: "\\underset{n \\to +\\infty}{\\longrightarrow} ", options: "mA"},
    {trigger: "CVU", replacement: "\\overset{\\mathrm{CVU}}{\\underset{I}{\\longrightarrow}}", options: "mA"},
    {trigger: "CPM", replacement: "\\mathrm{CPM}_{\\mathbb{K}}([a, b])", options: "mA"},

    {trigger: "max", replacement: "\\max", options: "mA"},
    {trigger: "min", replacement: "\\min", options: "mA"},
    {trigger: "sup", replacement: "\\sup", options: "mA"},
    {trigger: "inf", replacement: "\\inf", options: "mA"},



    // --- Ensembles --- //
    {trigger: "cup", replacement: "\\cup", options: "mA"},
    {trigger: "cap", replacement: "\\cap", options: "mA"},
    {trigger: "Cup", replacement: "\\bigcup", options: "mA"},
    {trigger: "Cap", replacement: "\\bigcap", options: "mA"},
    {trigger: "cuup", replacement: "\\sqcup", options: "mA"},
    {trigger: "Cuup", replacement: "\\bigsqcup", options: "mA"},
    {trigger: "vide", replacement: "\\varnothing", options: "mA"},
    {trigger: "ent", replacement: "[\\![$0]\\!]$1", options: "mA"},
    {trigger: "ens", replacement: "\\{ $0 \\}$1", options: "mA"},

    {trigger: "Rbar", replacement: "\\overline{\\mathbb{R}}", options: "mA"},
    {trigger: "Ao", replacement: "\\overset{\\space \\space o}{A}", options: "mA"},


    // --- Probabilités --- //
    {trigger: "indep", replacement: "\\amalg", options: "mA"},
    {trigger: "Var", replacement: "\\mathrm{Var}", options: "mA"},
    {trigger: "Cov", replacement: "\\mathrm\{Cov\}", options: "mA"},


    // --- Fonctions --- //
    {trigger: "sinc", replacement: "\mathrm\{sinc\}", options: "mA"},

    {trigger: "ln", replacement: "\\ln", options: "mA"},
    {trigger: "log", replacement: "\\log", options: "mA"},
    {trigger: "exp", replacement: "\\exp", options: "mA"},

    // --- Arithmétique --- //
    {trigger: "wedge", replacement: "\\wedge", options: "mA"},
    {trigger: "vee", replacement: "\\vee", options: "mA"},
    {trigger: "bin", replacement: "\\binom{$0}{$1}", options: "mA"},

    // -- Autre -- //
    // Autre
    {trigger: "neg", replacement: "\\neg", options: "mA"},
    {trigger: "vda", replacement: "\\vdash", options: "mA"},
    {trigger: "tab", replacement: "\\quad", options: "mA"},
    {trigger: "succ", replacement: "\\succ", options: "mA"},
    {trigger: "angle", replacement: "\\widehat{$0}$1", options: "mA"},
    {trigger: "can", replacement: "\\mathrm{can}", options: "mA"},
    {trigger: "<-", replacement: "\\leftarrow", options: "mA"},
    {trigger: "box", replacement: "\\boxed{$0}", options: "mA"},
    {trigger: "ssi", replacement: "\\Leftrightarrow", options: "mA"},
    {trigger: "vec", replacement: "\\overrightarrow{$0}$1", options: "mA"},
    {trigger: "top", replacement: "\\top", options: "mA"},
    {trigger: "bot", replacement: "\\bot", options: "mA"},
    {trigger: "arg", replacement: "\\arg", options: "mA"},

    // Mettre un charactère en haut ou en bas (avec ou sans ligne)
    {trigger: "und", replacement: "\\underset{$0}{$1}", options: "mA"},
    {trigger: "over", replacement: "\\overset{$0}{$1}", options: "mA"},
    {trigger: "surli", replacement: "\\overline{$0}", options: "mA"},
    {trigger: "sousli", replacement: "\\underline{$0}", options: "mA"},



    // ----- FIN ----- //
    

    // MATHBB //
    {trigger: "AA", replacement: "\\mathbb{A}", options: "mA"},
    {trigger: "BB", replacement: "\\mathbb{B}", options: "mA"},
    {trigger: "CC", replacement: "\\mathbb{C}", options: "mA"},
    {trigger: "DD", replacement: "\\mathbb{D}", options: "mA"},
    {trigger: "EE", replacement: "\\mathbb{E}", options: "mA"},
    {trigger: "FF", replacement: "\\mathbb{F}", options: "mA"},
    {trigger: "GG", replacement: "\\mathbb{G}", options: "mA"},
    {trigger: "HH", replacement: "\\mathbb{H}", options: "mA"},
    {trigger: "II", replacement: "\\mathbb{I}", options: "mA"},
    {trigger: "JJ", replacement: "\\mathbb{J}", options: "mA"},
    {trigger: "KK", replacement: "\\mathbb{K}", options: "mA"},
    {trigger: "LL", replacement: "\\mathbb{L}", options: "mA"},
    {trigger: "MM", replacement: "\\mathbb{M}", options: "mA"},
    {trigger: "NN", replacement: "\\mathbb{N}", options: "mA"},
    {trigger: "OO", replacement: "\\mathbb{O}", options: "mA"},
    {trigger: "PP", replacement: "\\mathbb{P}", options: "mA"},
    {trigger: "QQ", replacement: "\\mathbb{Q}", options: "mA"},
    {trigger: "RR", replacement: "\\mathbb{R}", options: "mA"},
    {trigger: "SS", replacement: "\\mathbb{S}", options: "mA"},
    {trigger: "TT", replacement: "\\mathbb{T}", options: "mA"},
    {trigger: "UU", replacement: "\\mathbb{U}", options: "mA"},
    {trigger: "VV", replacement: "\\mathbb{V}", options: "mA"},
    {trigger: "WW", replacement: "\\mathbb{W}", options: "mA"},
    {trigger: "XX", replacement: "\\mathbb{X}", options: "mA"},
    {trigger: "YY", replacement: "\\mathbb{Y}", options: "mA"},
    {trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA"},
    
    // FIN MATHBB //

    // MATHCAL //

    {trigger: "\\mathbb{A}A", replacement: "\\mathcal{A}", options: "mA"},
    {trigger: "\\mathbb{B}B", replacement: "\\mathcal{B}", options: "mA"},
    {trigger: "\\mathbb{C}C", replacement: "\\mathcal{C}", options: "mA"},
    {trigger: "\\mathbb{D}D", replacement: "\\mathcal{D}", options: "mA"},
    {trigger: "\\mathbb{E}E", replacement: "\\mathcal{E}", options: "mA"},
    {trigger: "\\mathbb{F}F", replacement: "\\mathcal{F}", options: "mA"},
    {trigger: "\\mathbb{G}G", replacement: "\\mathcal{G}", options: "mA"},
    {trigger: "\\mathbb{H}H", replacement: "\\mathcal{H}", options: "mA"},
    {trigger: "\\mathbb{I}I", replacement: "\\mathcal{I}", options: "mA"},
    {trigger: "\\mathbb{J}J", replacement: "\\mathcal{J}", options: "mA"},
    {trigger: "\\mathbb{K}K", replacement: "\\mathcal{K}", options: "mA"},
    {trigger: "\\mathbb{L}L", replacement: "\\mathcal{L}", options: "mA"},
    {trigger: "\\mathbb{M}M", replacement: "\\mathcal{M}", options: "mA"},
    {trigger: "\\mathbb{N}N", replacement: "\\mathcal{N}", options: "mA"},
    {trigger: "\\mathbb{O}O", replacement: "\\mathcal{O}", options: "mA"},
    {trigger: "\\mathbb{P}P", replacement: "\\mathcal{P}", options: "mA"},
    {trigger: "\\mathbb{Q}Q", replacement: "\\mathcal{Q}", options: "mA"},
    {trigger: "\\mathbb{R}R", replacement: "\\mathcal{R}", options: "mA"},
    {trigger: "\\mathbb{S}S", replacement: "\\mathcal{S}", options: "mA"},
    {trigger: "\\mathbb{T}T", replacement: "\\mathcal{T}", options: "mA"},
    {trigger: "\\mathbb{U}U", replacement: "\\mathcal{U}", options: "mA"},
    {trigger: "\\mathbb{V}V", replacement: "\\mathcal{V}", options: "mA"},
    {trigger: "\\mathbb{W}W", replacement: "\\mathcal{W}", options: "mA"},
    {trigger: "\\mathbb{X}X", replacement: "\\mathcal{X}", options: "mA"},
    {trigger: "\\mathbb{Y}Y", replacement: "\\mathcal{Y}", options: "mA"},
    {trigger: "\\mathbb{Z}Z", replacement: "\\mathcal{Z}", options: "mA"},

    // FIN MATHCAL //
    
    
    

	// Dashes
	// {trigger: "--", replacement: "–", options: "tA"},
	// {trigger: "–-", replacement: "—", options: "tA"},
	// {trigger: "—-", replacement: "---", options: "tA"},


	// --- Greek letters --- //
	{trigger: "@a", replacement: "\\alpha", options: "mA"},
	{trigger: "@A", replacement: "\\alpha", options: "mA"},
	{trigger: "@b", replacement: "\\beta", options: "mA"},
	{trigger: "@B", replacement: "\\beta", options: "mA"},
	{trigger: "@c", replacement: "\\chi", options: "mA"},
	{trigger: "@C", replacement: "\\chi", options: "mA"},
	{trigger: "@g", replacement: "\\gamma", options: "mA"},
	{trigger: "@G", replacement: "\\Gamma", options: "mA"},
	{trigger: "@d", replacement: "\\delta", options: "mA"},
	{trigger: "@D", replacement: "\\Delta", options: "mA"},
	{trigger: "@e", replacement: "\\epsilon", options: "mA"},
	{trigger: "@E", replacement: "\\epsilon", options: "mA"},
	{trigger: ":e", replacement: "\\varepsilon", options: "mA"},
	{trigger: ":E", replacement: "\\varepsilon", options: "mA"},
	{trigger: "@z", replacement: "\\zeta", options: "mA"},
	{trigger: "@Z", replacement: "\\zeta", options: "mA"},
	{trigger: "@t", replacement: "\\theta", options: "mA"},
	{trigger: "@T", replacement: "\\Theta", options: "mA"},
	{trigger: "@k", replacement: "\\kappa", options: "mA"},
	{trigger: "@K", replacement: "\\kappa", options: "mA"},
	{trigger: "@l", replacement: "\\lambda", options: "mA"},
	{trigger: "@L", replacement: "\\Lambda", options: "mA"},
	{trigger: "@m", replacement: "\\mu", options: "mA"},
	{trigger: "@M", replacement: "\\mu", options: "mA"},
	{trigger: "@r", replacement: "\\rho", options: "mA"},
	{trigger: "@R", replacement: "\\rho", options: "mA"},
	{trigger: "@s", replacement: "\\sigma", options: "mA"},
	{trigger: "@S", replacement: "\\Sigma", options: "mA"},
	{trigger: "ome", replacement: "\\omega", options: "mA"},
	{trigger: "@o", replacement: "\\omega", options: "mA"},
	{trigger: "@O", replacement: "\\Omega", options: "mA"},
	{trigger: "@u", replacement: "\\upsilon", options: "mA"},
	{trigger: "@U", replacement: "\\Upsilon", options: "mA"},

	// Add backslash before greek letters and symbols
	{trigger: "(${GREEK}|${SYMBOL})", replacement: "\\[[0]]", options: "rmAw", description: "Add backslash before greek letters and symbols"},

	// Insert space after greek letters and symbols, etc
	{trigger: "\\\\(${GREEK}|${SYMBOL}|${SHORT_SYMBOL})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},

    {trigger: "epsilon", replacement: "\\varepsilon", options: "mAw", priority: 1},

	// --- End Greek letters --- //



    // --- Gestion des exposants --- //
	{trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmA"}, // Met au carré
	{trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmA"}, // Met au cube
	{trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmA"}, // Met un exposant
	{trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"}, // Met un chapeau
	{trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"}, // Met un point sur un char
	{trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"}, // Met un vecteur sur un char
	{trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"}, // Met un tilde sur un char

    // --- FIN Gestion des exposants --- //

	// --- Operations --- //
	{trigger: "te", replacement: "\\text{$0}", options: "m"},
	{trigger: "text", replacement: "\\text{$0}", options: "mA"},
	{trigger: "bf", replacement: "\\mathbf{$0}", options: "mA"},
	{trigger: "rond", replacement: "\\circ", options: "mA"},
	{trigger: "(neq|geq|leq|gg|ll|sim)", replacement: "\\[[0]]", options: "rmA"},

	{trigger: "sr", replacement: "^{2}", options: "mA"},
	{trigger: "cb", replacement: "^{3}", options: "mA"},
	{trigger: "rd", replacement: "^{$0}$1", options: "mA"},
	{trigger: "_", replacement: "_{$0}$1", options: "mA"},
	{trigger: "sts", replacement: "_\\text{$0}", options: "rmA"},

	{trigger: "sq", replacement: "\\sqrt{$0}$1", options: "mAw"},
	{trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
	{trigger: "ee", replacement: "e^{ $0 }$1", options: "mAw"},
	{trigger: "rm", replacement: "\\mathrm{$0}$1", options: "mAw"},
	{trigger: "conj", replacement: "^{*}", options: "mAw"},
	{trigger: "trace", replacement: "\\mathrm{Tr}", options: "mAw"},
	{trigger: "det", replacement: "\\det", options: "mAw"},
	{trigger: "re", replacement: "\\mathrm{Re}", options: "mAw"},
	{trigger: "im", replacement: "\\mathrm{Im}", options: "mAw"},

	{trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},

	{trigger: "([A-Za-z])(\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},
	{trigger: "([A-Za-z])_(\\d\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA"},
	{trigger: "\\hat{([A-Za-z])}(\\d)", replacement: "hat{[[0]]}_{[[1]]}", options: "rmA"},
	{trigger: "\\\\mathbf{([A-Za-z])}(\\d)", replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA"},
	{trigger: "\\\\vec{([A-Za-z])}(\\d)", replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA"},

    // Chapeaux
	{trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 3},
	{trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: 1},
	{trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA"},
	{trigger: "bar", replacement: "\\overline{$0}$1", options: "mA"},
	{trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
	{trigger: "dot", replacement: "\\dot{$0}$1", options: "mA"},
	{trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA", priority: 2},
	{trigger: "cdot", replacement: "\\cdot", options: "mA", priority: 2},
	{trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA"},

	// Fonctions trigonométriques
	{trigger: "([^\\\\])(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cotan|csc|sec)", replacement: "[[0]]\\[[1]]", options: "rmA"}, 
	{trigger: "\\\\(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cotan|csc|sec)([A-Za-bd-gi-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs. Skips letter "h" to allow sinh, cosh, etc.
	{trigger: "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch|sech)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs
	


	// Visual operations
	{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
	{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA"},
	{trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
	{trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},


	// Symbols
	{trigger: "ooo", replacement: "\\infty", options: "mA"},
	{trigger: "sum", replacement: "\\sum", options: "mA"},
	{trigger: "prod", replacement: "\\prod", options: "mA"},
	{trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
	{trigger: "([^\\\\])pm", replacement: "[[0]]\\pm", options: "rm"},
	{trigger: "([^\\\\])mp", replacement: "[[0]]\\mp", options: "rm"},
	{trigger: "+-", replacement: "\\pm", options: "mA"},
	{trigger: "-+", replacement: "\\mp", options: "mA"},
	{trigger: "...", replacement: "\\dots", options: "mA"},
	{trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
	{trigger: "->", replacement: "\\to", options: "mA"},
	{trigger: "!>", replacement: "\\mapsto", options: "mA"},
	{trigger: "invs", replacement: "^{-1}", options: "mA"},
	{trigger: "\\\\\\", replacement: "\\setminus", options: "mA"},
	{trigger: "||", replacement: "\\mid", options: "mA"},
	{trigger: "inn", replacement: "\\in", options: "mA"},
	{trigger: "notin", replacement: "\\not\\in", options: "mA"},
	{trigger: "\\subset eq", replacement: "\\subseteq", options: "mA"},
	{trigger: "eset", replacement: "\\emptyset", options: "mA"},
	{trigger: "=>", replacement: "\\Rightarrow", options: "mA"},
	{trigger: "=<", replacement: "\\Leftarrow", options: "mA"},
	{trigger: "iff", replacement: "\\iff", options: "mA"},
	{trigger: "e\\xi sts", replacement: "\\exists", options: "mA", priority: 1},
	{trigger: "===", replacement: "\\equiv", options: "mA"},
	{trigger: "Sq", replacement: "\\square", options: "mA"},
	{trigger: "!=", replacement: "\\neq", options: "mA"},
	{trigger: ">=", replacement: "\\geq", options: "mA"},
	{trigger: "<=", replacement: "\\leq", options: "mA"},
	{trigger: ">>", replacement: "\\gg", options: "mA"},
	{trigger: "<<", replacement: "\\ll", options: "mA"},
	{trigger: "prop", replacement: "\\propto", options: "mA"},
	{trigger: "nabla", replacement: "\\nabla", options: "mA"},
	{trigger: "xx", replacement: "\\times", options: "mA"},
	{trigger: "**", replacement: "\\cdot", options: "mA"},
	{trigger: "para", replacement: "\\parallel", options: "mA"},

	{trigger: "xnn", replacement: "x_{n}", options: "mA"},
	{trigger: "xii", replacement: "x_{i}", options: "mA"},
	{trigger: "xjj", replacement: "x_{j}", options: "mA"},
	{trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
	{trigger: "ynn", replacement: "y_{n}", options: "mA"},
	{trigger: "yii", replacement: "y_{i}", options: "mA"},
	{trigger: "yjj", replacement: "y_{j}", options: "mA"},

	{trigger: "mcal", replacement: "\\mathcal{$0}$1", options: "mA"},
	{trigger: "mbb", replacement: "\\mathbb{$0}$1", options: "mA"},
	{trigger: "ell", replacement: "\\ell", options: "mA"},
	{trigger: "lll", replacement: "\\ell", options: "mA"},


	// Derivatives
	{trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
	{trigger: "pa2", replacement: "\\frac{ \\partial^{2} ${0:y} }{ \\partial ${1:x}^{2} } $2", options: "mA"},
	{trigger: "pa3", replacement: "\\frac{ \\partial^{3} ${0:y} }{ \\partial ${1:x}^{3} } $2", options: "mA"},
	{trigger: "pa([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
	{trigger: "pa([A-Za-z])([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]] \\partial [[2]] } ", options: "rm"},
	{trigger: "pa([A-Za-z])([A-Za-z])2", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]]^{2} } ", options: "rmA"},
	{trigger: "de([A-Za-z])([A-Za-z])", replacement: "\\frac{ d[[0]] }{ d[[1]] } ", options: "rm"},
	{trigger: "de([A-Za-z])([A-Za-z])2", replacement: "\\frac{ d^{2}[[0]] }{ d[[1]]^{2} } ", options: "rmA"},
	{trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},


	// Integrals
	{trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
	{trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
	{trigger: "dint", replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, d${3:x} $4", options: "mA"},
	{trigger: "oint", replacement: "\\oint", options: "mA"},
	{trigger: "iiint", replacement: "\\iiint", options: "mA"},
	{trigger: "iint", replacement: "\\iint", options: "mA"},
	{trigger: "int", replacement: "\\int $0 \\, d${1:x} $2", options: "mA"},


	// Physics
	{trigger: "kbt", replacement: "k_{B}T", options: "mA"},


	// Quantum mechanics
	{trigger: "hba", replacement: "\\hbar", options: "mA"},
	{trigger: "dag", replacement: "^{\\dagger}", options: "mA"},
	{trigger: "o+", replacement: "\\oplus ", options: "mA"},
	{trigger: "ot\\mathrm{Im}es", replacement: "\\otimes ", options: "mA"}, // Handle conflict with "im" snippet
	{trigger: "bra", replacement: "\\bra{$0} $1", options: "mA"},
	{trigger: "ket", replacement: "\\ket{$0} $1", options: "mA"},
	{trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA"},
	{trigger: "\\\\bra{([^|]+)\\|", replacement: "\\braket{ [[0]] | $0 ", options: "rmA", description: "Convert bra into braket"},
	{trigger: "\\\\bra{(.+)}([^ ]+)>", replacement: "\\braket{ [[0]] | $0 ", options: "rmA", description: "Convert bra into braket (alternate)"},
	{trigger: "outp", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},


	// Chemistry
	{trigger: "pu", replacement: "\\pu{ $0 }", options: "mA"},
	{trigger: "msun", replacement: "M_{\\odot}", options: "mA"},
	{trigger: "solm", replacement: "M_{\\odot}", options: "mA"},
	{trigger: "cee", replacement: "\\ce{ $0 }", options: "mA"},
	{trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA"},
	{trigger: "hel4", replacement: "{}^{4}_{2}He ", options: "mA"},
	{trigger: "hel3", replacement: "{}^{3}_{2}He ", options: "mA"},


	// Environments
	{trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA"},
	{trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA"},
	{trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA"},
	{trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA"},
	{trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA"},
	{trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "MA"},
	{trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA"},
	{trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA"},
	{trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA"},
	{trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA"},
	{trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA"},
	{trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA"},
	{trigger: "case", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "mA"},
	{trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
	{trigger: "array", replacement: "\\begin{array}{c}\n$0\n\\end{array}", options: "mA"},


	// Brackets
	{trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
	{trigger: "norm", replacement: "\\left|\\left| $0 \\right|\\right| $1", options: "mA", priority: 1},
	{trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
	{trigger: "ceil", replacement: "\\left\\lceil $0 \\right\\rceil $1", options: "mA"},
	{trigger: "floor", replacement: "\\left\\lfloor $0 \\right\\rfloor $1", options: "mA"},
	{trigger: "mod", replacement: "\\left| $0\\right|$1", options: "mA"},
	{trigger: "(", replacement: "(${VISUAL})", options: "mA"},
	{trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
	{trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
	{trigger: "(", replacement: "($0)$1", options: "mA"},
	{trigger: "{", replacement: "{$0}$1", options: "mA"},
	{trigger: "[", replacement: "[$0]$1", options: "mA"},
	{trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
	{trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
	{trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
	{trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
	{trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},


	// Misc
	{trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA"},
	{trigger: /iden(\d)/, replacement: (match) => {
		const n = match[1];

		let arr = [];
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
				arr[j][i] = (i === j) ? 1 : 0;
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
		return output;
	}, options: "mA", description: "N x N identity matrix"},
]
