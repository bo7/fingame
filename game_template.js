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

// Reset game progress and unlock only Chapter 1
function resetGameProgress() {
    if (confirm('Are you sure you want to reset all game progress? This cannot be undone.')) {
        // Clear all chapter completion flags
        localStorage.removeItem('chapter1_completed');
        localStorage.removeItem('chapter2_completed');
        
        // Optional: Clear any other game state if needed
        // localStorage.removeItem('gameState');
        
        // Reload the page to reflect changes
        window.location.reload();
    }
}

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
    if (!char) return;

    const modal = document.getElementById('characterModal');
    document.getElementById('modalCharacterName').textContent = char.name;
    document.getElementById('modalCharacterClass').textContent = char.class;
    document.getElementById('modalCharacterDescription').textContent = char.description;
    
    const img = document.getElementById('modalCharacterImage');
    img.src = char.image;
    img.alt = `${char.name} - ${char.class}`;
    
    // Show the modal and prevent body scrolling
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    
    // Focus the modal for keyboard navigation
    modal.focus();
}

function closeCharacterModal() {
    const modal = document.getElementById('characterModal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Close modal when clicking outside content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('characterModal');
    if (event.target === modal) {
        closeCharacterModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCharacterModal();
    }
});

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

function showHint() {
    const hintSection = document.getElementById('hintSection');
    const hintText = document.getElementById('hintText');
    
    if (currentChapterData && currentChapterData.HINTS && currentChapterData.HINTS.length > 0) {
        // Show the first hint, then the next one on subsequent clicks
        const hintIndex = Math.min(gameState.hintsUsed, currentChapterData.HINTS.length - 1);
        const hintContent = currentChapterData.HINTS[hintIndex];
        
        console.log('Showing hint:', hintContent);
        
        hintText.innerHTML = hintContent;
        hintSection.classList.remove('hidden');
        
        // Only increment if we haven't shown all hints yet
        if (gameState.hintsUsed < currentChapterData.HINTS.length) {
            gameState.hintsUsed++;
        }
        
        // Direct MathJax rendering using the same approach as the test page
        if (window.MathJax && window.MathJax.Hub) {
            console.log('Directly calling MathJax.Hub.Queue for hint text');
            // Force MathJax to process the hint text
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, hintText]);
            MathJax.Hub.Queue(() => {
                console.log('MathJax rendering completed for hint');
            });
        } else {
            console.warn('MathJax not available for hint rendering');
        }
    }
}

// Special function to insert a LaTeX formula directly
function insertLaTeXFormula(elementId, formula) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found`);
        return;
    }
    
    // Set the formula HTML directly
    element.innerHTML = '<div class="math-formula">$$' + formula + '$$</div>';
    console.log('Inserted formula HTML:', element.innerHTML);
    
    // Render the formula
    if (window.MathJax && window.MathJax.Hub) {
        console.log(`Rendering LaTeX formula in ${elementId}:`, formula);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, element]);
        MathJax.Hub.Queue(() => {
            console.log('MathJax rendering completed for formula');
        });
    } else {
        console.warn('MathJax not available for formula rendering');
    }
}

// Function to directly fix the formula in the DOM after it's loaded
window.fixFormula = function() {
    console.log('🔶 ATTEMPTING TO FIX FORMULA DIRECTLY IN THE DOM');
    
    // Find all math formula elements
    const formulas = document.querySelectorAll('.math-formula');
    console.log(`Found ${formulas.length} formula elements`);
    
    formulas.forEach((formula, index) => {
        console.log(`Formula ${index} content:`, formula.innerHTML);
        
        // Check if it contains the mangled formula
        if (formula.innerHTML.includes('lim_{x o 0} rac{sin(x) - x cos(x)}{x^3}')) {
            console.log(`Found mangled formula in element ${index}, fixing...`);
            
            // Replace with correct formula
            formula.innerHTML = '$$\\lim_{x \\to 0} \\frac{\\sin(x) - x \\cos(x)}{x^3}$$';
            
            // Force MathJax to reprocess
            if (window.MathJax && window.MathJax.Hub) {
                MathJax.Hub.Queue(['Typeset', MathJax.Hub, formula]);
            }
        }
    });
    
    return 'Formula fix attempted';
};

// FIXED: This function now properly uses currentChapterData instead of hardcoded formulas
function showPuzzle() {
    console.log('🔴 SHOWING PUZZLE FOR CHAPTER:', currentChapterData.CHAPTER_NUMBER);
    console.log('🔴 PUZZLE FORMULA:', currentChapterData.PUZZLE_FORMULA_DISPLAY);
    
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

    // Show the puzzle box with the correct content
    const puzzleBox = document.getElementById('puzzleBox');
    const puzzleText = document.getElementById('puzzleText');
    const puzzleInput = document.getElementById('puzzleInput');
    
    puzzleBox.classList.remove('hidden');
    
    // FIXED: Clear the puzzle text completely and rebuild it with current chapter data
    puzzleText.innerHTML = '';
    
    // Set the puzzle content using the current chapter data
    puzzleText.innerHTML = `
        <strong>${currentChapterData.PUZZLE_TITLE}:</strong><br><br>
        <div style='text-align: center; font-family: "Times New Roman", serif; font-size: 1.3em; background: rgba(0,0,0,0.4); padding: 20px; border-radius: 8px; margin: 15px 0;'>
            ${currentChapterData.PUZZLE_FORMULA_DISPLAY}
        </div>
        <em>${currentChapterData.PUZZLE_INSTRUCTIONS}</em><br><br>
        <small style='color: #daa520;'>💡 Hint: ${currentChapterData.PUZZLE_HINT_SHORT}</small>
    `;
    
    puzzleInput.placeholder = currentChapterData.PUZZLE_INPUT_PLACEHOLDER;
    puzzleInput.value = ''; // Clear any previous input
    
    updateProgress(70);
    
    // Scroll to the puzzle
    puzzleBox.scrollIntoView({ behavior: 'smooth' });
    
    // FIXED: Clear MathJax cache and force complete re-rendering
    if (window.MathJax && window.MathJax.Hub) {
        console.log('🔴 CLEARING MATHJAX CACHE AND RE-RENDERING FOR CHAPTER:', currentChapterData.CHAPTER_NUMBER);
        
        // Clear MathJax's internal cache
        if (window.MathJax.Hub.getAllJax) {
            const jaxElements = window.MathJax.Hub.getAllJax();
            jaxElements.forEach(jax => {
                if (jax.Remove) jax.Remove();
            });
        }
        
        // Force complete reprocessing of both containers
        MathJax.Hub.Queue(['Reprocess', MathJax.Hub, container]);
        MathJax.Hub.Queue(['Reprocess', MathJax.Hub, puzzleText]);
        MathJax.Hub.Queue(() => {
            console.log('🔴 MathJax rendering completed for chapter:', currentChapterData.CHAPTER_NUMBER);
            puzzleInput.focus();
        });
    } else {
        console.warn('MathJax not available');
        puzzleInput.focus();
    }
}

// Test function that can be called directly from the console
window.testMathJax = function() {
    console.log('🔵 TESTING MATHJAX DIRECTLY');
    
    // Create a test div
    const testDiv = document.createElement('div');
    testDiv.id = 'mathjax-test-div';
    testDiv.style.padding = '20px';
    testDiv.style.background = 'rgba(0, 0, 0, 0.8)';
    testDiv.style.color = '#ffd700';
    testDiv.style.position = 'fixed';
    testDiv.style.top = '50px';
    testDiv.style.left = '50px';
    testDiv.style.zIndex = '9999';
    testDiv.style.borderRadius = '10px';
    testDiv.style.border = '2px solid #ffd700';
    
    // Add a title
    testDiv.innerHTML = '<h3>MathJax Test</h3><div id="test-formula"></div><button id="close-test" style="margin-top: 10px; padding: 5px;">Close</button>';
    document.body.appendChild(testDiv);
    
    // Add close button functionality
    document.getElementById('close-test').addEventListener('click', function() {
        document.body.removeChild(testDiv);
    });
    
    // Get the formula container
    const formulaContainer = document.getElementById('test-formula');
    
    // Create a script element to add the formula
    const script = document.createElement('script');
    script.type = 'math/tex; mode=display';
    
    // Set a very simple formula
    script.textContent = 'x^2';
    
    // Add the script to the container
    formulaContainer.appendChild(script);
    
    // Process with MathJax
    if (window.MathJax && window.MathJax.Hub) {
        console.log('Processing test formula with MathJax');
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, formulaContainer]);
        MathJax.Hub.Queue(() => {
            console.log('MathJax test rendering completed');
        });
    } else {
        console.warn('MathJax not available for test');
        formulaContainer.innerHTML = '<p style="color: red;">MathJax not available!</p>';
    }
    
    return 'Test initiated - check the top left of the screen';
};

// Function to render MathJax equations (optimized for MathJax v2)
window.renderMathJax = function(elementToProcess, retryCount = 0) {
    const elementId = elementToProcess ? (elementToProcess.id || 'specific-element') : 'document';
    console.log(`Rendering MathJax for ${elementId}`);
    
    return new Promise((resolve) => {
        // If MathJax isn't loaded yet and we haven't exceeded retry limit
        if ((!window.MathJax || !window.mathJaxReady) && retryCount < 10) {
            console.log(`MathJax not fully ready yet, will retry (${retryCount + 1}/10)...`);
            // Retry after a delay
            setTimeout(() => {
                renderMathJax(elementToProcess, retryCount + 1)
                    .then(resolve);
            }, 500); // Longer delay between retries
            return;
        }
        
        // If we've exceeded retry limit or MathJax is still not available
        if (!window.MathJax || !window.mathJaxReady) {
            console.warn('MathJax not loaded after multiple retries');
            resolve();
            return;
        }
        
        try {
            // MathJax v2 approach (using Hub)
            if (window.MathJax.Hub) {
                const target = elementToProcess || document.body;
                
                // First tell MathJax to look for unprocessed math in the target
                window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, target]);
                
                // Then resolve the promise when MathJax is done
                window.MathJax.Hub.Queue(() => {
                    console.log(`MathJax rendering completed for ${elementId}`);
                    resolve();
                });
            } 
            // Fallback for MathJax v3 (in case we switch back)
            else if (window.MathJax.typesetPromise) {
                const elements = elementToProcess ? [elementToProcess] : undefined;
                window.MathJax.typesetPromise(elements)
                    .then(() => {
                        console.log(`MathJax typeset completed for ${elementId}`);
                        resolve();
                    })
                    .catch(err => {
                        console.error('MathJax typeset error:', err);
                        resolve();
                    });
            } 
            else {
                console.warn('MathJax is loaded but no compatible API found');
                resolve();
            }
        } catch (err) {
            console.error('Error in MathJax rendering:', err);
            resolve();
        }
    });
};

// Ensure MathJax is loaded and ready
function ensureMathJax() {
    return new Promise((resolve) => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            console.log('MathJax is ready');
            resolve();
        } else {
            console.log('Waiting for MathJax...');
            setTimeout(() => ensureMathJax().then(resolve), 100);
        }
    });
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
    
    // Direct MathJax rendering using the same approach as the test page
    if (window.MathJax && window.MathJax.Hub) {
        console.log('Directly calling MathJax.Hub.Queue for game container');
        // Process the entire game container
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, gameContainer]);
        
        // Also specifically process the narrative text
        const narrativeText = document.getElementById('narrativeText');
        if (narrativeText) {
            console.log('Directly calling MathJax.Hub.Queue for narrative text');
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, narrativeText]);
        }
        
        MathJax.Hub.Queue(() => {
            console.log('MathJax rendering completed for game layout');
        });
    } else {
        console.warn('MathJax not available for game layout rendering');
    }

    // Add rotating Gemini images to the scene image
    const geminiImages = [
        'images/Gemini_Generated_Image_9mstdc9mstdc9mst.jpeg',
        'images/Gemini_Generated_Image_9mstdd9mstdd9mst.jpeg',
        'images/Gemini_Generated_Image_9mstdg9mstdg9mst.jpeg',
        'images/Gemini_Generated_Image_svzo70svzo70svzo.jpeg',
        'images/Gemini_Generated_Image_svzo71svzo71svzo.jpeg',
        'images/Gemini_Generated_Image_svzo72svzo72svzo.jpeg',
        'images/Gemini_Generated_Image_svzo73svzo73svzo.jpeg',
        'images/Gemini_Generated_Image_svzo75svzo75svzo.jpeg',
        'images/Gemini_Generated_Image_svzo76svzo76svzo.jpeg',
        'images/Gemini_Generated_Image_svzo77svzo77svzo.jpeg',
        'images/Gemini_Generated_Image_svzo78svzo78svzo.jpeg'
    ];

    // Create gallery container
    const gallery = document.createElement('div');
    gallery.id = 'geminiGallery';
    gallery.className = 'gemini-gallery';
    
    // Add all images to the gallery (only one will be active at a time)
    geminiImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gemini Art ${index + 1}`;
        img.className = 'gemini-image' + (index === 0 ? ' active' : '');
        gallery.appendChild(img);
    });
    
    // Add gallery to the scene image
    const sceneImage = document.getElementById('sceneImage');
    if (sceneImage) {
        // Add gear animation if it doesn't exist
        if (!document.querySelector('.gear-animation')) {
            const gear = document.createElement('div');
            gear.className = 'gear-animation';
            gear.textContent = '⚙️';
            sceneImage.appendChild(gear);
        }
        sceneImage.appendChild(gallery);
    }

    // Add character modal HTML
    const modalHTML = `
    <div id="characterModal" class="character-modal" onclick="closeCharacterModal()">
        <div class="character-modal-content" onclick="event.stopPropagation()">
            <img id="modalCharacterImage" src="" alt="Character Image" class="character-modal-image">
            <div class="character-name" id="modalCharacterName"></div>
            <div class="character-class" id="modalCharacterClass"></div>
            <div class="character-description" id="modalCharacterDescription"></div>
            <button class="action-btn" style="background: linear-gradient(45deg, #8b4513, #a0522d); margin-top: 20px;" onclick="closeCharacterModal()">
                Close
            </button>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

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

    // Rotate Gemini images every 5 seconds
    const rotateGeminiImages = () => {
        const images = document.querySelectorAll('.gemini-image');
        if (images.length > 1) {  // Only rotate if we have multiple images
            const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
            const nextIndex = (currentIndex + 1) % images.length;
            
            // Fade out current image
            if (currentIndex >= 0) {
                images[currentIndex].classList.remove('active');
            }
            
            // Fade in next image
            images[nextIndex].classList.add('active');
        }
    };
    
    // Start rotating images every 5 seconds if there are multiple images
    const geminiImagesList = document.querySelectorAll('.gemini-image');
    if (geminiImagesList.length > 1) {
        setInterval(rotateGeminiImages, 5000);
    }

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