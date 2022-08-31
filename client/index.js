const likeBtn = document.getElementById('like')
const dislikeBtn = document.getElementById('dislike')

const likeAlert = () => {
    alert("That's nice of you to like it.. Now go buy it!")
}
const dislikeAlert = () => {
    alert("Look I know they're not the nicest pads, but be nice!")
}

likeBtn.addEventListener('click', likeAlert)
dislikeBtn.addEventListener('click', dislikeAlert)