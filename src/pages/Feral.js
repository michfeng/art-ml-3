import img1 from "../images/concert.jpeg";
import img2 from "../images/wild1.gif";

import sound1 from '../audio-files/concert-description.mp3'
import sound2 from '../audio-files/feral-sculpture-1.mp3'

import '../components/Page.css';
import AudioPlayer from "../components/AudioPlayer";


function Feral () {
    return (
        <div>
            <div className="image-with-caption" style={{'padding-top': '100px', 'padding-left': '150px'}}>
                <img src={img1} alt="Image" width="500" className="image" />
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <div className="caption" style={{ 'padding-bottom': '35px'}}>The craziest concert ever, held at New York City.</div>
                    <AudioPlayer src={sound1}/>
                </div>
            </div>
            <div className="image-with-caption" style={{'padding-top': '100px', 'padding-left': '150px'}}>
                <img src={img2} alt="Image" width="525" className="image" />
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <div className="caption" style={{ 'padding-bottom': '35px'}}>Crowd sculpture.</div>
                    <AudioPlayer src={sound2}/>
                </div>
            </div>
        </div>
    )
}
export default Feral;

// src/images/wild.gif