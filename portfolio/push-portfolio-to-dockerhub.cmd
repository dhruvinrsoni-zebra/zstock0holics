docker tag portfolio:latest dhruvinrsonizebra/portfolio:latest
docker push dhruvinrsonizebra/portfolio:latest
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE