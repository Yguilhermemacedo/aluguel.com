// Abrir/Fechar Modal

const abrirModalButton = document.querySelector('.adicionar')
const fade = document.querySelector('#fade')
const modalImoveis = document.querySelector('#modal-imovel')
const btnConcluido = document.querySelector('.btn-concluir')
const closeModalButton = document.querySelector('.fechar-modal')

    abrirModalButton.addEventListener('click', () =>{
     if(fade.style.display === 'none'){
        fade.style.display = 'block'
         } else{
        fade.style.display = 'none'
      }

        if(modalImoveis.style.display === 'none'){
        modalImoveis.style.display = 'block'
        } else{
        modalImoveis.style.display ='none'
        }
    })

    btnConcluido.addEventListener('click', () =>{
    modalImoveis.style.display = 'none'
    fade.style.display = 'none'
    })

    closeModalButton.addEventListener('click', () =>{
            modalImoveis.style.display = 'none'
            fade.style.display = 'none'
    })

