import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed-bottom  py-1 bg-dark text-white-50" >
      
      <p>
        &copy; {new Date().getFullYear()} <span>BharatNews.com</span>. Built with{" "}
        <a rel="noreferrer" href="https://react.dev/" target="_blank">React</a>
      </p>
      
      
      </footer>
  )
}

export default Footer