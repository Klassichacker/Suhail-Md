const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="giftedmindstutors42@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://t.me/ALL_SCHOOLS_UPDATE";
global.website=process.env.GURL || "https://t.me/ALL_SCHOOLS_UPDATE" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348138616056";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348138616056,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_18_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibTV6WnBjV2l1bkFWamZUeDhNK2gvUnl5eHFHdVpmM3FXbm5WUnZnNHJIRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidlJsbVdkb2pRQi1kbVdJRHFjWkNOZ1wiLFxuICBcInBob25lSWRcIjogXCI1YWFmNDA3NC1lMThlLTQxMWYtOTkzYS1lN2U2NjFlNzVmOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTk2LFxuICAgICAgMTMzLFxuICAgICAgMjE3LFxuICAgICAgMzgsXG4gICAgICAwLFxuICAgICAgMTUsXG4gICAgICAyMTAsXG4gICAgICAyMDgsXG4gICAgICA2MixcbiAgICAgIDk2LFxuICAgICAgMTc0LFxuICAgICAgMjQ5LFxuICAgICAgODQsXG4gICAgICAyMDYsXG4gICAgICAxMDgsXG4gICAgICA5NyxcbiAgICAgIDEyMCxcbiAgICAgIDE0MCxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA3NSxcbiAgICAgIDgzLFxuICAgICAgMTQ0LFxuICAgICAgMjA5LFxuICAgICAgMjM2LFxuICAgICAgMTY2LFxuICAgICAgMTU3LFxuICAgICAgOTIsXG4gICAgICAyMDYsXG4gICAgICAxNyxcbiAgICAgIDE5NixcbiAgICAgIDYxLFxuICAgICAgMjIzLFxuICAgICAgMjMzLFxuICAgICAgMzAsXG4gICAgICAyMDgsXG4gICAgICA4MyxcbiAgICAgIDIxOSxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKVFJCMVE3WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzODYxNjA1Njo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NDcwODM0MDYyNTY2Mjo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlVOSUxPUklOIFNUUkVFVFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08razRFZ1ErKzJIc2dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMDk3a2VFRVJ2WU1SejhpSm5ieWlLa1AyK2lGRVlobnU4NjZLR2d6KzhHcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWRGZIOFJoOGtyY0FmNzhEc0RMa3I5U1pHL3l4RmJhM21CanpFcjlqN2pMNzl3d0JHWFNNNUVSNi9abmEwZFJCTlNIT0R0dEI4cmVBWmRJUkdiQVJDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsMVZzNzdNSzloYVJvQ2xaZ1hYWGJKWHBmTHcyMnJGUmw2WFJRc1dXZDRFSHBCWXY5V09aemxQZk9mc0VNcjdhN0hJeUxBYnZuTjlrZVhCekl6NTdBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM4NjE2MDU2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1NTk5MTAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUG1vXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQbW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoNGs3N0NRanRFb3F3bXhsOWdHVTVCTmltcGxoQ25IYWRVRjJ6VnRkNzNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjU3MjUyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Unilorin Street",
  botname : process.env.BOT_NAME  || "Uᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Unilorin Street",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Unilorin Street"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
