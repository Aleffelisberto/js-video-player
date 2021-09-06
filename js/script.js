const video = document.querySelector('#video')
const playButton = document.querySelector('#play')
const stopButton = document.querySelector('#stop')
const progressRange = document.querySelector('#progress')
const timestamp = document.querySelector('#timestamp')

// Play & pause video
toggleVideoStatus = () => {
    (video.paused) ? video.play() : video.pause()
}

// Update play/pause icon
updatePlayIcon = () => {
    const icon = playButton.children[0]
    icon.className = (icon.className === 'fa fa-play') ? 'fa fa-pause' : 'fa fa-play'
}

// Update progress & timestamp
updateProgress = () => {
    // Set progress range value
    progressRange.value = (video.currentTime / video.duration) * 100

    // Adjust time value
    let hours = Math.floor(Math.round(video.currentTime / 3600))
    let minutes = Math.floor(Math.round(video.currentTime)/60)
    let seconds = Math.round((video.currentTime) % 60)

    // Correct value to display
    if(seconds < 10) seconds = `0${seconds}`
    if(minutes === 60) minutes = 0

    // Verify if there's more than 1 hour in current time
    timestamp.innerHTML = (hours > 0) ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
}

// Set video time to range
setVideoProgress = () => {
    video.currentTime = (+progressRange.value * video.duration) / 100
}

// Stop video
stopVideo = () => {
    video.currentTime = 0
    video.pause()
}

// Event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

playButton.addEventListener('click', toggleVideoStatus)

stopButton.addEventListener('click', stopVideo)

progressRange.addEventListener('change', setVideoProgress)
