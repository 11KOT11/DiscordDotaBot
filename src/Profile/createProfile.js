import createProfile from "node-html-to-image";
export default async function (name, url, rank) {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="root">
            <div class="header">
                <h2>Бля мужики честно лень делать дизайн</h2>
                <h3>Так что бля хавайте так</h3>
            </div>
            <div class="body">
                <div class="profile">
                    <img class="logo" src="${url}" width="100" height="100">
                    <h2>Имя: ${name}</h2>
                    <h2>Ранг: ${rank}</h2>
                </div>
            </div>
        </div>
    </body>
    <style>
        body {
            margin: 0px;
            background: #35393A;
            width: 500px;
        }
        .body > .profile {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .body > .profile > .logo {
            border-radius: 100px;
        }
        .root {
            color: #6F787A;
            width: 500px;
        }
        .header > * {
            text-align: center;
        }
    </style>
    </html>`;
    return await createProfile({
        html: html,
        puppeteerArgs: {
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
    })
}