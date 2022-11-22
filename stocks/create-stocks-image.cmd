docker --version
docker build --tag stocks:v1.0 .
docker images | find "stocks"
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE