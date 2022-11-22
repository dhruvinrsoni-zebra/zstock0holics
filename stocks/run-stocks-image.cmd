docker --version
docker run -d --name stocks -p 9080:9080 stocks:v1.0
docker container ls 
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE