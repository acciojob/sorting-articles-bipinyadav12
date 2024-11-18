const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
 function stripArticle(title) {
            return title.replace(/^(a |an |the )/i, '').trim();
       
       const ulElement = document.getElementById('bands');
        const itemsArray = Array.from(ulElement.getElementsByTagName('li'));

        itemsArray.sort((a, b) => stripArticle(a.textContent).localeCompare(stripArticle(b.textContent)));

     alert(itemsArray);
        ulElement.innerHTML = '';
        itemsArray.forEach(item => ulElement.appendChild(item));


        
    