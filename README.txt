
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
