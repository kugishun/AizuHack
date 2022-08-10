//名前が変えても、中身が一緒ならOK！
const postTemplate = {
    eventList: [
        {
            eventID: "testID",
            eventName: "発表会をブッチしよう",
            dateList: [
                {
                    date: "8月11日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "NG"
                        },
                        {
                            name: "tai",
                            status: "OK"
                        },
                        {
                            name: "あなた",
                            status: "NG"
                        }
                    ]
                },
                {
                    date: "8月12日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "WARN"
                        },
                        {
                            name: "tai",
                            status: "OK"
                        },
                        {
                            name: "あなた",
                            status: "OK"
                        }
                    ]
                },
                {
                    date: "8月13日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "NG"
                        },
                        {
                            name: "tai",
                            status: "WARN"
                        },
                        {
                            name: "あなた",
                            status: "NG"
                        }
                    ]
                },
                {
                    date: "8月14日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "NG"
                        },
                        {
                            name: "tai",
                            status: "OK"
                        },
                        {
                            name: "あなた",
                            status: "NG"
                        }
                    ]
                }
            ]
        },
        {
            eventID: "testID2",
            eventName: "夏休みを謳歌しよう（したい）",
            dateList: [
                {
                    date: "8月20日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "WARN"
                        },
                        {
                            name: "tai",
                            status: "OK"
                        },
                        {
                            name: "あなた",
                            status: "NG"
                        }
                    ]
                },
                {
                    date: "8月30日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "NG"
                        },
                        {
                            name: "tai",
                            status: "OK"
                        },
                        {
                            name: "あなた",
                            status: "OK"
                        }
                    ]
                },
                {
                    date: "9月10日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "NG"
                        },
                        {
                            name: "tai",
                            status: "OK"
                        },
                        {
                            name: "あなた",
                            status: "WARN"
                        }
                    ]
                },
                {
                    date: "9月30日",
                    userList: [
                        {
                            name: "matumoto",
                            status: "NG"
                        },
                        {
                            name: "tai",
                            status: "OK"
                        },
                        {
                            name: "あなた",
                            status: "NG"
                        }
                    ]
                }
            ]
        }
    ]
};
