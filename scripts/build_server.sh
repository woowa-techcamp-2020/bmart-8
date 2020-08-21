#! /bin/bash
if [ -z $BRANCH ]; then
    echo "Branch name is empty. Proceed with current branch."
else
    git checkout "$BRANCH"
    if [ $? != 0 ]; then
        echo "Branch $BRANCH is not exists."
        exit;
    fi
fi

git pull
sudo docker-compose up -d --no-deps --build appserver
