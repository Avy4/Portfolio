class CustomFooter extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <footer class="site-footer">
                <div class="contacts">
                    <h2 class="contacts-title">Contacts</h2>

                    <div class="contact-details">
                    <a href="mailto:selvadurai.avyukth@gmail.com" class="contact-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        selvadurai.avyukth@gmail.com
                    </a>
                    <a href="tel:+13015256206" class="contact-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        +1 301 525 6206
                    </a>
                    <a href="https://discord.com/users/avyy." class="contact-item" target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                        </svg>
                        avyy.
                    </a>
                    </div>

                    <div class="social-links">
                    <a href="https://github.com/avy4" class="icon-link" aria-label="GitHub" target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </a>
                    <a href="https://avy4.itch.io" class="icon-link" aria-label="itch.io" target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="7" width="20" height="12" rx="6"/>
                        <line x1="6.5" y1="13" x2="10.5" y2="13"/>
                        <line x1="8.5" y1="11" x2="8.5" y2="15"/>
                        <circle cx="15.5" cy="11.5" r="1"/>
                        <circle cx="18" cy="14" r="1"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/avyukth-selvadurai-0420b9321/" class="icon-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    </div>
                </div>
            </footer>
        `
    }
}

class CustomHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const active = this.getAttribute('active-header')
        let stringBuilder = ""
        
        switch(active) {
            case "0":
                stringBuilder +=
                `
                    <a href="index.html" class="nav-link active">Home</a>
                    <a href="projects.html" class="nav-link">Projects</a>
                    <a href="resume.html" class="nav-link">Resume</a>
                    <a href="other.html" class="nav-link">Other Stuff</a>
                `
                break;
            case "1":
                stringBuilder += `
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="projects.html" class="nav-link active">Projects</a>
                    <a href="resume.html" class="nav-link">Resume</a>
                    <a href="other.html" class="nav-link">Other Stuff</a>

                `
                break;
            case "2":
                stringBuilder += 
                `
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="projects.html" class="nav-link">Projects</a>
                    <a href="resume.html" class="nav-link active">Resume</a>
                    <a href="other.html" class="nav-link">Other Stuff</a>
                `
                break;          
            case "3":
                stringBuilder += 
                `
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="projects.html" class="nav-link">Projects</a>
                    <a href="resume.html" class="nav-link">Resume</a>
                    <a href="other.html" class="nav-link active">Other Stuff</a>
                `
                break;
            default:
                console.log("Header Custom Element Error")
        }

        this.innerHTML = `<header class="site-header"><nav class="main-nav">${stringBuilder}</nav></header>`

        // console.log(this.innerHTML);
        
    }
}

class ImportFonts extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap"/>
        `
    }
}

customElements.define("custom-footer-template", CustomFooter)
customElements.define("custom-header-template", CustomHeader)
customElements.define("import-fonts", ImportFonts)