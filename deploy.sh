#!/bin/sh     
echo -e "\n Going to Project Dir \n "
cd /home/skill-mask
echo -e "\n Pulling latest Files \n"
sudo git pull
echo -e "\n Installing dependencies \n"
sudo yarn install
echo -e "\n Restarting nginx \n"
sudo systemctl restart nginx
echo -e "\n Restarting PM2 \n"
pm2 restart skill-mask