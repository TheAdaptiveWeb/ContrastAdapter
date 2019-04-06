import getContrastRatio from 'get-contrast-ratio';

function wrapElement(element, backgroundColor = 'black', foregroundColor = 'white') {
    if (element.parentElement.class === 'adaptiveweb-wrapper') return;

    let wrapper = document.createElement('div');
    wrapper.style.backgroundColor = backgroundColor;
    wrapper.style.color = foregroundColor;
    wrapper.style.padding = '10px';
    wrapper.style.borderRadius = '5px';
    wrapper.class = 'adaptiveweb-wrapper';

    let innerHtml = element.innerHTML;
    wrapper.innerHTML = innerHtml;
    element.innerHTML = '';
    element.appendChild(wrapper);
}

let contrasts = {
    AA: {
        normal: 4.5,
        large: 3,
    },
    AAA: {
        normal: 7,
        large: 4.5
    }
}

aw.getPreferences().then(preferences => {
    
    let { backgroundColor, foregroundColor, useAAA } = preferences;

    let tagsToCheck = [ 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'p' ];

    let matches = [];

    tagsToCheck.forEach(tag => {
        let tagMatches = document.getElementsByTagName(tag);
        matches.push(...tagMatches);
    });

    for (let i = 0; i < matches.length; i++) {
        let el = matches[i];
        let computedStyle = getComputedStyle(el, null);
        let large = false;
        let fontSize = Number(computedStyle.fontSize.match(/(\d+)px/)[1]);
        if (
            (fontSize >= 18) ||
            (computedStyle.fontWeight === 'bold' && fontSize >= 14)
        ) large = true;

        let bg = computedStyle.backgroundColor;
        let fg = computedStyle.color;

        if (computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)') {
            // Check parent element to make sure this is correct
            let parentBg = getComputedStyle(el.parentElement).backgroundColor;
            if (parentBg === 'rgba(0, 0, 0, 0)') continue; // Give up checking further up
            bg = parentBg;
        }

        let contrast = contrasts[(useAAA) ? 'AAA' : 'AA'][large ? 'large' : 'normal'];

        if (getContrastRatio(fg, bg) < contrast && el.innerHTML.trim() === el.innerText.trim()) {
            wrapElement(el, backgroundColor, foregroundColor);
        }
    }

});