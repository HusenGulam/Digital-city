import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
function HomeBuildSection() {

  const [buildSection, setBuildSection] = useState([])

  useEffect(() => {
    async function getBuildSectionDate() {
      try {
        const response = await fetch("http://10.10.11.17:8001/service/")
        const data = await response.json();
        setBuildSection(data);
        
      } catch (err) {
        console.log(err)
      }

    }
    getBuildSectionDate()
  }, [])

 

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  
  return (
   <>
   
   <div>
     <section className='home_bouild_section'> 
        <div className="center_content">
           
          <div className="biulding-title" data-aos="fade-right">
              <h2>Build & manage distributed teams like no one else.</h2>
          </div>

          <div className='biulding-section_box_row'>
              {
                buildSection.map((item) => (
                
                <div>

                  <div key={item.id} className='biulding-section_box' data-aos="flip-left">
                  <img src={item.icon} alt={item.title} width={100} height={80} />
                  <div className='biulding-section_box_icon'>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>  
                </div>

            
                </div> 
              ))
              }
          </div>

        </div>
     </section>
    </div>
 
   </>
  )
}

export default HomeBuildSection
