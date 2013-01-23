
setup:

install node:


install grunt:

sudo npm install -g grunt-cli
sudo npm install -g grunt-init@0.2.0rc5

place template:

mkdir ~/.grunt-init
cd ~/.grunt-init
git clone https://github.com/motherjones/mojo-grunt-init.git mojo


make new project:

cd ~/workspace
mkdir new_project

grunt-init mojo
sudo npm install


do stuff with your new project:

run a local server on port 9001:
grunt serve

turn less into css files(broken till version 0.4.0rc5 is pushed to node)
grunt less

minify js
grunt min

test js
grunt test

lint js
grunt lint

make new html from templates
grunt hb

make new demo (missing less for now)
grunt fab
