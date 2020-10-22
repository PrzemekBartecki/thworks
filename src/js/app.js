

//to być musi, inaczej hmr się nie odpalą
//https://webpack.js.org/api/hot-module-replacement/
if (module.hot) {
    module.hot.accept();
}



document.addEventListener("DOMContentLoaded", function() {


    $('.team__items').slick({
        slidesToShow: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    slidesToShow: 3,
                    loop: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


 const btnStart = document.querySelector('#ico .main__right-colum .main__movie-btn');
    const btnStop = document.querySelector('#mVideo .close');
    const videoEl =  document.querySelector('#mVideo .video');

    btnStart.addEventListener('click', function(){
        console.log('działam')
        const video = document.createElement('video');
        video.setAttribute('width', '100%');
        video.setAttribute("oncanplay","this.play()");
        video.loop= true;
        video.muted = true;
        video.controls= true;
        console.log('video', video)
        videoEl.appendChild(video);

        const source = document.createElement('source');
        source.src = "images/test2.mp4";
        source.type = "video/mp4";
        video.appendChild(source);
    })

    btnStop.addEventListener('click', function(){
        let videoMove = document.querySelector('#mVideo .video video ');
        videoEl.removeChild(videoMove);
    })

});