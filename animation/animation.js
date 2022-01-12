const messages = [...document.getElementsByClassName('message')]
messages.forEach((message, index) => {
    if(message.classList.contains('sender')){
        message.style.animation = `show-message-right 2s forwards ${index/10 + index/10 * 3}s`
    }else{
        message.style.animation = `show-message-left 2s forwards ${index/10 + index/10 * 3}s`
    }
})