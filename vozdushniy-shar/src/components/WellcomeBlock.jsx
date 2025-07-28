import React from 'react';
import Logo from '../assets/svg-picture/logo.svg';
import Down from '../assets/svg-picture/down.svg';

function WellcomeBlock() {
    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="wellcome-block">
            <div className='wellcome-block__main'>
                <div className='wellcome-block__logo'>
                    <img
                        src={Logo}
                        alt='logo'
                        className='wellcome-block__logo-img'
                    />
                </div>
                <div className='wellcome-block__content'>
                    <h1>Яркие полёты на воздушном шаре</h1>
                    <p>Полеты на воздушном шаре <br/>в Томске</p>
                    <p>+7 903 955-20-61</p>
                </div>
            </div>
            <div className='wellcome-block__down' onClick={handleScrollDown}>
                <img
                    src={Down}
                    alt='scroll down'
                    className='wellcome-block__down-img'
                />
            </div>
        </div>
    );
}

export default WellcomeBlock;