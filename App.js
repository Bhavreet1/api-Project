const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";
// let rl=fetch(a);https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");

let dropdown = document.querySelectorAll(".innerDiv select")
for (let select of dropdown) {
    for (const key in countryList) {
        const element = countryList[key];
        // console.log(key,element);
        let newOption = document.createElement("option");
        newOption.value = key;
        newOption.innerText = key;
        if (key == "USD") {
            newOption.selected = 1;
        }
        select.appendChild(newOption);


    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        // console.log(evt.target.name)
        // flag1.src=
    })
}
function updateFlag(element) {
    let urlEdit = countryList[element.value];
    let name = (element.name);
    if (name == "from") {
        let flag = document.querySelector(".select-container img");
        flag.src = `https://flagsapi.com/${urlEdit}/flat/64.png`;
    }
    if (name == "to") {
        let flag = document.querySelector(".select-container2 img");
        flag.src = `https://flagsapi.com/${urlEdit}/flat/64.png`;
    }

}

let btn = document.querySelector(".cent div");
btn.addEventListener("click", async () => {
    let amount = document.querySelector(".t1");
    console.log(amount.value);
    if (amount.value === "" || amount.value < 0) {
        amount.value = 1;
    }
    let link1 = fromCurr.value.toLowerCase();
    let link2 = toCurr.value.toLowerCase();
    const URL = `${BASE_URL}${link1}.json`;
    try {
        let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let rate = (data[link1])[link2];
    let text = document.querySelector(".textp");
    text.innerText = `1 ${fromCurr.value}= ${rate} ${toCurr.value}  ( Data till ${data.date})`;
    let text2 = document.querySelector(".textp1");
    text2.innerHTML = amount.value * rate;
    } catch (error) {
        console.error(error);
    }
    
    
});
