import img from "../images/main-image.png";

function HomePage () {
    return (
        <div>
            <div style={{ 'font-family': 'Benne', 'padding-top': '100px' }}> 
                <img src={img} alt="HTML5 Icon" width="320" style={{ 'padding-bottom': '50px'}}/> 
                <h1>The Museum of Art+ML</h1>
            </div>
            <div style={{ 'font-family': 'Benne' }}>
                <h3>by Rohini Banerjee, Ruthie Lin, and Michelle Feng</h3>
            </div>
        </div>
    )
}
export default HomePage;
