 const  articles = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
        function removeArticles(title) {
            return title.replace(/^(a |an |the )/i, '').trim();
        }

        // Sorting the articles ignoring "a", "an", "the"
        const sortedArticles = articles.sort((a, b) => {
            const titleA = removeArticles(a).toLowerCase();
            const titleB = removeArticles(b).toLowerCase();
            return titleA.localeCompare(titleB);
        });

        // Displaying the sorted articles in the <ul> element
        const ul = document.getElementById("bands");
        sortedArticles.forEach(article => {
            const li = document.createElement("li");
            li.textContent = article;
            ul.appendChild(li);
        });