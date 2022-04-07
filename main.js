
document.getElementById("banana").addEventListener('click', function(){
   document.getElementById("orderText").textContent = "You selected an order of: Banana Special";
});
document.getElementById("pizza").addEventListener("click", function(){
   document.getElementById("orderText").textContent = "You selected an order of: Pepperoni Pizza";
});
document.getElementById("masterpiece").addEventListener("click", function(){
   document.getElementById("orderText").textContent = "You selected an order of: Masterpiece";
});
document.getElementById("rice").addEventListener("click", function(){
   document.getElementById("orderText").textContent = "You selected an order of: Rice Roundhouse";
});
document.getElementById("tot").addEventListener("click", function(){
   document.getElementById("orderText").textContent = "You selected an order of: Tator tots";
});
document.getElementById("meat").addEventListener("click", function(){
   document.getElementById("orderText").textContent = "You selected an order of: Mystery Meat";
});

// clear text fields when submit is clicked https://2kh4k.csb.app/ copy from this code perhaps
// also maybe change css to make the hover color different so it looks cool
document.getElementById("submit").addEventListener("click", function(){
  document.getElementById("name").textContent = " ";
  document.getElementById("email").textContent = " ";
  document.getElementById("phone").textContent = " ";
  document.getElementById("message").textContent = " ";
});
