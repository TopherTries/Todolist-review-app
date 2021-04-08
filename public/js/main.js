const deleteBtn = document.querySelectorAll('.delete')

Array.from(deleteBtn).forEach((element) => {
    element.addEventListener('click', deleteTodo)
})

async function deleteTodo(){
    const todoText = this.parentNode.childNodes[1].innerText //go up to the li, grab the span, grab the text within the span... what a doozy
    try{
        const response = await fetch('deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'rainbowUnicorn': todoText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch{

    }
}