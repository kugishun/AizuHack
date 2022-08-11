const baseUrl = "https://us-central1-aizuhack-353413.cloudfunctions.net";
const nextUrl =
    "https://www.google.com/search?q=%E5%87%BA%E6%AC%A0%E5%85%A5%E5%8A%9B%E3%83%9A%E3%83%BC%E3%82%B8&oq=%E5%87%BA%E6%AC%A0%E5%85%A5%E5%8A%9B%E3%83%9A%E3%83%BC%E3%82%B8&aqs=chrome..69i57j0i546l5.10373j0j15&sourceid=chrome&ie=UTF-8";
let eventId = "testID"; /*location.search*/
let eventIndex = 0;

let PostData;

//html item
const pageTitle = document.getElementById("pageTitle");
const EventName = document.getElementById("eventName");

const DateList = document.getElementById("dateList");
const humanTable = document.getElementById("humanTable");
const humans = document.getElementsByClassName("human");

const inputButton = document.getElementById("addButton");

function getData() {
    //const res = fetch(baseUrl + "/Data?collection=team03_events&id=" + eventId);
    //PostData = res.json();
    const Get = fetch(baseUrl + "/Data?collection=team03_events_v2", {
        method: "GET"
    });

    const trans = Get.then((data) => {
        return data.json();
    });

    trans.then((body) => {
        PostData = body;
        console.log("a");
        console.log(PostData);
        console.log(PostData[eventIndex].eventName);

        eventIndex = EventSearch();

        PostDisplay();
    });
}

function PostDisplay() {
    pageTitle.innerHTML = PostData[eventIndex].eventName;
    EventName.innerHTML = PostData[eventIndex].eventName;

    //日付を表示、追加
    for (let i = 0; i < PostData[eventIndex].dateList.length; i++) {
        let date = document.createElement("div");
        date.className = "date";
        date.textContent = PostData[eventIndex].dateList[i].date;
        DateList.appendChild(date);
    }

    //console.log(humans[0]);
    //console.log(PostData.dateList[0].userList[0].status);

    //人stateを表示、追加
    for (let i = 0; i < PostData[eventIndex].dateList[0].userList.length; i++) {
        let human = document.createElement("div");
        human.className = "human";
        humanTable.appendChild(human);
        let humanName = document.createElement("div");
        humanName.textContent = PostData[eventIndex].dateList[0].userList[i].name;
        humans[i].appendChild(humanName);
        for (let j = 0; j < PostData[eventIndex].dateList.length; j++) {
            let state = document.createElement("div");
            state.className = "center_center";
            state.textContent = stateC(
                PostData[eventIndex].dateList[j].userList[i].status
            );
            humans[i].appendChild(state);
        }
    }
}

function stateC(STA) {
    if (STA === "OK") return "○";
    if (STA === "NG") return "×";
    if (STA === "WARN") return "△";
}

function EventSearch() {
    for (let i = 0; i < PostData.length; i++) {
        if (eventId === PostData[i].eventID) {
            console.log(i);
            return i;
        }
    }
}

getData();

inputButton.addEventListener("click", function () {
    window.location.href = nextUrl;
});
