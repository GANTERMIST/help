// ==UserScript==
// @name         Автоматический выбор первого элемента рекомендаций на exam1.urfu.ru
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Автоматически выбирает первый элемент из списка рекомендаций на сайте exam1.urfu.ru
// @author       Ваше имя
// @match        exam1.urfu.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Функция для выбора первого элемента рекомендаций
    function selectFirstRecommendation() {
        // Ищем список рекомендаций
        const recommendationList = document.querySelector('.syncshare-cm .sub-menu'); // Замените на реальный селектор
        if (recommendationList) {
            // Ищем первый элемент в списке
            const firstRecommendation = recommendationList.querySelector('.menu-item');
            if (firstRecommendation) {
                firstRecommendation.click(); // Автоматически нажимаем на первый элемент
                console.log('Первый элемент рекомендаций выбран автоматически!');
            } else {
                console.log('Первый элемент рекомендаций не найден.');
            }
        } else {
            console.log('Список рекомендаций не найден.');
        }
    }

    // Запуск функции после загрузки страницы
    window.addEventListener('load', selectFirstRecommendation);

    // Если список рекомендаций загружается динамически, используем MutationObserver
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                selectFirstRecommendation();
            }
        });
    });

    // Наблюдаем за изменениями в DOM
    observer.observe(document.body, { childList: true, subtree: true });
})();