import React from 'react';
import Balloon from '../assets/svg-picture/balloon.svg';

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