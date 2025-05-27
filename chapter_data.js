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
        PUZZLE_FORMULA_DISPLAY: `lim<sub>x→0</sub> <span style="font-size: 1.4em;">(sin(x) - x cos(x)) / x³</span>`,
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
        PUZZLE_FORMULA_DISPLAY: `Consider the sequence given by the recurrence relation: $a_{n+1} = \\sqrt{1 + a_n}$ for $n \\ge 1$, with $a_1 = 1$.<br>
                                        Find the exact value of $\\lim_{n \\to \\infty} a_n$.`,
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
    }
    // Add more chapters here, e.g., 'chapter3': { ... }
};

let currentChapterData = null; // Will hold the data for the currently active chapter

// --- Chapter Logic (moved from individual chapter files) ---
function beginChapter() {
    gameState.storyPhase = 0;
    showNextStoryPhase();
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

function showPuzzle() {
    const container = document.getElementById('storyContainer');
    container.innerHTML = `
        <div class="story-section">
            <h3 style="color: #da70d6; margin-bottom: 15px;">∞ ${currentChapterData.PUZZLE_TITLE}</h3>
            <p>${currentChapterData.PUZZLE_DESCRIPTION}</p>

            <div class="team-dialogue">
                <div class="dialogue-speaker">🔮 ${currentChapterData.PUZZLE_GUARDIAN_NAME}:</div>
                "${currentChapterData.PUZZLE_CHALLENGE_DIALOGUE}"
                <br><br>
                <div style="text-align: center; font-family: 'Times New Roman', serif; font-size: 1.2em; color: #da70d6; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;">
                    ${currentChapterData.PUZZLE_FORMULA_DISPLAY}
                </div>
                "${currentChapterData.PUZZLE_CLARIFICATION_DIALOGUE}"
            </div>

            <p style="color: #daa520; font-style: italic;">The puzzle awaits your answer. Your team stands ready to assist...</p>
        </div>
    `;

    document.getElementById('puzzleBox').classList.remove('hidden');
    document.getElementById('puzzleText').innerHTML =
        `<strong>${currentChapterData.PUZZLE_TITLE}:</strong><br><br>` +
        `<div style='text-align: center; font-family: "Times New Roman", serif; font-size: 1.3em; background: rgba(0,0,0,0.4); padding: 20px; border-radius: 8px; margin: 15px 0;'>` +
        `${currentChapterData.PUZZLE_FORMULA_DISPLAY}` +
        `</div>` +
        `<em>${currentChapterData.PUZZLE_INSTRUCTIONS}</em><br><br>` +
        `<small style='color: #daa520;'>💡 Hint: ${currentChapterData.PUZZLE_HINT_SHORT}</small>`;

    updateProgress(70);
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
    }
    // Add conditions for other chapters' puzzles here

    if (isCorrect) {
        solvePuzzle();
    } else {
        gameState.hintsUsed++;
        showHint();
    }
}

function showHint() {
    const hints = currentChapterData.HINTS;
    const hintIndex = Math.min(gameState.hintsUsed - 1, hints.length - 1);
    document.getElementById('hintText').innerHTML = hints[hintIndex];
    document.getElementById('hintSection').classList.remove('hidden');
}

function solvePuzzle() {
    gameState.puzzleSolved = true;
    updateProgress(100);

    // Save chapter completion to local storage
    localStorage.setItem(currentChapterData.SAVE_FLAG, 'true');

    const container = document.getElementById('storyContainer');
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

    document.getElementById('puzzleBox').classList.add('hidden');
    updateChapterStatus();
    celebrateVictory();
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