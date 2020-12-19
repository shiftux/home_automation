#!/bin/bash
echo "######################################"
date
pulseaudio --start
sleep 2
bluetoothctl << EOF
connect 00:02:5B:00:FF:03
EOF
