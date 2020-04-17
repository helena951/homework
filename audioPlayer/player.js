const songs = ["Song1.mp3","Song2.mp3","Song3.mp3"];
        let poster = ["1fTO.gif"];
        
        let songTitle = document.getElementById("songTitle");
        let fillBar = document.getElementById("fill");
        
        let song = new Audio();
        let currentSong = 0;  
        
        window.onload = playSong;  
        
        function playSong(){
            song.src = songs[currentSong];  
            songTitle.textContent = songs[currentSong]; 
            song.play();   
        }
        
        function playOrPauseSong(){
            if (song.paused){
                song.play();
            } else {
                song.pause();
            }
            document.querySelector(".image").classList.toggle("imageChange");
        }
        
        song.addEventListener('timeupdate',function() { 
            let position = song.currentTime / song.duration;
            fillBar.style.width = position * 100 +'%';
        });
    
        function next(){
            document.querySelector(".image").classList.remove("imageChange")
            currentSong++;
            if (currentSong > 2) {
                currentSong = 0;
            }
            playSong();
        }
    
        function pre(){
            document.querySelector(".image").classList.remove("imageChange")
            currentSong--;
            if (currentSong < 0) {
                currentSong = 2;
            }
             playSong();
        }
        
    
    
    
