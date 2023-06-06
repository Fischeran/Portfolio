import React from "react";


function Contact () {
        return (
            <section id="Contact" className="container-fluid">
                <div>
                    <h3 className="contactHead row">Contact Me</h3>
                </div>
                <div className="row">
                    <div className="col-4 myInfo">
                        <h4 className="touch">Get in touch</h4>
                        <p>Email: alnfischer@gmail.com</p>
                        <p>Phone: 703-201-5171</p>
                        <p>Brooklyn, NY</p>
                    </div>
                    <div className="col-6 email">
                        <div className="textBoxesRow">
                            <form>
                                <div className="nameMail">
                                <input type="text" name="name" className="name"></input>
                                <input type="text" name="email" className="email"></input>
                                </div>
                                <div className="message rounded-0">
                                <textarea id="message" name="message" className="message"></textarea>
                                </div>
                                <div className="button">
                                    <button type="submit" className="btn btn-primary">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default Contact