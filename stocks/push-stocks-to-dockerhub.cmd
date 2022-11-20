docker tag stocks:latest dhruvinrsonizebra/stocks:latest
docker push dhruvinrsonizebra/stocks:latest
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE