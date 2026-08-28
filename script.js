/* =====================================
   DYNAMIC RAKSHA BANDHAN WISHES
===================================== */

const wishes = [

    "बहिणीच्या हाताने बांधलेली राखी आणि भावाच्या मनात जपलेलं प्रेम... यापेक्षा सुंदर नातं दुसरं कोणतं? ❤️",

    "लहानपणी कितीही भांडलो तरी मोठं झाल्यावर एकमेकांची काळजी घेणं कधीच थांबत नाही. हेच तर भाऊ-बहिणीचं नातं! 🎀",

    "तुझ्याशी भांडण्यासाठी हजार कारणं असतील, पण तुझी साथ सोडण्यासाठी एकही कारण नाही. ❤️",

    "बहिणीच्या राखीत फक्त रेशीम नसतं... त्यात बालपण, आठवणी, प्रेम आणि भावासाठीची मनापासूनची प्रार्थना असते. 🎀",

    "आज राखी बांधताना एवढंच सांगायचं आहे — आयुष्य कुठेही घेऊन जाऊ दे, पण आपलं हे नातं कधीच बदलू नये. ❤️",

    "भाऊ म्हणजे गरज पडली की चिडवणारा, भांडणारा... पण संकटात सगळ्यात आधी सोबत उभा राहणारा! रक्षाबंधनाच्या शुभेच्छा! 💖",

    "बहिण म्हणजे कधी आईसारखी काळजी घेणारी, कधी मित्रासारखी साथ देणारी आणि कधी डोकं खाणारी... पण शेवटी सगळ्यात खास! 😄❤️",

    "आपली बालपणीची भांडणं आज आठवली की हसू येतं... कारण त्या भांडणांपेक्षा आपलं प्रेम नेहमीच मोठं होतं. 🎀❤️"

];


function changeWish() {

    const wish =
        document.getElementById("dynamicWish");

    const random =
        Math.floor(
            Math.random() * wishes.length
        );


    wish.style.opacity = "0";

    wish.style.transform =
        "translateY(10px)";


    setTimeout(() => {

        wish.innerText =
            wishes[random];

        wish.style.opacity = "1";

        wish.style.transform =
            "translateY(0)";

    }, 300);

}


/* =====================================
   HERO SPECIAL MESSAGE
===================================== */

function showRakhiMessage() {

    alert(
        "🎀 खास संदेश ❤️\n\n" +

        "राखीच्या या सुंदर दिवशी\n" +

        "आपल्या सगळ्या भांडणांना,\n" +

        "मस्करीला आणि बालपणीच्या आठवणींना\n" +

        "एकदा पुन्हा आठवूया.\n\n" +

        "तू माझ्यासाठी नेहमीच खास आहेस! ❤️\n\n" +

        "रक्षाबंधनाच्या मनापासून शुभेच्छा! 🎀"
    );

}


/* =====================================
   CELEBRATION EFFECT
===================================== */

function celebrateRakhi() {

    const container =
        document.getElementById(
            "celebration"
        );


    const emojis = [

        "❤️",
        "💖",
        "🎀",
        "🌸",
        "✨",
        "🎉",
        "💜",
        "🌷",
        "🥰"

    ];


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "confetti";


        item.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        item.style.left =
            Math.random() *
            100 +
            "vw";


        item.style.animationDuration =
            2 +
            Math.random() * 3 +
            "s";


        item.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        container.appendChild(item);


        setTimeout(() => {

            item.remove();

        }, 5500);

    }


    setTimeout(() => {

        alert(
            "🎉 रक्षाबंधनाच्या हार्दिक शुभेच्छा! ❤️\n\n" +
            "भाऊ-बहिणीचं प्रेम असंच कायम राहो! 🎀"
        );

    }, 500);

}


/* =====================================
   NAVBAR ACTIVE EFFECT
===================================== */

const links =
    document.querySelectorAll(
        ".nav-links a"
    );


links.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            links.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

            this.classList.add(
                "active"
            );

        }
    );

});