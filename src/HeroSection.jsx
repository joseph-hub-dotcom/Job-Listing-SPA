import progg from './progg.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Hero(){
    return(
        <>
        <section className='hero'>
        <div className='heroSection'>
            <div className="heroMain">
                <div className="left">
                    <h3>Find your job in the German IT industry</h3>
                    <p>Explore the roles suited to your skills, we offer various types of jobs
                    located all around Germany with possible relocation</p>
                </div>
                <div className="right">
                    <Button variant='primary'>Explore Jobs</Button>
                    <Button variant='secondary'>Sign in</Button>
                </div>
            </div>
            <div className="web-pic">
                <img src={progg} className='primary hero-img'></img>
            </div>
        </div>
        </section>
        </>
    );
}

export default Hero