import { Link } from "react-router-dom";
import FooterPage from "../Footer";
import Header from "../Header";

export default function IndexPage() {
    return (
        <div>
        <section className="hotel-menu" >
        <div className="container">

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/14/c0/5b/14c05ba8f611c1d3cc957792bbcfbfee.jpg"  className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4><b>DALAT WIND HOTEL</b></h4>
              <p>Uniquely designed organuc nature house, off-grid</p>
              <h5><b>$120 per night</b></h5>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/1f/8f/aa/1f8faa1528a439fab13b55fcdf912b97.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4><b>RAON VILLA</b></h4>
              <p>Breathtaking Mountain view in cozy. treed home hehe</p>
              <h5><b>$120 per night</b></h5>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/35/b5/0c/35b50cfaf229fc5438aae576fad3d58f.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4><b>HERA BOUTIQUE HOTEL</b></h4>
              <p>Rooms at Hera Boutique Hotel are fitted with a seating area</p>
              <h5><b>$120 per night</b></h5>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/b7/16/28/b716285e374471308fa16ad30565a39e.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4><b>Jolie Joie HOTEL</b></h4>
              <p>Each unit has a kitchen area with a microwave and a fridge</p>
              <h5><b>$120 per night</b></h5>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/7d/6e/b3/7d6eb3eae48d464c1477272c61f5aef3.jpg"  className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4><b>Herra HOTEL</b></h4>
              <p>Uniquely designed organuc nature house, off-grid</p>
              <h5><b>$120 per night</b></h5>
          </div>
         </div>


         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/736x/64/cd/a1/64cda14e30e6824c5d428d1e9d428135.jpg"  className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4><b>Luxery HOTEL</b></h4>
              <p>Uniquely designed organuc nature house, off-grid</p>
              <h5><b>$120 per night</b></h5>
          </div>
         </div>
    


        
         <div className="clearfix"> </div>
      </div>
      </section>
       


       <FooterPage />
     
      </div>
    )
    
} 