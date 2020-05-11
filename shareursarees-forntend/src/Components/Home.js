import React from 'react';
import './kaj.css'
import carousel from 'react-bootstrap/Carousel';
import AudioPlayer from "react-h5-audio-player";
import ReactAudioPlayer from 'react-audio-player';


const Home = (props) => {
    //const kaj= "/images/Yellow-Saree.jpg"
    return (
        <div className= "behave">
           
           


            {/* { <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/images/sharesareeimg1.png" class="d-block w-100"/>
                </div>
                <div class="carousel-item">
                <img src="/images/sharesareeimg3.png" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                <img src="/images/sharesareelast.png" class="d-block w-100" />
                </div>
            </div>
            </div> } */}




                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner kaj">
                        <div class="carousel-item active">
                        <img src="/images/sharesareeimg1.png" class="d-block w-100" />
                        </div>
                         <div class="carousel-item">
                        <img src="/images/sharesareeimg3.png" class="d-block w-100" /> 
                        </div>
                        <div class="carousel-item">
                        <img src="/images/sharesareelast.png"  class="d-block w-100" />
                        </div> 
                        {/* <div class="carousel-item">
                        <img src="/images/gerua97.png"  class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                        <img src="/images/gerua2.png"  class="d-block w-100" />
                        </div> */}
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div> 

                    

                    <ReactAudioPlayer
                    src="/images/geruaaudiotrimmed.mp3"
                    
                    audioPlay
                        controls
                    />
                    const Player = () => (
                        {/* <AudioPlayer
                            autoPlay
                            src="/images/geruaaudiotrimmed.mp3"
                            onPlay={e => console.log("onPlay")}
                            
                        /> */}
);
                    
                



        </div>    
    )
}

export default Home;