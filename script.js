document.addEventListener("DOMContentLoaded", function () {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const category = document.getElementsByClassName("category-flex-group");
      const score = document.getElementsByClassName("score-flex-group");
      for (let i = 0; i < data.length; i++) {
        const categoryContent = document.createElement("h3");
        const categoryIcon = document.createElement("img");
        categoryIcon.src = data[i].icon;
        categoryContent.classList.add("summary-category");
        categoryContent.textContent = data[i].category;
        // category[i].appendChild(categoryIcon);
        category[i].appendChild(categoryContent);

        const totalScore = document.createElement("p");
        totalScore.textContent = "/ 100";
        const scoreContent = document.createElement("p");
        scoreContent.classList.add("summary-score");
        scoreContent.textContent = data[i].score;
        score[i].appendChild(totalScore);
        score[i].insertBefore(scoreContent, totalScore);
      }
    });
});
