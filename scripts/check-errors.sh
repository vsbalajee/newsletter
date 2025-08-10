#!/bin/bash

# Check for build errors
if grep -q 'error' build/*.log; then
  echo 'Build errors detected. Please check the logs for more details.'
  exit 1
else
  echo 'No build errors detected.'
  exit 0
fi