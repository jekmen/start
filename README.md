# start
angular 2 quick project

First you need update npm, lite-server and typescript:

sudo npm update -g && sudo npm install -g concurrently lite-server typescript

Delete node_modules folder from your Angular project directory (if exist). Next run:

npm install

After that resolve ENOSPC errors:

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
Finally:

npm start
