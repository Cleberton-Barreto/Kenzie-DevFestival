/*Finalização dados*/
const nome = window.localStorage.getItem('nome')
const email = window.localStorage.getItem('email')
const quantity = window.localStorage.getItem('quantityTickets')

const nomeLabel = document.getElementById('nome')
const emailLabel = document.getElementById('email')
const quantityLabel = document.getElementById('quantity-ticket')

nomeLabel.innerText = nome
emailLabel.innerText = email
quantityLabel.innerText = quantity