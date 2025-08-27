let total = 0;

function addToCart() {
    total++
    console.log(total)
   const countSpan = document.getElementById("count")
   countSpan.textContent = total
}
