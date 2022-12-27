import React from 'react'
export default function Header() {
    return (
        <div className="headerContainer">
            <img src="./img/profile.jpg" alt="this is a profile picture" className="cardImg" />
            <h1 className="nameTitle">Sepehr Haghdoust</h1>
            <h3 id="jobTitle" className="jobTitle">Frontend Developer</h3>
            <a href="#" id="webAdress" className="webAdress">sani.com</a>
            <div className="social">
                <a className="socialLinks emailLink" href="#">          <i className="fa-solid fa-envelope"></i>
                    Email</a>
                <a className="socialLinks linkedinLink" href="#"><i className="fa-brands fa-linkedin"></i>Linkedin</a>
            </div>
            <button id="themeToggler"><i className="fa-solid fa-moon"></i></button>
        </div>


    )
}