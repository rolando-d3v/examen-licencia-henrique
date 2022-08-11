// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
// // const { Notification } = require('electron')

// const path = require("path");
// const isDev = require("electron-is-dev");

// let mainWindow;

// require("update-electron-app")({
//   repo: "kitze/react-electron-example",
//   updateInterval: "1 hour",
// });

// //notifacationb success
// function showNotificationSuccess() {
//   new electron.Notification({
//     title: "Bienvenido",
//     body: `Examen App ${new Date().getFullYear()}`,
//     sound: path.join(__dirname, "./sound.mp3"),
//     icon: path.join(__dirname, "./icon.png"),
//   }).show();
// }

// const NOTIFICATION_TITLE = "Credenciales incorrectas";
// const NOTIFICATION_BODY = "Comuniquese con el Administrador 985503581";
// function showNotification() {
//   new electron.Notification({
//     title: NOTIFICATION_TITLE,
//     body: NOTIFICATION_BODY,
//     sound: path.join(__dirname, "./sound.mp3"),
//     icon: path.join(__dirname, "./icon.png"),
//   }).show();
// }

// function createWindow() {
//   showNotificationSuccess();

//   let exa = process.env.WIND_R;
//   console.log(exa);
//   if (exa !== "cced8516-965b-4c29-a4a4-f5ed3edc3ea9") {
//     return showNotification();
//     // window.alert(exa);
//   }

//   mainWindow = new BrowserWindow({
//     width: 1300,
//     height: 800,
//     minHeight: 820,
//     minWidth: 1380,
//     roundedCorners: false,
//     autoHideMenuBar: true,
//     webPreferences: { nodeIntegration: true },
//   });

//   mainWindow.loadURL(
//     isDev
//       ? "http://localhost:3000"
//       : `file://${path.join(__dirname, "../build/index.html")}`
//   );
//   mainWindow.on("closed", () => {
//     mainWindow = null;
//   });
// }

// app.on("ready", createWindow);

// app.on("window-all-closed", async () => {
//   if (process.platform !== "darwin") {
//     electron.session.defaultSession.clearStorageData();
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });
