document.addEventListener('DOMContentLoaded', () => {
    const createFooter = () => {
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        const logoLink = document.createElement('a');
        logoLink.href = 'https://studio-orbyq.com/contact';
        logoLink.classList.add('footer-logo-link');

        const logoImage = document.createElement('img');
        logoImage.src = '../images/logo/logomark.svg';
        logoImage.alt = 'logomark-white';
        logoImage.classList.add('footer-logo-image');
        logoImage.loading = 'lazy';

        logoLink.appendChild(logoImage);

        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');

        const contactTitle = document.createElement('h3');

        const contactLink = document.createElement('a');
        contactLink.href = 'https://studio-orbyq.com/contact';
        contactLink.classList.add('contact-link');
        contactLink.textContent = "Let's Talk";

        contactTitle.appendChild(contactLink);
        contactInfo.appendChild(contactTitle);

        const socialMedia = document.createElement('div');
        socialMedia.classList.add('social-media');

        const socialMediaList = document.createElement('ul');
        socialMediaList.classList.add('social-media-list');

        const socialMediaItems = [
            { href: 'https://www.behance.net/studio-orbyq', alt: 'behance' },
            { href: 'https://dribbble.com/Studio-Orbyq', alt: 'dribbble' },
            { href: 'https://letterboxd.com/NANIO/', alt: 'letterboxd' },
        ];
        
        socialMediaItems.forEach((item) => {
            const socialMediaItem = document.createElement('li');
            socialMediaItem.classList.add('social-media-item');
        
            const socialMediaLink = document.createElement('a');
            socialMediaLink.href = item.href;
            socialMediaLink.classList.add('social-media-link');
            socialMediaLink.target = '_blank';
        
            const socialMediaIcon = document.createElement('img');
        
            // Set the image source path directly
            socialMediaIcon.src = '../images/footer/' + item.alt + '.svg';
        
            socialMediaIcon.alt = item.alt;
            socialMediaIcon.classList.add('social-media-icon');
        
            socialMediaLink.appendChild(socialMediaIcon);
            socialMediaItem.appendChild(socialMediaLink);
            socialMediaList.appendChild(socialMediaItem);
        });

        socialMedia.appendChild(socialMediaList);

        footer.appendChild(logoLink);
        footer.appendChild(contactInfo);
        footer.appendChild(socialMedia);

        document.body.appendChild(footer);
    };

    createFooter();
});