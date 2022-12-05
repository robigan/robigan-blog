#! /bin/bash

PORT=8081 npx @staticcms/proxy-server &
npm run dev &
hugo server -D