// string methods = servono per manipolare le stringhe
let username = "clouqs";

username.charAt(0); // c

username.indexOf("o"); // 3

username.slice(1, 4); // lou

username.toUpperCase(); // CLOUQS

username.toLowerCase(); // clouqs

username.replace("clouqs", "clouqss"); // clouqss

username.concat(" is a developer"); // clouqs is a developer

username.split(""); // ["c", "l", "o", "u", "q", "s"]

username.trim(); // clouqs - removes whitespace from both ends

username.endsWith("s"); // true

username.startsWith("c"); // true

username.includes("lou"); // true

username.repeat(2); // clouqsclouqs

username.padStart(10, "x"); // xxxxclouqs

username.padEnd(10, "x"); // clouqsxxxx

username.charCodeAt(0); // 99

username.match(/[a-z]/g); // ["c", "l", "o", "u", "q", "s"]

username.search("o"); // 2

username.substring(1, 4); // lou

username.localeCompare("clouqs"); // 0

username.replaceAll("o", "0"); // cl0uqs