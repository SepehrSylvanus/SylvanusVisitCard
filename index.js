import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

ReactDOM.render(<App/>, document.getElementById('root'))
const root = document.getElementById('root')
const job = document.getElementById('jobTitle')
const themeToggler = document.getElementById('themeToggler')
const webAdress = document.getElementById('webAdress')
const footer = document.getElementById('footer')
const footerIcon = document.getElementById('footerIcon')
document.getElementById('themeToggler').addEventListener('click',()=>{
    root.classList.toggle('dark')
    job.classList.toggle('dark')
    themeToggler.classList.toggle('dark')
    webAdress.classList.toggle('dark')
    footer.classList.toggle('dark')
    footerIcon.classList.toggle('dark')
    
})


