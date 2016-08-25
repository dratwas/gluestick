#!/usr/bin/env node

var fs = require('fs');

var version = JSON.parse(fs.readFileSync("./package.json")).version;
var tag = "truecar/gluestick:" + version;

var dockerfile = [
                     "# DO NOT MODIFY",
                     "# This file is automatically generated. You can copy this file and add a",
                     "# Dockerfile to the root of the project if you would like to use a custom",
                     "# docker setup.",
                     "FROM " + tag,
                     "",
                     "ADD . /app",
                     "",
                     "RUN npm install",
                     ""
                 ];

fs.writeFile("./templates/new/src/config/.Dockerfile", dockerfile.join("\n"));
