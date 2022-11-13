#!/usr/bin/env sh

time=$(date)

echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"

# Mask secret from output
echo "::add-mask::$1"
echo "Hi $1"

# Re-use variables in GitHub Actions outputs
# shellcheck disable=SC2154
echo "::set-output name=time::$time"

# Loggroup
echo "::group::Some expandable logs"
echo 'some stuff1'
echo 'some stuff2'
echo 'some stuff3'
echo 'some stuff4'
echo '::endgroup'

echo '::set-env name=HELLO::hello'