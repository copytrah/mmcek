parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
const s=require("express"),{Client:e}=require("whatsapp-web.js"),a=require("qrcode"),o=s(),t=new e;o.use(s.json()),o.post("/send-message",(s,e)=>{const{phoneNumber:a,message:o}=s.body;t.sendMessage(a+"@c.us",o).then(()=>{e.status(200).json({success:!0,message:"Pesan berhasil dikirim"})}).catch(s=>{e.status(500).json({success:!1,message:"Gagal mengirim pesan",error:s.message})})}),o.get("/qr-code",(s,e)=>{a.toDataURL(t.qrCode,(s,a)=>{s?e.status(500).json({success:!1,message:"Gagal menghasilkan QR code"}):e.status(200).send(`<img src="${a}" alt="QR Code" />`)})}),t.on("qr",s=>{t.qrCode=s}),t.on("ready",()=>{console.log("Bot WhatsApp sudah terhubung")}),t.initialize(),module.exports=o;
},{}],"Focm":[function(require,module,exports) {
const e=require("./app"),n="8888";e.listen(n,()=>{console.log("Server is listening on port 8888...")});
},{"./app":"A2T1"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map