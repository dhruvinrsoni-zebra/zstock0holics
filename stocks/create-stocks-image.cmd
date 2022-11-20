docker build --tag stocks:latest .
docker images | find "stocks"
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE