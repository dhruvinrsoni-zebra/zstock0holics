docker tag portfolio:latest ghcr.io/dhruvinrsoni-zebra/zstock0holics/portfolio:latest
docker push ghcr.io/dhruvinrsoni-zebra/zstock0holics/portfolio:latest
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE