import React from "react";
import logo from "/public/img/secondary.png";
import Image from "next/image";
const ServiceTwo = () => {
  return (
    <div>
      <section class="popup_sidebar_sec absolute top-0 left-0 right-0">
        <div
          style={{ cursor: "url(img/close-sider.png), auto" }}
          class="popup_sidebar_overlay fixed -right-[100%] top-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-[99] transition-all duration-400 ease-in delay-800 "
        ></div>
        <div class="widget_area">
          <a href="javascript:void(0);" class="widget_closer">
            <i class="nss-times2"></i>
          </a>
          <div class="center_align">
            <div class="about_widget_area">
              <div class="wd_logo">
                <a href="index.html">
                  <Image src={logo} alt="Logo" />
                </a>
              </div>
              <p>
                Graptor quisque placerat vitae lacus ut scelerisque. Fusce
                luctus odio ac nibh luctus, in porttitor theo lacus egestas
                etiusto odio data center.
              </p>
              <div class="icon-box-3">
                <div class="ib-icon">
                  <i class="nss-phone-volume2"></i>
                </div>
                <h5>Call Us</h5>
                <p>
                  <a href="tel:1.800.321.9876">1.800.321.9876</a>
                </p>
              </div>
              <div class="icon-box-3">
                <div class="ib-icon">
                  <i class="graptor-email"></i>
                </div>
                <h5>Write us</h5>
                <p>
                  <a href="mailto:contact@website.com">contact@website.com</a>
                </p>
              </div>
              <div class="icon-box-3">
                <div class="ib-icon">
                  <i class="graptor-address"></i>
                </div>
                <h5>Address</h5>
                <p>2416 Mapleview Drive Tampa, FL 33634</p>
              </div>
              <ul class="social_item">
                <li>
                  <a href="https://www.facebook.com/" class="fac">
                    <i class="nss-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" class="twi">
                    <i class="nss-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com/" class="goo">
                    <i class="nss-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/" class="dri">
                    <i class="nss-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTwo;
