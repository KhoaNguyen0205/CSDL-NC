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
              <h4>DALAT WIND HOTEL</h4>
              <p>Uniquely designed organuc nature house, off-grid</p>
              <h4>$120 per night</h4>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/1f/8f/aa/1f8faa1528a439fab13b55fcdf912b97.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>RAON VILLA</h4>
              <p>Breathtaking Mountain view in cozy</p>
              <h4>$300 per night</h4>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/564x/e3/93/9a/e3939a042d1e3afc289b865e829e6038.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>HERA BOUTIQUE HOTEL</h4>
              <p>Rooms at Hera Boutique Hotel are fitted with a seating area</p>
              <h4>$180 per night</h4>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/03/af/9c/03af9c07d1ad30c465bb2596849aece0.jpg" className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>JOLIE HOUSE</h4>
              <p>Each unit has a kitchen area with a microwave and a fridge</p>
              <h4>$190 per night</h4>
          </div>
         </div>

         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/7d/6e/b3/7d6eb3eae48d464c1477272c61f5aef3.jpg"  className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>DALAT WIND HOTEL</h4>
              <p>Uniquely designed organuc nature house, off-grid</p>
              <h4>$120 per night</h4>
          </div>
         </div>


         <div className="menu-box">
          <div className="hotel-img">
            <img src="https://i.pinimg.com/236x/7f/16/ce/7f16ce8a1bbd5cd4ad86595876512376.jpg"  className="img-responsive img-curve" alt="" />
          </div>
          <div className="title-hotel">
              <h4>DALAT WIND HOTEL</h4>
              <p>Uniquely designed organuc nature house, off-grid</p>
              <h4>$120 per night</h4>
          </div>
         </div>     
         <div className="clearfix"> </div>
      </div>
      </section>
       
       <FooterPage />
     
      </div>
    )
    
} 