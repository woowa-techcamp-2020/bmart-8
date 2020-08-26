rm -rf build
yarn build
cp -r src/graphql/types build/graphql/types
rm -rf node_modules
yarn install --production
tar -czf build.tgz node_modules appspec.yml build scripts Dockerfile package.json yarn.lock