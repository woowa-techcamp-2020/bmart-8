#! /bin/bash
if [ -z $BRANCH ]; then
    echo "Branch name is empty: specify to BRANCH"
    exit;
fi

git checkout "$BRANCH"
$? && git pull
sudo docker-compose up -d --no-deps --build appserver
