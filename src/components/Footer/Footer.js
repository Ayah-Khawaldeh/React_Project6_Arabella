import React from 'react';
import {
    FooterContainer
} from './FooterElements_style';


function Footer() {
    return (
        <FooterContainer className='main-footer'>
            <div className='footer-middle'>
            <div className='container'>
                <div className='row'>
                    {/*start of column1*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4> dddd</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>vv fgegrg</a></li>
                            <li><a  href='/'>vv </a></li>
                            <li><a  href='/'>vv </a></li>
                            <li><a  href='/'>vv </a></li>
                        </ul>
                    </div>
                    {/*start of column2*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4> dddd</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>vv fgegrg</a></li>
                            <li><a  href='/'>vv </a></li>
                            <li><a  href='/'>vv </a></li>
                            <li><a  href='/'>vv </a></li>
                        </ul>
                    </div>
                    {/*start of column3*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4> dddd</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>vv fgegrg</a></li>
                            <li><a  href='/'>vv </a></li>
                            <li><a  href='/'>vv </a></li>
                            <li><a  href='/'>vv </a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4> Follow us </h4>
                        <ul className='list-unstyled' >
                            <li><a  href='/' ><i className="fa fa-facebook"></i></a></li>
                            <li><a  href='/' ><i className="fa fa-facebook"></i></a></li>
                            <li><a  href='/' ><i className="fa fa-facebook"></i></a></li>
                            <li><a  href='/' ><i className="fa fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className="fab fa-facebook-f"></div>
                    <p className='text-xs-center'>
                        &copy{new Date().getFullYear()} All Rights Reserved
                    </p>

                </div>
            </div>
            </div>
        </ FooterContainer>
    );
};

export default Footer;

// const FooterContainer = styled.footer`
// .footer-middle {
//     background: red;
// }
// `;