/*Botão de compra ingresso*/
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const buyButton = document.getElementById('buy-button')
const quantityTickets = document.getElementById('ticket')

/*Botão adicionar, remover, valor-ingresso*/
const removeTicket = document.getElementById('remove-ticket')
const addTicket = document.getElementById('add-ticket')
const ticket = document.getElementById('ticket')
const ticketPrice = document.getElementById('ticket-price')

buyButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.localStorage.setItem('nome', nome.value)
    window.localStorage.setItem('email', email.value)
    window.localStorage.setItem('quantityTickets', quantityTickets.innerText)
    window.location.href = 'finalizacao.html'
    console.log('nome', nome.value)
    console.log('email', email.value)
    console.log('tikects', ticket.innerText)
})

removeTicket.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('removeu ticket')
    if(parseInt(ticket.innerText) !== 1) {
        ticket.innerText = parseInt(ticket.innerText)-1
        ticketPrice.innerText = parseInt(ticket.innerText)*90
    }
})

addTicket.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('adicinou ticket')
    ticket.innerText = parseInt(ticket.innerText)+1
    ticketPrice.innerText = parseInt(ticket.innerText)*90
})

