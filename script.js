const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.content-section');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('showing');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
        nav.classList.remove('showing');
    });
});

function copyCode(codeId) {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code).then(() => {
        const copyMessage = document.querySelector('.copy-message');
        copyMessage.classList.add('show');
        setTimeout(() => {
            copyMessage.classList.remove('show');
        }, 2000);
    });
}
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const language = e.target.getAttribute('data-language');
        const currentSection = document.querySelector('.content-section.active');
        const newSection = document.getElementById(language);

        if (newSection && currentSection !== newSection) {
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            newSection.classList.add('active');
        
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section');

    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('showing');
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-language');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            window.scrollTo({
                top: document.querySelector(`#${targetId}`).offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
            nav.classList.remove('showing');
        });
    });

    function copyCode(codeId) {
        const code = document.getElementById(codeId).innerText;
        navigator.clipboard.writeText(code).then(() => {
            const copyMessage = document.querySelector('.copy-message');
            copyMessage.classList.add('show');
            setTimeout(() => {
                copyMessage.classList.remove('show');
            }, 2000);
        });
    }

    window.copyCode = copyCode;
});
document.addEventListener('DOMContentLoaded', () => {
    const topButton = document.getElementById('top-button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

