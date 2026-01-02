window.addEventListener('load', () => {
    history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, behavior: 'auto' });

    const header = document.querySelector('header');
    const mainSections = document.querySelectorAll('main section');

    // Apply padding based on the header height
    const setPadding = () => {
        mainSections.forEach(sec => {
            const value = header.offsetHeight + 40;
            sec.style.paddingTop = `${value}px`;
        });
    };

    setPadding();
    window.addEventListener('resize', setPadding);

    // header underline
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navLink");

    const observerOptions = {
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // About Me typing effect + slide effect
    const typingEeffct = document.querySelector(".typing");
    const originalHTML = typingEeffct.innerHTML;

    const lines = originalHTML.split("<br>");

    typingEeffct.innerHTML = "";

    let lineIndex = 0;
    let charIndex = 0;

    function typing() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex].trim();

            if (charIndex < line.length) {
                typingEeffct.innerHTML += line[charIndex];
                charIndex++;
            } else {
                if (lineIndex < lines.length - 1) {
                    typingEeffct.innerHTML += "<br>";
                }
                lineIndex++;
                charIndex = 0;
            }
        } else {
            clearInterval(typingInterval);
        }
    }

    const typingInterval = setInterval(typing, 80);

// project imgBox overlay
const imgbox = document.querySelectorAll(".imgBox");
const overlay = document.querySelectorAll(".overlay");

imgbox.forEach((img, index) => {
    img.addEventListener("mouseover", () => {
        overlay[index].style.opacity = "1";
    });

    img.addEventListener("mouseout", () => {
        overlay[index].style.opacity = "0";
    });
});

// Skills effect
const spans = document.querySelectorAll(".skillList .skillWrap span");

const descriptions = [
    "시멘틱 마크업으로 구조를 설계하고 접근성을 고려해 작성합니다.",
    "유지보수를 고려한 구조로 스타일을 구성합니다.",
    "DOM 조작과 이벤트 기반 인터랙션을 구현합니다.",
    "jQuery를 활용한 간단한 UI 인터랙션 구현이 가능합니다.",
    "다양한 해상도에 대응하는 반응형 웹을 구현합니다.",
    "웹 접근성을 고려한 마크업과 UI 구현을 지향합니다.",
    "웹 표준을 준수한 마크업을 작성합니다.",
    "이미지 보정 및 간단한 작업이 가능합니다.",
    "벡터 기반 그래픽 수정이 가능합니다."
];

spans.forEach((span, index) => {
    const skillWrap = span.closest(".skillWrap");
    const bar = skillWrap.querySelector(".bar");

    span.addEventListener("mouseenter", () => {
        bar.textContent = descriptions[index];
        bar.classList.add("active");
    });

    span.addEventListener("mouseleave", () => {
        bar.textContent = "";
        bar.classList.remove("active");
    });
});


});
