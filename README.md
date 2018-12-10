# gfSkel2Json -- Girl's Frontline skel to json converter

Because Girl's frontline skel file uses v2.1.27 of spine, it can't be loaded from the current spine version.

This tool converts skel files to json


I have referenced the SkeletonBinary implementation in the [gfSpinePiXi](https://github.com/cullus/gfSpinePiXi) Repository.

## Installation
> npm install -g gfskel2json

Or

> git clone https://github.com/baguniz/gfskel2json
> cd gfskel2json
> npm install

## Usage
### Installed from npm install -g
> gfskel2json <file1> <file2>

### Cloned git
> npm start <file1> <file2>

### Wildcard
* gfSkel2Json using glob, then it can usable glob syntax.

* Browse all recursive folders and convert skel files
> gfskel2json **/*.skel

## Speical Thanks
* cullus (He made SkeletonBinary implementation for gf, and owner gfSpinePiXi)
