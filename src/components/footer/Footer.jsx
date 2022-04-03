import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



function Footer() {

    const socialIconsStyle={
        marginRight:"10px",
        marginLeft:"10px"
    }

    return (

        <footer className="footer ">
            <div className="container cards-container footer-container">
                <ul>
                    <h2 className="ul-heder">Contact Us</h2>
                    <li><span>Address:</span> 123 Main Street</li>
                    <li><span>Call to:</span> (012) 800 456 789-987</li>
                    <li><span>Mail to:</span> yourmail@example.com</li>
                    <li className='icons'>
                        <FacebookIcon style={socialIconsStyle} />
                        <TwitterIcon style={socialIconsStyle} />
                        <InstagramIcon style={socialIconsStyle} />
                        <YouTubeIcon style={socialIconsStyle} />
                    </li>
                </ul>
                <ul>
                    <h2 className="ul-heder">Information</h2>
                    <li>About Us</li>
                    <li>Delivery Information</li>
                    <li>Return Policy</li>
                </ul>
                <ul>
                    <h2 className="ul-heder">My Account</h2>
                    <li>123 Main Street, Anytown</li>
                    <li><span>Call to:</span> (012) 800 456 789-987</li>
                    <li><span>Mail to:</span> yourmail@example.com</li>
                </ul>
                <ul>
                    <h2 className="ul-heder">Newsletter</h2>
                    <li>123 Main Street, Anytown, CA 12345 - USA.</li>
                    <li><span>Call to:</span> (012) 800 456 789-987</li>
                    <li><span>Mail to:</span> yourmail@example.com</li>

                </ul>

            </div>


        </footer>


    )
}

export default Footer;