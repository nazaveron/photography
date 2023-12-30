import './main.css'

const main = () => {
    return (
        <main >
            <div className='video-container'><video src="src\images\video.mp4" autoPlay muted playsInline loop></video></div>
            <div className="grid-container">
                <div className="grid-item">
                    <img src="src\images\camera11.jpg" alt="cámara"/> <h2>LOMO'INSTANT</h2> 
                    <div className='description'>
                    <p> 3 modos de disparo</p>
                        <p>Exposiciones múltiples limitadas</p> </div>
                    <button><p className='btn-text'>Consultar</p>
                    </button>
                </div>
                <div className="grid-item"><img src="src\images\fujifilm.jpg" alt="" /> <h2>FUJI FILM</h2> 
                <div className='description'>
                    <p> 3 modos de disparo</p>
                        <p>Exposiciones múltiples limitadas</p> </div>
                    <button>Consultar</button>

                </div>
                <div className="grid-item"><img src="src\images\polaroid.jpg" alt="" /> <h2>POLAROID</h2> 
                <div className='description'>
                    <p> 3 modos de disparo</p>
                        <p>Exposiciones múltiples limitadas</p> </div>
                <button><p>Consultar</p></button></div>
                <div className="grid-item"><img src="src\images\nikon.jpg" alt="" /> <h2>NIKON</h2> 
                <div className='description'>
                    <p> 3 modos de disparo</p>
                        <p>Exposiciones múltiples limitadas</p> </div>
                <button>Consultar</button></div>
            </div>
        </main>
    )
}

export default main
