module.exports = {

    genChartPie: (data) => {
        bb.generate({
            bindto: "#chart",
            data: {
                type: "pie",
                columns: [
                    ["happy",],
                    ["sad",],
                    ["angry",],
                    ["blah",],
                    ["content",],
                ],
                colors: {
                    happy: "lightgreen",
                    sad: "paleturquoise",
                    angry: "crimson",
                    blah: "slategray",
                    content: "mediumpurple",
                }
            }
        });
    },


}