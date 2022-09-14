let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-exemple');
let select = document.querySelector('.opt');

let serverURL = 'Enter here the web server url(domain name/ip/localhost:4444 (but: the localhost work only on the same computer who run the script) if you want you can use Ngrok for spoofing your ip but you have to enter the same Port';

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

async function mp3(query) {
	const res = await fetch(`${serverURL}/mp3?url=${query}`);
	if (res.status == 200) {
		var a = document.createElement('a');
		a.href = `${serverURL}/mp3?url=${query}`;
		a.setAttribute('download', '');
		a.click();
	} else if (res.status == 400) {
		alert("The link isn't working");
	}
}

async function mp4(query) {
	const res = await fetch(`${serverURL}/mp4?url=${query}`);
	if (res.status == 200) {
		var a = document.createElement('a');
		a.href = `${serverURL}/mp4?url=${query}`;
		a.setAttribute('download', '');
		a.click();
	} else if (res.status == 400) {
		alert("The link isn't working");
	}
}

async function webm(query) {
	const res = await fetch(`${serverURL}/webm?url=${query}`);
	if (res.status == 200) {
		var a = document.createElement('a');
		a.href = `${serverURL}/webm?url=${query}`;
		a.setAttribute('download', '');
		a.click();
	} else if (res.status == 400) {
		alert("The link isn't working");
	}
}

async function webm2(query) {
	const res = await fetch(`${serverURL}/webm2?url=${query}`);
	if (res.status == 200) {
		var a = document.createElement('a');
		a.href = `${serverURL}/webm2?url=${query}`;
		a.setAttribute('download', '');
		a.click();
	} else if (res.status == 400) {
		alert("The link isn't working");
	}
}