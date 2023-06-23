# Node.js Installation Guide

This guide will help you set up Node.js on your local machine whether you are running Windows, Mac, or Linux. 

## Installation

### Windows & Mac

1. Download the Node.js installer from the official website: https://nodejs.org/en/download/.

2. Run the installer (the .msi installer for Windows, the .pkg installer for Mac). Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).

### Linux

You can use package manager to install Node.js.

For Debian and Ubuntu based distributions:

```
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

```
For Enterprise Linux and Fedora:

```
sudo dnf module list nodejs
sudo dnf module install nodejs:<stream> # Replace <stream> with the stream value
sudo dnf install nodejs
```

# Verify Installation

Verify that Node.js was properly installed by running the following commands in your terminal:

```
npm --version
```

This should print the version number, so you’ll see something like this `v14.16.0`.


The Node Package Manager (npm) should also have been installed, and running the above command should print the version number, so you’ll see something like this `6.14.11`.

Congratulations, you've successfully installed Node.js and npm!
