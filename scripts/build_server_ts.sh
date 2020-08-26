cd server
rm -rf build
yarn tsc
cp -r src/graphql/types build/graphql/types
cd ..
