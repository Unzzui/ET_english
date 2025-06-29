class Presentation {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        this.currentSlide = 1;
        
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlideEl = document.getElementById('currentSlide');
        this.totalSlidesEl = document.getElementById('totalSlides');
        this.progressFill = document.getElementById('progressFill');
        
        this.init();
    }
    
    init() {
        // Set initial values
        this.currentSlideEl.textContent = this.currentSlide;
        this.totalSlidesEl.textContent = this.totalSlides;
        this.updateProgress();
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Touch gestures for mobile
        this.setupTouchGestures();
        
        // Initial state
        this.updateNavigationButtons();
        this.showSlide(this.currentSlide);
        
        // Auto-focus for keyboard navigation
        document.body.tabIndex = 0;
        document.body.focus();
    }
    
    showSlide(slideNumber) {
        // Hide all slides
        this.slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        
        // Show current slide
        const activeSlide = this.slides[slideNumber - 1];
        if (activeSlide) {
            activeSlide.classList.add('active');
            // Add entrance animation after a brief delay
            setTimeout(() => {
                this.animateSlideContent(activeSlide);
            }, 200);
        }
        
        this.currentSlide = slideNumber;
        this.currentSlideEl.textContent = this.currentSlide;
        this.updateProgress();
        this.updateNavigationButtons();
    }
    
    animateSlideContent(slide) {
        // Enhanced animation system for ultra-professional presentation
        const animatableElements = slide.querySelectorAll(
            '.purpose-card, .participant-item, .asset-card, .timeline-item, .benefit-item, .definition-card, .exchange-item, .ownership-concept, .stat-item, .exchange-card, .framework-intro, .primary-definition'
        );
        
        // Reset all animations
        animatableElements.forEach((element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px) scale(0.95)';
            element.style.filter = 'blur(5px)';
        });
        
        // Staggered entrance animations
        animatableElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
                element.style.filter = 'blur(0px)';
                
                // Add subtle bounce effect
                setTimeout(() => {
                    element.style.transform = 'translateY(-2px) scale(1.01)';
                    setTimeout(() => {
                        element.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                }, 200);
                
            }, 150 + (index * 120));
        });
        
        // Enhanced title animations
        const titleElements = slide.querySelectorAll('.main-title, .slide-header h2, .header-text h2');
        titleElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.7) rotateX(20deg)';
            element.style.filter = 'blur(10px)';
            
            setTimeout(() => {
                element.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.32, 1)';
                element.style.opacity = '1';
                element.style.transform = 'scale(1) rotateX(0deg)';
                element.style.filter = 'blur(0px)';
            }, 50 + (index * 200));
        });
        
        // Premium icon animations
        const icons = slide.querySelectorAll('.header-icon, .title-icon, .stat-icon, .purpose-icon, .asset-icon, .participant-icon');
        icons.forEach((icon, index) => {
            icon.style.transform = 'scale(0) rotate(180deg)';
            icon.style.opacity = '0';
            
            setTimeout(() => {
                icon.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.opacity = '1';
            }, 300 + (index * 100));
        });
        
        // Animate statistical numbers with counter effect
        const statNumbers = slide.querySelectorAll('.stat-number, .volume-number');
        statNumbers.forEach((stat, index) => {
            setTimeout(() => {
                this.animateNumber(stat);
            }, 500 + (index * 200));
        });
        
        // Presenter tag animations
        const presenterTags = slide.querySelectorAll('.presenter-tag');
        presenterTags.forEach((tag, index) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateX(100px) rotateY(45deg)';
            
            setTimeout(() => {
                tag.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                tag.style.opacity = '1';
                tag.style.transform = 'translateX(0) rotateY(0deg)';
            }, 400 + (index * 150));
        });
        
        // Market stats special animation
        const marketStats = slide.querySelector('.market-stats');
        if (marketStats) {
            marketStats.style.opacity = '0';
            marketStats.style.transform = 'translateY(60px) scale(0.9)';
            
            setTimeout(() => {
                marketStats.style.transition = 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
                marketStats.style.opacity = '1';
                marketStats.style.transform = 'translateY(0) scale(1)';
                
                // Add pulsing effect for emphasis
                setTimeout(() => {
                    marketStats.style.animation = 'subtle-pulse 2s ease-in-out infinite';
                }, 1000);
            }, 600);
        }
        
        // Special title slide animations
        if (slide.classList.contains('title-slide')) {
            this.animateTitleSlide(slide);
        }
    }
    
    animateTitleSlide(slide) {
        // Special animation sequence for title slide
        const titleContainer = slide.querySelector('.main-title-container');
        const titleIcon = slide.querySelector('.title-icon');
        const mainTitle = slide.querySelector('.main-title');
        const subtitle = slide.querySelector('.subtitle');
        const presenterInfo = slide.querySelector('.presenter-info');
        const marketStats = slide.querySelector('.market-stats');
        
        // Reset all elements
        [titleContainer, titleIcon, mainTitle, subtitle, presenterInfo, marketStats].forEach(el => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(100px) scale(0.8)';
            }
        });
        
        // Animate title icon first
        if (titleIcon) {
            setTimeout(() => {
                titleIcon.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                titleIcon.style.opacity = '1';
                titleIcon.style.transform = 'translateY(0) scale(1)';
            }, 200);
        }
        
        // Main title with typewriter effect
        if (mainTitle) {
            setTimeout(() => {
                mainTitle.style.transition = 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
                mainTitle.style.opacity = '1';
                mainTitle.style.transform = 'translateY(0) scale(1)';
                
                // Add gradient shimmer effect
                setTimeout(() => {
                    mainTitle.style.animation = 'gradient-shimmer 3s ease-in-out infinite';
                }, 500);
            }, 500);
        }
        
        // Subtitle
        if (subtitle) {
            setTimeout(() => {
                subtitle.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0) scale(1)';
            }, 800);
        }
        
        // Presenter info
        if (presenterInfo) {
            setTimeout(() => {
                presenterInfo.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                presenterInfo.style.opacity = '1';
                presenterInfo.style.transform = 'translateY(0) scale(1)';
            }, 1100);
        }
        
        // Market stats with dramatic entrance
        if (marketStats) {
            setTimeout(() => {
                marketStats.style.transition = 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
                marketStats.style.opacity = '1';
                marketStats.style.transform = 'translateY(0) scale(1)';
                
                // Add pulsing glow effect
                setTimeout(() => {
                    marketStats.style.boxShadow = '0 0 60px rgba(99, 102, 241, 0.3)';
                }, 800);
            }, 1400);
        }
    }
    
    animateNumber(element) {
        const finalValue = element.textContent;
        const numericPart = finalValue.match(/[\d.]+/);
        
        if (numericPart) {
            const target = parseFloat(numericPart[0]);
            const suffix = finalValue.replace(numericPart[0], '');
            const prefix = finalValue.substring(0, finalValue.indexOf(numericPart[0]));
            
            // Enhanced number animation with easing
            let current = 0;
            const duration = 1500; // ms
            const startTime = Date.now();
            
            const updateNumber = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                current = target * easeOutQuart;
                
                // Format number appropriately
                let displayValue;
                if (target >= 1000) {
                    displayValue = Math.floor(current).toLocaleString();
                } else if (target % 1 === 0) {
                    displayValue = Math.floor(current).toString();
                } else {
                    displayValue = current.toFixed(1);
                }
                
                element.textContent = prefix + displayValue + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    // Add final pulse effect
                    element.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        element.style.transition = 'transform 0.3s ease';
                        element.style.transform = 'scale(1)';
                    }, 100);
                }
            };
            
            requestAnimationFrame(updateNumber);
        }
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.showSlide(this.currentSlide + 1);
            this.addSlideSound();
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.showSlide(this.currentSlide - 1);
            this.addSlideSound();
        }
    }
    
    updateProgress() {
        const progress = (this.currentSlide / this.totalSlides) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentSlide === 1;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides;
    }
    
    handleKeyPress(e) {
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'Enter':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'Backspace':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.showSlide(1);
                break;
            case 'End':
                e.preventDefault();
                this.showSlide(this.totalSlides);
                break;
            case 'Escape':
                e.preventDefault();
                this.toggleFullscreen();
                break;
        }
    }
    
    setupTouchGestures() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Only trigger if horizontal swipe is dominant
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.previousSlide();
                } else {
                    this.nextSlide();
                }
            }
        });
    }
    
    addSlideSound() {
        // Create a subtle audio feedback (optional)
        if ('AudioContext' in window || 'webkitAudioContext' in window) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                // Audio not available or not allowed
            }
        }
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {
                // Fullscreen not available
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    goToSlide(slideNumber) {
        if (slideNumber >= 1 && slideNumber <= this.totalSlides) {
            this.showSlide(slideNumber);
        }
    }
}

// Enhanced animations and effects
class PresentationEffects {
    constructor() {
        this.setupParticles();
        this.setupHoverEffects();
        this.setupScrollAnimations();
    }
    
    setupParticles() {
        // Add subtle floating particles in the background
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 20; i++) {
            this.createParticle(particleContainer);
        }
    }
    
    createParticle(container) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            animation: float ${15 + Math.random() * 10}s infinite linear;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                this.createParticle(container);
            }
        }, 25000);
    }
    
    setupHoverEffects() {
        // Add enhanced hover effects
        const cards = document.querySelectorAll('.purpose-card, .participant-item, .asset-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', (e) => {
                e.target.style.transform = '';
            });
        });
    }
    
    setupScrollAnimations() {
        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-10vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes slideInFromRight {
                from {
                    transform: translateX(100px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideInFromLeft {
                from {
                    transform: translateX(-100px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes fadeInUp {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
            }
            
            .highlight:hover {
                animation: pulse 1s infinite;
            }
        `;
        document.head.appendChild(style);
    }
}

// Presentation controls and utilities
class PresentationControls {
    constructor(presentation) {
        this.presentation = presentation;
        this.setupAutoAdvance();
        this.setupSlideIndex();
    }
    
    setupAutoAdvance() {
        // Optional auto-advance (can be toggled)
        let autoAdvanceInterval = null;
        
        window.toggleAutoAdvance = (seconds = 30) => {
            if (autoAdvanceInterval) {
                clearInterval(autoAdvanceInterval);
                autoAdvanceInterval = null;
                console.log('Auto-advance disabled');
            } else {
                autoAdvanceInterval = setInterval(() => {
                    this.presentation.nextSlide();
                }, seconds * 1000);
                console.log(`Auto-advance enabled: ${seconds}s per slide`);
            }
        };
    }
    
    setupSlideIndex() {
        // Quick slide navigation (press number keys)
        document.addEventListener('keypress', (e) => {
            const slideNum = parseInt(e.key);
            if (slideNum >= 1 && slideNum <= this.presentation.totalSlides) {
                this.presentation.goToSlide(slideNum);
            }
        });
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Handle loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Initialize presentation components
    const presentation = new Presentation();
    const effects = new PresentationEffects();
    const controls = new PresentationControls(presentation);
    
    // Make presentation globally accessible
    window.presentation = presentation;
    
    // Hide loading screen after a delay
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }
    }, 2000);
    
    // Professional console messages
    console.log('%c🎯 PROFESSIONAL STOCK MARKET PRESENTATION', 'color: #6366f1; font-size: 18px; font-weight: bold;');
    console.log('%c📊 Ultra-Premium Design System Loaded', 'color: #8b5cf6; font-size: 14px; font-weight: 600;');
    console.log('\n🎮 NAVIGATION CONTROLS:');
    console.log('  → Arrow Keys (←/→): Navigate slides');
    console.log('  → Space/Enter: Next slide');
    console.log('  → Backspace: Previous slide'); 
    console.log('  → Numbers (1-7): Jump to specific slide');
    console.log('  → Escape: Toggle fullscreen mode');
    console.log('  → Touch/Swipe: Mobile navigation');
    console.log('\n💡 ADVANCED FUNCTIONS:');
    console.log('  → toggleAutoAdvance(seconds): Enable auto-advance');
    console.log('  → presentation.goToSlide(n): Jump to slide n');
    console.log('  → presentation.togglePresenterMode(): Toggle presenter view');
    console.log('\n🎨 Design by: Professional Business Solutions');
    
    // Add keyboard shortcuts info
    const shortcuts = document.createElement('div');
    shortcuts.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(15, 23, 42, 0.9);
        color: white;
        padding: 15px;
        border-radius: 10px;
        font-size: 12px;
        z-index: 1000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    `;
    shortcuts.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 8px;">Keyboard Shortcuts</div>
        <div>← → Navigate</div>
        <div>Space Next</div>
        <div>Esc Fullscreen</div>
        <div>1-7 Jump to slide</div>
    `;
    document.body.appendChild(shortcuts);
    
    // Show shortcuts on first load
    setTimeout(() => {
        shortcuts.style.opacity = '1';
        setTimeout(() => {
            shortcuts.style.opacity = '0';
        }, 3000);
    }, 3000);
    
    // Show shortcuts on hover over navigation
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        navigation.addEventListener('mouseenter', () => {
            shortcuts.style.opacity = '1';
        });
        navigation.addEventListener('mouseleave', () => {
            shortcuts.style.opacity = '0';
        });
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Ensure presentation layout adapts to new window size
    const activeSlide = document.querySelector('.slide.active');
    if (activeSlide) {
        // Re-trigger any responsive adjustments
        activeSlide.style.transform = 'translateX(0)';
    }
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading if it exists
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    }
}); 