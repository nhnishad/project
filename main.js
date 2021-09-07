"use strict";

const menuIcon = document.querySelector("#menu_bar_icon");
const header = document.querySelector("header");
const fullLi = document.querySelectorAll("#full_menu ul li");
menuIcon.addEventListener('click', () => {
  header.classList.toggle('wide');
  menuIcon.querySelector('i').classList.toggle('fa-times');
});
fullLi.forEach(e => {
  e.addEventListener('click', () => {
    setTimeout(() => {
      header.classList.toggle('wide');
      menuIcon.querySelector('i').classList.toggle('fa-times');
    }, 300);
  });
});
/*=============Progress Bar ===========*/

const portfolio = document.querySelector('#portfolio');
const progressBar = document.querySelectorAll('.progress_bar p');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
};

let callback = e => {
  e.forEach(entry => {
    if (entry.target.id == "portfolio") {
      progressBar.forEach(p => {
        p.classList.add('anim');
      });
    }
  });
};

let ovserver = new IntersectionObserver(callback, options);
ovserver.observe(portfolio);
/*============= Contact Form ===========*/

const xhr = new XMLHttpRequest();
const contactName = document.querySelector('#contact_form #name');
const contactEmail = document.querySelector('#contact_form #email');
const contactSubject = document.querySelector('#contact_form #subject');
const contactMessage = document.querySelector('#contact_form #message');
const contactSubmit = document.querySelector('#contact_form #submit');
const msg = document.querySelector('#msg');
contactSubmit.addEventListener('click', e => {
  e.preventDefault();
  const name = contactName.value,
    email = contactEmail.value,
    subject = contactSubject.value,
    message = contactMessage.value;
  msg.classList.add('loader');
  const dataString = `name=${name}&email=${email}&subject=${subject}&message=${message}`;
  xhr.open('POST', 'https://imtamjidahmed.000webhostapp.com/mail/mail.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  xhr.send(dataString);
  setTimeout(() => {
    msg.classList.remove('loader');
    msg.innerHTML = "Message Sent Successfully";
  }, 2000);
  setTimeout(() => {
    msg.classList.remove('loader');
    msg.innerHTML = "";
  }, 5000);
});