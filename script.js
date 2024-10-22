const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
 function removeArticles(title) {
            return title.replace(/^(a |an |the )/i, '').trim();
        }

       
        function sortArticles() {
            const list = document.getElementById("band");
            let items = Array.from(list.getElementsByTagName("li"));

           
            items.sort((a, b) => {
                let titleA = removeArticles(a.textContent.toLowerCase());
                let titleB = removeArticles(b.textContent.toLowerCase());
                return titleA.localeCompare(titleB);
            });

            
            list.innerHTML = "";
            items.forEach(item => list.appendChild(item));
        }

        // Call sortArticles on page load
        window.onload = sortArticles;