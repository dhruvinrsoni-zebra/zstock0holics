docker --version
docker build --tag portfolio:latest .
docker images | find "portfolio"
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE