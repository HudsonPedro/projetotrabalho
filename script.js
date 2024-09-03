function abrirSobremim(){
    const modalSobremim = document.getElementById ('janela-sobremim')  
    modalSobremim.classList.add('abrir')
    
    modalSobremim.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-sobremim'){
            modalSobremim.classList.remove('abrir')
        }
    })
} 

function abrirFormacao(){
    const modalFormacao = document.getElementById ('janela-formacao')  
    modalFormacao.classList.add('abrir')
    
    modalFormacao.addEventListener('click', (e) => {
        if(e.target.id == 'sfechar' || e.target.id == 'janela-formacao'){
            modalFormacao.classList.remove('abrir')
        }
    })
} 

function abrirExperiencia(){
    const modalExperiencia = document.getElementById ('janela-experiencia')  
    modalExperiencia.classList.add('abrir')
    
    modalExperiencia.addEventListener('click', (e) => {
        if(e.target.id == 'ffechar' || e.target.id == 'janela-experiencia'){
            modalExperiencia.classList.remove('abrir')
        }
    })
} 

function abrirPortifolio(){
    const modalPortifolio = document.getElementById ('janela-portifolio')  
    modalPortifolio.classList.add('abrir')
    
    modalPortifolio.addEventListener('click', (e) => {
        if(e.target.id == 'frfechar' || e.target.id == 'janela-portifolio'){
            modalPortifolio.classList.remove('abrir')
        }
    })
} 

function abrirContato(){
    const modalContato = document.getElementById ('janela-contato')  
    modalContato.classList.add('abrir')
    
    modalContato.addEventListener('click', (e) => {
        if(e.target.id == 'ctfechar' || e.target.id == 'janela-contato'){
            modalContato.classList.remove('abrir')
        }
    })
} 
