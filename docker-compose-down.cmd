docker-compose -f .\docker-compose.yml down
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE