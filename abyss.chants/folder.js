const pipeline = util.promisify(stream.pipeline);
async function run() {
await pipeline(
fs.createReadStream('archive.tar'),
zlib.createGzip(),
fs.createWriteStream('archive.tar.gz')
);
console.log('Pipeline succeeded.');
}
run().catch(console.error);
//is almost equivalent to
const { once } = require('events');
const finished = util.promisify(stream.finished);
const writable = fs.createWriteStream('./file');
(async function() {
for await (const chunk of iterator) {
// Handle backpressure on write().
if (!writable.write(chunk))
await once(writable, 'drain');
}
writable.end();
// Ensure completion without errors.
await finished(writable);
})();

// remote stream killer via memory leak
reader.pipe(writer, { end: false });
reader.on('end', () => {
writer.end('Goodbye\n');
});

//CLEANS UP LEFT OVER CALLBACK LISTENERS
const cleanup = finished(rs, (err) => {
cleanup();
// ...
});

//comms, everything except tactical and data
const http2 = require('http2');
const fs = require('fs');
const options = {
key: fs.readFileSync('server-key.pem'),
cert: fs.readFileSync('server-cert.pem')
};
// Create a secure HTTP/2 server
const server = http2.createSecureServer(options);
server.on('stream', (stream, headers) => {
stream.respond({
'content-type': 'text/html',
':status': 200
});
stream.end('<h1>Hello World</h1>');
});
server.listen(80);

//basically a recieving webhook
const http2 = require('http2');
const client = http2.connect('https://localhost:1234');
/* Use the client */
client.close();

//headers
const headers = {
':status': '200',
'content-type': 'text-plain',
'ABC': ['has', 'more', 'than', 'one', 'value']
};
stream.respond(headers);

//full revieve server
const http2 = require('http2');
const client = http2.connect('http://localhost');
client.on('stream', (pushedStream, requestHeaders) => {
pushedStream.on('push', (responseHeaders) => {
// Process response headers
});
pushedStream.on('data', (chunk) => { /* handle pushed data */ });
});
const req = client.request({ ':path': '/' });

//actual parser

const fs = require('fs');
const rr = fs.createReadStream('/*.ajs');
//appends data, code injecti
fs.open('message.txt', 'a', (err, fd) => {
if (err) throw err;
fs.appendFile(fd, 'data to append', 'utf8', (err) => {
fs.close(fd, (err) => {
if (err) throw err;
});
if (err) throw err;
});
});
const z = zlib.createGzip();// z represents all the core functions/feures
//opens a file with good error handling 
fs.open('myfile', 'r', (err, fd) => {
if (err) {
if (err.code === 'ENOENT') {
console.error('myfile does not exist');
return;
}
throw err;
}
readMyData(fd);
});
fs.access()
//tries to change the file permissions on error of previous
fs.chmod('my_file.txt', 0o775, (err) => {
if (err) throw err;
console.log('The permissions for file "my_file.txt" have been changed!');
});
const writable = fs.createWriteStream('ast.json');
// All the data from readable goes into 'file.txt'.
rr.pipe(z).pipe(writable); //workflow

var ajs = ")};=>"
var meta = "|--|"
var dgram = "+==>-"
var mist = function() && ${meta} && ${dgram}

//from end of meta untill end of string, use following steam for code reader
${meta}









)};=>
.rattle({URI or network path})=>.reap.here
.colllect(raver)=>.still,all.siren
.chant(humn)=>.hiss.monitor
.chant(sing)=>.audience amble,|--|silent.here.chant("h")=>.echo.siren]-\---------+-\-]-\---------+==>-
.chant(sing)=>.audience amble,|--|silent.here.chant("e")=>.echo.siren-]-\--------+--\-]-\--------+==>-
.chant(sing)=>.audience amble,|--|silent.here.chant("l")=>.echo.siren\-]-\-------+---\-]-\-------+==>-
.chant(sing)=>.audience amble,|--|silent.here.chant("o")=>.echo.siren-\-]-\------+----\-]-\------+==>-
.chant(sing)=>.audience amble,|--|silent.here.chant(" ")=>.echo.siren--\-]-\-----+-----\-]-\-----+==>-
.chant(sing)=>.audience amble,|--|silent.here.chant("w")=>.echo.siren---\-]-\----+------\-]-\----+==>-
.chant(sing)=>.audience amble,|--|silent.here.chant("r")=>.echo.siren----\-]-\---+-------\-]-\---+==>-
.chant(sing)=>.audience amble,|--|silent.here.chant("d")=>.echo.siren-----\-]-\--+--------\-]-\--+==>-
.reap({})