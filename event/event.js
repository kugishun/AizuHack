const baseUrl = "https://us-central1-aizuhack-353413.cloudfunctions.net";
//const eventId = "testID"; /*location.search*/
let eventIndex = 0;

let PostData;

//html item
const pageTitle = document.getElementById("pageTitle");
const EventName = document.getElementById("eventName");

const DateList = document.getElementById("dateList");
const humanTable = document.getElementById("humanTable");
const humans = document.getElementsByClassName("human");

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

getData();
