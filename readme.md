# aXe Website

The axe-core website is build using Jekyll. Before running the axe-core website, you will need to follow the installation instructions of Jekyll: https://jekyllrb.com/docs/installation/

```
gem install jekyll
jekyll build
```
**Note: Jekyll may require `sudo`**

Once Jekyll is installed, run the following commands:

```
git clone https://github.com/dequelabs/axe-website.git
cd axe-website
npm install
npm start
```

To pull down the axe-core API documentation and examples to rebuild them, run this command (beware this will wipe out formatting and styles until we fix our build system):
```
npm build
```
