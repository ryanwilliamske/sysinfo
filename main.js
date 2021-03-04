const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function CreateWindow() {

    // create window
    win = new BrowserWindow({
            width:800,
            height:600,
            webPreferences: {
                contextIsolation: false,
                nodeIntegration: true
            }
        }
    );

    //load index.html
    win.loadFile('index.html');

    // for devtools (Inspect element)
    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null
    })
}

// run  create window
app.on('ready', CreateWindow);

// quit when all windows are closed

app.on('window-all-closed', () => {
    //Windows = win32
    //mac = darwin
    if(process.platform !== 'darwin'){
        app.quit();
    }
})