import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import React,{useState,useEffect} from 'react'

export default function Layout({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    async function getHomeDate() {
        try {
          console.log("Hello")
          const response = await fetch("http://10.10.11.17:8001/home")
          const data = await response.json();
          setIsLoading(false)
        } catch (err) {
          console.log(err)
          setIsLoading(true)
        }
  
      }
      getHomeDate()
    },[])

    return (
        <div className="leyout" style={isLoading ? { display: 'none' } : { display: 'block' }}>
            <Navbar />
            <>{children}</>
            <Footer/>
        </div>
    )
}