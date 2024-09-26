# exit on error
set -o errexit

yarn install --check-files

# Build React app
yarn build

bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate

