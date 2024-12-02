
AOS.init();

$(document).ready(function(){
    $(".page1").ripples({
    resolution: 200,
    perturbance: .009,
});
});


function getIslamicDate() {
    const today = new Date();
    
    // Gregorian date
    const gregorianDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Islamic date calculation
    const islamicDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(today);

    // Show both dates
    document.getElementById("gregorian").textContent = "Today's Date: " + gregorianDate;
    document.getElementById("islamic").textContent = "Islamic Date: " + islamicDate;
  }




  // Content to be searched through (added links for page redirection)
const pages = [
  { 
      title: "Kalima", 
      content: "kalima islam ke un important bato me se ek he jis ke bina imaan mukammal nahi",
      url: "../pages/kalima.html"  // URL for redirection
  },
  { 
      title: "Namaaz", 
      content: "Learn the basics of JavaScript, how to create functions, handle events, and much more.",
      url: "../pages/Namaaz.html"  // URL for redirection
  },
  { 
      title: "Canva and Design", 
      content: "Canva is a popular design tool to create stunning graphics, posters, and social media posts.",
      url: "canva.html"  // URL for redirection
  }
];

// Fuse.js setup
const options = {
  keys: ["title", "content"],  // We are searching in both title and content
  threshold: 0.3  // Set fuzziness threshold (lower = more accurate)
};

const fuse = new Fuse(pages, options);

// Function to search content when user types in search box
function searchContent() {
  const searchQuery = document.getElementById('searchBar').value.toLowerCase();
  
  // Clear previous results before new search
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';  // Clear previous results
  
  // Perform the search using Fuse.js
  const results = fuse.search(searchQuery);
  
  // Display results
  displayResults(results);
}

// click to  div redirec


// Function to display search results
function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  
  if (results.length > 0) {
      resultsContainer.style.opacity = "1"
      results.forEach(result => {
          const item = result.item;
          const resultDiv = document.createElement('div');
          resultDiv.classList.add('result-item');
          const title = document.createElement('h3');
          title.textContent = item.title;
          
          const content = document.createElement('p');
          content.textContent = item.content;
          
          // Create a clickable link
          const link = document.createElement('a');
          link.href = item.url;  // Redirect to the corresponding page
          link.textContent = "Read more";
          link.classList.add('read-more-link');
          resultsContainer.href = item.url;
          
          // Add event listener to disable results container after click
          link.addEventListener('click', function() {
              // Disable the results container after clicking a result
              resultsContainer.classList.add('disabled');
          });
          
          // Append link to result
          resultDiv.appendChild(title);
          resultDiv.appendChild(content);
          resultDiv.appendChild(link);
          resultsContainer.appendChild(resultDiv);
      });
  } else {
      resultsContainer.innerHTML = '<p>NO RESULT</>';
       resultsContainer.style.opacity = "0"
  }
  
var item  = document.querySelector(".result-item")
var serchbar =  document.querySelector("#searchBar")

var main = document.querySelector("#main").addEventListener("click",()=>{
  item.innerHTML = "no result"
  item.remove()
  serchbar.value = ""
  resultsContainer.style.opacity = "0" 
}
)

}

var icon = document.querySelector(".icon")
var serchbar =  document.querySelector("#searchBar")
icon.addEventListener("click",()=>{
  serchbar.style.width = "50%"
  serchbar.style.opacity= "1"
  icon.style.opacity = "0"
})

main.addEventListener("click",()=> {
  serchbar.style.width = "0%"
  serchbar.style.opacity= "0"
  setTimeout(()=>{
  icon.style.opacity = "1"
  },500)
   
})






