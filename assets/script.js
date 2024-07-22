
function activeTab() {
    const headers = document.querySelectorAll('.js-tabHeader span');
    const contents = document.querySelectorAll('.js-content div');
    const activeFirst = headers[0] && contents[0];
    activeFirst.classList.add('active')

    if (headers && contents) {
        headers[0].classList.add('active');

        function activeContent(index) {
            contents.forEach((div) => {
                div.classList.remove('active')
            });
            headers.forEach((div) => {
                div.classList.remove('active')
            });
            headers[index].classList.add('active')
            contents[index].classList.add('active');
        }

        headers.forEach((content, index) => {
            content.addEventListener('click', () => {
                activeContent(index)
            })
        })
    }
}
activeTab();

function scrollAnimation() {
    const sectionLeft = document.querySelectorAll('.anima-left');
    const sectionRight = document.querySelectorAll('.anima-right')
    const fadeLeft = document.querySelectorAll('.fade-right');
    const fadeRight = document.querySelectorAll('.fade-left');
    const sections = [...sectionLeft, ...sectionRight, ...fadeLeft, ...fadeRight];

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.8;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isVisible = (sectionTop - windowMetade) < 0;

                if (isVisible) {
                    section.classList.add("ativo");

                } else {
                    section.classList.remove("ativo")
                }
            })
        }
        window.addEventListener('scroll', animaScroll);

        document.addEventListener('DOMContentLoaded', () => {
            animaScroll();
        });
    }
}
scrollAnimation();

function sendMessage() {
    let phoneNumber = '5567996054127';
    let message = document.getElementById("message").value;
    let encodeMsg = encodeURIComponent(message);
    let url = `https://wa.me/${phoneNumber}?text=${encodeMsg}`;
    window.open(url, '_blank');
}

/**chat btn */
document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none';
  });
  
  // Função para mostrar a caixa de conversa após 2 segundos
  window.onload = function() {
    setTimeout(function() {
        document.getElementById('chat-box').style.display = 'flex';
    }, 2000);
  };