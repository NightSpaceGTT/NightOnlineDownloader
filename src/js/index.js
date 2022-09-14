const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();


app.listen(4444, () => { //DONT TOUCHE THE "4444"
	console.log(`✅-Started at http://localhost:4444`);
});

app.use(cors());
app.use(express.static("./src"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: "./src/html/" });
});

app.get('/mp3', async (req, res) => {
	try {
		var url = req.query.url;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}
		let title = `${Math.random()}`;

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			if (err) throw err;
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(url, {
			format: 'mp3',
			quality: 'highestaudio',
			filter: 'audioonly'
		}).pipe(res);

	} catch (err) {
		console.log(err);
	}
});

app.get('/mp4', async (req, res) => {
	try {
		let url = req.query.url;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}
		let title = `${Math.random()}`;

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			if (err) throw err;
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
		ytdl(url, {
			format: 'mp4',
			quality: 'highestvideo'
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/webm', async (req, res) => {
	try {
		var url = req.query.url;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}
		let title = `${Math.random()}`;

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			if (err) throw err;
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.webm"`);
		ytdl(url, {
			format: 'webm',
			quality: 'highestvideo'
		}).pipe(res);

	} catch (err) {
		console.log(err);
	}
});

app.get('/webm2', async (req, res) => {
	try {
		var url = req.query.url;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}
		let title = `${Math.random()}`;

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			if (err) throw err;
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.webm"`);
		ytdl(url, {
			format: 'webm',
			filter: "audioonly",
			quality: 'highestaudio'
		}).pipe(res);

	} catch (err) {
		console.log(err);
	}
});