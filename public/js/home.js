window.addEventListener("load", START);

function START(){
    console.log("Show this when home page loads...");
    const btnHome = document.getElementById("mainBtn");
    btnHome.addEventListener("click", homeBtn);

    function homeBtn(){
        alert("hello user");
    }

}
