#!/bin/bash  
title=`echo $1 | sed -e "s/ /-/g"`
todayDate=`date +%F`
postTitle="${todayDate}-${title}.md"
post="./_posts/${postTitle}"
touch $post
echo "new post created titled: ${postTitle}, inside _posts directory"