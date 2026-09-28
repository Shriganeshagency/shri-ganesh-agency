document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}));
<!-- ================= PETROLEUM ACCESSORIES ================= -->
<section id="petroleum-accessories" class="products-section">
  <div class="section-heading">
    <span>OUR PRODUCTS</span>
    <h2>Petroleum Accessories</h2>
    <p>Quality petroleum station accessories and equipment supplied by Shri Ganesh Agency.</p>
  </div>

  <div class="products-grid">

    <!-- 1 -->
    <div class="product-card">
      <div class="product-image">
        <img src="images/petroleum-hose.jpg"
             alt="Petroleum Dispensing Hose">
      </div>
      <div class="product-info">
        <h3>Petroleum Dispensing Hose</h3>
        <p>Durable dispensing hose suitable for petroleum filling stations and fuel dispensing applications.</p>
        <a href="https://wa.me/917972224398?text=Hello%20Shri%20Ganesh%20Agency,%20I%20am%20interested%20in%20Petroleum%20Dispensing%20Hose."
           class="enquiry-btn" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>

    <!-- 2 -->
    <div class="product-card">
      <div class="product-image">
        <img src="images/petroleum-bucket.jpg"
             alt="Petroleum Station Bucket">
      </div>
      <div class="product-info">
        <h3>Petroleum Station Bucket</h3>
        <p>Heavy-duty metal bucket suitable for petroleum station and industrial applications.</p>
        <a href="https://wa.me/917972224398?text=Hello%20Shri%20Ganesh%20Agency,%20I%20am%20interested%20in%20Petroleum%20Station%20Bucket."
           class="enquiry-btn" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>

    <!-- 3 -->
    <div class="product-card">
      <div class="product-image">
        <img src="images/petroleum-hydrometer-1.jpg"
             alt="Petroleum Hydrometer">
      </div>
      <div class="product-info">
        <h3>Petroleum Hydrometer</h3>
        <p>Precision instrument for petroleum product density and specific gravity measurement.</p>
        <a href="https://wa.me/917972224398?text=Hello%20Shri%20Ganesh%20Agency,%20I%20am%20interested%20in%20Petroleum%20Hydrometer."
           class="enquiry-btn" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>

    <!-- 4 -->
    <div class="product-card">
      <div class="product-image">
        <img src="images/petroleum-hydrometer-2.jpg"
             alt="Petroleum Hydrometer Set">
      </div>
      <div class="product-info">
        <h3>Hydrometer Set</h3>
        <p>Petroleum testing hydrometers suitable for fuel and petroleum product testing applications.</p>
        <a href="https://wa.me/917972224398?text=Hello%20Shri%20Ganesh%20Agency,%20I%20am%20interested%20in%20Hydrometer%20Set."
           class="enquiry-btn" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>

    <!-- 5 -->
    <div class="product-card">
      <div class="product-image">
        <img src="images/hp-petrol-pump-flags.jpg"
             alt="Petrol Pump Flags">
      </div>
      <div class="product-info">
        <h3>Petrol Pump Flags</h3>
        <p>Petrol station display flags suitable for branding and identification at fuel stations.</p>
        <a href="https://wa.me/917972224398?text=Hello%20Shri%20Ganesh%20Agency,%20I%20am%20interested%20in%20Petrol%20Pump%20Flags."
           class="enquiry-btn" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>

    <!-- 6 -->
    <div class="product-card">
      <div class="product-image">
        <img src="images/bharat-petroleum-flags.jpg"
             alt="Bharat Petroleum Flags">
      </div>
      <div class="product-info">
        <h3>Petroleum Station Flags</h3>
        <p>Display flags for petroleum retail outlets and station branding requirements.</p>
        <a href="https://wa.me/917972224398?text=Hello%20Shri%20Ganesh%20Agency,%20I%20am%20interested%20in%20Petroleum%20Station%20Flags."
           class="enquiry-btn" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>

    <!-- 7 -->
    <div class="product-card">
      <div class="product-image">
        <img src="images/petrol-pump-dustbin.jpg"
             alt="Petrol Pump Dustbin">
      </div>
      <div class="product-info">
        <h3>Petrol Pump Dustbin</h3>
        <p>Durable wheeled dustbin suitable for fuel stations, commercial areas and industrial premises.</p>
        <a href="https://wa.me/917972224398?text=Hello%20Shri%20Ganesh%20Agency,%20I%20am%20interested%20in%20Petrol%20Pump%20Dustbin."
           class="enquiry-btn" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>

  </div>
</section>


<!-- ================= CSS ================= -->
<style>

.products-section {
  padding: 80px 6%;
  background: #f7f8fa;
}

.section-heading {
  text-align: center;
  margin-bottom: 45px;
}

.section-heading span {
  color: #e32620;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 10px 0;
  font-size: 38px;
  color: #172033;
}

.section-heading p {
  color: #666;
  font-size: 16px;
}

.products-grid {
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.product-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,.08);
  transition: .3s ease;
  border: 1px solid #eee;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0,0,0,.14);
}

.product-image {
  height: 270px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 22px;
}

.product-info h3 {
  margin: 0 0 10px;
  color: #172033;
  font-size: 21px;
}

.product-info p {
  color: #666;
  line-height: 1.6;
  min-height: 75px;
}

.enquiry-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 12px 22px;
  background: #e32620;
  color: #fff;
  text-decoration: none;
  border-radius: 7px;
  font-weight: 700;
  transition: .25s;
}

.enquiry-btn:hover {
  background: #b91510;
  transform: translateY(-2px);
}


/* Mobile */
@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .products-section {
    padding: 55px 5%;
  }

  .section-heading h2 {
    font-size: 30px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 250px;
  }
}

</style>
