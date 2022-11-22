docker --version
docker build --tag portfolio:v1.0 .
docker images | find "portfolio"
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE