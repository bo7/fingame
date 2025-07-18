// chapter_data.js

const chapterData = {
    'chapter1': {
        CHAPTER_NUMBER: 'I',
        CHAPTER_TITLE: 'The Corrupted Algorithm',
        LOCATION_NAME: 'Probability Plaza',
        LOCATION_SUBTITLE: "The heart of New Cognitia's mathematical district",
        SCENE_IMAGE: 'images/steampunk_plaza_1.jpg',
        INITIAL_NARRATIVE_TEXT: "Welcome, Archmage Finja, to your greatest mathematical adventure...",
        OBJECTIVE_INITIAL: "Investigate corruption",

        storyPhases: [
            {
                title: "🌅 Dawn in New Cognitia",
                text: "The morning steam rises from the cobblestone streets of Probability Plaza as brass gears tick in perfect mathematical harmony. But today... something is wrong.",
                action: "Continue..."
            },
            {
                title: "⚠️ The Great Data Engine Falters",
                text: "The massive Data Engine that powers New Cognitia's computational heart begins to stutter. Mathematical equations that once flowed like rivers now corrupt and fragment.",
                action: "Investigate the disturbance"
            },
            {
                title: "🎭 Your Team Assembles",
                text: "As news of the crisis spreads, your trusted companions gather in the plaza. Thomas's data crystals flicker with concern, while Marvin strums his algorithmic lute nervously.",
                action: "Address your team"
            },
            {
                title: "🔮 The Oracle's Message",
                text: "The Oracle of Algorithms materializes in a swirl of mathematical symbols: 'Archmage Finja! The Seven Data Shards of Euler have been scattered by the Shadow Compiler. Only pure mathematics can restore the balance!'",
                action: "Accept the quest"
            },
            {
                title: "🕵️ Investigation Begins",
                text: "Your team spreads across the plaza, detecting traces of algorithmic corruption. The first Data Shard pulses nearby, but it's protected by an ancient Prime Lock that requires mathematical wisdom to open.",
                action: "Approach the Prime Lock"
            }
        ],

        PUZZLE_TITLE: 'The Limit Lock Challenge',
        PUZZLE_DESCRIPTION: "Before you stands an ancient mechanism covered in calculus symbols and infinite series. Steam hisses from bronze pipes as gears inscribed with Taylor polynomials slowly rotate. A crystalline voice echoes from within:",
        PUZZLE_FORMULA_DISPLAY: `$$\\lim_{x \\to 0} \\frac{\\sin(x) - x \\cos(x)}{x^3}$$`,
        PUZZLE_HINT_SHORT: "Consider Taylor series expansions or L'Hôpital's rule...",
        PUZZLE_INPUT_PLACEHOLDER: "Enter the limit value (fraction or decimal)...",
        PUZZLE_INSTRUCTIONS: "Find the exact value of this limit. The ancient mechanisms require precision to the nearest simple fraction.",
        PUZZLE_GUARDIAN_NAME: "Prime Lock Guardian",
        PUZZLE_CHALLENGE_DIALOGUE: "Archmage Finja, to claim the first Data Shard, you must prove your mastery of advanced mathematical analysis. Before you lies the Limit Lock of Euler - solve this elegant challenge:",
        PUZZLE_CLARIFICATION_DIALOGUE: "Speak the true value of this limit, and mathematical harmony shall be restored!",
        CORRECT_ANSWERS: ["1/3", "0.333", "0.3333", "1 / 3", "one third", "0.33333", "0.333333", "0.3333333"],

        HINTS: [
            "Thomas whispers: 'Try expanding sin(x) and cos(x) using their Taylor series around x = 0...'",
            "Alex's neural networks pulse: 'sin(x) = x - x³/6 + x⁵/120 - ..., and cos(x) = 1 - x²/2 + x⁴/24 - ...'",
            "Marvin sings mathematically: '🎵 Substitute and simplify, the x³ terms will clarify! The coefficient of x³ in the numerator expansion is your key! 🎵'"
        ],

        CLUES: [
            "🔍 You examine the plaza's steam pipes and discover corrupted data fragments with strange algorithmic signatures...",
            "🔍 The probability fountains show impossible statistical distributions - clearly the work of the Shadow Compiler!",
            "🔍 Ancient mathematical inscriptions on the plaza stones begin to glow, pointing toward the location of the First Data Shard!"
        ],

        VICTORY_TEXT: "Brilliant! The ancient mechanism recognizes your mathematical mastery! Steam hisses as bronze gears align perfectly, and the First Data Shard of Euler emerges, glowing with pure mathematical energy!",
        THOMAS_VICTORY_DIALOGUE: "Magnificent, Finja! The limit evaluates to exactly 1/3! Your mastery of advanced calculus has unlocked the shard's mathematical essence!",
        MARVIN_VICTORY_DIALOGUE: "🎵 One-third is the key, calculus sets us free! Taylor series divine, limit solutions shine! 🎵",
        ALEX_VICTORY_DIALOGUE: "Extraordinary! The way you handled that indeterminate form shows true mathematical sophistication. The corruption trembles before such analytical prowess!",
        DATA_SHARD_NAME: "Limit Shard of Euler",

        CHAPTER_PROGRESS_SUMMARY_TEXT: "The corruption in Probability Plaza has been cleansed through superior calculus, but six more Data Shards await recovery across New Cognitia. The Shadow Compiler's influence grows stronger with each passing hour...",
        NEXT_CHAPTER_LOCATION_HINT: "The Recursive Clocktower, where the Fibonacci Engine has jammed!",
        SAVE_FLAG: 'chapter1_completed'
    },
    'chapter2': {
        CHAPTER_NUMBER: 'II',
        CHAPTER_TITLE: 'The Recursive Clocktower',
        LOCATION_NAME: 'The Recursive Clocktower',
        LOCATION_SUBTITLE: 'Where time and algorithms intertwine',
        SCENE_IMAGE: 'images/steampunk_clocktower_1.jpg',
        INITIAL_NARRATIVE_TEXT: 'Having secured the first Data Shard, your quest now leads to the enigmatic Recursive Clocktower. Its temporal algorithms are in disarray, threatening to unravel the very fabric of New Cognitia\'s data stream...',
        OBJECTIVE_INITIAL: "Repair Fibonacci Engine",

        storyPhases: [
            {
                title: "⏳ Temporal Anomaly Detected",
                text: "The Clocktower's massive Fibonacci Engine, usually a paragon of recursive elegance, sputters erratically. Data packets arrive out of order, and the city's temporal flow is compromised. The atmosphere is thick with the smell of ozone and burnt circuits.",
                action: "Investigate the engine core"
            },
            {
                title: "🔍 Unstable Recurrence",
                text: "You reach the heart of the Clocktower. The main recursive loop of the Fibonacci Engine is stuck in an infinite calculation, creating a chaotic feedback loop. A data shard is visible, trapped within its temporal distortion. Strange symbols flash across the engine's interface.",
                action: "Analyze the temporal distortion"
            },
            {
                title: "🔮 The Golden Ratio's Plea",
                text: "A faint, ethereal voice echoes through the gears: 'Archmage Finja! The Golden Ratio, the very essence of my balanced growth, has been corrupted. Its limit is skewed, causing recursive chaos. Restore my true value!' The voice seems to emanate from a shimmering data conduit.",
                action: "Prepare for the challenge"
            },
        ],

        PUZZLE_TITLE: 'The Golden Ratio Recursion',
        PUZZLE_DESCRIPTION: "A critical component of the Fibonacci Engine, the Golden Ratio, has been destabilized. You must determine the limit of a specific sequence to recalibrate it.",
        PUZZLE_FORMULA_DISPLAY: `Consider the sequence given by the recurrence relation: $$a_{n+1} = \\sqrt{1 + a_n}$$ for $$n \\geq 1$$, with $$a_1 = 1$$.<br><br>Find the exact value of $$\\lim_{n \\to \\infty} a_n$$.`,
        PUZZLE_HINT_SHORT: "Assume the limit exists and substitute it back into the recurrence relation.",
        PUZZLE_INPUT_PLACEHOLDER: "Enter the limit value (e.g., 'phi' or '1.618')...",
        PUZZLE_INSTRUCTIONS: "Find the exact value of this limit. Precision is key. You may use a fraction or the special constant 'phi' or its decimal approximation.",
        PUZZLE_GUARDIAN_NAME: "Clocktower Oracle",
        PUZZLE_CHALLENGE_DIALOGUE: "The very essence of the Clocktower, its Fibonacci Engine, falters because its foundational ratio is lost. Prove your understanding of infinite sequences and convergence!",
        PUZZLE_CLARIFICATION_DIALOGUE: "Recalibrate the engine by stating the correct limit, and the temporal flow shall be restored!",
        CORRECT_ANSWERS: ["(1+sqrt(5))/2", "phi", "1.618", "1.61803", "1.6180339887", "1.618034"],

        HINTS: [
            "Thomas ponders: 'If the limit L exists, then as n approaches infinity, both $a_{n+1}$ and $a_n$ approach L. So, L = $\\sqrt{1 + L}$. Solve for L.'",
            "Alex's AI suggests: 'Square both sides of L = $\\sqrt{1 + L}$ to get a quadratic equation: $L^2 = 1 + L$. Rearrange it to $L^2 - L - 1 = 0$. Remember, the golden ratio is the positive root.'",
            "Marvin hums a convergence tune: '🎵 L-squared minus L minus one is zero, find the positive hero! The famous constant will make the engine glow! Use the quadratic formula!'🎵"
        ],

        CLUES: [
            "🔍 You observe the clock's gears spinning backward for a moment, revealing corrupted timestamps – signs of a recursive loop error. A faint, non-integer value is displayed on a nearby gauge.",
            "🔍 A digital display flickers, showing a sequence of numbers: 1, 1, 2, 3, 5, 8, ... then glitches, failing to settle. The Fibonacci sequence is active, but something is wrong with its termination or ratio.",
            "🔍 Marvin detects an interference pattern in the Clocktower's temporal field, a signature of the Shadow Compiler attempting to prevent a sequence from converging to its natural limit. He points to a diagram showing a spiral that doesn't quite close."
        ],

        VICTORY_TEXT: "The Clocktower's gears whir back to life, and the temporal distortion dissipates. The Second Data Shard, shimmering with the golden light of the restored Golden Ratio, materializes from the heart of the engine!",
        THOMAS_VICTORY_DIALOGUE: "Incredible, Finja! The value is precisely the Golden Ratio, 1.618... You've stabilized the temporal algorithms and restored the engine's recursive integrity!",
        MARVIN_VICTORY_DIALOGUE: "🎵 Golden Ratio's might, sets the sequences right! Fibonacci's true path, escapes recursive wrath! The Clocktower sings again! 🎵",
        ALEX_VICTORY_DIALOGUE: "Remarkable! Your understanding of convergence and fixed points is exemplary. The Shadow Compiler's temporal attack has been thwarted! This data can help us predict future corruptions.",
        DATA_SHARD_NAME: "Golden Ratio Shard",

        CHAPTER_PROGRESS_SUMMARY_TEXT: "The Recursive Clocktower's temporal algorithms are restored, and the Golden Ratio Data Shard is secured. Two shards down, five to go. The Shadow Compiler's grip on New Cognitia's time streams has weakened, but it's regrouping.",
        NEXT_CHAPTER_LOCATION_HINT: "The Quantum Nexus, where data entanglement holds the next shard hostage! Prepare for quantum paradoxes!",
        SAVE_FLAG: 'chapter2_completed'
    },
    'chapter3': {
        CHAPTER_NUMBER: 'III',
        CHAPTER_TITLE: 'The Quantum Matrix Labyrinth',
        LOCATION_NAME: 'Quantum Computing Lab',
        LOCATION_SUBTITLE: 'Where classical and quantum realms converge',
        SCENE_IMAGE: 'images/quantum_lab.jpg',
        INITIAL_NARRATIVE_TEXT: "The air hums with quantum potential as you enter the lab. Strange equations float in the air, their solutions constantly collapsing and reforming...",
        OBJECTIVE_INITIAL: "Decrypt the quantum encryption",

        storyPhases: [
            {
                title: "⚛️ Quantum Anomaly Detected",
                text: "Your team's quantum sensors detect a dangerous instability in the lab's core matrix. The very fabric of mathematical reality seems to be unraveling at the quantum level.",
                action: "Investigate the anomaly"
            },
            {
                title: "🔍 Quantum Entanglement Puzzle",
                text: "The lab's main console displays a complex quantum state. To stabilize the matrix, you must find the eigenvalues of a 3×3 Hermitian matrix with complex entries.",
                action: "Approach the quantum console"
            },
            {
                title: "🧮 The Matrix Challenge",
                text: "The system displays: 'Find the eigenvalues of the matrix [[2, 1-i, 0], [1+i, 1, 1], [0, 1, 3]] where i is the imaginary unit.' The quantum field fluctuates dangerously.",
                action: "Solve the matrix equation"
            }
        ],

        PUZZLE_TITLE: 'Quantum Eigenvalue Challenge',
        PUZZLE_DESCRIPTION: "The quantum console displays a complex Hermitian matrix. The system requires the eigenvalues to stabilize the quantum field. The matrix is:",
        PUZZLE_FORMULA_DISPLAY: `$$\\begin{bmatrix} 2 & 1-i & 0 \\\\ 1+i & 1 & 1 \\\\ 0 & 1 & 3 \\end{bmatrix}$$`,
        PUZZLE_HINT_SHORT: "For a 3×3 Hermitian matrix, the eigenvalues are real numbers. The characteristic polynomial is cubic.",
        PUZZLE_INPUT_PLACEHOLDER: "Enter eigenvalues as comma-separated values (e.g., 1,2,3)",
        PUZZLE_INSTRUCTIONS: "Find all eigenvalues of the given Hermitian matrix. Enter them in increasing order, separated by commas.",
        PUZZLE_GUARDIAN_NAME: "Quantum Matrix Guardian",
        PUZZLE_CHALLENGE_DIALOGUE: "Archmage Finja, to stabilize the quantum field, you must find the eigenvalues of this Hermitian matrix. The future of quantum computation depends on your solution!",
        PUZZLE_CLARIFICATION_DIALOGUE: "Enter the eigenvalues in increasing order, separated by commas. Precision to two decimal places is required.",
        CORRECT_ANSWERS: ["-0.41,1.27,4.14", "-0.41, 1.27, 4.14", "-0.4,1.3,4.1", "-0.4, 1.3, 4.1"],

        HINTS: [
            "Thomas suggests: 'Remember, for a Hermitian matrix, the eigenvalues are always real numbers.'",
            "Alex's analysis: 'The characteristic polynomial is λ³ - 6λ² + 7λ + 2. Try using the Rational Root Theorem.'",
            "Marvin sings: '🎵 Cubic equations can be tough, Cardano's formula is rough! Try x = 2cosθ, it might be enough! 🎵'"
        ],

        CLUES: [
            "🔍 You notice quantum interference patterns in the lab's holographic displays, suggesting the matrix eigenvalues are being scrambled by external forces.",
            "🔍 The quantum field stabilizers show three distinct resonance frequencies, hinting at the number of eigenvalues you need to find.",
            "🔍 Ancient quantum inscriptions on the lab walls glow with Hermitian symmetry patterns, confirming that all eigenvalues must be real numbers."
        ],

        VICTORY_TEXT: "The quantum field stabilizes instantly as the correct eigenvalues resonate through the matrix! The Third Data Shard materializes from the quantum foam, pulsing with eigenvalue energy!",
        THOMAS_VICTORY_DIALOGUE: "Brilliant! The quantum field stabilizes immediately. Your understanding of linear algebra is truly exceptional, Finja!",
        MARVIN_VICTORY_DIALOGUE: "🎵 Eigenvalues aligned just right, quantum states now shining bright! The matrix is stable, the future's now stable! 🎵",
        ALEX_VICTORY_DIALOGUE: "Fascinating! Your solution has given us new insights into quantum state manipulation. The Shadow Compiler's interference patterns are becoming clearer now.",
        DATA_SHARD_NAME: "Quantum Matrix Shard",

        CHAPTER_PROGRESS_SUMMARY_TEXT: "The quantum matrix has been stabilized, but the Shadow Compiler's influence is spreading through higher-dimensional spaces. The fourth Data Shard is now within reach.",
        NEXT_CHAPTER_LOCATION_HINT: "The Neural Network Nexus, where machine learning models have gained sentience!",
        SAVE_FLAG: 'chapter3_completed'
    },
    'chapter4': {
        CHAPTER_NUMBER: 'IV',
        CHAPTER_TITLE: 'The Titanic Data Vault',
        LOCATION_NAME: 'Data Science Archives',
        LOCATION_SUBTITLE: 'Where patterns reveal the future',
        SCENE_IMAGE: 'images/neural_network.jpg',
        INITIAL_NARRATIVE_TEXT: "The air is thick with the hum of data processors. Rows of glowing screens display passenger manifests and survival statistics from the ill-fated RMS Titanic. The Shadow Compiler has corrupted the prediction model, and only you can restore it...",
        OBJECTIVE_INITIAL: "Predict passenger survival",

        storyPhases: [
            {
                title: "🛳️ The Titanic Dataset",
                text: "The system displays a dataset of 891 passengers from the Titanic. Each row contains passenger details like class, age, gender, and whether they survived. The Shadow Compiler has scrambled the survival predictions.",
                action: "Examine the dataset"
            },
            {
                title: "📊 Data Analysis Required",
                text: "Thomas points out: 'The survival rate is only 38.4%. Women and children were prioritized, but other factors like passenger class and fare also played a role.' The model needs to predict survival based on these patterns.",
                action: "Analyze the data"
            },
            {
                title: "🔍 The Prediction Challenge",
                text: "The system displays a test passenger: 'A 28-year-old female, 1st class, with 2 siblings/spouses aboard, no parents/children, fare $80, embarked from Southampton.' What's the probability (0-100%) she survived?",
                action: "Make a prediction"
            }
        ],

        PUZZLE_TITLE: 'Survival Prediction Challenge',
        PUZZLE_DESCRIPTION: "Using the Titanic dataset, analyze the patterns in the data to predict the survival probability for the given passenger. Consider factors like gender, class, age, and fare.",
        PUZZLE_FORMULA_DISPLAY: `
            <strong>Passenger Details:</strong><br>
            • Age: 28<br>
            • Sex: Female<br>
            • Class: 1st<br>
            • Siblings/Spouses: 2<br>
            • Parents/Children: 0<br>
            • Fare: $80<br>
            • Embarked: Southampton
        `,
        PUZZLE_HINT_SHORT: "In the training data, 1st class female passengers had a survival rate of about 96.8%.",
        PUZZLE_INPUT_PLACEHOLDER: "Enter survival probability (0-100%)",
        PUZZLE_INSTRUCTIONS: "Based on the training data patterns, what is the probability (0-100%) that this passenger survived? Round to the nearest whole number.",
        PUZZLE_GUARDIAN_NAME: "Data Science Guardian",
        PUZZLE_CHALLENGE_DIALOGUE: "Archmage Finja, the Shadow Compiler has corrupted our prediction models! Using your data analysis skills, predict the survival probability for this passenger based on the Titanic dataset patterns.",
        PUZZLE_CLARIFICATION_DIALOGUE: "Enter a whole number between 0 and 100 representing the percentage chance of survival.",
        CORRECT_ANSWERS: ["97", "96", "98", "95", "96%", "97%", "98%", "95%"],

        HINTS: [
            "Thomas suggests: 'In the training data, 1st class passengers had a 62.9% survival rate overall, but women in 1st class had a 96.8% survival rate. You can explore the full dataset here: https://web.stanford.edu/class/archive/cs/cs109/cs109.1166/stuff/titanic.csv'",
            "Alex's analysis: 'The passenger is a young adult female in 1st class, which was the demographic most likely to survive. The fare of $80 is well above average, suggesting good accommodations. The dataset shows these factors were strongly correlated with survival.'",
            "Marvin sings: '🎵 Women and children first, that's the rule, in this data science tool! First class and female too, her chances are looking true! Check the data, don't be a fool, at Stanford's link, it's really cool! 🎵'"
        ],

        CLUES: [
            "🔍 You examine historical survival data and notice that passenger class was a major factor - 1st class passengers had much higher survival rates than 3rd class.",
            "🔍 The data shows a clear gender bias in survival rates - women had significantly higher survival rates than men across all classes.",
            "🔍 Age patterns in the data reveal that younger passengers generally had better survival chances, especially when combined with higher class status."
        ],

        VICTORY_TEXT: "The prediction model springs back to life, its algorithms now perfectly calibrated! The Fourth Data Shard emerges from the data stream, glowing with statistical certainty!",
        THOMAS_VICTORY_DIALOGUE: "Brilliant analysis, Finja! Your prediction of 97% matches the historical patterns perfectly. The model's accuracy is now 89% - the highest it's ever been!",
        MARVIN_VICTORY_DIALOGUE: "🎵 Numbers don't lie, the data's clear, your prediction brings victory near! The Shadow Compiler's losing might, thanks to your data science sight! 🎵",
        ALEX_VICTORY_DIALOGUE: "Fascinating! Your understanding of feature importance and statistical patterns is exceptional. The model is now making accurate predictions again.",
        DATA_SHARD_NAME: "Data Science Shard",

        CHAPTER_PROGRESS_SUMMARY_TEXT: "The prediction model has been restored, revealing the location of the next Data Shard. The Shadow Compiler's influence is weakening, but we must remain vigilant.",
        NEXT_CHAPTER_LOCATION_HINT: "The Cryptographic Citadel, where the final encryption keys are stored...",
        SAVE_FLAG: 'chapter4_completed'
    },
    'chapter5': {
        CHAPTER_NUMBER: 'V',
        CHAPTER_TITLE: 'The Cryptographic Citadel',
        LOCATION_NAME: 'The Encryption Fortress',
        LOCATION_SUBTITLE: 'Where secrets are mathematically protected',
        SCENE_IMAGE: 'images/cryptographic_citadel.jpg',
        INITIAL_NARRATIVE_TEXT: "Towering spires of encrypted data rise before you, their surfaces covered in prime numbers and modular arithmetic. The Shadow Compiler has locked the fifth Data Shard behind an ancient RSA cipher...",
        OBJECTIVE_INITIAL: "Break the RSA encryption",

        storyPhases: [
            {
                title: "🏰 The Fortress of Secrets",
                text: "The Cryptographic Citadel looms ahead, its walls inscribed with prime factorizations and Euler's totient function. Ancient encryption algorithms guard every entrance, their mathematical locks glowing with cryptographic energy.",
                action: "Approach the main gate"
            },
            {
                title: "🔐 The RSA Challenge",
                text: "A massive bronze door blocks your path, covered in number theory symbols. An inscription reads: 'Only those who understand the mathematics of public-key cryptography may pass.' The door's lock mechanism displays a cryptographic puzzle.",
                action: "Examine the encryption"
            },
            {
                title: "🔢 Prime Factorization Required",
                text: "The lock mechanism reveals its challenge: 'I am the product of two prime numbers. My value is 323, and I guard the path to the Data Shard. Find my prime factors to unlock the cipher!' The mechanism hums with mathematical energy.",
                action: "Begin factorization"
            }
        ],

        PUZZLE_TITLE: 'RSA Prime Factorization',
        PUZZLE_DESCRIPTION: "The ancient RSA lock requires you to factor a composite number into its prime components. This is the foundation of RSA cryptography - easy to multiply primes together, but hard to factor the result.",
        PUZZLE_FORMULA_DISPLAY: `Find the prime factorization of: $$n = 323$$<br><br>Express your answer as the two prime factors $$p$$ and $$q$$ where $$n = p \\times q$$`,
        PUZZLE_HINT_SHORT: "Try dividing 323 by small prime numbers systematically...",
        PUZZLE_INPUT_PLACEHOLDER: "Enter the two prime factors separated by comma (e.g., 17,19)",
        PUZZLE_INSTRUCTIONS: "Find the two prime numbers that multiply to give 323. Enter them in ascending order, separated by a comma.",
        PUZZLE_GUARDIAN_NAME: "Cryptographic Sentinel",
        PUZZLE_CHALLENGE_DIALOGUE: "Archmage Finja, the RSA cipher protects this Data Shard with the power of prime factorization. The security of countless encrypted messages depends on the difficulty of this very problem!",
        PUZZLE_CLARIFICATION_DIALOGUE: "Factor 323 into its two prime components. The strength of RSA lies in this mathematical challenge!",
        CORRECT_ANSWERS: ["17,19", "17, 19", "19,17", "19, 17"],

        HINTS: [
            "Thomas calculates: 'Start with small primes: 2, 3, 5, 7, 11, 13, 17, 19... Check if 323 is divisible by each one systematically.'",
            "Alex's neural networks suggest: 'Since 323 is odd, it's not divisible by 2. Check if the sum of digits (3+2+3=8) is divisible by 3... it's not, so 3 doesn't work either.'",
            "Marvin sings cryptographically: '🎵 Seventeen times nineteen, makes the number clean! Prime factorization, unlocks encryption's foundation! 🎵'"
        ],

        CLUES: [
            "🔍 You notice that 323 ends in 3, which means it's odd and not divisible by 2 or 5. The search space is reduced to odd primes only.",
            "🔍 Ancient cryptographic texts on the citadel walls show that 323 = 17 × 19, with both 17 and 19 being prime numbers used in classical RSA examples.",
            "🔍 The citadel's mathematical inscriptions reveal that this particular factorization was used by early cryptographers to demonstrate RSA principles to students."
        ],

        VICTORY_TEXT: "The RSA lock clicks open with mathematical precision! The bronze door swings wide, revealing the Fifth Data Shard glowing with the power of prime numbers and cryptographic security!",
        THOMAS_VICTORY_DIALOGUE: "Excellent work, Finja! 323 = 17 × 19 indeed! Your mastery of number theory has broken the RSA cipher. This is exactly how modern cryptography works!",
        MARVIN_VICTORY_DIALOGUE: "🎵 Primes seventeen and nineteen true, unlock the cipher just for you! RSA's power now you see, mathematics sets the data free! 🎵",
        ALEX_VICTORY_DIALOGUE: "Remarkable! You've demonstrated the fundamental weakness of RSA with small primes. In practice, RSA uses primes with hundreds of digits, making factorization computationally infeasible!",
        DATA_SHARD_NAME: "Cryptographic Shard",

        CHAPTER_PROGRESS_SUMMARY_TEXT: "The Cryptographic Citadel's defenses have fallen to your number theory expertise. Five Data Shards recovered, two remain. The Shadow Compiler's encryption schemes are no match for pure mathematical knowledge.",
        NEXT_CHAPTER_LOCATION_HINT: "The Statistical Observatory, where probability distributions have gone haywire!",
        SAVE_FLAG: 'chapter5_completed'
    },
    'chapter6': {
        CHAPTER_NUMBER: 'VI',
        CHAPTER_TITLE: 'The Statistical Observatory',
        LOCATION_NAME: 'The Probability Dome',
        LOCATION_SUBTITLE: 'Where randomness meets mathematical order',
        SCENE_IMAGE: 'images/statistical_observatory.jpg',
        INITIAL_NARRATIVE_TEXT: "The great dome of the Statistical Observatory rises before you, its surface covered in probability distributions and confidence intervals. Inside, the Shadow Compiler has corrupted the central hypothesis testing engine...",
        OBJECTIVE_INITIAL: "Restore statistical inference",

        storyPhases: [
            {
                title: "📊 The Probability Crisis",
                text: "The Observatory's main telescope, designed to observe statistical patterns across New Cognitia, shows chaotic probability distributions. Normal curves have become skewed, confidence intervals have collapsed, and p-values are meaningless.",
                action: "Investigate the statistical anomaly"
            },
            {
                title: "🎯 Hypothesis Testing Failure",
                text: "The central statistical engine displays an error: 'CRITICAL: Hypothesis test corrupted. Unable to determine if population mean differs from claimed value. Statistical inference compromised.' The Shadow Compiler has attacked the very foundation of statistical reasoning.",
                action: "Examine the hypothesis test"
            },
            {
                title: "📈 The Z-Test Challenge",
                text: "The system presents a corrupted hypothesis test: 'A sample of 36 observations has mean 52.5 and the population standard deviation is known to be 12. Test if the population mean differs from 50 at α = 0.05 level.' The statistical machinery awaits your analysis.",
                action: "Perform the hypothesis test"
            }
        ],

        PUZZLE_TITLE: 'Hypothesis Testing Challenge',
        PUZZLE_DESCRIPTION: "The Observatory's statistical engine requires you to perform a two-tailed z-test to restore proper hypothesis testing functionality. You must calculate the test statistic and make a decision.",
        PUZZLE_FORMULA_DISPLAY: `Given:<br>
        • Sample size: $$n = 36$$<br>
        • Sample mean: $$\\bar{x} = 52.5$$<br>
        • Population standard deviation: $$\\sigma = 12$$<br>
        • Null hypothesis: $$H_0: \\mu = 50$$<br>
        • Alternative hypothesis: $$H_1: \\mu \\neq 50$$<br>
        • Significance level: $$\\alpha = 0.05$$<br><br>
        Calculate the z-statistic: $$z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$$`,
        PUZZLE_HINT_SHORT: "Calculate z = (52.5 - 50) / (12/√36) and compare with critical value ±1.96",
        PUZZLE_INPUT_PLACEHOLDER: "Enter your conclusion: 'reject' or 'fail to reject'",
        PUZZLE_INSTRUCTIONS: "Calculate the z-statistic and determine whether to reject or fail to reject the null hypothesis at α = 0.05 level.",
        PUZZLE_GUARDIAN_NAME: "Statistical Oracle",
        PUZZLE_CHALLENGE_DIALOGUE: "Archmage Finja, the foundation of statistical inference has been corrupted! You must restore the hypothesis testing engine by correctly performing this z-test. The future of data-driven decisions depends on your statistical reasoning!",
        PUZZLE_CLARIFICATION_DIALOGUE: "Enter either 'reject' or 'fail to reject' based on your z-test analysis.",
        CORRECT_ANSWERS: ["reject", "reject null hypothesis", "reject h0", "reject the null hypothesis"],

        HINTS: [
            "Thomas calculates: 'The standard error is σ/√n = 12/√36 = 12/6 = 2. So z = (52.5 - 50)/2 = 2.5'",
            "Alex's statistical analysis: 'For α = 0.05 in a two-tailed test, the critical values are ±1.96. Since |z| = 2.5 > 1.96, we reject the null hypothesis.'",
            "Marvin sings statistically: '🎵 Z-score of two point five, greater than one ninety-six! Reject the null, that's the rule, statistics make us look so cool! 🎵'"
        ],

        CLUES: [
            "🔍 The Observatory's probability charts show that z = 2.5 falls in the rejection region for a two-tailed test at α = 0.05 level.",
            "🔍 Ancient statistical tables carved into the dome walls confirm that critical values for α = 0.05 (two-tailed) are ±1.96.",
            "🔍 The corrupted statistical engine displays a faint message: 'When |z| > 1.96, reject H₀ and conclude significant difference exists.'"
        ],

        VICTORY_TEXT: "The statistical engine roars back to life! Probability distributions realign, confidence intervals stabilize, and the Sixth Data Shard emerges from the heart of the Observatory, pulsing with statistical significance!",
        THOMAS_VICTORY_DIALOGUE: "Brilliant statistical reasoning, Finja! With z = 2.5 > 1.96, we correctly reject the null hypothesis. The population mean is significantly different from 50!",
        MARVIN_VICTORY_DIALOGUE: "🎵 Statistics restored with might, hypothesis testing now done right! P-values dance, confidence intervals prance, the Observatory's back in the fight! 🎵",
        ALEX_VICTORY_DIALOGUE: "Exceptional! Your understanding of hypothesis testing is impeccable. The statistical inference engine is now calibrated perfectly for data-driven decision making!",
        DATA_SHARD_NAME: "Statistical Shard",

        CHAPTER_PROGRESS_SUMMARY_TEXT: "The Statistical Observatory's probability engines are restored to perfect mathematical harmony. Six Data Shards recovered, one final challenge remains. The Shadow Compiler's last stronghold awaits...",
        NEXT_CHAPTER_LOCATION_HINT: "The Finja Files - The ultimate data science challenge in Seoul!",
        SAVE_FLAG: 'chapter6_completed'
    },
    'chapter7': {
        CHAPTER_NUMBER: 'VII',
        CHAPTER_TITLE: 'The Finja Files',
        LOCATION_NAME: 'Seoul Data Analytics Center',
        LOCATION_SUBTITLE: 'The final data science challenge',
        SCENE_IMAGE: 'images/seoul_analytics.jpg',
        INITIAL_NARRATIVE_TEXT: "The final confrontation awaits in Seoul's most advanced data analytics center. The Shadow Compiler has hidden the seventh and final Data Shard within a complex bike rental prediction system. Only a master data scientist can complete this ultimate challenge...",
        OBJECTIVE_INITIAL: "Master the Seoul bike rental prediction",

        storyPhases: [
            {
                title: "🚴 The Seoul Bike Challenge",
                text: "The analytics center's main screen displays Seoul's bike rental system data. Thousands of records show hourly bike rentals influenced by weather, temperature, humidity, and seasonal patterns. The Shadow Compiler has corrupted the prediction models.",
                action: "Access the dataset"
            },
            {
                title: "📊 Data Science Mastery Required",
                text: "Thomas points to the screen: 'We need to download the Seoul bike sharing dataset and build four different prediction models: Linear Regression, Random Forest, Gradient Boosting, and Neural Network. Only by comparing all four can we defeat the Shadow Compiler's final encryption.'",
                action: "Begin the analysis"
            },
            {
                title: "🎯 The Ultimate Test",
                text: "Alex's neural networks pulse with excitement: 'This is it, Finja! The final test of your data science mastery. Download the data, build the models, compare their performance, and upload your results. The fate of New Cognitia's data realm depends on your analytical skills!'",
                action: "Accept the final challenge"
            }
        ],

        PUZZLE_TITLE: 'Seoul Bike Rental Prediction Challenge',
        PUZZLE_DESCRIPTION: "Your final challenge requires complete data science mastery. You must download the Seoul bike sharing dataset, perform exploratory data analysis, build four different machine learning models, and compare their performance.",
        PUZZLE_FORMULA_DISPLAY: `
            <strong>Your Mission:</strong><br>
            1. Download the Seoul Bike Sharing Dataset<br>
            2. Build 4 prediction models:<br>
            &nbsp;&nbsp;• Linear Regression<br>
            &nbsp;&nbsp;• Random Forest<br>
            &nbsp;&nbsp;• Gradient Boosting<br>
            &nbsp;&nbsp;• Neural Network<br>
            3. Compare model performance (R², RMSE)<br>
            4. Create a visualization of results<br>
            5. Upload your final comparison chart
        `,
        PUZZLE_HINT_SHORT: "Use the Seoul Bike Sharing Dataset from UCI ML Repository. Focus on weather features for prediction.",
        PUZZLE_INPUT_PLACEHOLDER: "Type 'completed' when you've uploaded your model comparison chart",
        PUZZLE_INSTRUCTIONS: "Complete the full data science pipeline: data download, EDA, model building, evaluation, and visualization. Type 'completed' when finished.",
        PUZZLE_GUARDIAN_NAME: "Master Data Scientist",
        PUZZLE_CHALLENGE_DIALOGUE: "Archmage Finja, this is your ultimate test! The Shadow Compiler has challenged you to demonstrate complete mastery of data science. Build four models, compare their performance, and prove your analytical supremacy!",
        PUZZLE_CLARIFICATION_DIALOGUE: "Show your mastery by completing the entire data science workflow. The universe of New Cognitia depends on your skills!",
        CORRECT_ANSWERS: ["completed", "done", "finished", "complete", "uploaded"],

        HINTS: [
            "Thomas suggests: 'Download the Seoul Bike Sharing Dataset from UCI ML Repository. Focus on features like temperature, humidity, wind speed, and seasonal patterns for your predictions.'",
            "Alex's neural networks recommend: 'Use scikit-learn for Linear Regression and Random Forest, XGBoost for Gradient Boosting, and TensorFlow/Keras for the Neural Network. Compare R² scores and RMSE values.'",
            "Marvin sings the data science anthem: '🎵 Four models strong, compare them all! Linear, Forest, Boosting, Neural! R-squared high and RMSE low, that's how data scientists grow! 🎵'"
        ],

        CLUES: [
            "🔍 The Seoul dataset contains hourly bike rental counts with weather information, seasonal data, and temporal features - perfect for time series prediction modeling.",
            "🔍 The analytics center's screens show that successful models typically achieve R² scores above 0.8 when properly tuned with weather and temporal features.",
            "🔍 Ancient data science scrolls reveal that ensemble methods (Random Forest, Gradient Boosting) often outperform simple linear models for this type of complex, non-linear data."
        ],

        VICTORY_TEXT: "🎉 ULTIMATE VICTORY! 🎉\n\nThe final Data Shard blazes with the power of complete data science mastery! All seven Data Shards of Euler unite, creating a brilliant mathematical constellation that banishes the Shadow Compiler forever!\n\nNew Cognitia is saved! The data streams flow pure and true once more!",
        THOMAS_VICTORY_DIALOGUE: "Incredible, Finja! Your mastery of machine learning is complete! Four models, perfect analysis, and the Shadow Compiler is defeated! You are truly the greatest Archmage of Mathematics!",
        MARVIN_VICTORY_DIALOGUE: "🎵 All seven shards now shine as one, the Shadow Compiler's reign is done! From calculus to ML's art, you've mastered every data part! Finja the Great has saved the day, in New Cognitia we'll always stay! 🎵",
        ALEX_VICTORY_DIALOGUE: "Phenomenal! Your complete data science workflow - from data acquisition to model comparison - represents the pinnacle of analytical excellence. The universe of data is safe in your hands!",
        DATA_SHARD_NAME: "Master Data Science Shard",

        CHAPTER_PROGRESS_SUMMARY_TEXT: "🌟 THE LEGEND IS COMPLETE! 🌟\n\nArchmage Finja has collected all Seven Data Shards of Euler, mastering every domain of mathematics and data science. The Shadow Compiler is vanquished, and New Cognitia's data streams flow in perfect mathematical harmony. The small universe of data-land is saved forever!",
        NEXT_CHAPTER_LOCATION_HINT: "Your mathematical journey is complete! You are now the legendary Master of New Cognitia!",
        SAVE_FLAG: 'chapter7_completed'
    }
};

let currentChapterData = null; // Will hold the data for the currently active chapter

// --- Chapter Logic (moved from individual chapter files) ---
function beginChapter() {
    console.log('beginChapter called');
    try {
        // Set the current chapter data
        currentChapterData = chapterData['chapter1'];
        console.log('Current chapter data:', currentChapterData ? 'loaded' : 'missing');
        
        // Reset game state
        gameState = {
            storyPhase: 0,
            cluesFound: 0,
            hintsUsed: 0,
            puzzleSolved: false,
            chapterComplete: false
        };
        
        // Start the first story phase
        showNextStoryPhase();
        
        // Initial MathJax render after a short delay
        setTimeout(() => {
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise();
            }
        }, 500);
        
    } catch (error) {
        console.error('Error in beginChapter:', error);
    }
}

function showNextStoryPhase() {
    if (gameState.storyPhase < currentChapterData.storyPhases.length) {
        const phase = currentChapterData.storyPhases[gameState.storyPhase];
        const container = document.getElementById('storyContainer');

        container.innerHTML = `
            <div class="story-section fade-in">
                <h3 style="color: #ffd700; margin-bottom: 15px;">${phase.title}</h3>
                <div id="narrativeText">${phase.text}</div>
                <button class="action-btn" onclick="continueStory()" style="margin-top: 15px; width: 100%;">
                    ${phase.action}
                </button>
            </div>
        `;

        updateProgress((gameState.storyPhase + 1) / currentChapterData.storyPhases.length * 60);
        gameState.storyPhase++;
    } else {
        showPuzzle();
    }
}

function continueStory() {
    showNextStoryPhase();
}

function checkPuzzle() {
    const answer = document.getElementById('puzzleInput').value.trim().toLowerCase();
    let isCorrect = false;

    if (currentChapterData.CHAPTER_NUMBER === 'I') {
        const correctAnswers = ["1/3", "0.333", "0.3333", "1 / 3", "one third", "0.33333", "0.333333", "0.3333333"];
        isCorrect = correctAnswers.some(correct =>
            answer === correct ||
            (answer.includes("1/3")) ||
            (parseFloat(answer) && Math.abs(parseFloat(answer) - 1/3) < 0.001)
        );
    } else if (currentChapterData.CHAPTER_NUMBER === 'II') {
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        isCorrect = currentChapterData.CORRECT_ANSWERS.some(correct =>
            answer === correct ||
            (correct === "phi" && answer === "phi") ||
            (parseFloat(answer) && Math.abs(parseFloat(answer) - goldenRatio) < 0.001)
        );
    } else if (currentChapterData.CHAPTER_NUMBER === 'III') {
        // Chapter 3 eigenvalue checking
        isCorrect = currentChapterData.CORRECT_ANSWERS.some(correct => answer === correct);
    } else if (currentChapterData.CHAPTER_NUMBER === 'IV') {
        // Chapter 4 Titanic survival prediction checking
        isCorrect = currentChapterData.CORRECT_ANSWERS.some(correct => answer === correct);
    } else if (currentChapterData.CHAPTER_NUMBER === 'V') {
        // Chapter 5 RSA factorization checking
        isCorrect = currentChapterData.CORRECT_ANSWERS.some(correct => answer === correct);
    } else if (currentChapterData.CHAPTER_NUMBER === 'VI') {
        // Chapter 6 hypothesis testing checking
        isCorrect = currentChapterData.CORRECT_ANSWERS.some(correct => answer === correct);
    } else if (currentChapterData.CHAPTER_NUMBER === 'VII') {
        // Chapter 7 data science project checking
        isCorrect = currentChapterData.CORRECT_ANSWERS.some(correct => answer === correct);
    }

    if (isCorrect) {
        solvePuzzle();
    } else {
        gameState.hintsUsed++;
        showHint();
    }
}

function solvePuzzle() {
    gameState.puzzleSolved = true;
    updateProgress(100);

    // Save chapter completion to local storage
    localStorage.setItem(currentChapterData.SAVE_FLAG, 'true');

    const container = document.getElementById('storyContainer');
    
    // Special victory screen for final chapter
    if (currentChapterData.CHAPTER_NUMBER === 'VII') {
        container.innerHTML = `
            <div class="story-section celebration final-victory">
                <h1 style="color: #ffd700; text-align: center; font-size: 2.5em; margin-bottom: 20px;">
                    🏆 LEGENDARY VICTORY! 🏆
                </h1>
                
                <div style="text-align: center; margin: 30px 0;">
                    <div style="font-size: 3em; margin: 20px 0;">
                        ⭐ 💎 ⭐ 💎 ⭐ 💎 ⭐
                    </div>
                    <h2 style="color: #90EE90; margin: 20px 0;">
                        FINJA THE GREAT<br>
                        MASTER OF NEW COGNITIA
                    </h2>
                    <div style="font-size: 3em; margin: 20px 0;">
                        ⭐ 💎 ⭐ 💎 ⭐ 💎 ⭐
                    </div>
                </div>

                <p style="color: #90EE90; font-size: 1.2em; text-align: center; margin: 25px 0;">
                    ${currentChapterData.VICTORY_TEXT}
                </p>

                <div style="background: linear-gradient(45deg, #ffd700, #ffed4e); padding: 20px; border-radius: 15px; margin: 25px 0; color: #000; text-align: center;">
                    <h3>🎓 MATHEMATICAL MASTERY ACHIEVED 🎓</h3>
                    <p><strong>Calculus:</strong> ✅ Advanced Limits & Taylor Series</p>
                    <p><strong>Sequences:</strong> ✅ Convergence & Golden Ratio</p>
                    <p><strong>Linear Algebra:</strong> ✅ Eigenvalues & Hermitian Matrices</p>
                    <p><strong>Statistics:</strong> ✅ Hypothesis Testing & Inference</p>
                    <p><strong>Cryptography:</strong> ✅ RSA & Prime Factorization</p>
                    <p><strong>Data Science:</strong> ✅ Machine Learning & Model Comparison</p>
                    <p><strong>Applied Analytics:</strong> ✅ Real-world Prediction Systems</p>
                </div>

                <div class="team-dialogue">
                    <div class="dialogue-speaker">🔮 Thomas (in awe):</div>
                    "${currentChapterData.THOMAS_VICTORY_DIALOGUE}"
                </div>

                <div class="team-dialogue">
                    <div class="dialogue-speaker">🎵 Marvin (singing the victory anthem):</div>
                    "${currentChapterData.MARVIN_VICTORY_DIALOGUE}"
                </div>

                <div class="team-dialogue">
                    <div class="dialogue-speaker">🧙 Alex (deeply impressed):</div>
                    "${currentChapterData.ALEX_VICTORY_DIALOGUE}"
                </div>

                <div style="text-align: center; margin: 30px 0; padding: 20px; background: rgba(0,0,0,0.5); border-radius: 10px;">
                    <h2 style="color: #ffd700;">🌟 THE LEGEND IS COMPLETE 🌟</h2>
                    <p style="color: #90EE90; font-size: 1.1em;">
                        The Seven Data Shards of Euler shine as one!<br>
                        New Cognitia's data streams flow in perfect harmony!<br>
                        The Shadow Compiler is vanquished forever!<br>
                        <strong>The small universe of data-land is saved!</strong>
                    </p>
                </div>

                <button class="action-btn" onclick="showFinalSummary()" style="margin-top: 20px; width: 100%; background: linear-gradient(45deg, #ffd700, #ffed4e); color: #000; font-size: 1.2em;">
                    🏆 View Complete Adventure Summary
                </button>
                <button class="action-btn" onclick="window.location.href='chapter_select.html'" style="margin-top: 10px; width: 100%; background: linear-gradient(45deg, #4b0082, #8a2be2);">
                    🎭 Return to New Cognitia
                </button>
            </div>
        `;
    } else {
        // Regular victory screen for other chapters
        container.innerHTML = `
            <div class="story-section celebration">
                <h3 style="color: #90EE90; margin-bottom: 15px;">🎉 VICTORY! ${currentChapterData.PUZZLE_TITLE} Yields!</h3>

                <p style="color: #90EE90;">${currentChapterData.VICTORY_TEXT}</p>

                <div class="team-dialogue">
                    <div class="dialogue-speaker">🔮 Thomas (excited):</div>
                    "${currentChapterData.THOMAS_VICTORY_DIALOGUE}"
                </div>

                <div class="team-dialogue">
                    <div class="dialogue-speaker">🎵 Marvin (singing triumphantly):</div>
                    "${currentChapterData.MARVIN_VICTORY_DIALOGUE}"
                </div>

                <div class="team-dialogue">
                    <div class="dialogue-speaker">🧙 Alex (impressed):</div>
                    "${currentChapterData.ALEX_VICTORY_DIALOGUE}"
                </div>

                <p style="color: #ffd700; font-weight: bold; text-align: center; margin-top: 20px;">
                    ⭐ Chapter ${currentChapterData.CHAPTER_NUMBER} Complete! The adventure continues... ⭐
                </p>

                <button class="action-btn" onclick="showChapterSummary()" style="margin-top: 20px; width: 100%; background: linear-gradient(45deg, #228b22, #32cd32);">
                    🏆 View Chapter Summary
                </button>
                <button class="action-btn" onclick="window.location.href='chapter_select.html'" style="margin-top: 10px; width: 100%; background: linear-gradient(45deg, #4b0082, #8a2be2);">
                    ➡️ Proceed to Chapter Select
                </button>
            </div>
        `;
    }

    document.getElementById('puzzleBox').classList.add('hidden');
    updateChapterStatus();
    celebrateVictory();
}

function showFinalSummary() {
    alert(`
🏆 THE DATA PIPELINE CONSPIRACY - COMPLETE! 🏆

🎭 FINJA THE GREAT - MASTER OF NEW COGNITIA 🎭

📊 FINAL STATISTICS:
✅ All 7 Data Shards of Euler: RECOVERED
✅ Mathematical Domains Mastered: 7/7
✅ Shadow Compiler: PERMANENTLY DEFEATED
✅ New Cognitia's Data Streams: PERFECTLY RESTORED

🎓 MATHEMATICAL ACHIEVEMENTS:
• Advanced Calculus & Limits
• Sequence Convergence & Golden Ratio  
• Linear Algebra & Eigenvalues
• Statistical Inference & Hypothesis Testing
• Cryptography & Prime Factorization
• Machine Learning & Data Science
• Real-world Analytics & Prediction

🌟 LEGENDARY STATUS ACHIEVED! 🌟

The small universe of data-land owes its existence to your mathematical mastery!

Your name will be remembered forever in the halls of New Cognitia as the greatest Archmage of Mathematics who ever lived!

🎉 CONGRATULATIONS, MASTER FINJA! 🎉
    `);
}

function showChapterSummary() {
    alert(`
🏆 CHAPTER ${currentChapterData.CHAPTER_NUMBER} COMPLETE! 🏆

📊 Performance Summary:
✅ ${currentChapterData.PUZZLE_TITLE}: SOLVED
✅ ${currentChapterData.DATA_SHARD_NAME}: RECOVERED
✅ Team Morale: EXCELLENT
${gameState.hintsUsed > 0 ? `💡 Hints Used: ${gameState.hintsUsed}` : '🌟 Perfect Score - No Hints Needed!'}

🎭 Team Status:
All members are inspired by your advanced mathematical analysis!

📜 Story Progress:
${currentChapterData.CHAPTER_PROGRESS_SUMMARY_TEXT}

🎯 Next Destination:
${currentChapterData.NEXT_CHAPTER_LOCATION_HINT}

Your mathematical adventure awaits! 🌟
    `);
}

function examineEnvironment() {
    gameState.cluesFound = Math.min(gameState.cluesFound + 1, currentChapterData.CLUES.length);

    const clueIndex = gameState.cluesFound - 1;
    if (currentChapterData.CLUES[clueIndex]) {
        alert(currentChapterData.CLUES[clueIndex]);
    } else {
        alert("You've already found all available clues in this area. Time to focus on the puzzle!");
    }

    updateChapterStatus();
}

function updateChapterStatus() {
    const statusDiv = document.getElementById('chapterStatus');
    if (statusDiv) { // Ensure statusDiv exists (it won't on chapter select page)
        statusDiv.innerHTML = `
            <div>🗺️ Location: ${currentChapterData.LOCATION_NAME}</div>
            <div style="color: #90EE90;">🎯 Objective: ${gameState.puzzleSolved ? 'COMPLETE!' : currentChapterData.OBJECTIVE_INITIAL}</div>
            <div style="color: ${gameState.cluesFound === currentChapterData.CLUES.length ? '#90EE90' : '#ffd700'};">🔍 Clues Found: ${gameState.cluesFound}/${currentChapterData.CLUES.length}</div>
            <div style="color: ${gameState.puzzleSolved ? '#90EE90' : '#ffd700'};">💎 Data Shards: ${gameState.puzzleSolved ? '1' : '0'}/1</div>
            <div style="color: #90EE90;">✨ Team Morale: ${gameState.puzzleSolved ? 'TRIUMPHANT!' : 'Excellent!'}</div>
            <div style="color: #ffd700; margin-top: 10px;">🏆 Chapter ${currentChapterData.CHAPTER_NUMBER}: ${gameState.puzzleSolved ? 'COMPLETED!' : 'IN PROGRESS'}</div>
        `;
    }
}