FROM --platform=linux/amd64 node:18-bookworm

WORKDIR /usr/app

RUN apt-get update \
 && apt-get install -y wget python3 python3-dev \
 && wget -O gg.deb https://github.com/grft-dev/graftcode-gateway/releases/latest/download/gg_linux_amd64.deb \
 && dpkg -i gg.deb \
 && rm gg.deb \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

EXPOSE 80
EXPOSE 81