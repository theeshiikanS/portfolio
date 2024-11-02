const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
}); 
skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    skills.style.display = "flex";
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
}); 