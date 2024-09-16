let numberValues = document.querySelectorAll(".hero__number");
const firstNumberValue = numberValues[0];
const secoundNumberValue = numberValues[1];
const lastNumberValue = numberValues[2];

let interval = 2000



const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            numberValues.forEach((numberValue) => {
                let startValue = 1
                let endValue = parseInt(numberValue.getAttribute("data-val"))
                let duration = Math.floor(interval / endValue)
                let counter = setInterval(function () {
                    startValue += 1
                    numberValue.textContent = startValue
                    if (startValue == endValue) {
                        clearInterval(counter)
                        numberValue.textContent = endValue
                        lastNumberValue.textContent = "20k+"
                        firstNumberValue.textContent = "12+"
                        secoundNumberValue.textContent = "18k+"
                    }
                    counterObserver.unobserve(numberValue);
                }, duration)
            })
        }
    })
})
counterObserver.observe(lastNumberValue)
