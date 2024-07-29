
function displayCartProducts() {
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	const cartContainer = document.getElementById('cart-products');
  
	cart.forEach(item => {
	  const productDiv = document.createElement('div');
	  productDiv.classList.add('cart-product');
  
	  productDiv.innerHTML = `
		<div class="offer"><p>10%</p></div>
		<img src="${item.img}" alt="${item.name}">
		<div class="dis">
		  <p>${item.name}</p>
		  <p>${item.price}</p>
		</div>
		<div class="clr">
		  <span class="one"></span>
		  <span class="two"></span>
		  <span class="three"></span>
		  <button class="remove-btn" data-id="${item.id}">Remove</button>
		</div>
	  `;
  
	  cartContainer.appendChild(productDiv);
	});

	cartContainer.querySelectorAll('.remove-btn').forEach(button => {
	  button.addEventListener('click', removeFromCart);
	});
  }
  

  function removeFromCart(event) {
	const button = event.target;
	const productId = button.getAttribute('data-id');
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
	cart = cart.filter(item => item.id !== productId);
	localStorage.setItem('cart', JSON.stringify(cart));
  
	
	button.closest('.cart-product').remove();
  }
  
  
  document.addEventListener('DOMContentLoaded', displayCartProducts);
  