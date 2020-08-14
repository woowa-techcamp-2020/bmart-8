#! /bin/bash
if [ -z $BRANCH ]; then
    echo "Branch name is empty: specify to BRANCH"
    exit;
fi

git checkout "$BRANCH"
if [ $? != 0 ]; then
    exit;
fi
git pull
sudo docker-compose up -d --no-deps --build appserver
