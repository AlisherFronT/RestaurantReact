import React from 'react';
import {AiFillFacebook,AiFillTwitterSquare,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Map = () => {
    return (
        <section className="map">
            <div className="container">
                <div className="map__contacts">
                    <h2 className="map__title">
                        КОНТАКТЫ
                    </h2>
                    <div className="map__info">
                        <div className="map__info-address">
                            <span>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M1.23914 9.39123C1.25354 5.15065 4.7029 1.72465 8.94348 1.73906C13.1841 1.75347 16.6101 5.20282 16.5957 9.44341V9.53036C16.5435 12.2869 15.0044 14.8347 13.1174 16.826C12.0382 17.9466 10.8331 18.9387 9.52609 19.7825C9.1766 20.0848 8.6582 20.0848 8.3087 19.7825C6.3602 18.5143 4.65007 16.9131 3.25653 15.0521C2.01449 13.4293 1.3093 11.4597 1.23914 9.41732L1.23914 9.39123Z"
      stroke="#6D9C74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="8.91741" cy="9.53899" r="2.46087" stroke="#6D9C74" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>

                            </span>
                            <p className="map__info-street">
                                <span className="map__info-dot">
                                     Наш адрес:
                                </span>
                                МО, городской округ Красногорск, село Ильинкое,
                                Экспериментальная улица, 10
                            </p>
                        </div>
                        <div className="map__info-address">
                              <span>
<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2677 7.06104L12.0023 10.4953C11.1951 11.1282 10.0635 11.1282 9.25628 10.4953L4.95422 7.06104"
      stroke="#6D9C74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M5.88787 1.5H15.3158C16.6752 1.51525 17.969 2.08993 18.896 3.0902C19.823 4.09048 20.3022 5.42903 20.222 6.79412V13.322C20.3022 14.6871 19.823 16.0256 18.896 17.0259C17.969 18.0262 16.6752 18.6009 15.3158 18.6161H5.88787C2.96796 18.6161 1 16.2407 1 13.322V6.79412C1 3.87545 2.96796 1.5 5.88787 1.5Z"
      stroke="#6D9C74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </span>
                                <a href="" className="map__info-street">
                                       <span className="map__info-dot">
                                      Наша почта:
                                </span>
                                    auto.wash@gmail.com
                                </a>
                        </div>
                    </div>
                    <div className="map__contact">
                        <button className="map__contact-btn">
                            ЗАБРОНИРОВАТЬ СТОЛ
                        </button>
                        <a href="" className="map__contact-tel">
                            +7 (917) 510-57-59
                            <span className="map__info-dot">Звоните или оставляйте заявку</span>
                        </a>
                    </div>
                    <div className="map__social">
                        <p className="map__social-text">
                            Мы в соц сетях:
                        </p>
                        <a href="" className="map__social-link">
                            <AiFillFacebook size={19}/>
                        </a>
                        <a href="" className="map__social-link">
                            <AiFillTwitterSquare size={19}/>
                        </a>
                        <a href="" className="map__social-link">
                            <AiFillYoutube size={19}/>
                        </a>
                        <a href="" className="map__social-link">
                            <AiFillInstagram size={19}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;