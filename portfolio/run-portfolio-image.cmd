docker --version
docker run -d --name portfolio -p 9081:9081 portfolio:latest
docker container ls 
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE