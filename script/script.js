'use strict'

const prevDef = document.querySelectorAll('.prevent-default');

prevDef.forEach(el => {
    el.addEventListener('click', e => e.preventDefault());
});