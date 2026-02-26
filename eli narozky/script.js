const jmeno = "Elinko";

const questions = [
    {
        question: "🎈 Kdo napsal první zprávu?",
        answers: ["Já(Elinka)", "Ty(Filí)", "Tvoje(Fildovo) mamka"],
        correct: [0]
    },
    {
        question: "🍣 Jaké je naše oblíbené jídlo?",
        answers: ["Pizza", "Sushi", "Burger"],
        correct: [1]
    },
    {
        question: "🎂 Kolik ti dnes je?",
        answers: ["17", "18", "67"],
        correct: [0]
    },
    {
        question: "🐎 Jaké je moje (Fildovo) nejoblíbenější zvíře?",
        answers: ["Kůň", "Pavouk", "Velbloud"],
        correct: [2]
    },
    {
        question: "👵 Jak se jmenujou mé(Fildovo) babičky?",
        answers: ["Jana a Eva", "Jana a Blanka", "Eva a Blanka"],
        correct: [1]
    },
    {
        question: "👀 Jakou barvu očí mám(Filda) nejradši?",
        answers: ["Hnědou", "Modrou", "Tvoji"],
        correct: [2]
    },
    {
        question: "🏍️ Jakou značku motorky mám(Filda) nejradši?",
        answers: ["Kawasaki", "Honda", "Nissan"],
        correct: [0]
    },
    {
        question: "💍 Jak dlouho spolu zůstanem?",
        answers: ["Nadosmrti", "Do konce života", "Nikdy se neopustíme"],
        correct: [0, 1, 2]
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.style.display = "none";
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    answersEl.innerHTML = "";
    const q = questions[currentQuestion];

    questionEl.innerHTML = `
        <div style="font-size:14px; opacity:0.7;">
            Otázka ${currentQuestion + 1} z ${questions.length}
        </div>
        <div style="margin-top:10px;">
            ${q.question}
        </div>
    `;

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersEl.appendChild(button);
    });
}

function selectAnswer(index) {
    if (questions[currentQuestion].correct.includes(index)) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    // pokud máš přidaný confetti script v HTML
    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });
    }

    questionEl.innerHTML = `🎉 Skóre: ${score}/${questions.length} ❤️`;

    answersEl.innerHTML = `
        <p>${jmeno}, jsi ta nejlepší věc, co mě kdy potkala 💕</p>
        <p>Miluju tě 🥰</p>
        <p style="margin-top:15px; font-size:14px; line-height:1.5;">
            Doufám, že si užiješ své narozeniny naplno ❤️
        </p>
        <p>A upřímně si myslím, že nás nic a nikdo nerozdělí.
Moje láska k tobě je větší než hádky nebo pochyby
a cítím, že ty to máš stejně. Je zvláštní si představit
že bych mochl mít život bez tebe, naštěstí to pán Bůh
zařídil tak, abychom se mohli každý víkend obímat
a pusinkovat. Já prostě miluju když mě hodně pusinkujes.
Prostě mi přijde že my jsme osudový pár a máme předurčené
spolu žít "štastně až do smrti". Mé veliké přání je
procestovat celý svět ale s tebou bo jinak by to stálo
za starou bačkoru. Až budem velcí, tak budem jezdit
na koni a na to se strašně těším. Těším se na všecny 
chvíle které strávíme společně. Naši svatbu, neše toulky
a i naše koukání na filmečky a papání. Těším se až si budem
navzájem vařit a až se budem společně potit a potom fotit
ve fitku. Doufám že si užiješ své sedmnácté narozeniny 
plnými doušky. S láskou Tvůj Filí.
</p>
        <button onclick="location.reload()">Zkusit znovu</button>
    `;
}