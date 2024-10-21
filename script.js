const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
  function stripArticle(bands) {
            return bands.replace(/^(a|an|the)\s+/i, '').toLowerCase();
        }

        
        const sortedArticles = bands.sort((a, b) => {
            return stripArticle(a).localeCompare(stripArticle(b));
        });