#!/bin/sh

# also change this in src/xpi/install.rdf before doing a release
version=0.9.6

filename=netsling-$version.xpi

rm -rf dist
cd src/xpi
jar -cf $filename *
cd ../..
mkdir dist
mv src/xpi/$filename dist
