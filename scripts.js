{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const startButton = document.getElementById('startButton');\
const countUpDisplay = document.getElementById('countUp');\
const countDownDisplay = document.getElementById('countDown');\
\
let countUpSeconds = 0;\
let countDownSeconds = 70 * 365 * 24 * 60 * 60; // Approximate seconds in 70 years. Doesn't account for leap years.\
\
startButton.addEventListener('click', function() \{\
    setInterval(updateCountUp, 1000);\
    setInterval(updateCountDown, 1000);\
\});\
\
function updateCountUp() \{\
    countUpSeconds++;\
    countUpDisplay.textContent = new Date(countUpSeconds * 1000).toISOString().substr(11, 8);\
\}\
\
function updateCountDown() \{\
    countDownSeconds--;\
    let days = Math.floor(countDownSeconds / (24 * 60 * 60));\
    let hours = new Date(countDownSeconds * 1000).toISOString().substr(11, 2);\
    let minutes = new Date(countDownSeconds * 1000).toISOString().substr(14, 2);\
    let seconds = new Date(countDownSeconds * 1000).toISOString().substr(17, 2);\
    countDownDisplay.textContent = `$\{days\}:$\{hours\}:$\{minutes\}:$\{seconds\}`;\
\}\
}