class Video {
  constructor() {
      this.video = document.querySelector(".main-hero__video");
      this.play = document.querySelector("#video__play");
      this.hideInitialy();
      this.playVideo();
   }


   hideInitialy() {
       this.video.classList.add("main-hero__video--hidden");
   }
   playVideo() {
       this.play.addEventListener("click", (e) => {
           e.preventDefault();
           this.video.classList.add("main-hero__video--visible");
           this.video.play();          
       });
       this.video.addEventListener("ended", (e) => {
           e.target.classList.remove("main-hero__video--visible");
       });
   }


}

export default Video;