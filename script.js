document.addEventListener("DOMContentLoaded", () => {
    // Diccionario de traducciones
    const translations = {
        en: {
            home: "Home",
            about: "About",
            teams: "Teams",
            blog: "Blog",
            contact: "Contact",
            download: "Download Now",
            "site-title": "Affon",
            connect: "Connect anywhere, anytime",
            "connect-desc": "Stay connected with high-quality audio and video, no matter where you are. Enjoy seamless communication with our advanced technology.",
            trusted: "Trusted by over <span class='highlight'>50,000</span> dropshippers worldwide",
            "features-title": "Check out All Features",
            "features-desc": "Discover all the tools you need to enhance your communication experience with ease and efficiency.",
            "feature-1-title": "Audio and HD video calling",
            "feature-1-desc": "Experience crystal-clear audio and high-definition video calls for better conversations.",
            "feature-2-title": "Screen sharing",
            "feature-2-desc": "Easily share your screen to collaborate and present ideas in real-time.",
            "feature-3-title": "Smart messaging",
            "feature-3-desc": "Send instant messages with smart features to improve productivity and interaction.",
            "why-title": "Why Choose Us?",
            "why-desc": "We provide secure, fast, and reliable communication solutions designed for professionals and businesses.",
            "video-meetings": "Video Meetings",
            "enhanced-audio": "Enhanced Audio",
            "live-subtitles": "Live Subtitles",
            "live-subtitles-desc": "Automatically generate accurate subtitles for better accessibility and understanding.",
            "call-recording": "Call Recording",
            "powering-title": "Powering collaboration and productivity",
            "powering-desc": "Boost your workflow with powerful communication tools built for teams.",
            "try-now": "Try Startco Now",
            "collage-title": "Powering collaboration and productivity",
            "collage-desc": "Improve teamwork with our efficient collaboration features.",
            "testimonial-quote": "This platform has transformed the way we manage our projects. It’s a game changer!",
            "testimonial-name": "John Smith",
            "testimonial-role": "Managing Director",
            "latest-news": "Latest News",
            "footer-text": "Join thousands of professionals who trust our platform for their daily communication needs.",
            "resources": "RESOURCES",
            "download-apps": "Download Apps",
            "help-center": "Help Center",
            "productivity": "Productivity",
            "methods": "Methods",
            "refer-friend": "Refer a friend",
            "integrations": "Integrations",
            "product": "PRODUCT",
            "how-it-works": "How it Works",
            "login": "Login",
            "get-tara": "Get Tara for Free",
            "task": "Task",
            "management": "Management",
            "weekly-sprints": "Weekly Sprints",
            "about-us": "About Us",
            "hiring": "We are hiring!",
            "press": "Press",
            "twist": "Twist"
        },
        es: {
            home: "Inicio",
            about: "Nosotros",
            teams: "Equipos",
            blog: "Blog",
            contact: "Contacto",
            download: "Descargar Ahora",
            "site-title": "Affon",
            connect: "Conéctate en cualquier lugar, en cualquier momento",
            "connect-desc": "Mantente conectado con audio y video de alta calidad sin importar dónde estés. Disfruta de una comunicación fluida con nuestra tecnología avanzada.",
            trusted: "Con la confianza de más de <span class='highlight'>50,000</span> dropshippers en todo el mundo",
            "features-title": "Descubre todas las funciones",
            "features-desc": "Explora todas las herramientas que necesitas para mejorar tu experiencia de comunicación de manera eficiente.",
            "feature-1-title": "Llamadas de audio y video HD",
            "feature-1-desc": "Disfruta de audio nítido y videollamadas en alta definición para mejores conversaciones.",
            "feature-2-title": "Compartición de pantalla",
            "feature-2-desc": "Comparte tu pantalla fácilmente para colaborar y presentar ideas en tiempo real.",
            "feature-3-title": "Mensajería inteligente",
            "feature-3-desc": "Envía mensajes instantáneos con funciones inteligentes para mejorar la productividad y la interacción.",
            "why-title": "¿Por qué elegirnos?",
            "why-desc": "Ofrecemos soluciones de comunicación seguras, rápidas y confiables diseñadas para profesionales y empresas.",
            "video-meetings": "Reuniones por video",
            "enhanced-audio": "Audio mejorado",
            "live-subtitles": "Subtítulos en vivo",
            "live-subtitles-desc": "Genera automáticamente subtítulos precisos para mayor accesibilidad y comprensión.",
            "call-recording": "Grabación de llamadas",
            "powering-title": "Impulsando la colaboración y la productividad",
            "powering-desc": "Optimiza tu flujo de trabajo con herramientas de comunicación diseñadas para equipos.",
            "try-now": "Prueba Startco ahora",
            "collage-title": "Impulsando la colaboración y la productividad",
            "collage-desc": "Mejora el trabajo en equipo con nuestras funciones de colaboración eficientes.",
            "testimonial-quote": "Esta plataforma ha transformado la manera en que gestionamos nuestros proyectos. ¡Es un cambio total!",
            "testimonial-name": "John Smith",
            "testimonial-role": "Director General",
            "latest-news": "Últimas Noticias",
            "footer-text": "Únete a miles de profesionales que confían en nuestra plataforma para su comunicación diaria.",
            "resources": "RECURSOS",
            "download-apps": "Descargar Apps",
            "help-center": "Centro de Ayuda",
            "productivity": "Productividad",
            "methods": "Métodos",
            "refer-friend": "Recomienda a un amigo",
            "integrations": "Integraciones",
            "product": "PRODUCTO",
            "how-it-works": "Cómo funciona",
            "login": "Iniciar sesión",
            "get-tara": "Obtén Tara Gratis",
            "task": "Tarea",
            "management": "Gestión",
            "weekly-sprints": "Sprints Semanales",
            "about-us": "Sobre Nosotros",
            "hiring": "¡Estamos contratando!",
            "press": "Prensa",
            "twist": "Twist"
        }
    };
    

    // Aquí puedes agregar la lógica para cambiar el idioma según el idioma seleccionado.


    // Elementos de los botones
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    // Función para cambiar idioma
    function cambiarIdioma(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        // Cambiar textos según el idioma seleccionado
        document.querySelectorAll("[data-key]").forEach((element) => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // Usamos innerHTML para respetar etiquetas como <span>
            }
        });
    }

    // Cargar idioma guardado o español por defecto
    const idiomaGuardado = localStorage.getItem("lang") || "es";
    cambiarIdioma(idiomaGuardado);

    // Eventos de los botones de idioma
    btnEs.addEventListener("click", () => cambiarIdioma("es"));
    btnEn.addEventListener("click", () => cambiarIdioma("en"));


    //=======================================//
    //========================================//
  
        const navbar = document.querySelector(".navbar");
        const elementos = document.querySelectorAll(".animado");
        const animatedElements = document.querySelectorAll('.animated');
        const navLinks = document.querySelector(".nav-links");
        const videoTitle = document.querySelector(".video-section h1");
        const videoText = document.querySelector(".video-section p");
        const ctaButton = document.querySelector(".video-section .cta-button");
        const videoImage = document.querySelector(".video-container img");
        const trustedLogos = document.querySelectorAll(".trusted-logos img");
        const featureImages = document.querySelectorAll(".features-container img");
        const chooseImage = document.querySelector(".choose-image img");
        const chooseItems = document.querySelectorAll(".choose-item");
        const chooseBoxes = document.querySelectorAll(".choose-box");
        const collaborationTitle = document.querySelector(".collaboration-title");
        const collaborationDesc = document.querySelector(".collaboration-desc");
        const testimonialWrapper = document.querySelector(".testimonial-wrapper");
        const testimonial = document.querySelector(".testimonial");
        const profileImg = document.querySelector(".profile-img");
        const testimonialContent = document.querySelector(".testimonial-content");
        const actSection = document.querySelector(".act");
        const images = document.querySelectorAll(".act .image");
        const footerSection = document.querySelector(".footer");
        const footerListItems = document.querySelectorAll(".footer-list li");
        const socialIcons = document.querySelectorAll(".social-icon img");
        const footerLogo = document.querySelector(".footer-logo");
      
    
        // === Agregar estilos dinámicamente ===
        const style = document.createElement("style");
        style.textContent = `
            @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
            }
            @keyframes blink {
                50% { border-color: transparent; }
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translateX(-50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeLift {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounceEffect {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            @keyframes transformShape {
                0% { transform: scale(1) rotate(0deg); }
                50% { transform: scale(1.2) rotate(45deg); }
                100% { transform: scale(1) rotate(0deg); }
            }
            @keyframes floatUp {
                from { transform: translateY(0); }
                to { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    
        // === Animaciones con JS ===
        setTimeout(() => {
            videoTitle.style.width = "100%";
            videoTitle.style.animation = "typing 3s steps(30, end) forwards, blink 0.8s infinite";
        }, 500);
    
        setTimeout(() => {
            videoText.style.opacity = "1";
            videoText.style.transform = "translateX(0)";
        }, 1500);
    
        setTimeout(() => {
            ctaButton.style.opacity = "1";
            ctaButton.style.transform = "translateX(0)";
        }, 2000);
    
        setTimeout(() => {
            videoImage.style.opacity = "1";
            videoImage.style.transform = "translateX(0)";
        }, 2500);
    
        trustedLogos.forEach((logo, index) => {
            setTimeout(() => {
                logo.style.opacity = "1";
                logo.style.transform = "translateY(0)";
            }, index * 200);
        });
    
        featureImages.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = "1";
                img.style.transform = "translateY(0)";
            }, index * 200);
        });
    
        setTimeout(() => {
            chooseImage.style.opacity = "1";
            chooseImage.style.animation = "fadeIn 1s ease-in-out, floatUp 2s infinite alternate";
        }, 1000);
    
        chooseItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, index * 300);
        });
    
        chooseBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = "1";
                box.style.transform = "scale(1)";
            }, index * 300);
        });
         // === Animaciones del collage ===
         setTimeout(() => {
            if (collageImage) {
                collageImage.style.opacity = "1";
                collageImage.style.animation = "collageImageEffect 1s ease-in-out forwards";
            }
        }, 1200);
        
        setTimeout(() => {
            if (collageContent) {
                collageContent.style.opacity = "1";
                collageContent.style.animation = "collageFadeIn 1s ease-in-out forwards";
            }
        }, 1500);
        // === Animación al pasar el mouse ===
        trustedLogos.forEach(logo => {
            logo.addEventListener("mouseenter", () => {
                logo.style.transform = "scale(1.1)";
            });
            logo.addEventListener("mouseleave", () => {
                logo.style.transform = "scale(1)";
            });
        });
          // Animación de la imagen del perfil con la onda
    setTimeout(() => {
        if (profileImg) {
            profileImg.style.animation = "waveEffect 1.5s ease-in-out infinite";
        }
    }, 500);

    // Animación del título del testimonio
    setTimeout(() => {
        if (testimonialContent) {
            const title = testimonialContent.querySelector("h2");
            if (title) {
                title.style.animation = "fadeIn 1s ease-in-out";
            }
        }
    }, 800);

    // Animación de la aparición del texto de testimonio (desplazamiento desde la derecha)
    setTimeout(() => {
        if (testimonialContent) {
            testimonialContent.style.animation = "slideInRight 1s ease-in-out";
        }
    }, 1200);
    
        featureImages.forEach(img => {
            img.addEventListener("mouseenter", () => {
                img.style.transform = "scale(1.2) rotate(45deg)";
            });
            img.addEventListener("mouseleave", () => {
                img.style.transform = "scale(1) rotate(0deg)";
            });
        });
    
        chooseItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.transform = "scale(1.05)";
            });
            item.addEventListener("mouseleave", () => {
                item.style.transform = "scale(1)";
            });
        });
    
        chooseBoxes.forEach(box => {
            box.addEventListener("mouseenter", () => {
                box.style.transform = "scale(1.05)";
            });
            box.addEventListener("mouseleave", () => {
                box.style.transform = "scale(1)";
            });
        });
        
        // === Animaciones para collaboration ===
        const observerOptions = { threshold: 0.3 };
    
        const titleObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "splitText 1s ease-out forwards";
                }
            });
        }, observerOptions);
    
        const descObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "slideInRight 0.8s ease-in-out forwards";
                }
            });
        }, observerOptions);
    
        const imgObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "combEffect 1s ease-out forwards";
                }
            });
        }, observerOptions);
    
        if (collaborationTitle) titleObserver.observe(collaborationTitle);
        if (collaborationDesc) descObserver.observe(collaborationDesc);
         // === Animaciones al hacer scroll para testimoniales ===
    const testimonialObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el testimonio es visible en la pantalla
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    // Observa el contenedor del testimonio
    if (testimonialWrapper) {
        testimonialObserver.observe(testimonialWrapper);
    }
     
   
       // Animación para los elementos de la lista del footer con un retraso progresivo
       const footerListObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll("li").forEach((li, index) => {
                    li.style.animation = `aparecer 0.5s ease-in-out forwards`;
                    li.style.animationDelay = `${0.1 * (index + 1)}s`;
                });
            }
        });
    }, { threshold: 0.3 });

    if (footerSection) {
        footerListObserver.observe(footerSection);
    }
    // Animación de rebote en los iconos de redes sociales
    const socialIconsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".social-icon img").forEach(icon => {
                    icon.style.animation = `rebote 0.6s ease-in-out infinite`;
                });
            }
        });
    }, { threshold: 0.3 });

    // Observa los iconos de redes sociales para animarlos
    if (footerSection) {
        socialIconsObserver.observe(footerSection);
    }

    // Animación del logo del footer con cubo
    
  
        // === Agregar animaciones al hacer scroll ===
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.2 });
    
        elementos.forEach(elemento => observer.observe(elemento));
        
    
        // === Animar los enlaces de la navbar al cargar ===
        setTimeout(() => {
            navLinks.classList.add("animar");
        }, 300);
    
        // === Cambiar la navbar al hacer scroll ===
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
            // Función para agregar y quitar animación al pasar el mouse
    const toggleAnimationOnHover = (element) => {
        element.addEventListener("mouseenter", () => {
            element.classList.add("active-animation");
        });
        element.addEventListener("mouseleave", () => {
            element.classList.remove("active-animation");
        });
    };
    
        // Activar la animación para cada uno de los elementos
    toggleAnimationOnHover(navbar);
    elementos.forEach(elemento => toggleAnimationOnHover(elemento));
    toggleAnimationOnHover(navLinks);
    toggleAnimationOnHover(videoTitle);
    toggleAnimationOnHover(videoText);
    toggleAnimationOnHover(ctaButton);
    toggleAnimationOnHover(videoImage);
    trustedLogos.forEach(logo => toggleAnimationOnHover(logo));
    featureImages.forEach(image => toggleAnimationOnHover(image));
    toggleAnimationOnHover(chooseImage);
    chooseItems.forEach(item => toggleAnimationOnHover(item));
    chooseBoxes.forEach(box => toggleAnimationOnHover(box));
    toggleAnimationOnHover(collaborationTitle);
    toggleAnimationOnHover(collaborationDesc);
    toggleAnimationOnHover(testimonialWrapper);
    toggleAnimationOnHover(testimonial);
    toggleAnimationOnHover(profileImg);
    toggleAnimationOnHover(testimonialContent);
    toggleAnimationOnHover(actSection);
    images.forEach(image => toggleAnimationOnHover(image));
    toggleAnimationOnHover(footerSection);
    footerListItems.forEach(item => toggleAnimationOnHover(item));
    socialIcons.forEach(icon => toggleAnimationOnHover(icon));
    toggleAnimationOnHover(footerLogo);

    // Función para activar las animaciones
function activateAnimation() {
    animatedElements.forEach((element) => {
        element.classList.add('active-animation');
    });
}

// Función para desactivar las animaciones
function deactivateAnimation() {
    animatedElements.forEach((element) => {
        element.classList.remove('active-animation');
    });
}

// Agregar eventos de mouseenter y mouseleave
animatedElements.forEach((element) => {
    element.addEventListener('mouseenter', activateAnimation);
    element.addEventListener('mouseleave', deactivateAnimation);
    

});

});
   
  


document.addEventListener("DOMContentLoaded", () => {
    // Diccionario de traducciones
    const translations = {
        en: {
            home: "Home",
            about: "About",
            teams: "Teams",
            blog: "Blog",
            contact: "Contact",
            download: "Download Now",
            "site-title": "Affon",
            connect: "Connect anywhere, anytime",
            "connect-desc": "Stay connected with high-quality audio and video, no matter where you are. Enjoy seamless communication with our advanced technology.",
            trusted: "Trusted by over <span class='highlight'>50,000</span> dropshippers worldwide",
            "features-title": "Check out All Features",
            "features-desc": "Discover all the tools you need to enhance your communication experience with ease and efficiency.",
            "feature-1-title": "Audio and HD video calling",
            "feature-1-desc": "Experience crystal-clear audio and high-definition video calls for better conversations.",
            "feature-2-title": "Screen sharing",
            "feature-2-desc": "Easily share your screen to collaborate and present ideas in real-time.",
            "feature-3-title": "Smart messaging",
            "feature-3-desc": "Send instant messages with smart features to improve productivity and interaction.",
            "why-title": "Why Choose Us?",
            "why-desc": "We provide secure, fast, and reliable communication solutions designed for professionals and businesses.",
            "video-meetings": "Video Meetings",
            "enhanced-audio": "Enhanced Audio",
            "live-subtitles": "Live Subtitles",
            "live-subtitles-desc": "Automatically generate accurate subtitles for better accessibility and understanding.",
            "call-recording": "Call Recording",
            "powering-title": "Powering collaboration and productivity",
            "powering-desc": "Boost your workflow with powerful communication tools built for teams.",
            "try-now": "Try Startco Now",
            "collage-title": "Powering collaboration and productivity",
            "collage-desc": "Improve teamwork with our efficient collaboration features.",
            "testimonial-quote": "This platform has transformed the way we manage our projects. It’s a game changer!",
            "testimonial-name": "John Smith",
            "testimonial-role": "Managing Director",
            "latest-news": "Latest News",
            "footer-text": "Join thousands of professionals who trust our platform for their daily communication needs.",
            "resources": "RESOURCES",
            "download-apps": "Download Apps",
            "help-center": "Help Center",
            "productivity": "Productivity",
            "methods": "Methods",
            "refer-friend": "Refer a friend",
            "integrations": "Integrations",
            "product": "PRODUCT",
            "how-it-works": "How it Works",
            "login": "Login",
            "get-tara": "Get Tara for Free",
            "task": "Task",
            "management": "Management",
            "weekly-sprints": "Weekly Sprints",
            "about-us": "About Us",
            "hiring": "We are hiring!",
            "press": "Press",
            "twist": "Twist"
        },
        es: {
            home: "Inicio",
            about: "Nosotros",
            teams: "Equipos",
            blog: "Blog",
            contact: "Contacto",
            download: "Descargar Ahora",
            "site-title": "Affon",
            connect: "Conéctate en cualquier lugar, en cualquier momento",
            "connect-desc": "Mantente conectado con audio y video de alta calidad sin importar dónde estés. Disfruta de una comunicación fluida con nuestra tecnología avanzada.",
            trusted: "Con la confianza de más de <span class='highlight'>50,000</span> dropshippers en todo el mundo",
            "features-title": "Descubre todas las funciones",
            "features-desc": "Explora todas las herramientas que necesitas para mejorar tu experiencia de comunicación de manera eficiente.",
            "feature-1-title": "Llamadas de audio y video HD",
            "feature-1-desc": "Disfruta de audio nítido y videollamadas en alta definición para mejores conversaciones.",
            "feature-2-title": "Compartición de pantalla",
            "feature-2-desc": "Comparte tu pantalla fácilmente para colaborar y presentar ideas en tiempo real.",
            "feature-3-title": "Mensajería inteligente",
            "feature-3-desc": "Envía mensajes instantáneos con funciones inteligentes para mejorar la productividad y la interacción.",
            "why-title": "¿Por qué elegirnos?",
            "why-desc": "Ofrecemos soluciones de comunicación seguras, rápidas y confiables diseñadas para profesionales y empresas.",
            "video-meetings": "Reuniones por video",
            "enhanced-audio": "Audio mejorado",
            "live-subtitles": "Subtítulos en vivo",
            "live-subtitles-desc": "Genera automáticamente subtítulos precisos para mayor accesibilidad y comprensión.",
            "call-recording": "Grabación de llamadas",
            "powering-title": "Impulsando la colaboración y la productividad",
            "powering-desc": "Optimiza tu flujo de trabajo con herramientas de comunicación diseñadas para equipos.",
            "try-now": "Prueba Startco ahora",
            "collage-title": "Impulsando la colaboración y la productividad",
            "collage-desc": "Mejora el trabajo en equipo con nuestras funciones de colaboración eficientes.",
            "testimonial-quote": "Esta plataforma ha transformado la manera en que gestionamos nuestros proyectos. ¡Es un cambio total!",
            "testimonial-name": "John Smith",
            "testimonial-role": "Director General",
            "latest-news": "Últimas Noticias",
            "footer-text": "Únete a miles de profesionales que confían en nuestra plataforma para su comunicación diaria.",
            "resources": "RECURSOS",
            "download-apps": "Descargar Apps",
            "help-center": "Centro de Ayuda",
            "productivity": "Productividad",
            "methods": "Métodos",
            "refer-friend": "Recomienda a un amigo",
            "integrations": "Integraciones",
            "product": "PRODUCTO",
            "how-it-works": "Cómo funciona",
            "login": "Iniciar sesión",
            "get-tara": "Obtén Tara Gratis",
            "task": "Tarea",
            "management": "Gestión",
            "weekly-sprints": "Sprints Semanales",
            "about-us": "Sobre Nosotros",
            "hiring": "¡Estamos contratando!",
            "press": "Prensa",
            "twist": "Twist"
        }
    };
    

    // Aquí puedes agregar la lógica para cambiar el idioma según el idioma seleccionado.


    // Elementos de los botones
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    // Función para cambiar idioma
    function cambiarIdioma(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        // Cambiar textos según el idioma seleccionado
        document.querySelectorAll("[data-key]").forEach((element) => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // Usamos innerHTML para respetar etiquetas como <span>
            }
        });
    }

    // Cargar idioma guardado o español por defecto
    const idiomaGuardado = localStorage.getItem("lang") || "es";
    cambiarIdioma(idiomaGuardado);

    // Eventos de los botones de idioma
    btnEs.addEventListener("click", () => cambiarIdioma("es"));
    btnEn.addEventListener("click", () => cambiarIdioma("en"));


    //=======================================//
    //========================================//
  
        const navbar = document.querySelector(".navbar");
        const elementos = document.querySelectorAll(".animado");
        const animatedElements = document.querySelectorAll('.animated');
        const navLinks = document.querySelector(".nav-links");
        const videoTitle = document.querySelector(".video-section h1");
        const videoText = document.querySelector(".video-section p");
        const ctaButton = document.querySelector(".video-section .cta-button");
        const videoImage = document.querySelector(".video-container img");
        const trustedLogos = document.querySelectorAll(".trusted-logos img");
        const featureImages = document.querySelectorAll(".features-container img");
        const chooseImage = document.querySelector(".choose-image img");
        const chooseItems = document.querySelectorAll(".choose-item");
        const chooseBoxes = document.querySelectorAll(".choose-box");
        const collaborationTitle = document.querySelector(".collaboration-title");
        const collaborationDesc = document.querySelector(".collaboration-desc");
        const testimonialWrapper = document.querySelector(".testimonial-wrapper");
        const testimonial = document.querySelector(".testimonial");
        const profileImg = document.querySelector(".profile-img");
        const testimonialContent = document.querySelector(".testimonial-content");
        const actSection = document.querySelector(".act");
        const images = document.querySelectorAll(".act .image");
        const footerSection = document.querySelector(".footer");
        const footerListItems = document.querySelectorAll(".footer-list li");
        const socialIcons = document.querySelectorAll(".social-icon img");
        const footerLogo = document.querySelector(".footer-logo");
      
    
        // === Agregar estilos dinámicamente ===
        const style = document.createElement("style");
        style.textContent = `
            @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
            }
            @keyframes blink {
                50% { border-color: transparent; }
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translateX(-50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeLift {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounceEffect {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            @keyframes transformShape {
                0% { transform: scale(1) rotate(0deg); }
                50% { transform: scale(1.2) rotate(45deg); }
                100% { transform: scale(1) rotate(0deg); }
            }
            @keyframes floatUp {
                from { transform: translateY(0); }
                to { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    
        // === Animaciones con JS ===
        setTimeout(() => {
            videoTitle.style.width = "100%";
            videoTitle.style.animation = "typing 3s steps(30, end) forwards, blink 0.8s infinite";
        }, 500);
    
        setTimeout(() => {
            videoText.style.opacity = "1";
            videoText.style.transform = "translateX(0)";
        }, 1500);
    
        setTimeout(() => {
            ctaButton.style.opacity = "1";
            ctaButton.style.transform = "translateX(0)";
        }, 2000);
    
        setTimeout(() => {
            videoImage.style.opacity = "1";
            videoImage.style.transform = "translateX(0)";
        }, 2500);
    
        trustedLogos.forEach((logo, index) => {
            setTimeout(() => {
                logo.style.opacity = "1";
                logo.style.transform = "translateY(0)";
            }, index * 200);
        });
    
        featureImages.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = "1";
                img.style.transform = "translateY(0)";
            }, index * 200);
        });
    
        setTimeout(() => {
            chooseImage.style.opacity = "1";
            chooseImage.style.animation = "fadeIn 1s ease-in-out, floatUp 2s infinite alternate";
        }, 1000);
    
        chooseItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, index * 300);
        });
    
        chooseBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = "1";
                box.style.transform = "scale(1)";
            }, index * 300);
        });
         // === Animaciones del collage ===
         setTimeout(() => {
            if (collageImage) {
                collageImage.style.opacity = "1";
                collageImage.style.animation = "collageImageEffect 1s ease-in-out forwards";
            }
        }, 1200);
        
        setTimeout(() => {
            if (collageContent) {
                collageContent.style.opacity = "1";
                collageContent.style.animation = "collageFadeIn 1s ease-in-out forwards";
            }
        }, 1500);
        // === Animación al pasar el mouse ===
        trustedLogos.forEach(logo => {
            logo.addEventListener("mouseenter", () => {
                logo.style.transform = "scale(1.1)";
            });
            logo.addEventListener("mouseleave", () => {
                logo.style.transform = "scale(1)";
            });
        });
          // Animación de la imagen del perfil con la onda
    setTimeout(() => {
        if (profileImg) {
            profileImg.style.animation = "waveEffect 1.5s ease-in-out infinite";
        }
    }, 500);

    // Animación del título del testimonio
    setTimeout(() => {
        if (testimonialContent) {
            const title = testimonialContent.querySelector("h2");
            if (title) {
                title.style.animation = "fadeIn 1s ease-in-out";
            }
        }
    }, 800);

    // Animación de la aparición del texto de testimonio (desplazamiento desde la derecha)
    setTimeout(() => {
        if (testimonialContent) {
            testimonialContent.style.animation = "slideInRight 1s ease-in-out";
        }
    }, 1200);
    
        featureImages.forEach(img => {
            img.addEventListener("mouseenter", () => {
                img.style.transform = "scale(1.2) rotate(45deg)";
            });
            img.addEventListener("mouseleave", () => {
                img.style.transform = "scale(1) rotate(0deg)";
            });
        });
    
        chooseItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                item.style.transform = "scale(1.05)";
            });
            item.addEventListener("mouseleave", () => {
                item.style.transform = "scale(1)";
            });
        });
    
        chooseBoxes.forEach(box => {
            box.addEventListener("mouseenter", () => {
                box.style.transform = "scale(1.05)";
            });
            box.addEventListener("mouseleave", () => {
                box.style.transform = "scale(1)";
            });
        });
        
        // === Animaciones para collaboration ===
        const observerOptions = { threshold: 0.3 };
    
        const titleObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "splitText 1s ease-out forwards";
                }
            });
        }, observerOptions);
    
        const descObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "slideInRight 0.8s ease-in-out forwards";
                }
            });
        }, observerOptions);
    
        const imgObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "combEffect 1s ease-out forwards";
                }
            });
        }, observerOptions);
    
        if (collaborationTitle) titleObserver.observe(collaborationTitle);
        if (collaborationDesc) descObserver.observe(collaborationDesc);
         // === Animaciones al hacer scroll para testimoniales ===
    const testimonialObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando el testimonio es visible en la pantalla
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    // Observa el contenedor del testimonio
    if (testimonialWrapper) {
        testimonialObserver.observe(testimonialWrapper);
    }
     
   
       // Animación para los elementos de la lista del footer con un retraso progresivo
       const footerListObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll("li").forEach((li, index) => {
                    li.style.animation = `aparecer 0.5s ease-in-out forwards`;
                    li.style.animationDelay = `${0.1 * (index + 1)}s`;
                });
            }
        });
    }, { threshold: 0.3 });

    if (footerSection) {
        footerListObserver.observe(footerSection);
    }
    // Animación de rebote en los iconos de redes sociales
    const socialIconsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".social-icon img").forEach(icon => {
                    icon.style.animation = `rebote 0.6s ease-in-out infinite`;
                });
            }
        });
    }, { threshold: 0.3 });

    // Observa los iconos de redes sociales para animarlos
    if (footerSection) {
        socialIconsObserver.observe(footerSection);
    }

    // Animación del logo del footer con cubo
    
  
        // === Agregar animaciones al hacer scroll ===
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.2 });
    
        elementos.forEach(elemento => observer.observe(elemento));
        
    
        // === Animar los enlaces de la navbar al cargar ===
        setTimeout(() => {
            navLinks.classList.add("animar");
        }, 300);
    
        // === Cambiar la navbar al hacer scroll ===
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
            // Función para agregar y quitar animación al pasar el mouse
    const toggleAnimationOnHover = (element) => {
        element.addEventListener("mouseenter", () => {
            element.classList.add("active-animation");
        });
        element.addEventListener("mouseleave", () => {
            element.classList.remove("active-animation");
        });
    };
    
        // Activar la animación para cada uno de los elementos
    toggleAnimationOnHover(navbar);
    elementos.forEach(elemento => toggleAnimationOnHover(elemento));
    toggleAnimationOnHover(navLinks);
    toggleAnimationOnHover(videoTitle);
    toggleAnimationOnHover(videoText);
    toggleAnimationOnHover(ctaButton);
    toggleAnimationOnHover(videoImage);
    trustedLogos.forEach(logo => toggleAnimationOnHover(logo));
    featureImages.forEach(image => toggleAnimationOnHover(image));
    toggleAnimationOnHover(chooseImage);
    chooseItems.forEach(item => toggleAnimationOnHover(item));
    chooseBoxes.forEach(box => toggleAnimationOnHover(box));
    toggleAnimationOnHover(collaborationTitle);
    toggleAnimationOnHover(collaborationDesc);
    toggleAnimationOnHover(testimonialWrapper);
    toggleAnimationOnHover(testimonial);
    toggleAnimationOnHover(profileImg);
    toggleAnimationOnHover(testimonialContent);
    toggleAnimationOnHover(actSection);
    images.forEach(image => toggleAnimationOnHover(image));
    toggleAnimationOnHover(footerSection);
    footerListItems.forEach(item => toggleAnimationOnHover(item));
    socialIcons.forEach(icon => toggleAnimationOnHover(icon));
    toggleAnimationOnHover(footerLogo);

    // Función para activar las animaciones
function activateAnimation() {
    animatedElements.forEach((element) => {
        element.classList.add('active-animation');
    });
}

// Función para desactivar las animaciones
function deactivateAnimation() {
    animatedElements.forEach((element) => {
        element.classList.remove('active-animation');
    });
}

// Agregar eventos de mouseenter y mouseleave
animatedElements.forEach((element) => {
    element.addEventListener('mouseenter', activateAnimation);
    element.addEventListener('mouseleave', deactivateAnimation);
    

});

});
