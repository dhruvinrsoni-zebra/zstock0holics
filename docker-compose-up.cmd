docker-compose -f .\docker-compose.yml up -d
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE