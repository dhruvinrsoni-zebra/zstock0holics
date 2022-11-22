docker tag stocks:v1.0 ghcr.io/dhruvinrsoni-zebra/zstock0holics/stocks:v1.0
docker push ghcr.io/dhruvinrsoni-zebra/zstock0holics/stocks:v1.0
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE