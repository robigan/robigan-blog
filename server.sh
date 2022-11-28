#! /bin/bash

PORT=8081 npx @staticcms/proxy-server &
hugo server -D