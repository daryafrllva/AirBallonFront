import React from 'react';


function FormatBlock() {
    return (
        <div className="format-block">
            <div className='format-block__container'>
                <h1 className="format-block__title">Выбирайте предпочитаемый формат полёта</h1>
                <div className="format-block__cards">
                    {/* Первый ряд */}
                    <div className="format-block__row">
                        {/* Карточка 1 */}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../assets/images/balloon1.png')" }}
                        >
                            <div className="format-card__content">
                                <h3>Свободные полеты</h3>
                                <p>
                                    Классический полёт на воздушном шаре продолжительностью 1 час
                                </p>
                            </div>
                        </div>

                        {/* Карточка 2 */}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../assets/images/balloon2.png')" }}
                        >
                            <div className="format-card__content">
                                <h3>Групповые полётыт</h3>
                                <p>
                                    Особый полёт для влюблённых пар с шампанским и фотографом
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Второй ряд */}
                    <div className="format-block__row">
                        {/* Карточка 3 */}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../../assets/images/balloon3.png')" }}
                        >
                            <div className="format-card__content">
                                <h3>Утренние полеты на
                                    рассвете</h3>
                                <p>
                                    Высокий полёт с элементами экстрима для любителей острых ощущений
                                </p>
                            </div>
                        </div>

                        {/* Карточка 4 */}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../../assets/images/balloon4.png')" }}
                        >
                            <div className="format-card__content">
                                <h3>Романтические
                                    полеты для пар</h3>
                                <p>
                                    Безопасный полёт для всей семьи с профессиональным пилотом
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Третий ряд */}
                    <div className="format-block__row">
                        {/* Карточка 5 */}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../../assets/images/balloon3.jpg')" }}
                        >
                            <div className="format-card__content">
                                <h3>Фотоссесия с
                                    воздушным шаром</h3>
                                <p>
                                    Высокий полёт с элементами экстрима для любителей острых ощущений
                                </p>
                            </div>
                        </div>

                        {/* Карточка 6 */}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../../assets/images/balloon4.jpg')" }}
                        >
                            <div className="format-card__content">
                                <h3>Свадьба
                                    на воздушном шаре</h3>
                                <p>
                                    Безопасный полёт для всей семьи с профессиональным пилотом
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Третий ряд */}
                    <div className="format-block__row">
                        {/* Карточка 7 */}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../../assets/images/balloon3.jpg')" }}
                        >
                            <div className="format-card__content">
                                <h3>Подарочные сертификаты</h3>
                                <p>
                                    Высокий полёт с элементами экстрима для любителей острых ощущений
                                </p>
                            </div>
                        </div>

                        {/* Карточка 8*/}
                        <div
                            className="format-card"
                            style={{ backgroundImage: "url('../../assets/images/balloon4.jpg')" }}
                        >
                            <div className="format-card__content">
                                <h3>Предложение
                                    руки и сердца</h3>
                                <p>
                                    Безопасный полёт для всей семьи с профессиональным пилотом
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default FormatBlock;