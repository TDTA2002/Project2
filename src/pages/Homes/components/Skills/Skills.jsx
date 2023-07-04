import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../../../img/color-sharp.png"
import "./Skills.scss"
import { Link, useParams } from 'react-router-dom';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Game</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <Link to="/shop"> <img src='https://store.steampowered.com/categories/homepageimage/category/rogue_like_rogue_lite?cc=us&amp;l=english' alt="Image" /></Link>
                                    <h5>STORY-RICH</h5>
                                </div>

                                <div className="item">
                                    <Link to="/shop">  <img src="https://store.steampowered.com/categories/homepageimage/category/puzzle_matching/?cc=us&amp;l=english" alt="Image" /></Link>
                                    <h5>ROLE-PLAYING</h5>
                                </div>

                                <div className="item">
                                    <Link to="/shop"><img src="https://store.steampowered.com/categories/homepageimage/category/science_fiction?cc=us&amp;l=english" alt="Image" /></Link>
                                    <h5>PUZZLE</h5>
                                </div>

                                <div className="item">
                                    <Link to="/shop"> <img src="https://store.steampowered.com/categories/homepageimage/category/exploration_open_world?cc=us&amp;l=english" alt="Image" /></Link>
                                    <h5>OPEN WORLD</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
