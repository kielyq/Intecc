const content = {
    content1: {
        title: 'Что нужно, чтобы начать работу с future technologies company (ftc)?',
        text: 'Для начала работы с FTC необходимо зарегистрироваться на сайте, пройти процесс верификации и внести начальный депозит.'
    },
    content2: {
        title: 'Могу ли я не заработать, инвестируя с future technologies company (ftc)?',
        text: 'Как и в любом инвестиционном процессе, всегда существует риск потери средств. Рекомендуем тщательно оценивать риски перед вложениями.'
    },
    content3: {
        title: 'Какая минимальная и максимальная сумма депозита?',
        text: 'Минимальный размер депозита — 100 рублей. \</br>  Максимальный размер депозита — 80 000 000 рублей.'
    }
};

function showContent(contentId) {
    const faqContent = document.getElementById('faq-content');
    faqContent.innerHTML = `
        <h2>${content[contentId].title}</h2>
        <div class="faq-line"></div>
        <p>${content[contentId].text}</p>
    `;
}