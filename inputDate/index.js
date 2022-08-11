/*const testdata = {
  id: 1,
  name: "tanaka",
  Date: "03/15",
  attribute: {
    gender: "male",
    phone_number: "xxxxxxxxxxx",
    Date: "1991/01/01"
  }
};

const obj = testdata;
console.log(obj.id);
*/

function CreateTable(postData) {
  const MessageList = document.getElementById("postTable");

  const Length = MessageList.children.length;

  const OneDay = document.createElement("tr");
  OneDay.className = "DateStatus";

  const Date = document.createElement("td");
  console.log("//////");
  console.log(postData.date);
  Date.textContent = postData.date;

  const attendCheck = document.createElement("td");

  const yes = document.createElement("input");
  yes.type = "radio";
  yes.name = `${Length}`;
  yes.value = "OK";
  yes.id = `yes${Length}`;

  const textYes = document.createElement("label");
  textYes.textContent = "〇";
  textYes.className = "Table Yes";
  textYes.setAttribute("for", `yes${Length}`);

  const subtle = document.createElement("input");
  subtle.type = "radio";
  subtle.name = `${Length}`;
  subtle.value = "WARN";
  subtle.id = `subtle${Length}`;

  const textSubtle = document.createElement("label");
  textSubtle.textContent = "△";
  textSubtle.className = "Table Subtle";
  textSubtle.setAttribute = ("for", `subtle${Length}`);

  const no = document.createElement("input");
  no.type = "radio";
  no.name = `${Length}`;
  no.value = "NG";
  no.id = `no${Length}`;

  const textNo = document.createElement("label");
  textNo.textContent = "×";
  textNo.className = "Table No";
  textNo.setAttribute = ("for", `no${Length}`);

  attendCheck.append(yes, textYes, subtle, textSubtle, no, textNo);

  console.log(Date.textContent);

  OneDay.append(Date, attendCheck);
  MessageList.append(OneDay);
}

//CreateTable(obj);

const baseUrl =
  "https://us-central1-aizuhack-353413.cloudfunctions.net/Data?collection=team03_events_v2";

//データを取得する

function getDatas() {
  return fetch(baseUrl, {
    method: "GET"
  })
    .then((data) => data.json())
    .then((body) => {
      console.log(body);
      return body;
    });
}

async function getTable() {
  const datas = await getDatas();
  console.log(datas[0].dateList);
  console.log("11111111");
  const DateData = datas[0].dateList;
  console.log(DateData[0]);

  DateData.forEach((date) => CreateTable(date));

  /*for (let i = 0; i < DateData.length; i++) {
    // console.log(DateData.length);
    CreateTable(DateData[i]);
  }
  */
  //await console.log(datas);
}

getTable();

//JSONデータを更新する

function judgeRadio(number) {
  const judge = "aaa";
  let Radio = document.getElementsByName(number);
  Radio[0].checked = true;

  let checkValue = "";

  Radio.forEach((_, index) => {
    if (Radio.item(index).checked) {
      checkValue = Radio.item(index).value;
    }
  });

  return judge;
}

async function postData(inputData, number) {
  const input = document.getElementById("UserName");
  const RadioValue = judgeRadio(number);

  const newPost = {
    date: inputData.date,
    userList: [
      {
        name: input.value,
        status: RadioValue
      }
    ]
  };
  console.log(inputData.eventID);
  return fetch(baseUrl + "&eventID=" + inputData.eventID, {
    method: "POST",
    body: JSON.stringify(newPost)
  });
}

const onClick = () => {
  console.log(4444444444444);
  const datas = getDatas()[0];
  datas.dateList[0].forEach((date, index) => {
    postData(datas, index);
  });
};

const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", onClick);
