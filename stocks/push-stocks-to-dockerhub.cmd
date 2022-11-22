docker tag stocks:v1.0 dhruvinrsonizebra/stocks:v1.0
docker push dhruvinrsonizebra/stocks:v1.0
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE