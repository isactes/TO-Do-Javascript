const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = [
    {
        name: 'AURORA',
        displayName: 'Giving In The Love',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Conqueror',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Half The World Away',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Into The Light',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Lucky',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Murder Song (5, 4, 3, 2, 1)',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Nature Boy (Live Session)',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Running With The Wolves',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Under Stars (Audio)',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Warrior',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Winter Bird',
        artist: 'Aurora'
    },
    {
        name: 'AURORA',
        displayName: 'Wisdom Cries',
        artist: 'Aurora'
    },
]

//Check if playing

let isPlaying = false;

//play

function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}
//Pause

function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

//play or pause event listener 
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//Update DOM 
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

//Current song
let songIndex = 0;

//Prev song 
function prevSong(){
    songIndex--;
    if (songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Next song

function nextSong(){
    songIndex++;
    if (songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//On load - Select First song
loadSong(songs[songIndex]);


//Update progress Bar and time

function updateProgressBar(e){
    if(isPlaying){
        const {duration, currentTime } = e.srcElement;
        //UPdate progress bar with
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        //CAlculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        //Delay swithing duration element to avoid nan 
        if (durationSeconds){
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        //calculate display for current
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10 ){
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}

//Set progres bar 

function setProgressBar(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
}

//Event Listeners

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);