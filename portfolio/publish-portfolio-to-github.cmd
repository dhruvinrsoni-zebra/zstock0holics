docker tag portfolio:v1.0 ghcr.io/dhruvinrsoni-zebra/zstock0holics/portfolio:v1.0
docker push ghcr.io/dhruvinrsoni-zebra/zstock0holics/portfolio:v1.0
echo %CMDCMDLINE%|find "%~f0">nul && PAUSE