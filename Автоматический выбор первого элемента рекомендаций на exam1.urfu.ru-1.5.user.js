// ==UserScript==
// @name         Универсальный скрипт
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Скрипт, который работает на всех сайтах
// @author       Ваше имя
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Скрипт запущен!');

    // Функция для выбора первого элемента
    function selectFirstItemLabel() {
        const syncshareCm = document.querySelector('.syncshare-cm');
        if (syncshareCm) {
            const subMenu = syncshareCm.querySelector('.sub-menu');
            if (subMenu) {
                const firstItemLabel = subMenu.querySelector('.menu-item .item-label');
                if (firstItemLabel) {
                    firstItemLabel.click(); // Кликаем на первый элемент
                    console.log('Первый элемент с классом item-label выбран автоматически!');
                } else {
                    console.log('Элемент с классом item-label не найден.');
                }
            } else {
                console.log('Элемент с классом sub-menu не найден.');
            }
        } else {
            console.log('Элемент с классом syncshare-cm не найден.');
        }
    }

    // Создаём наблюдатель
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                // Если добавлены новые элементы, запускаем функцию
                selectFirstItemLabel();
            }
        });
    });

    // Начинаем наблюдение за изменениями в DOM
    observer.observe(document.body, { childList: true, subtree: true });

    // Также запускаем функцию сразу после загрузки страницы
    window.addEventListener('load', selectFirstItemLabel);
})();
