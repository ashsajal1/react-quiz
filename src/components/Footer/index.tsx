import './Footer.css'

import { IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="column">
                    <h4>About</h4>
                    <p><a target="_blank" rel="noopener noreferrer" title="React Shopping" href="https://github.com/ashsajal1/react-shopping/">Ashfiquzzaman Sajal</a> developed this web app using ReactJs + Typescript for learning purpose.</p>
                </div>
                <div className="column dev-info">
                    <h4>Dev Info</h4>
                    <p><a target="_blank" rel="noopener noreferrer" title="React Shopping" href="https://github.com/ashsajal1/react-shopping/">Ashfiquzzaman Sajal</a> is  a web developer. Expert at <span>ReactJs</span>, <span>VueJs</span> and <span>CSS</span>!</p>
                </div>
                <div className="column">
                    <h4>More Projects</h4>
                    <ul className="social-media">
                        <li><a target="_blank" rel="noopener noreferrer" title="React Shopping" href="https://github.com/ashsajal1/react-shopping/"><IoLogoGithub /> React Shopping</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" title="React Shopping" href="https://github.com/ashsajal1/shop-store-vue-bootstrap"><IoLogoGithub /> Vue Store App</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" title="React Shopping" href="https://github.com/ashsajal1/react-easy-peasy"><IoLogoGithub /> React Easy Peasy</a></li>
                        
                    </ul>
                </div>
                <div className="column">
                    <h4>Follow</h4>
                    <ul className="social-media">
                        <li><a target="_blank" rel="noopener noreferrer" title="Follow Ashfiquzzaman Sajal on Linkedin" href="https://www.linkedin.com/in/ashfiquzzaman-sajal-645a7126a/"><IoLogoLinkedin /></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" title="Follow Ashfiquzzaman Sajal on Instagram" href="https://www.instagram.com/ashsajal1/"><IoLogoInstagram /></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" title="Follow Ashfiquzzaman Sajal on Twitter" href="https://twitter.com/ashsajal1"><IoLogoTwitter /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <p>&copy; {new Date().getFullYear()} React Quiz App. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;