#! /bin/bash
echo $BRANCH
if [ -z $BRANCH ]; then
    echo "Branch name is empty: specify to BRANCH"
    exit;
fi

git checkout "$BRANCH"
$? && git fetch

cd client
git diff --name-only "origin/$BRANCH" "$BRANCH" | grep "^client/package"
if [ $? != 0 ]; then
    yarn
fi;
yarn build
$? && git merge "origin/$BRANCH"