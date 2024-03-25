import img1 from "../images/concert.jpeg";
import img2 from "../images/wild1.gif";
import img3 from "../images/wild-cluster2.gif";
import img4 from "../images/fiery-hot.jpg";

import sound1 from '../audio-files/concert-description.mp3'
import sound2 from '../audio-files/feral-sculpture-1.mp3'

import '../components/Page.css';
import AudioPlayer from "../components/AudioPlayer";
import { Media } from "../components/Media";


function Feral () {
    return (
        
        <div class="container" style={{paddingTop: '200px'}}>
            <Media image={img1} caption="The craziest concert ever, held at New York City." sound={sound1} prompt="Amidst the Friday night frenzy, hungry freshmen immersed in politics, while making out and dancing to EDM. Hangovers loomed as alcohol fueled screams and the rush of a Travis Scott concert. It was a rollercoaster of emotions akin to driving a race car, with drugs and extreme sports tempting the carefree. In the frat basement, chess battles waged alongside sports games, all amidst the haze of alcohol and the thrill of getting drunk or high without a care in the world."/>
            <Media image={img2} caption="Crowd sculpture." sound={sound2} prompt=""/>
            <Media image={img3} caption="Crowd sculpture." sound={sound2} prompt=""/>
            <Media image={img4} caption="Crowd sculpture." sound={sound2} prompt=""/>
        </div>
    );
}
export default Feral;

// src/images/wild.gif