#!/bin/sh     
echo -e "Going to Project Dir \n "
cd /home/skill-mask
echo -e "Pulling latest Files \n"
sudo git pull
echo -e "Installing dependencies \n"
sudo yarn install
echo -e "Building Project \n"
sudo yarn build
echo -e "Restarting nginx \n"
sudo systemctl restart nginx
echo -e "Restarting PM2 \n"
pm2 restart skill-mask