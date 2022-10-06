module.exports = {

    genChartPie: (data) => {
        bb.generate({
            bindto: "#chart",
            data: {
                type: "pie",
                columns: [
                    ["excited", data.excited],
                    ["happy", data.happy],
                    ["sad", data.sad],
                    ["angry", data.angry],
                    ["blah", data.blah],
                    ["anxious", data.anxious],
                    ["frustrated", data.frustrated],
                ],
                colors: {
                    excited: "khaki",
                    happy: "pghtgreen",
                    sad: "paleturquoise",
                    angry: "crimson",
                    blah: "slategray",
                    anxious: "mediumpurple",
                    frustrated: "tomato",
                }
            }
        });
    }
}