
import AudioPlayer from "../components/AudioPlayer";


export const Media = ({
    image, caption, prompt, sound
}) => {
    /*return (
        <div class="row" style={{paddingBottom: '150px'}}>
            <div class="col-8">
                <img src={image} alt="Image" width="500px" className="image" />
            </div>
            <div class="col-4">
            <div className="caption" style={{ 'padding-bottom': '35px'}}>{caption}</div>
                <AudioPlayer src={sound}/>
                <text style={{ 'font-family': 'Benne', 'align-items': 'left' }}>{prompt}</text>
            </div>
        </div>
    )*/

    if (prompt)

    return (
        <div class="row" style={{paddingBottom: '150px'}}>
            <div class="col-8">
                <img src={image} alt="Image"  className="image" />
                <div className="caption" style={{ 'padding-top': '35px'}}>{caption}</div>
            </div>
            <div class="col-4">
                <AudioPlayer src={sound} />
                <text style={{  'font-family': 'Benne', 'text-align': 'left' }}>{prompt}</text>
            </div>
        </div>
    )
}

