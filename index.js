let source = "bbc-news";
let apiKey = "c7d90d03b3024cbfb70b879922914819";

//Grab the news container
let newsAccordian = document.getElementById("newsAccordian");

//Create a get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHTML = "";
    articles.forEach((element) => {
      let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                      aria-expanded="true" aria-controls="collapseOne">
                      ${element.title};
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      ${element.content}.<a href="${element.url}" target=" _blank">Read more here</a>;
                    </div>
                  </div>
        </div>`;

        newsHTML+=news;
    });
    newsAccordian.innerHTML= newsHTML;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
