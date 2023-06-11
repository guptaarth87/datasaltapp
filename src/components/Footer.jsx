import '../styles/Footer.css';
import { HashLink } from 'react-router-hash-link';

function Footer(){
    return (
        <> 
        <div id = "contactus" className=" wrapbox w-100 py-4 flex-shrink-0">
     
     
        <div className="footercomponent ">
       
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 white">Data Salt</h5>
                    <p className="small white subhead">Don't go anywhere every solution is here!</p>
                    <p className="small white mb-0">&copy; Copyrights. All rights reserved. Data salt</p>
                </div>
                <div className="subdiv col-lg-7">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3 white">Quick links</h5>
                     <ul className="list-unstyled text-muted">
                        <li><HashLink className="link white" to="#overview">Overview</HashLink></li>
                        <li><HashLink className="link white" to="#techstack">Tech stack</HashLink></li>
                        <li><HashLink className="link white" to="#startersection">Go to top</HashLink></li>

                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3 white">Social Media</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a className="link white" href="#">Facebook</a></li>
                        <li><a className="link white" href="#">Instagram</a></li>
                        <li><a className="link white" href="#">Linkedin</a></li>
                        
                    </ul>
                </div>
                
                </div>
             </div>
            </div>
           
        </div>
       
         
        
    </div>
        
       
        
        </>
    )
}

export default Footer;