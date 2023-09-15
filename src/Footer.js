import ig from './Assets/IG.svg'
import fb from './Assets/FB.svg'
import tw from './Assets/TW.svg'
import yt from './Assets/YT.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
    return ( 
        <div className="footer" style={{bottom:'0'}}>
            <div className="wrap" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 30px 0'}}>
                <div className="socials">
                    <Link to='/' className="fb" style={{margin:'10px 20px'}}><img src={fb} alt="" /></Link>
                    <Link to='/' className="ig" style={{margin:'10px 20px'}}><img src={ig} alt="" /></Link>
                    <Link to='/' className="tw" style={{margin:'10px 20px'}}><img src={tw} alt="" /></Link>
                    <Link to='/' className="yt" style={{margin:'10px 20px'}}><img src={yt} alt="" /></Link>
                </div>
                <div className="conds" style={{display:'flex'}}>
                    <h3 style={{margin:'20px 20px'}}>Conditions of Use</h3>
                    <h3 style={{margin:'20px 20px'}}>Privacy & Policy</h3>
                    <h3 style={{margin:'20px 20px'}}>Press Room</h3>
                </div>
                <p style={{margin:'10px', color:'#6B7280', fontSize:'small'}}>© 2021 MovieBox by Adriana Eka Prayudha  </p>
            </div>
        </div>
     );
}
 
export default Footer;