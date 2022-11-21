docker tag stocks:latest ghcr.io/dhruvinrsoni-zebra/zstock0holics/stocks:latest
docker push ghcr.io/dhruvinrsoni-zebra/zstock0holics/stocks:latest
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE