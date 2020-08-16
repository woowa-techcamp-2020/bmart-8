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

git fetch

cd client
git diff --name-only "origin/$BRANCH" "$BRANCH" | grep "^client/package"
if [ $? != 0 ]; then
    echo "Install packages"
    yarn
fi;
echo "Start to build"
yarn build

if [ $? != 0 ]; then
    echo "Complete to build"
    git merge "origin/$BRANCH"
else
    echo "Fail to build"
fi;