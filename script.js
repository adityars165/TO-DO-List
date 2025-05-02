
const addButton = document.querySelector("#add-button")
addButton.addEventListener('click',(e)=>{
    value = true
    const newElement = document.createElement('li')
    const deleteImage = document.createElement('img')
    deleteImage.src = 'delete.png'
    const inputValue = document.querySelector('#to-do-input')
    
    if(inputValue.value === ""){
        const emptyInput = document.querySelector('#empty-error')
        emptyInput.className = 'visible'
    }
    else{
        const emptyInput = document.querySelector('#empty-error')
        emptyInput.className = 'hide'
        newElement.innerHTML = inputValue.value
        newElement.appendChild(deleteImage)
        const ul = document.querySelector('#to-do-list')
        ul.appendChild(newElement)
        inputValue.value = "";
    }
   
})


const ul = document.querySelector('#to-do-list')
ul.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentNode.remove()
    }
})




