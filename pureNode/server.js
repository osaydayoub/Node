import http from 'node:http';
import { readFileSync } from 'node:fs';

const server = http.createServer((req, res) => {
    const { url, method } = req;
    switch (url) {
        case '/index.css':
            switch (method) {
                case 'GET':
                    const cssPage = readFileSync('./src/index.css', 'utf-8')
                    res.end(cssPage);
                    return;
                default:
                    return;
            }
        case '/index.js':
            switch (method) {
                case 'GET':
                    const cssPage = readFileSync('./src/index.js', 'utf-8')
                    res.end(cssPage);
                    return;
                default:
                    return;
            }
        case '/':
            switch (method) {
                case 'GET':
                    const htmlPage = readFileSync('./src/index.html', 'utf-8')
                    res.end(htmlPage);
                    return;
                default:
                    return;
            }
        case '/raw-html':
            switch (method) {
                case 'GET':
                    res.end('<h1>Welcome</h1>');
                    return;
                default:
                    return;
            }
        case '/users':
            switch (method) {
                case 'GET':
                    const users = readFileSync('./src/users.json', 'utf-8')
                    res.end(users);
                    return;
                default:
                    return;
            }


        default:
            return;
    }

})

server.listen(4545, () => {
    console.log('server listening on port 4545')
})