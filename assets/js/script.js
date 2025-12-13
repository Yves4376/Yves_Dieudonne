const defaultConfig = {
            background_color: "#020617",
            surface_color: "#1e293b",
            text_color: "#e2e8f0",
            primary_action_color: "#06b6d4",
            secondary_action_color: "#10b981",
            font_family: "Inter",
            font_size: 16,
            hero_name: "Alex Morgan",
            hero_title: "Web Developer & Cybersecurity Specialist",
            hero_tagline: "Building secure, innovative digital solutions with cutting-edge technology and robust security practices",
            about_title: "About Me",
            about_bio: "Passionate Web Developer and Cybersecurity Specialist with expertise in building secure, scalable applications. I combine development excellence with security-first thinking to create robust digital solutions that protect against modern threats.",
            skills_title: "Technical Expertise",
            projects_title: "Featured Projects",
            services_title: "Professional Services",
            contact_title: "Get In Touch"
        };

        async function onConfigChange(config) {
            const baseSize = config.font_size || defaultConfig.font_size;
            const customFont = config.font_family || defaultConfig.font_family;
            const baseFontStack = 'Inter, sans-serif';
            const fontStack = `${customFont}, ${baseFontStack}`;

            // Apply font family
            document.body.style.fontFamily = fontStack;

            // Apply colors
            document.body.style.backgroundColor = config.background_color || defaultConfig.background_color;
            document.body.style.color = config.text_color || defaultConfig.text_color;

            // Update all gradient-border elements
            const gradientBorders = document.querySelectorAll('.gradient-border');
            gradientBorders.forEach(el => {
                el.style.background = `linear-gradient(145deg, ${config.background_color || defaultConfig.background_color}, ${config.surface_color || defaultConfig.surface_color})`;
            });

            // Update primary action buttons
            const primaryButtons = document.querySelectorAll('button:not([class*="border-green"])');
            primaryButtons.forEach(btn => {
                if (btn.classList.contains('bg-gradient-to-r')) {
                    btn.style.background = `linear-gradient(to right, ${config.primary_action_color || defaultConfig.primary_action_color}, ${config.primary_action_color || defaultConfig.primary_action_color})`;
                }
            });

            // Update secondary action buttons
            const secondaryButtons = document.querySelectorAll('button[class*="border-green"]');
            secondaryButtons.forEach(btn => {
                btn.style.borderColor = config.secondary_action_color || defaultConfig.secondary_action_color;
                btn.style.color = config.secondary_action_color || defaultConfig.secondary_action_color;
            });

            // Update text content
            document.getElementById('hero-name').textContent = config.hero_name || defaultConfig.hero_name;
            document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
            document.getElementById('hero-tagline').textContent = config.hero_tagline || defaultConfig.hero_tagline;
            document.getElementById('about-section-title').textContent = config.about_title || defaultConfig.about_title;
            document.getElementById('about-bio-text').textContent = config.about_bio || defaultConfig.about_bio;
            document.getElementById('skills-section-title').textContent = config.skills_title || defaultConfig.skills_title;
            document.getElementById('projects-section-title').textContent = config.projects_title || defaultConfig.projects_title;
            document.getElementById('services-section-title').textContent = config.services_title || defaultConfig.services_title;
            document.getElementById('contact-section-title').textContent = config.contact_title || defaultConfig.contact_title;

            // Apply font sizes proportionally
            document.getElementById('hero-name').style.fontSize = `${baseSize * 3.5}px`;
            document.getElementById('hero-title').style.fontSize = `${baseSize * 2}px`;
            document.getElementById('hero-tagline').style.fontSize = `${baseSize * 1.25}px`;
            
            const sectionTitles = document.querySelectorAll('h2');
            sectionTitles.forEach(title => {
                title.style.fontSize = `${baseSize * 2.5}px`;
            });
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities: (config) => ({
                    recolorables: [
                        {
                            get: () => config.background_color || defaultConfig.background_color,
                            set: (value) => {
                                config.background_color = value;
                                window.elementSdk.setConfig({ background_color: value });
                            }
                        },
                        {
                            get: () => config.surface_color || defaultConfig.surface_color,
                            set: (value) => {
                                config.surface_color = value;
                                window.elementSdk.setConfig({ surface_color: value });
                            }
                        },
                        {
                            get: () => config.text_color || defaultConfig.text_color,
                            set: (value) => {
                                config.text_color = value;
                                window.elementSdk.setConfig({ text_color: value });
                            }
                        },
                        {
                            get: () => config.primary_action_color || defaultConfig.primary_action_color,
                            set: (value) => {
                                config.primary_action_color = value;
                                window.elementSdk.setConfig({ primary_action_color: value });
                            }
                        },
                        {
                            get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                            set: (value) => {
                                config.secondary_action_color = value;
                                window.elementSdk.setConfig({ secondary_action_color: value });
                            }
                        }
                    ],
                    borderables: [],
                    fontEditable: {
                        get: () => config.font_family || defaultConfig.font_family,
                        set: (value) => {
                            config.font_family = value;
                            window.elementSdk.setConfig({ font_family: value });
                        }
                    },
                    fontSizeable: {
                        get: () => config.font_size || defaultConfig.font_size,
                        set: (value) => {
                            config.font_size = value;
                            window.elementSdk.setConfig({ font_size: value });
                        }
                    }
                }),
                mapToEditPanelValues: (config) => new Map([
                    ["hero_name", config.hero_name || defaultConfig.hero_name],
                    ["hero_title", config.hero_title || defaultConfig.hero_title],
                    ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
                    ["about_title", config.about_title || defaultConfig.about_title],
                    ["about_bio", config.about_bio || defaultConfig.about_bio],
                    ["skills_title", config.skills_title || defaultConfig.skills_title],
                    ["projects_title", config.projects_title || defaultConfig.projects_title],
                    ["services_title", config.services_title || defaultConfig.services_title],
                    ["contact_title", config.contact_title || defaultConfig.contact_title]
                ])
            });
        }

        // Form submission handling
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const messageDiv = document.getElementById('form-message');
            messageDiv.textContent = 'Thank you! Your message has been sent successfully.';
            messageDiv.className = 'mt-4 p-4 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30';
            messageDiv.classList.remove('hidden');
            this.reset();
            
            setTimeout(() => {
                messageDiv.classList.add('hidden');
            }, 5000);
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });