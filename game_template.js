// game_template.js

let gameState = {
    storyPhase: 0,
    cluesFound: 0,
    hintsUsed: 0,
    puzzleSolved: false,
    chapterComplete: false,
    currentChapterId: null // To track which chapter is active
};

// --- Character Information (Global to all chapters) ---
const characterInfo = {
    finja: {
        name: "Finja",
        class: "Archmage of Mathematics",
        status: "Ready to lead the expedition",
        health: 100,
        image: "images/finja.png",
        description: "👑 As the legendary Archmage of Mathematics, you command respect throughout New Cognitia. Your theorem compass glows brighter in the presence of pure mathematical truth."
    },
    thomas: {
        name: "Thomas",
        class: "Data Enchanter",
        status: "Studying corruption patterns",
        health: 95,
        image: "images/thomas.png",
        description: "🔮 Thomas specializes in data enchantments, able to see the hidden patterns in corrupted algorithms. His crystal ball shows swirling probability distributions."
    },
    marvin: {
        name: "Marvin",
        class: "Algorithm Bard",
        status: "Composing motivational verses",
        health: 98,
        image: "images/marvin.png",
        description: "🎵 The Algorithm Bard's songs can literally debug code and boost team morale. His lute is strung with fiber optic cables that pulse with data."
    },
    sven: {
        name: "Sven",
        class: "Security Paladin",
        status: "Maintaining defensive protocols",
        health: 100,
        image: "images/sven.png",
        description: "🛡️ A noble protector of secure systems, Sven's silver armor bears the emblem of the Cryptographic Order. His presence strengthens all defensive protocols."
    },
    dirk: {
        name: "Dirk",
        class: "Firewall Guardian",
        status: "Scanning for threats",
        health: 92,
        image: "images/dirk.png",
        description: "⚔️ The Firewall Guardian's dark armor is inscribed with protective runes. He wields a two-handed sword that can slice through the most stubborn malware."
    },
    hiromi: {
        name: "Hiromi",
        class: "System Infiltrator",
        status: "Reconnaissance complete",
        health: 97,
        image: "images/hiromi.png",
        description: "🥷 Master of stealth and system infiltration, Hiromi can slip through network vulnerabilities undetected. Her daggers are USB keys with infinite storage."
    },
    alex: {
        name: "Alex",
        class: "Machine Learning Sage",
        status: "Analyzing data patterns",
        health: 94,
        image: "images/alex.png",
        description: "🧙 The Machine Learning Sage's neural networks can predict algorithmic behavior with uncanny accuracy. His robes shimmer with artificial intelligence."
    },
    moritz: {
        name: "Moritz",
        class: "Network Ranger",
        status: "Scouting network pathways",
        health: 99,
        image: "images/moritz.png",
        description: "🏹 The Network Ranger's arrows always find the fastest path through any network topology. His elven heritage grants him perfect packet routing abilities."
    },
    guilherme: {
        name: "Guilherme",
        class: "Statistical Strategist",
        status: "Optimizing probabilities",
        health: 97,
        image: "images/guilherme.png",
        description: "🎯 Guilherme is a master of statistical probability, able to calculate precise strategies and identify rare data anomalies. His keen eye for outliers is invaluable."
    }
};

// --- Common Game Functions ---
function createSteamParticles() {
    const container = document.getElementById('steamContainer');
    if (!container) return; // Ensure container exists for chapter select page

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'steam-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%'; // Start from bottom
            particle.style.animationDelay = Math.random() * 4 + 's';
            container.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 4000);
        }, Math.random() * 2000);
    }
}

function typeWriter(text, element, speed = 50, callback) {
    element.innerHTML = '';
    element.style.borderRight = '2px solid #d4af37';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.style.borderRight = 'none';
            if (callback) callback();
        }
    }, speed);
}

function updateProgress(percentage) {
    const progressBar = document.getElementById('storyProgress');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

function showTeamStatus() {
    let statusMessage = "👥 TEAM STATUS REPORT 👥\n\n";
    statusMessage += `🎭 Current Location: ${currentChapterData.LOCATION_NAME}\n`;
    statusMessage += `⚡ Overall Morale: ${gameState.puzzleSolved ? 'TRIUMPHANT!' : 'Ready for action!'}\n\n`;
    statusMessage += "Team Members:\n";

    for (const key in characterInfo) {
        if (characterInfo.hasOwnProperty(key)) {
            const char = characterInfo[key];
            statusMessage += `${char.name} (${char.class}) - ${char.status}\n`;
        }
    }

    statusMessage += "\n💪 All team members are healthy and ready for the next challenge!";
    alert(statusMessage);
}

function showInventory() {
    let inventoryItems = `
🎒 FINJA'S MATHEMATICAL ARSENAL 🎒

🔧 Equipment Status:
• Analytical Engine Tablet - Processes complex calculations
• Theorem Compass - Points toward mathematical truth
• Data Crystal Resonator - Detects algorithm corruption
• Team Communication Device - Connects with party members
• Euler's Memorial Badge - Grants access to sacred mathematics
`;
    // Add chapter-specific items if they were added dynamically to inventory
    if (gameState.currentChapterId === 'chapter2') { // Example for Chapter 2 specific item
        inventoryItems += "• Temporal Calibration Device - Newly acquired, essential for time-based puzzles!\n";
    }

    inventoryItems += `\n${gameState.puzzleSolved ? `💎 DATA SHARD ACQUIRED: ${currentChapterData.DATA_SHARD_NAME}` : '🔍 Searching for Data Shards...'}`;

    inventoryItems += `\n\n💡 Special Abilities Available:
• Mathematical Insight (unlimited uses)
• Team Consultation (ask teammates for hints)
• Environmental Analysis (discover hidden clues)
• Algorithm Debugging (cleanse corrupted code)`;

    alert(inventoryItems);
}

function showCharacterInfo(characterKey) {
    const char = characterInfo[characterKey];
    if (char) {
        alert(`${char.name} (${char.class})\n\n${char.description}`);
    }
}

function celebrateVictory() {
    document.body.style.animation = 'celebrate 2s ease-in-out';

    const characters = document.querySelectorAll('.character');
    characters.forEach(char => {
        char.style.background = 'rgba(50, 205, 50, 0.3)';
        setTimeout(() => {
            char.style.background = 'rgba(139, 69, 19, 0.4)';
        }, 3000);
    });

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createCelebrationParticle();
        }, i * 50);
    }
}

function createCelebrationParticle() {
    const particle = document.createElement('div');
    particle.innerHTML = ['⭐', '✨', '🎉', '💫', '🌟'][Math.floor(Math.random() * 5)];
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.fontSize = '2em';
    particle.style.zIndex = '1000';
    particle.style.pointerEvents = 'none';
    particle.style.animation = 'steam-rise 3s ease-out forwards';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}


// --- Dynamic HTML Generation Function ---
function generateGameLayout(chapterData) {
    document.body.innerHTML = ''; // Clear existing body content

    const gameContainer = document.createElement('div');
    gameContainer.className = 'game-container';

    gameContainer.innerHTML = `
        <div class="main-panel">
            <h1 class="title">The Data Pipeline Conspiracy</h1>
            <p class="subtitle" id="chapterSubtitle">Chapter ${chapterData.CHAPTER_NUMBER}: ${chapterData.CHAPTER_TITLE}</p>

            <div class="chapter-header">
                <h2 style="color: #da70d6; margin: 0;" id="chapterLocation">Location: ${chapterData.LOCATION_NAME}</h2>
                <small style="color: #daa520;" id="locationSubtitle">${chapterData.LOCATION_SUBTITLE}</small>
            </div>

            <div class="scene-image" id="sceneImage" style="background-image: url('${chapterData.SCENE_IMAGE}');">
                <div class="gear-animation">⚙️</div>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" id="storyProgress" style="width: 0%;"></div>
            </div>

            <div class="scene-content" id="storyContainer">
                <div id="narrativeText">
                    <div class="typewriter">${chapterData.INITIAL_NARRATIVE_TEXT}</div>
                </div>
            </div>

            <div class="puzzle-box hidden" id="puzzleBox">
                <div class="puzzle-title">∞ ${chapterData.PUZZLE_TITLE}</div>
                <p id="puzzleText"></p>
                <input type="text" class="puzzle-input" id="puzzleInput" placeholder="${chapterData.PUZZLE_INPUT_PLACEHOLDER}">
                <button class="action-btn" onclick="checkPuzzle()" style="margin-top: 15px; width: 100%;">🔑 Submit Answer</button>
                <div id="hintSection" class="hidden" style="margin-top: 15px; padding: 10px; background: rgba(255, 215, 0, 0.1); border-radius: 5px;">
                    <strong style="color: #ffd700;">💡 Team Hint:</strong>
                    <span id="hintText"></span>
                </div>
            </div>

            <div class="actions" id="actionButtons">
                <button class="action-btn" onclick="beginChapter()">🚀 Begin Chapter ${chapterData.CHAPTER_NUMBER}</button>
                <button class="action-btn" onclick="showTeamStatus()">👥 Check Team Status</button>
                <button class="action-btn" onclick="examineEnvironment()">🔍 Examine ${chapterData.LOCATION_NAME}</button>
                <button class="action-btn" onclick="showInventory()">🎒 Check Equipment</button>
            </div>
            <button class="action-btn" onclick="window.location.href='chapter_select.html'" style="margin-top: 20px; width: 100%; background: linear-gradient(45deg, #4b0082, #8a2be2;">
                ⬅️ Back to Chapter Select
            </button>
        </div>

        <div class="sidebar">
            <div class="inventory">
                <div class="inventory-title">🎒 Finja's Mathematical Arsenal</div>
                <div id="inventoryList">
                    • <strong>Analytical Engine Tablet</strong> - Processes complex calculations<br>
                    • <strong>Theorem Compass</strong> - Points toward mathematical truth<br>
                    • <strong>Data Crystal Resonator</strong> - Detects algorithm corruption<br>
                    • <strong>Team Communication Device</strong> - Connects with party members<br>
                    • <strong>Euler's Memorial Badge</strong> - Grants access to sacred mathematics<br>
                    ${chapterData.CHAPTER_NUMBER === 'II' ? '• <strong>Temporal Calibration Device</strong> - Newly acquired, essential for time-based puzzles!<br>' : ''}
                    </div>
            </div>

            <div class="character-panel">
                <h3 style="color: #ffd700; margin-bottom: 15px;">🎭 Your Elite Mathematical Team</h3>
                ${Object.keys(characterInfo).map(key => {
                    const char = characterInfo[key];
                    return `
                        <div class="character" onclick="showCharacterInfo('${key}')">
                            <img src="${char.image}" alt="${char.name} Icon" class="character-icon">
                            <div class="character-info">
                                <div class="character-name">${char.name}</div>
                                <div class="character-class">${char.class}</div>
                                <div class="character-status">${char.status}</div>
                            </div>
                            <div class="health-bar"><div class="health-fill" style="width: ${char.health}%;"></div></div>
                        </div>
                    `;
                }).join('')}
            </div>

            <div style="background: rgba(139, 69, 19, 0.2); padding: 18px; border-radius: 8px;">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 12px;">📊 Chapter Progress</div>
                <div id="chapterStatus">
                    <div>🗺️ Location: ${chapterData.LOCATION_NAME}</div>
                    <div>🎯 Objective: ${chapterData.OBJECTIVE_INITIAL}</div>
                    <div>🔍 Clues Found: 0/${chapterData.CLUES.length}</div>
                    <div>💎 Data Shards: 0/1</div>
                    <div style="color: #90EE90;">✨ Team Morale: Excellent!</div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(gameContainer);

    // After rendering, set initial typewriter text and start animations
    typeWriter(chapterData.INITIAL_NARRATIVE_TEXT, document.getElementById('narrativeText'));
    createSteamParticles();
    setInterval(createSteamParticles, 8000);
    setInterval(() => {
        const gear = document.querySelector('.gear-animation');
        if (gear) {
            // gear.style.color = Math.random() > 0.5 ? '#ffd700' : '#d4af37'; // Example: optional color flicker
        }
    }, 3000);

    // Add Enter key listener for puzzle input after the puzzle box is generated
    const puzzleInput = document.getElementById('puzzleInput');
    if (puzzleInput) {
        puzzleInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPuzzle();
            }
        });
    }
}