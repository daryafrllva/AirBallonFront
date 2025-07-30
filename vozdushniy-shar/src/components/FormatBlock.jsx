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
                        <div className="format-card format-card--balloon1">
                            <div className="format-card__content">
                                <h3>Свободные полеты</h3>
                                <p>
                                    Классический полёт на воздушном шаре продолжительностью 1 час
                                </p>
                            </div>
                        </div>

                        {/* Карточка 2 */}
                        <div className="format-card format-card--balloon2">
                            <div className="format-card__content">
                                <h3>Групповые полёты</h3>
                                <p>
                                    Особый полёт для влюблённых пар с шампанским и фотографом
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Второй ряд */}
                    <div className="format-block__row">
                        {/* Карточка 3 */}
                        <div className="format-card format-card--balloon3">
                            <div className="format-card__content">
                                <h3>Утренние полеты на рассвете</h3>
                                <p>
                                    Высокий полёт с элементами экстрима для любителей острых ощущений
                                </p>
                            </div>
                        </div>

                        {/* Карточка 4 */}
                        <div className="format-card format-card--balloon4">
                            <div className="format-card__content">
                                <h3>Романтические полеты для пар</h3>
                                <p>
                                    Безопасный полёт для всей семьи с профессиональным пилотом
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Третий ряд */}
                    <div className="format-block__row">
                        {/* Карточка 5 */}
                        <div className="format-card format-card--balloon5">
                            <div className="format-card__content">
                                <h3>Фотосессия с воздушным шаром</h3>
                                <p>
                                    Высокий полёт с элементами экстрима для любителей острых ощущений
                                </p>
                            </div>
                        </div>

                        {/* Карточка 6 */}
                        <div className="format-card format-card--balloon6">
                            <div className="format-card__content">
                                <h3>Свадьба на воздушном шаре</h3>
                                <p>
                                    Безопасный полёт для всей семьи с профессиональным пилотом
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Четвёртый ряд */}
                    <div className="format-block__row">
                        {/* Карточка 7 */}
                        <div className="format-card format-card--balloon7">
                            <div className="format-card__content">
                                <h3>Подарочные сертификаты</h3>
                                <p>
                                    Высокий полёт с элементами экстрима для любителей острых ощущений
                                </p>
                            </div>
                        </div>

                        {/* Карточка 8*/}
                        <div className="format-card format-card--balloon8">
                            <div className="format-card__content">
                                <h3>Предложение руки и сердца</h3>
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