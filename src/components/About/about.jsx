import React,{useEffect,useState} from 'react'
import Layout from '../Layout'
import Aos from 'aos'
import 'aos/dist/aos.css'
function AboutComponent() {
  const [aboutDate, setAboutDate] = useState([])
  useEffect(() => {
    async function getHomeDate() {
      try {
        const response = await fetch("http://10.10.11.17:8001/about")
        const data = await response.json();
        setAboutDate(data);
        console.log(aboutDate);
      } catch (err) {
        console.log(err)
        setIsLoading(true)
       
      }

    }
    getHomeDate()
  }, [])

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
   <>
   <Layout>
      <header className='about_header'>
          <div className="header_text_row">
          
          <div className='header_title'>
          <h2 className="about_header_title" data-aos="fade-right">
              About
          </h2>
          </div>
      
            <div className='header_subtitle' data-aos="fade-left">
            {
              aboutDate.map((item) => (
                <p>{item.text}</p>
              ))
            }     
            
            </div>     
            
          </div>
      </header>
   </Layout>
   </>
  )
}

export default AboutComponent
