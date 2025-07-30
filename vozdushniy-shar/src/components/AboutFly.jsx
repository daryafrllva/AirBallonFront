import React from 'react';
import Balloon from '../assets/svg-picture/balloon.svg';
import BalloonMini1 from '../assets/svg-picture/baloonMini1.svg';
import BalloonMini2 from '../assets/svg-picture/balloonMini2.svg';
import BalloonMini3 from '../assets/svg-picture/balloonMini3.svg';
import BalloonMini4 from '../assets/svg-picture/balloonMini4.svg';

function AboutFly() {
    return (
        <div className="about-block">
            <div className='about-block__main'>
                <div className='about-block__balloon'>
                    <img
                        src={Balloon}
                        alt='Воздушный шар'
                        className='about-block__balloon-img'
                    />
                    <img
                        src={BalloonMini1}
                        alt='Воздушный шар маленький'
                        className='about-block__balloon-img1'
                    />
                    <img
                        src={BalloonMini2}
                        alt='Воздушный шар маленький'
                        className='about-block__balloon-img2'
                    />
                    <img
                        src={BalloonMini3}
                        alt='Воздушный шар маленький'
                        className='about-block__balloon-img3'
                    />
                    <img
                        src={BalloonMini4}
                        alt='Воздушный шар маленький'
                        className='about-block__balloon-img4'
                    />
                    <div className='about-block__balloon-txt'>
                        <h1>Воздухоплавание<br/>
                            в Томске</h1>
                        <p>Ты поднимаешься выше земли,<br/>
                            где границы стираются,<br/>
                            а горизонт становится бесконечным.</p>
                        <p>Над миром открывается другой ритм — спокойный,<br/>
                            глубокий, наполненный простором и светом. <br/>
                            Там, где тишина сильнее слов, а каждый миг<br/>
                            наполнен значением, рождается настоящее ощущение свободы.</p>
                        <p>Полет дарит не вид, а чувство — будто<br/>
                            ты впервые смотришь на землю глазами мечты.<br/>
                            Позволь себе увидеть всё иначе — с высоты,<br/>
                            где начинается вдохновение.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFly;