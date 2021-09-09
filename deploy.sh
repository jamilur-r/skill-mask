#!/bin/sh     
cd /home/skill-mask
sudo git pull
sudo yarn install
sudo yarn build
sudo systemctl restart nginx
pm2 restart skill-mask