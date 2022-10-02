# **NightOnlineDownloader**

```
    _   ___       __    __  ____        ___            ____                      __                __         
   / | / (_)___ _/ /_  / /_/ __ \____  / (_)___  ___  / __ \____ _      ______  / /___  ____ _____/ /__  _____
  /  |/ / / __ `/ __ \/ __/ / / / __ \/ / / __ \/ _ \/ / / / __ \ | /| / / __ \/ / __ \/ __ `/ __  / _ \/ ___/
 / /|  / / /_/ / / / / /_/ /_/ / / / / / / / / /  __/ /_/ / /_/ / |/ |/ / / / / / /_/ / /_/ / /_/ /  __/ /    
/_/ |_/_/\__, /_/ /_/\__/\____/_/ /_/_/_/_/ /_/\___/_____/\____/|__/|__/_/ /_/_/\____/\__,_/\__,_/\___/_/     
        /____/                                                                                                
```

 - If you like the project you can drop a star and fork it !
 - NightOnlineDownloader is a online YouTube downloader project
 - the project is based on a not working github repo
 - [Discord](https://discord.gg/Sz5wStph2v)

## **Need**

**NodeJs** (tested with node-js-v17)

**Npm :**
    
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "ytdl-core": "^4.11.2"

## **Before starting**

### **THERE IS A YOUTUBE TUTORIAL**

 - [YOUTUBE TUTORIAL](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


**Before launching the web-server**

 - Install the project
 - Open the bat named "install.bat" / on linux open a Terminal at the floder & do "npm i"
 - -->

**In [./src/js/script.js](https://github.com/NightSpaceGTT/NightOnlineDownloader/blob/main/src/js/script.js) :**

You have on line 5
to replace **Enter here the web server url(domain name/ip/localhost:4444 (but: the localhost work only on the same computer who run the script) if you want you can use Ngrok for spoofing your ip but you have to enter the same Port)** to only your server URL (ip/localhost/Ngrok but read that ;) if you want you can join my discord serveur and ping me for help)

```js
        let Btn = document.getElementById('btn');
        let URLinput = document.querySelector('.URL-exemple');
        let select = document.querySelector('.opt');

Here--> let serverURL = 'Enter here the web server url(domain name/ip/localhost:4444 (but: the localhost work only on the same computer who run the script) if you want you can use Ngrok for spoofing your ip but you have to enter the same Port)';

        Btn.addEventListener('click', () => {
	        if (!URLinput.value) {
	        	    alert('Enter a YouTube video link');
	            } else {
	     	    if (select.value == 'mp3') {
	    	    	mp3(URLinput.value);
		        } else if (select.value == 'mp4') {
			        mp4(URLinput.value);
		        } else if (select.value == 'webm') {
			        webm(URLinput.value);
		        } else if (select.value == 'webm2') {
			        webm2(URLinput.value);
		        }
	        }
        });
```


**And IT'S DONE**, just read the end **please** !

## **Starting**

 - Just start the bat named "start.bat" 😂🤣 / on linux onpen a Terminal on the floder and do "node index.js"
 - And enjoy (lol you didn't need me)

## **License**

 - [License](https://github.com/NightSpaceGTT/NightOnlineDownloader/blob/main/LICENSE)
