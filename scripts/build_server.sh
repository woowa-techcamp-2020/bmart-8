#! /bin/bash
if [ -z $BRANCH ]; then
    echo "Branch name is empty: specify to BRANCH"
    exit;
fi

git checkout "$BRANCH"
$? && git fetch

cd server 
docker-compose up -d --no-deps --build appserver
$? && git merge "origin/$BRANCH"