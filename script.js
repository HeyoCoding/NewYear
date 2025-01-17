document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("fortuneForm");
    const resultDiv = document.getElementById("result");
    const formContainer = document.getElementById("form-container");
    const resultContainer = document.getElementById("result-container");
    const restartButton = document.getElementById("restartButton");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const year = parseInt(document.getElementById("year").value, 10);
        const month = parseInt(document.getElementById("month").value, 10);
        const day = parseInt(document.getElementById("day").value, 10);

        if (!isValidDate(year, month, day)) {
            resultDiv.innerHTML = "<p>존재하지 않는 날짜입니다. 다시 입력해주세요.</p>";
            return;
        }

        const zodiac = calculateZodiac(year);
        const fortune = calculateFortuneByDate(day, month);

        resultDiv.innerHTML = `<p>띠: ${zodiac}</p><p>${fortune}</p>`;

        // 입력창 숨기고 결과창 표시
        formContainer.style.display = "none";
        resultContainer.style.display = "block";
    });

    restartButton.addEventListener("click", () => {
        // 결과창 숨기고 입력창 다시 표시
        resultContainer.style.display = "none";
        formContainer.style.display = "block";

        // 입력값 초기화
        form.reset();
    });

    function isValidDate(year, month, day) {
        const date = new Date(year, month - 1, day);
        return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
    }

    function calculateZodiac(year) {
        const zodiacs = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"];
        return zodiacs[year % 12];
    }

    function calculateFortuneByDate(day, month) {
        if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
            return "새로운 도전이 성공으로 이어질 것입니다.";
        } else if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
            return "주변 사람들과의 관계가 좋아질 것입니다.";
        } else if ((month === 2 && day >= 20) || (month === 3 && day <= 20)) {
            return "큰 성취를 이룰 수 있는 기회가 찾아옵니다.";
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
            return "새로운 취미나 관심사를 발견할 수 있습니다.";
        } else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
            return "재정적으로 안정적인 시기가 될 것입니다.";
        } else if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) {
            return "건강에 특별히 유의해야 할 시기입니다.";
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            return "가족과의 시간이 큰 기쁨을 가져다 줄 것입니다.";
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            return "창의력이 빛을 발하는 한 해가 될 것입니다.";
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 23)) {
            return "꾸준한 노력이 결실을 맺을 것입니다.";
        } else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
            return "사회적 활동에서 좋은 평판을 얻을 것입니다.";
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
            return "감정적으로 풍요로운 시기를 맞이할 것입니다.";
        } else {
            return "자신의 목표를 재정비할 좋은 시기입니다.";
        }
    }
});
