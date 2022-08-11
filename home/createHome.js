//import { createHash } from "crypto";
//const { createHash } = require(`crypto`);
const baseUrl = "https://us-central1-aizuhack-353413.cloudfunctions.net";
const nextUrl = "https://codesandbox.io/s/nittei-jpmyi9";

//html item
const EventName = document.getElementById("inputName");
const Dates = document.getElementsByClassName("inputDate");
const DateList = document.getElementById("DateList");

const InputFrame = document.getElementsByClassName("inputDate");
const addDate = document.getElementById("addDateButton");
const rmDate = document.getElementById("rmDateButton");
const DoPost = document.getElementById("addButton");

let PostData;
let EventNameText;
let dateList = [];

function addEvent() {
    EventNameText = EventName.value;
    for (let i = 0; i < Dates.length; i++) {
        console.log(Dates[i].value);
        dateList[i] = {
            date: Dates[i].value,
            userList: []
        };
    }
    PostData = {
        eventID: createID(),
        eventName: EventNameText,
        dateList: dateList
    };

    console.log(PostData);
    post(PostData);
}

function post(postTemplate) {
    fetch(baseUrl + "/Data?collection=team03_events_v2", {
        method: "POST",
        body: JSON.stringify(postTemplate)
    })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
        });
    console.log("post!!");
}

function addInputFrame() {
    let frame = document.createElement("input");
    frame.type = "text";
    frame.className = "inputDate";
    DateList.appendChild(frame);
    //console.log(DateList);
}

function rmInputFrame() {
    if (InputFrame.length > 1) {
        InputFrame[InputFrame.length - 1].remove();
    }
}

function createID() {
    //return createHash('sha256').update(str).digest('hex');
    let nowDate = new Date().getTime();
    return String(nowDate);
}

DoPost.addEventListener("click", async function () {
    await addEvent();
    window.location.href = nextUrl;
});

addDate.addEventListener("click", function () {
    addInputFrame();
});

rmDate.addEventListener("click", function () {
    rmInputFrame();
});
