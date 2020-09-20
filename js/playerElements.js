/*export default {
    setTrack1() {
        this.audioImage = document.querySelector(".main-list li#iten-01");
        this.title = document.querySelector("#legend-track-1 h3");
        this.describe = document.querySelector("#legend-track-1 h4");
        this.playPause = document.querySelector("#iten-play-1");
        this.vol = document.querySelector("#iten-vol-1");
        this.volume = document.querySelector("#seekbar-vol-1");
        this.seekbar = document.querySelector("#seekBar-1");
    },
    setTrack2() {
        this.audioImage = document.querySelector(".main-list li#iten-02");
        this.title = document.querySelector("#legend-track-2 h3");
        this.describe = document.querySelector("#legend-track-2 h4");
        this.playPause = document.querySelector("#iten-play-2");
        this.vol = document.querySelector("#iten-vol-2");
        this.volume = document.querySelector("#seekbar-vol-2");
        this.seekbar = document.querySelector("#seekBar-2");
    },

    createAudioElement1(audio) {
        this.audio = new Audio(audio);
    },
    
    actions() {
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause();
        this.vol.onclick = () => this.toggleMute();
        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
    }
}*/