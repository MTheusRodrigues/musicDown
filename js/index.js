import audios from "/js/data.js";

 var  audioData = audios;
 var  currentAudio = {};
 var  isPlaying = false;


//track 01-------------------------------------------------------------------------------------------------------
  const track01 = document.querySelector("#track01")
  const audioImage1 = document.querySelector(".main-list li#iten-01");
  const title1 = document.querySelector("#legend-track-1 h3");
  const describe1 = document.querySelector("#legend-track-1 h4");
  
  
  
  const btnPlayPause = document.querySelector('.btn-play');
  const btnVolMute = document.querySelector('.iten-vol');
  const seekBarRange = document.querySelector('#seekbarTrack1');
  const seekBarRang = document.querySelector('#seek');
  const seekBarRangVol = document.querySelector('#seekbarVolTrack1');
  const seekBar = document.querySelector("#iten-vol");
  const seekBarV = document.querySelector("#vol");


  currentAudio = audioData[2];
  audioImage1.style.background = `url('${currentAudio.image}') no-repeat`;
  title1.innerText = currentAudio.title;
  describe1.innerText = currentAudio.describe;
  track01.src = currentAudio.audio;
//#FUNÇÕES-----------------------------------------------------------------------------------------------------------------------
      function playTrack1(){
          isPlaying = true;
          track01.play();
          btnPlayPause.innerHTML = "<i class='fas fa-pause'></i>";
         // document.querySelector(".player-bar").style.opacity = 1;
         // document.querySelector(".player-bar").style.visibility = hidden;
      };
      function pauseTrack1(){
          isPlaying = false;
          track01.pause();
          btnPlayPause.innerHTML = "<i class='fas fa-play'></i>";
      };
      function togglePlayPause() {if (isPlaying) {
            pauseTrack1();
          } else {
            playTrack1();
          }
      };
    
    /*
      function toggleMute() {
          track1.muted = !track1.muted;
          if (track1.muted) {
            btnVolMute.innerHTML = "&#xf026"
          } else {
            btnVolMute.innerHTML = "&#xf027"
          }
      }; 
      function setVolume() {
          track1.volume = seekbarVolTrack1.value / 100;
      };
      */
     btnPlayPause.addEventListener("click",togglePlayPause);
   
    track01.onloadedmetadata = () => seekBarRange.max = track01.duration;
    seekBarRange.onchange = () => track01.currentTime = seekBarRange.value;
    track01.ontimeupdate = () => seekBarRange.value = track01.currentTime;

      track01.addEventListener("timeupdate", function(){
        let position = track01.currentTime / track01.duration
        let test = position * 100
        console.log(test)
      })
     

     
    

    
    /*
      
      
      seekBarV.addEventListener("mouseover", function() {
          seekBar.style.left = "90px";seekBar.style.paddingRight = "45px"; 
          seekBar.style.transition = ".7s"; 
          seekBarRang.style.width = "40%"; 
          seekBarRang.style.transition = ".7s";
          seekBarRangVol.style.display = "flex";
          seekBarRangVol.style.backfaceVisibility = "visible";
          seekBarRangVol.style.opacity = "1";
          seekBarRangVol.style.transition = ".7s"; 
          seekBarRangVol.style.left = "4px";
          seekBarRangVol.style.width = "38px"
      });
      seekBar.addEventListener("mouseover", function() {
          seekBar.style.left = "90px"; 
          seekBar.style.paddingRight = "45px"; 
          seekBar.style.transition = ".7s"; 
          seekBarRang.style.width = "40%"; 
          seekBarRang.style.transition = ".7s";
          seekBarRangVol.style.display = "flex";
          seekBarRangVol.style.backfaceVisibility = "visible";
          seekBarRangVol.style.opacity = "1";
          seekBarRangVol.style.transition = ".7s"; 
          seekBarRangVol.style.left = "4px";
          seekBarRangVol.style.width = "38px"
      });
      seekBar.addEventListener("mouseout", function() {
          seekBar.style.left = "135px";
          seekBar.style.paddingRight = " 0px"; 
          seekBar.style.transition = ".7s";
          seekBarRang.style.width = "70%"; 
          seekBarRang.style.transition = ".7s";
          seekBarRangVol.style.display = "flex";
          seekBarRangVol.style.visibility = "visible";
          seekBarRangVol.style.opacity = "0";
          seekBarRangVol.style.left = "28px";
          seekBarRangVol.style.width = "0px"
      });
      seekBarRangVol.addEventListener("mouseover", function() {
          seekBar.style.left = "90px";
          seekBar.style.paddingRight = "45px"; 
          seekBar.style.transition = ".7s"; 
          seekBarRangVol.style.display = "flex";
          seekBarRangVol.style.backfaceVisibility = "visible";
          seekBarRangVol.style.opacity = "1";
          seekBarRangVol.style.transition = ".7s"; 
          seekBarRangVol.style.left = "4px";
          seekBarRangVol.style.width = "38px"
          seekBarRang.style.width = "40%"; 
          seekBarRang.style.transition = ".7s";
      })
  //#-------------------------------------------------------------------------------------------------------------

//track 02-------------------------------------------------------------------------------------------------------
  btnVolMute.onclick = () => track01.volume = seekbarVolTrack1.value / 100;
btnVolMute.addEventListener("click",toggleMute);
      seekbarVolTrack1.addEventListener("mousemove", setVolume);
*/
