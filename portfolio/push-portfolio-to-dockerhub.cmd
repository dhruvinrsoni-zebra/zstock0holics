docker tag portfolio:v1.0 dhruvinrsonizebra/portfolio:v1.0
docker push dhruvinrsonizebra/portfolio:v1.0
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE