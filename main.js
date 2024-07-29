
function addToCart(event) {
	const button = event.target;
	const productBox = button.closest('.box');
	const productId = productBox.getAttribute('data-id');
	const productImg = productBox.querySelector('img').src;
	const productName = productBox.querySelector('.dis p:first-child').textContent;
	const productPrice = productBox.querySelector('.dis p:last-child').textContent;
	
	const cartItem = {
	  id: productId,
	  img: productImg,
	  name: productName,
	  price: productPrice
	};
  
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	cart.push(cartItem);
	localStorage.setItem('cart', JSON.stringify(cart));
  
	showPopupMessage();
  }
  
 
  function showPopupMessage() {
	const popup = document.getElementById('popup-message');
	popup.classList.add('show');
	setTimeout(() => {
	  popup.classList.remove('show');
	}, 2000);
  }
  

  document.querySelectorAll('.cbtn').forEach(button => {
	button.addEventListener('click', addToCart);
  });
  