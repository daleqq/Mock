Mock.mock("fake/file", {
    "data|100": [
        {
            ID: "@increment()",
            name: "@cname()",
            description: "@csentence()",
            avatar: '@dataImage("64x64")',
            address: "@region()",
            province: "@province()",
        },
    ],
});
axios.get("fake/file").then((res) => console.warn(res));
axios.get("https://cdn.jsdelivr.net/gh/fluency03/shijing/package.json").then((res) => console.warn({ res }));

// fetch("fake/file")
//     .then((res) => res.json())
//     .then(console.log);
// fetch("https://cdn.jsdelivr.net/gh/fluency03/shijing/package.json").then((res) => console.log("fetch", res));
