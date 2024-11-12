const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
 function removeArticles(title) {
            return title.replace(/^(a |an |the )/i, '').trim();
        }

       const sortedBands=bands.sort((a,b)=> removeArticles(a).localeCompare(removeArticles(b)));
 const ulElement=document.getElementById('band');
  sortedBands.forEach(band=>{
	  const li = document.createElement('li');
  li.textContent=band;
  ulElement.appendChild(li);
  });


        
       