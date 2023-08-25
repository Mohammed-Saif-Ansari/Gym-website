import React from 'react'
import '../footer/footer.css'
import logo from '../../assets/images/logo.png';

function footer() {
    return (
        <footer>
            <div className='footer-main'>
                <div className='footer-main-up'>
                    <div className='footer-main-up-first'>
                        <div className='first-logo'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='first-para'>
                            <p>
                                Cum sociis Theme natoque penatibus et magnis dis parturie montes, nascetur ridiculus mus. Curabitur ullamcorper.
                            </p>
                        </div>
                        <div className='first-contact'>
                            <p>ICON  1-677225-124-44227-84</p>
                            <p>ICON  84 Main Collins Street</p>
                            <p>ICON  Mon - Sat 8.00 - 18.00</p>
                        </div>
                    </div>
                    <div className='footer-main-up-latestnews'>
                        <div className='second-data'>
                            <h1>FITNESS CLASS FOR YOU</h1>
                            <h4>OCTOBER 22, 2017</h4>
                        </div>
                        <div className='latestnews-data'>
                            <h1>GYM EXERCISES TO BOOST YOUR FOOTBALL</h1>
                            <h4>OCTOBER 22, 2017</h4>
                        </div>
                        <div className='latestnews-data'>
                            <h1>BOOST PERFORMANCE</h1>
                            <h4>OCTOBER 22, 2017</h4>
                        </div>
                    </div>
                    <div className='footer-main-up-recentprojects'>
                        <h1>Important Date</h1>
                        <ul>
                            <li><a href="#">MARCH 2018</a></li>
                            <li><a href="#">FEBRUARY 2018</a></li>
                            <li><a href="#">APRIL 2018</a></li>
                            <li><a href="#">MAY 2018</a></li>
                            <li><a href="#">JUNE 2018</a></li>
                        </ul>
                    </div>
                    <div className='footer-main-up-contact'>
                        <form>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <br />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <br />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="comment">Comment:</label>
                                <br />
                                <textarea
                                    id="comment"
                                    name="comment"
                                    required
                                />
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='footer-main-down'>
                    <div className='footer-down-content'>
                        <p>
                        © 2023 Mohammed Saif Ansari, ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer