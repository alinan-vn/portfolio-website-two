import React from 'react';
import Footer from '../global/footer/index';

class About extends React.Component{
    render(){
        return (
            <section className='about'>
                <div className='about__bio-image'>
                    <div className='about__bio'>
                        <h2 className='text-secondary'>BIO</h2>
                        <p>Software Developer during the day, hobbiest after hours :) </p>
                        <p>Some of my hobbies include making music, honing my instruments, playing chess, and trying to finesse my 40line drop time in Tetris.</p>
                    </div>
                </div>

                <div className='jobs'>
                    <div className='jobs__job'>
                        <h2 className='text-secondary'>2020 - Current</h2>
                        <h3>HCL/USAA</h3>
                        <h6>Jr Software Developer</h6>
                        <p>Contracted to USAA by HCL to perform a wide variety of Software Developer duties. Some of past projects include...</p>
                        <p>Conducting analysis, testing of changes made, and documentation of legacy software</p>
                        <p>Hotfixes of in-production code</p>
                        <p>Updating formulas and architecture on in-production and non-production code</p>
                    </div>

                    <div className='jobs__job'>
                        <h2 className='text-secondary'>2020 - Current</h2>
                        <h3>Virtual Network</h3>
                        <h6>I make music under the name of Virtual Network!</h6>
                        <p>Released my first album in late 2021. It contains a mix of electronic, rock, 8-bit influences.</p>
                        <p>Currently working on a new album ;)</p>
                    </div>
                    
                    <div className='jobs__job'>
                        <h2 className='text-secondary'>2020 - 2021</h2>
                        <h3>City of Wind Design</h3>
                        <h6>Software Developer</h6>
                        <p>The Software Lead for In House projects.</p>
                        <p>Currently in the beta test stage of launching the official website. Frontend: React, Backend: Wordpress </p>
                        <p>Currently in the ideate and backend stage of our first e-commerce website! Frontend: React (with Redux), Backend: Ruby on Rails </p>
                    </div>
                </div>

                <Footer />
            </section>
        )
    }
}

export default About
