docker --version
docker run -d --name stocks -p 9080:9080 stocks:latest
docker container ls 
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE